"use client";

import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export default function AnimationsProvider() {
  const pathname = usePathname();

  useGSAP(
    () => {
      // ── HERO ──────────────────────────────────────────────
      const heroEyebrow = document.querySelector<HTMLElement>(".gsap-hero-eyebrow");
      const heroTitle = document.querySelector<HTMLElement>(".gsap-hero-title");
      const heroSub = document.querySelector<HTMLElement>(".gsap-hero-sub");
      const heroCtas = document.querySelector<HTMLElement>(".gsap-hero-ctas");

      if (heroTitle) {
        const split = new SplitText(heroTitle, { type: "words" });
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        if (heroEyebrow) tl.from(heroEyebrow, { opacity: 0, y: 14, duration: 0.5 });

        tl.from(
          split.words,
          { opacity: 0, y: 50, duration: 0.75, stagger: 0.06 },
          "-=0.2"
        );

        if (heroSub) tl.from(heroSub, { opacity: 0, y: 24, duration: 0.65 }, "-=0.35");
        if (heroCtas)
          tl.from(
            Array.from(heroCtas.children),
            { opacity: 0, y: 16, duration: 0.5, stagger: 0.1 },
            "-=0.3"
          );
      }

      // ── FADE UP on scroll ─────────────────────────────────
      gsap.utils.toArray<HTMLElement>(".gsap-fade-up").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 44,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── BATCH CARDS ───────────────────────────────────────
      ScrollTrigger.batch(".gsap-card", {
        onEnter: (els) => {
          gsap.from(els, {
            opacity: 0,
            y: 52,
            duration: 0.7,
            stagger: 0.09,
            ease: "power2.out",
          });
        },
        start: "top 88%",
        once: true,
      });

      // ── SLIDE IN from sides ───────────────────────────────
      gsap.utils.toArray<HTMLElement>(".gsap-slide-left").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          x: -56,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 82%", toggleActions: "play none none none" },
        });
      });

      gsap.utils.toArray<HTMLElement>(".gsap-slide-right").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          x: 56,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 82%", toggleActions: "play none none none" },
        });
      });

      // ── CTA BANNERS ───────────────────────────────────────
      gsap.utils.toArray<HTMLElement>(".gsap-cta-reveal").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 32,
          scale: 0.98,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        });
      });

      // ── TABLE ROWS stagger ────────────────────────────────
      const ctaRows = gsap.utils.toArray<HTMLElement>(".gsap-cta-row");
      if (ctaRows.length) {
        gsap.from(ctaRows, {
          opacity: 0,
          x: -20,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRows[0],
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      // ── GOLD RULE lines ───────────────────────────────────
      gsap.utils.toArray<HTMLElement>(".gsap-line").forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.8,
          ease: "power3.inOut",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        });
      });
    },
    { dependencies: [pathname], revertOnUpdate: true }
  );

  return null;
}
