import Link from "next/link";

const services = [
  {
    id: "advisory",
    num: "01",
    name: "Divinus Advisory",
    tagline: "Your Business Has the Ambition. We Provide the Architecture.",
    sub: "Strategic consultancy for organisations ready to grow with precision — not just speed.",
    body: "Divinus Advisory works with boards, leadership teams, and founders who understand that serious growth requires serious infrastructure — in strategy, in operations, in people, and increasingly, in technology. Every engagement begins with a diagnostic phase. We do not arrive with a predetermined solution. We arrive with the right questions.",
    areas: ["AI for Business", "Business Development", "Sales Architecture", "Leadership Development", "Business Reorganisation", "Business Audits & Diagnostics"],
    cta: "Request a Consultation",
  },
  {
    id: "ai",
    num: "02",
    name: "Divinus AI · Vision Africa",
    tagline: "Africa Does Not Need to Catch Up. It Needs to Lead.",
    sub: "AI strategy, technology intelligence, and innovation — with African context and global ambition.",
    body: "Divinus AI is the technology intelligence and innovation division of Divinus Investment Group. We work at the intersection of artificial intelligence, strategic application, and African development — helping organisations and institutions navigate the most consequential technological shift of our era.",
    areas: ["AI Strategy & Roadmapping", "Technology Intelligence", "AI for Business Operations", "Innovation Advisory", "Vision Africa Programme"],
    cta: "Enquire About AI Advisory",
  },
  {
    id: "labs",
    num: "03",
    name: "Divinus Labs",
    tagline: "If Your Business Needs It Built, We Build It.",
    sub: "Digital product development — applications, tools, and platforms built to specification.",
    body: "Divinus Labs designs and builds applications, internal tools, customer platforms, and automation systems for organisations and individuals. We begin with your problem. We work toward the most practical, well-engineered solution. We do not sell templates — we build answers.",
    areas: ["Web & Mobile Applications", "Internal Tooling", "Customer Platforms", "Automation Systems", "Rapid Prototyping"],
    cta: "Start a Project with Labs",
  },
  {
    id: "exchange",
    num: "04",
    name: "Divinus Exchange",
    tagline: "The Standard You Keep Is the Network You Join.",
    sub: "Two communities. One platform. Built for people who take their growth seriously.",
    body: "Divinus Exchange is the group's community and engagement platform — home to Men of Substance and Genesis Woman. These are not social networks. They are structured environments for people who have decided that average is not the standard they intend to keep.",
    areas: ["Men of Substance", "Genesis Woman", "Events & Networking", "Mentorship Structures", "Educational Content"],
    cta: "Discover Divinus Exchange",
  },
  {
    id: "capital",
    num: "05",
    name: "Divinus Capital",
    tagline: "Financial Intelligence Is Not Optional. We Make It Accessible.",
    sub: "Financial education, investment learning, and market intelligence — through the Divinus Investments Club.",
    body: "Divinus Capital operates through the Divinus Investments Club — a structured learning environment for people who want to understand markets, build financial knowledge, and develop the discipline to participate in them responsibly. This is not a trading signals service. It is serious financial education.",
    areas: ["Divinus Investments Club", "Market Intelligence", "Financial Literacy Programmes", "Investment Education", "Structured Learning Cohorts"],
    cta: "Explore Divinus Capital",
  },
  {
    id: "foundation",
    num: "06",
    name: "The Divinus Foundation",
    tagline: "We Measure Our Success by What We Give Back.",
    sub: "Social impact — scholarships, empowerment, and structured community investment.",
    body: "The Divinus Foundation channels resources, access, and expertise toward individuals and communities who are building their futures without the infrastructure to do it easily. Our work includes scholarships for talented individuals who lack financial access, structured empowerment programmes, and community investments designed to create change that outlasts the intervention.",
    areas: ["Scholarships", "Empowerment Programmes", "Community Investment", "Access Initiatives", "Structured Impact"],
    cta: "Support the Foundation",
  },
  {
    id: "partners",
    num: "07",
    name: "Strategic Partners",
    tagline: "We Grow Through Collaboration.",
    sub: "A curated network of strategic collaborators, implementation partners, and ecosystem allies.",
    body: "Divinus Investment Group works with a curated network of strategic partners — organisations and individuals who share our values of precision, integrity, and impact. Our partnerships enable us to extend our reach, deepen our expertise, and deliver more for our clients, members, and communities.",
    areas: ["Implementation Partners", "Ecosystem Allies", "Joint Ventures", "Co-delivery Programmes", "Strategic Referral Network"],
    cta: "Explore Partnership Opportunities",
  },
];

