import Link from "next/link";

const divisions = [
  { num: "01", name: "Divinus Advisory", desc: "Business strategy, organisational transformation, leadership, and AI integration consultancy.", href: "/services#advisory" },
  { num: "02", name: "Divinus AI · Vision Africa", desc: "AI-driven innovation, technology strategy, and future-focused business enablement.", href: "/services#ai" },
  { num: "03", name: "Divinus Labs", desc: "Application development, digital tools, platforms, and software solutions for businesses and individuals.", href: "/services#labs" },
  { num: "04", name: "Divinus Exchange", desc: "Community and engagement platform — home to Men of Substance and Genesis Woman.", href: "/services#exchange" },
  { num: "05", name: "Divinus Capital", desc: "Financial education, investment learning programmes, and the Divinus Investments Club.", href: "/services#capital" },
  { num: "06", name: "The Divinus Foundation", desc: "Scholarships, empowerment, and structured social impact programmes.", href: "/services#foundation" },
  { num: "07", name: "Strategic Partners", desc: "A network of strategic collaborators, implementation partners, and ecosystem allies.", href: "/services#partners" },
];

const ctaRows = [
  { who: "Corporate client or business leader", where: "Divinus Advisory", href: "/services#advisory" },
  { who: "Investor or strategic partner", where: "Strategic Partners", href: "/services#partners" },
  { who: "Community member or individual", where: "Divinus Exchange", href: "/services#exchange" },
  { who: "Finance learner", where: "Divinus Capital", href: "/services#capital" },
  { who: "Social impact supporter", where: "The Divinus Foundation", href: "/services#foundation" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "120px 0 100px", background: "linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 100%)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <p className="gsap-hero-eyebrow" style={{ fontFamily: "var(--font-ibm-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold-dim)", marginBottom: 24 }}>
            Capital · Intelligence · Community
          </p>
          <h1 className="gsap-hero-title" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(44px, 7vw, 80px)", fontWeight: 500, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 28, maxWidth: 900 }}>
            This is <em style={{ fontStyle: "italic", color: "var(--gold-dim)" }}>Divinus</em>.
          </h1>
          <p className="gsap-hero-sub" style={{ fontSize: 20, color: "var(--ink-3)", maxWidth: 640, lineHeight: 1.6, marginBottom: 44 }}>
            Divinus Investment Group is a multi-division company operating across business strategy, AI-driven innovation, digital product development, financial education, community building, and social impact. We exist to build the infrastructure that serious growth requires — in organisations, in markets, and in people.
          </p>
          <div className="gsap-hero-ctas" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/services" style={{ background: "var(--btn-bg)", color: "var(--btn-color)", padding: "14px 28px", borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 500 }}>
              Explore the Group →
            </Link>
            <Link href="/about" style={{ background: "transparent", color: "var(--ink)", border: "1px solid var(--ink)", padding: "14px 28px", borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 500 }}>
              View Our Divisions
            </Link>
          </div>
        </div>
      </section>

      {/* ── GROUP OVERVIEW ── */}
      <section style={{ padding: "80px 0", background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold-dim)", marginBottom: 16 }}>
            Group Overview
          </p>
          <h2 className="gsap-fade-up" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 500, lineHeight: 1.1, marginBottom: 20, maxWidth: 760 }}>
            One Group. Seven Divisions. One Direction.
          </h2>
          <p className="gsap-fade-up" style={{ fontSize: 18, color: "var(--ink-3)", maxWidth: 680, lineHeight: 1.65 }}>
            Divinus Investment Group Limited is a diversified group company with a clear and deliberate architecture. Each division operates in a distinct domain — from strategic consultancy and AI innovation to community engagement and philanthropic impact — and each is connected by a shared standard of quality, purpose, and long-term thinking. We do not operate in silos.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/about" style={{ color: "var(--gold-dim)", fontSize: 15, fontWeight: 500, textDecoration: "none" }}>
              About Divinus Investment Group →
            </Link>
          </div>
        </div>
      </section>

      {/* ── DIVISIONS GRID ── */}
      <section id="divisions" style={{ padding: "100px 0", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold-dim)", marginBottom: 16 }}>
              Our Divisions
            </p>
            <h2 className="gsap-fade-up" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 500, lineHeight: 1.1, marginBottom: 16 }}>
              Built for Breadth. Governed by Standard.
            </h2>
            <p className="gsap-fade-up" style={{ fontSize: 18, color: "var(--ink-3)", maxWidth: 560 }}>
              Seven divisions. Each with a defined purpose. Each held to the same standard of excellence.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {divisions.map((d) => (
              <Link
                key={d.num}
                href={d.href}
                className="gsap-card"
                style={{ display: "flex", flexDirection: "column", gap: 14, padding: 32, background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: 16, textDecoration: "none", color: "inherit", transition: "all 0.3s" }}
              >
                <span style={{ fontFamily: "var(--font-ibm-mono)", fontSize: 12, color: "var(--gold-dim)", letterSpacing: "0.1em" }}>{d.num}</span>
                <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: 22, fontWeight: 500, lineHeight: 1.2 }}>{d.name}</h3>
                <p style={{ color: "var(--ink-3)", fontSize: 15, lineHeight: 1.55, flex: 1 }}>{d.desc}</p>
                <span style={{ color: "var(--gold-dim)", fontSize: 14, fontWeight: 500 }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI SPOTLIGHT ── */}
      <section style={{ padding: "100px 0", background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold-dim)", marginBottom: 16 }}>
            Divinus AI · Vision Africa
          </p>
          <h2 className="gsap-fade-up" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 500, lineHeight: 1.1, marginBottom: 32, maxWidth: 760 }}>
            Africa Does Not Need to Catch Up. It Needs to Lead.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginBottom: 40 }}>
            <p className="gsap-slide-left" style={{ fontSize: 17, color: "var(--ink-2)", lineHeight: 1.7 }}>
              Divinus AI is the group&apos;s technology intelligence division. We work with organisations and institutions to design and deploy AI strategies grounded in African context and built for global relevance.
            </p>
            <p className="gsap-slide-right" style={{ fontSize: 17, color: "var(--ink-2)", lineHeight: 1.7 }}>
              The artificial intelligence revolution is not happening to Africa — it is happening in Africa. We intend to be the firm that helps navigate it with rigour, imagination, and commercial precision.
            </p>
          </div>
          <Link href="/services#ai" style={{ background: "transparent", color: "var(--ink)", border: "1px solid var(--ink)", padding: "13px 26px", borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 500 }}>
            Explore Divinus AI →
          </Link>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section style={{ padding: "100px 0", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 72, alignItems: "center" }}>
            <div className="gsap-slide-left">
              <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold-dim)", marginBottom: 16 }}>About</p>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 500, lineHeight: 1.15, marginBottom: 24 }}>
                A Group Built with Intention.
              </h2>
              <p style={{ fontSize: 17, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 20 }}>
                Divinus Investment Group Limited is a diversified group company with seven active divisions operating across business strategy, AI and technology, digital product development, financial education, community development, and social impact.
              </p>
              <p style={{ fontSize: 17, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 32 }}>
                Every division exists because it addresses a real need — and because we believe organisations that build well, think well, and give back well are the ones that endure. We are headquartered with global ambition and African conviction.
              </p>
              <Link href="/about" style={{ background: "transparent", color: "var(--ink)", border: "1px solid var(--ink)", padding: "13px 26px", borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 500 }}>
                About Divinus Investment Group →
              </Link>
            </div>
            <div className="gsap-slide-right" style={{ aspectRatio: "4/5", background: "linear-gradient(135deg, var(--gold-pale) 0%, var(--bg-3) 100%)", borderRadius: 16, border: "1px solid var(--border)", position: "relative" }}>
              <div style={{ position: "absolute", inset: 24, border: "1px solid rgba(201,168,76,0.3)", borderRadius: 8 }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: "120px 0", background: "var(--cta-bg)", textAlign: "center" }}>
        <div className="gsap-cta-reveal" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold)", marginBottom: 20 }}>
            There Is a Place for You Here.
          </p>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 500, lineHeight: 1.1, color: "var(--cta-text)", maxWidth: 720, margin: "0 auto 24px" }}>
            Find Your Place in the Group.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 18, maxWidth: 560, margin: "0 auto 48px", lineHeight: 1.65 }}>
            Whether you are a business leader, a finance learner, an entrepreneur who needs to build something, or a person who wants to be part of something larger — Divinus was built with you in mind.
          </p>
          <div style={{ overflowX: "auto", marginBottom: 48 }}>
            <table style={{ width: "100%", maxWidth: 680, margin: "0 auto", borderCollapse: "collapse", textAlign: "left" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
                  <th style={{ padding: "12px 16px", fontFamily: "var(--font-ibm-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.45)", fontWeight: 400 }}>I am a…</th>
                  <th style={{ padding: "12px 16px", fontFamily: "var(--font-ibm-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.45)", fontWeight: 400 }}>Where to go</th>
                </tr>
              </thead>
              <tbody>
                {ctaRows.map((r) => (
                  <tr key={r.who} className="gsap-cta-row" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    <td style={{ padding: "14px 16px", fontSize: 14, color: "rgba(255,255,255,0.75)" }}>{r.who}</td>
                    <td style={{ padding: "14px 16px" }}>
                      <Link href={r.href} style={{ color: "var(--gold)", fontSize: 14, textDecoration: "none", fontWeight: 500 }}>{r.where} →</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link href="/contact" style={{ background: "var(--gold)", color: "var(--ink)", padding: "14px 32px", borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 600 }}>
            Contact Us →
          </Link>
        </div>
      </section>
    </>
  );
}
