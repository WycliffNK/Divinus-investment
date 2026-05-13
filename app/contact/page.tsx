"use client";

import { useState } from "react";

const contactInfo = [
  { label: "Email", value: "hello@divinusgroup.com", href: "mailto:hello@divinusgroup.com" },
  { label: "Phone", value: "+256 …", href: "tel:+256" },
  { label: "Address", value: "Global Head Office · Africa, Globally", href: null },
];

const subjects = [
  "Divinus Advisory — Consultation",
  "Divinus AI · Vision Africa",
  "Divinus Labs — Project",
  "Divinus Exchange — Community",
  "Divinus Capital — Investment Club",
  "The Divinus Foundation",
  "Strategic Partnership",
  "General Enquiry",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Page Header */}
      <section style={{ padding: "100px 0 80px", background: "linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 100%)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold-dim)", marginBottom: 20 }}>Contact</p>
          <h1 className="gsap-hero-title" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 500, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 24 }}>
            Get in Touch.
          </h1>
          <p className="gsap-fade-up" style={{ fontSize: 20, color: "var(--ink-3)", maxWidth: 520, lineHeight: 1.6 }}>
            Whether you are a client, a partner, or a person ready to join — there is a place for you here.
          </p>
        </div>
      </section>

      {/* Contact Main */}
      <section style={{ padding: "100px 0", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>

          {/* Info Column */}
          <div className="gsap-slide-left">
            <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold-dim)", marginBottom: 24 }}>Contact Details</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {contactInfo.map((c) => (
                <div key={c.label}>
                  <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--ink-3)", marginBottom: 6 }}>{c.label}</p>
                  {c.href ? (
                    <a href={c.href} style={{ fontSize: 16, color: "var(--ink-2)", textDecoration: "none", fontWeight: 500 }}>{c.value}</a>
                  ) : (
                    <p style={{ fontSize: 16, color: "var(--ink-2)", fontWeight: 500 }}>{c.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--border)" }}>
              <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--ink-3)", marginBottom: 16 }}>Divisions</p>
              <p style={{ fontSize: 14, color: "var(--ink-3)", lineHeight: 1.65 }}>
                If you know which division you are enquiring about, please select it in the subject field — it helps us route your message to the right team.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="gsap-slide-right">
            {submitted ? (
              <div style={{ padding: 48, background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: 16, textAlign: "center" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--gold-pale)", border: "2px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 20 }}>✓</div>
                <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: 26, fontWeight: 500, marginBottom: 12 }}>Message received.</h3>
                <p style={{ color: "var(--ink-3)", fontSize: 16, lineHeight: 1.6 }}>We&apos;ll be in touch within two business days.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                style={{ display: "flex", flexDirection: "column", gap: 24 }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  {[{ label: "Full Name", type: "text", name: "name", placeholder: "Your full name" },
                    { label: "Email Address", type: "email", name: "email", placeholder: "your@email.com" }].map((f) => (
                    <div key={f.name}>
                      <label style={{ display: "block", fontFamily: "var(--font-ibm-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--ink-3)", marginBottom: 8 }}>{f.label}</label>
                      <input
                        type={f.type}
                        name={f.name}
                        placeholder={f.placeholder}
                        required
                        style={{ width: "100%", padding: "12px 16px", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 15, color: "var(--ink)", outline: "none" }}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-ibm-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--ink-3)", marginBottom: 8 }}>Subject</label>
                  <select
                    name="subject"
                    required
                    style={{ width: "100%", padding: "12px 16px", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 15, color: "var(--ink)", outline: "none", appearance: "none" }}
                  >
                    <option value="">Select a subject…</option>
                    {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-ibm-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--ink-3)", marginBottom: 8 }}>Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell us what you are looking for, what you are building, or how you would like to engage…"
                    required
                    rows={7}
                    style={{ width: "100%", padding: "12px 16px", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 15, color: "var(--ink)", outline: "none", resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="submit"
                  style={{ background: "var(--btn-bg)", color: "var(--btn-color)", padding: "14px 32px", borderRadius: 8, border: "none", fontSize: 15, fontWeight: 600, cursor: "pointer", alignSelf: "flex-start", transition: "opacity 0.2s" }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
