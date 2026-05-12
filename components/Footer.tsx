import Link from "next/link";

const DivinusMark = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2L28 8V18C28 24 22 28.5 16 30C10 28.5 4 24 4 18V8Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M11 11H17C20 11 22 13 22 16C22 19 20 21 17 21H11Z" fill="currentColor" />
  </svg>
);

const navCols = [
  {
    title: "Navigate",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Divisions",
    links: [
      { href: "/services#advisory", label: "Divinus Advisory" },
      { href: "/services#ai", label: "Divinus AI · Vision Africa" },
      { href: "/services#labs", label: "Divinus Labs" },
      { href: "/services#exchange", label: "Divinus Exchange" },
      { href: "/services#capital", label: "Divinus Capital" },
      { href: "/services#foundation", label: "The Divinus Foundation" },
      { href: "/services#partners", label: "Strategic Partners" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Use" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-3)", borderTop: "1px solid var(--border)", padding: "72px 0 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1.5fr 1fr", gap: 48, marginBottom: 56 }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "var(--gold)", marginBottom: 16 }}>
              <DivinusMark />
              <span style={{ fontFamily: "var(--font-playfair)", fontSize: 16, fontWeight: 600, color: "var(--ink)" }}>
                Divinus Investment Group
              </span>
            </Link>
            <p style={{ color: "var(--ink-3)", fontSize: 14, lineHeight: 1.7, maxWidth: 280 }}>
              Capital. Intelligence. Community. Building the infrastructure that serious growth requires — in organisations, in markets, and in people.
            </p>
          </div>

          {/* Link columns */}
          {navCols.map((col) => (
            <div key={col.title}>
              <h4 style={{ fontFamily: "var(--font-ibm-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--ink-3)", marginBottom: 20 }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} style={{ color: "var(--ink-2)", textDecoration: "none", fontSize: 14, transition: "color 0.2s" }}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 28, borderTop: "1px solid var(--border)", fontFamily: "var(--font-ibm-mono)", fontSize: 12, color: "var(--ink-3)" }}>
          <span>divinus.com</span>
          <span>© 2026 Divinus Investment Group Limited · All rights reserved</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