const process = [
  { step: "01", name: "Discovery", desc: "We examine your business, market, leadership, and operational reality before prescribing anything." },
  { step: "02", name: "Proposal", desc: "A clear, specific strategy designed for your context — not a framework repurposed from somewhere else." },
  { step: "03", name: "Execution", desc: "We remain engaged through implementation. The gap between strategy and execution is where good plans disappear." },
  { step: "04", name: "Outcomes", desc: "Every engagement ends with a clear picture of where your organisation is going and the steps required to get there." },
];

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section style={{ padding: "100px 0 80px", background: "linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 100%)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold-dim)", marginBottom: 20 }}>Services</p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 500, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 24, maxWidth: 760 }}>
            Our Services
          </h1>
          <p style={{ fontSize: 20, color: "var(--ink-3)", maxWidth: 560, lineHeight: 1.6 }}>
            Seven divisions. Each with a defined purpose. Each held to the same standard of excellence.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section style={{ padding: "80px 0", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          {services.map((s, i) => (
            <div key={s.id} id={s.id} style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, padding: "64px 0", borderBottom: i < services.length - 1 ? "1px solid var(--border)" : "none", alignItems: "start" }}>
              <div>
                <span style={{ fontFamily: "var(--font-ibm-mono)", fontSize: 12, color: "var(--gold-dim)", letterSpacing: "0.1em", display: "block", marginBottom: 12 }}>{s.num}</span>
                <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 500, lineHeight: 1.2 }}>{s.name}</h2>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-playfair)", fontSize: 20, fontStyle: "italic", color: "var(--ink-2)", marginBottom: 16, lineHeight: 1.4 }}>{s.tagline}</p>
                <p style={{ fontSize: 15, color: "var(--ink-3)", marginBottom: 20 }}>{s.sub}</p>
                <p style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 28 }}>{s.body}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                  {s.areas.map((a) => (
                    <span key={a} style={{ padding: "6px 14px", background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: 100, fontSize: 13, color: "var(--ink-2)" }}>{a}</span>
                  ))}
                </div>
                <Link href="/contact" style={{ color: "var(--gold-dim)", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>{s.cta} →</Link>
              </div>
            </div>
          ))}

          {/* Coming Soon */}
          <div style={{ padding: "40px 0", borderTop: "1px dashed var(--border)", color: "var(--ink-3)", fontFamily: "var(--font-ibm-mono)", fontSize: 13, letterSpacing: "0.1em" }}>
            More divisions coming soon —
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: "100px 0", background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold-dim)", marginBottom: 16 }}>Our Process</p>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 500 }}>We Diagnose Before We Prescribe.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {process.map((p) => (
              <div key={p.step} style={{ padding: 32, background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 12 }}>
                <span style={{ fontFamily: "var(--font-ibm-mono)", fontSize: 13, color: "var(--gold)", display: "block", marginBottom: 16 }}>{p.step}</span>
                <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: 22, fontWeight: 500, marginBottom: 12 }}>{p.name}</h3>
                <p style={{ color: "var(--ink-3)", fontSize: 15, lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 0", background: "var(--cta-bg)", textAlign: "center" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500, color: "var(--cta-text)", marginBottom: 20 }}>Not Sure Where to Start?</h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 18, maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.65 }}>Tell us what you are trying to build, and we&apos;ll point you to the right division.</p>
          <Link href="/contact" style={{ background: "var(--gold)", color: "var(--ink)", padding: "14px 32px", borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 600 }}>Contact Us →</Link>
        </div>
      </section>
    </>
  );
}
