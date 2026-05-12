import Link from "next/link";

const divisions = [
  { name: "Divinus Advisory", mandate: "Strategic consultancy for boards and leadership teams — AI integration, business development, and transformation." },
  { name: "Divinus AI · Vision Africa", mandate: "AI strategy and innovation — with Africa at the centre and global markets in view." },
  { name: "Divinus Labs", mandate: "Digital product development — applications, tools, and platforms built to specification." },
  { name: "Divinus Exchange", mandate: "Community platform — structured environments for growth-oriented men and women." },
  { name: "Divinus Capital", mandate: "Financial education — structured investment learning and market intelligence programmes." },
  { name: "The Divinus Foundation", mandate: "Social impact — scholarships, empowerment, and community investment." },
  { name: "Strategic Partners", mandate: "Collaborative network — strategic alliances and ecosystem partnerships." },
];

const values = [
  { name: "Precision", desc: "We do not do things carelessly. Every service, every product, every community we build is designed with intentionality." },
  { name: "Integrity", desc: "We operate with transparency. We make claims we can support and commitments we keep." },
  { name: "Ambition", desc: "We are building something significant. We hold ourselves to the standard that aspiration requires." },
  { name: "Impact", desc: "Commercial success and social responsibility are not in tension at Divinus. They are both expected." },
];

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section style={{ padding: "100px 0 80px", background: "linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 100%)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold-dim)", marginBottom: 20 }}>About</p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 500, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 24, maxWidth: 860 }}>
            Divinus Investment Group Limited.
          </h1>
          <p style={{ fontSize: 20, color: "var(--ink-3)", maxWidth: 600, lineHeight: 1.6 }}>
            We build the infrastructure of growth — in organisations, in markets, and in people.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section style={{ padding: "100px 0", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold-dim)", marginBottom: 16 }}>Who We Are</p>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 500, lineHeight: 1.15, marginBottom: 24 }}>A Group Built with Intention.</h2>
            <p style={{ fontSize: 17, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 20 }}>
              Divinus Investment Group Limited is a diversified group company with seven active divisions operating across business strategy, AI and technology, digital product development, financial education, community development, and social impact.
            </p>
            <p style={{ fontSize: 17, color: "var(--ink-2)", lineHeight: 1.7 }}>
              We are not a conglomerate held together by financial architecture alone. Every division within the Divinus Group exists because it addresses a real need — and because we believe organisations that build well, think well, and give back well are the ones that endure. We are headquartered with global ambition and African conviction. Our work reflects both.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold-dim)", marginBottom: 16 }}>Our Mission</p>
            <blockquote style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.4, color: "var(--ink-2)", borderLeft: "3px solid var(--gold)", paddingLeft: 24 }}>
              To build organisations, develop people, and create value that lasts — in business, in communities, and in lives.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section style={{ padding: "100px 0", background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold-dim)", marginBottom: 16 }}>Our Architecture</p>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 500, lineHeight: 1.15 }}>Seven Divisions. One Standard.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
            {divisions.map((d, i) => (
              <div key={d.name} style={{ display: "grid", gridTemplateColumns: "1fr 2fr", padding: "24px 32px", background: i % 2 === 0 ? "var(--bg)" : "transparent", borderBottom: i < divisions.length - 1 ? "1px solid var(--border)" : "none", gap: 32, alignItems: "center" }}>
                <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: 17, fontWeight: 500 }}>{d.name}</h3>
                <p style={{ color: "var(--ink-3)", fontSize: 15, lineHeight: 1.55 }}>{d.mandate}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "100px 0", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold-dim)", marginBottom: 16 }}>Our Values</p>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 500, lineHeight: 1.15 }}>What We Stand For.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {values.map((v) => (
              <div key={v.name} style={{ padding: 32, background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: 12 }}>
                <div style={{ width: 40, height: 2, background: "var(--gold)", marginBottom: 20 }} />
                <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: 22, fontWeight: 500, marginBottom: 12 }}>{v.name}</h3>
                <p style={{ color: "var(--ink-3)", fontSize: 15, lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: "100px 0", background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 32px" }}>
          <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold-dim)", marginBottom: 16 }}>Our Story</p>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 500, lineHeight: 1.15, marginBottom: 32 }}>Why We Were Built.</h2>
          <p style={{ fontSize: 17, color: "var(--ink-2)", lineHeight: 1.75, marginBottom: 20 }}>
            Divinus Investment Group was founded on a conviction that grew into a structure. The conviction: that Africa&apos;s next chapter would be written by those who combined strategic intelligence with technological capability and human investment.
          </p>
          <p style={{ fontSize: 17, color: "var(--ink-2)", lineHeight: 1.75 }}>
            The structure: seven divisions, each one addressing a different dimension of that conviction. From the boardrooms where strategy is designed to the communities where people are growing, from the code written in Divinus Labs to the scholarships funded by the Divinus Foundation — the group is one answer to one question: what does serious, purposeful business look like?
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 0", background: "var(--cta-bg)", textAlign: "center" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500, color: "var(--cta-text)", marginBottom: 24 }}>Want to Partner With Us?</h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 18, maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.65 }}>
            Tell us where you fit — and we&apos;ll show you where you belong.
          </p>
          <Link href="/contact" style={{ background: "var(--gold)", color: "var(--ink)", padding: "14px 32px", borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 600 }}>
            Contact the Group →
          </Link>
        </div>
      </section>
    </>
  );
}
