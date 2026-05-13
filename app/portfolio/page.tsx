import Link from "next/link";

const filters = ["All", "Advisory", "AI · Vision Africa", "Labs", "Exchange", "Capital", "Foundation"];

const projects = [
  { tag: "Advisory", division: "Divinus Advisory", title: "Strategic Transformation Programme", desc: "End-to-end organisational restructuring engagement for a mid-size regional enterprise.", placeholder: true },
  { tag: "AI · Vision Africa", division: "Divinus AI", title: "AI Readiness Assessment", desc: "Comprehensive AI adoption roadmap for a financial services institution.", placeholder: true },
  { tag: "Labs", division: "Divinus Labs", title: "Internal Operations Platform", desc: "Custom-built workflow and reporting platform for a multi-location business.", placeholder: true },
  { tag: "Exchange", division: "Divinus Exchange", title: "Men of Substance Cohort Launch", desc: "Structured community cohort across three cities with mentorship programming.", placeholder: true },
  { tag: "Capital", division: "Divinus Capital", title: "Investments Club — Cohort 3", desc: "Six-month structured financial literacy programme for 120 participants.", placeholder: true },
  { tag: "Foundation", division: "The Divinus Foundation", title: "Scholarship Access Initiative", desc: "Scholarship placement programme supporting 40 recipients across secondary and tertiary levels.", placeholder: true },
  { tag: "Labs", division: "Divinus Labs", title: "Community Engagement App", desc: "Mobile-first platform built for a regional NGO to manage volunteer coordination.", placeholder: true },
  { tag: "Advisory", division: "Divinus Advisory", title: "Sales Architecture Review", desc: "Diagnostic and redesign of a 30-person sales function for a technology distribution company.", placeholder: true },
];

export default function Portfolio() {
  return (
    <>
      {/* Page Header */}
      <section style={{ padding: "100px 0 80px", background: "linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 100%)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold-dim)", marginBottom: 20 }}>Portfolio</p>
          <h1 className="gsap-hero-title" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 500, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 24 }}>
            Portfolio
          </h1>
          <p className="gsap-fade-up" style={{ fontSize: 20, color: "var(--ink-3)", maxWidth: 560, lineHeight: 1.6 }}>
            A selection of engagements, programmes, and projects across the Divinus Group.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section style={{ padding: "32px 0", background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", display: "flex", gap: 10, flexWrap: "wrap" }}>
          {filters.map((f, i) => (
            <button key={f} style={{ padding: "8px 18px", borderRadius: 100, fontSize: 14, fontWeight: 500, cursor: "pointer", background: i === 0 ? "var(--btn-bg)" : "transparent", color: i === 0 ? "var(--btn-color)" : "var(--ink-2)", border: i === 0 ? "1px solid var(--btn-bg)" : "1px solid var(--border)", transition: "all 0.2s" }}>
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Project Grid */}
      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
            {projects.map((p, i) => (
              <div key={i} className="gsap-card" style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ height: 180, background: `linear-gradient(135deg, var(--bg-3) 0%, var(--gold-pale) 100%)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "var(--font-ibm-mono)", fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Image placeholder</span>
                </div>
                <div style={{ padding: "24px 24px 28px" }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
                    <span style={{ padding: "4px 12px", background: "var(--gold-pale)", border: "1px solid var(--border)", borderRadius: 100, fontSize: 12, color: "var(--gold-dim)", fontFamily: "var(--font-ibm-mono)" }}>{p.division}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: 20, fontWeight: 500, marginBottom: 10, lineHeight: 1.3 }}>{p.title}</h3>
                  <p style={{ color: "var(--ink-3)", fontSize: 14, lineHeight: 1.55 }}>{p.desc}</p>
                </div>
              </div>
            ))}

            {/* More coming */}
            <div style={{ background: "transparent", border: "1px dashed var(--border)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 280, padding: 32 }}>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: 12, color: "var(--ink-3)", letterSpacing: "0.1em", textTransform: "uppercase" }}>More projects coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 0", background: "var(--cta-bg)", textAlign: "center" }}>
        <div className="gsap-cta-reveal" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500, color: "var(--cta-text)", marginBottom: 20 }}>Want to Work With Us?</h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 18, maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.65 }}>Tell us what you need — and let&apos;s see where we can build together.</p>
          <Link href="/contact" style={{ background: "var(--gold)", color: "var(--ink)", padding: "14px 32px", borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 600 }}>Get in Touch →</Link>
        </div>
      </section>
    </>
  );
}
