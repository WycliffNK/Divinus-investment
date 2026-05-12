"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DivinusMark = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2L28 8V18C28 24 22 28.5 16 30C10 28.5 4 24 4 18V8Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M11 11H17C20 11 22 13 22 16C22 19 20 21 17 21H11Z" fill="currentColor" />
  </svg>
);

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("divinus-theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("divinus-theme", next ? "dark" : "light");
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid var(--border)",
        background: "var(--nav-blur)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", height: 68 }}>
        {/* Brand */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "var(--gold)", flexShrink: 0 }}>
          <DivinusMark />
          <span style={{ fontFamily: "var(--font-playfair)", fontSize: 18, fontWeight: 600, color: "var(--ink)", letterSpacing: "0.01em" }}>
            Divinus
          </span>
        </Link>

        {/* Desktop links + actions */}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 36 }}>
          <nav style={{ display: "flex", gap: 32, listStyle: "none" }} className="hidden-mobile">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 500,
                  color: pathname === l.href ? "var(--gold-dim)" : "var(--ink-2)",
                  letterSpacing: "0.02em",
                  transition: "color 0.2s",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            style={{
              background: "var(--btn-bg)",
              color: "var(--btn-color)",
              padding: "9px 20px",
              borderRadius: 8,
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
              transition: "opacity 0.2s",
            }}
            className="hidden-mobile"
          >
            Open an account
          </Link>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "1px solid var(--border)",
              borderRadius: "100px",
              color: "var(--ink-2)",
              cursor: "pointer",
              transition: "all 0.25s",
            }}
          >
            {dark ? <MoonIcon /> : <SunIcon />}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="show-mobile"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "var(--ink)",
              display: "none",
            }}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="4" y1="4" x2="20" y2="20" />
                  <line x1="20" y1="4" x2="4" y2="20" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ borderTop: "1px solid var(--border)", background: "var(--bg)", padding: "20px 32px", display: "flex", flexDirection: "column", gap: 16 }}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ textDecoration: "none", fontSize: 16, fontWeight: 500, color: "var(--ink-2)" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{ background: "var(--btn-bg)", color: "var(--btn-color)", padding: "10px 20px", borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 500, width: "fit-content" }}
          >
            Open an account
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
