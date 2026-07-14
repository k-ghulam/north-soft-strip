import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

import hero from "@/assets/hero-strip-out.jpg";
import kitchen from "@/assets/service-kitchen.jpg";
import bathroom from "@/assets/service-bathroom.jpg";
import ceiling from "@/assets/service-ceiling.jpg";
import retail from "@/assets/service-retail.jpg";

const SLIDES = [
  { img: hero, eyebrow: "Residential Specialists", title: "Residential House Soft Strip", copy: "Precision soft strip for terraces, semis and detached homes across Liverpool & Merseyside." },
  { img: kitchen, eyebrow: "Kitchen Preparation", title: "Kitchen Strip Out & Preparation", copy: "Units, worktops, tiles and appliances carefully removed — ready for your new fit-out." },
  { img: bathroom, eyebrow: "Bathroom Clear-out", title: "Bathroom Strip Out & Clear-out", copy: "Suites, tiles and pipework removed cleanly, with all waste taken away." },
  { img: ceiling, eyebrow: "Structural Prep", title: "Garage Strip Out & Structural Prep", copy: "Full garage clearance and internal preparation, ready for conversion." },
  { img: retail, eyebrow: "Commercial Services", title: "Commercial Soft Strip Services", copy: "Shops, cafés, salons and light commercial units stripped ready for refit." },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {SLIDES.map((s, idx) => (
        <img
          key={idx}
          src={s.img}
          alt={s.title}
          width={1920}
          height={1200}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out ${idx === i ? "opacity-100 scale-100" : "opacity-0"}`}
          style={{ transform: idx === i ? "scale(1.04)" : "scale(1)", transition: "opacity 1400ms ease, transform 8000ms ease-out" }}
          fetchPriority={idx === 0 ? "high" : "low"}
        />
      ))}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,43,70,0.55) 0%, rgba(15,43,70,0.9) 100%)" }} />

      <div className="container-x relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div key={i} className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange/15 border border-orange/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-soft backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-orange animate-pulse" />
            {SLIDES[i].eyebrow} · Liverpool
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-[1.02] tracking-tight">
            {SLIDES[i].title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
            {SLIDES[i].copy}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/quote" className="btn-primary btn-primary-hover">
              Get Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-outline hover:bg-white/10">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <a href={SITE.phoneHref} className="btn-outline hover:bg-white/10">
              <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-xl">
            {[
              { k: "12+", l: "Years experience" },
              { k: "500+", l: "Projects completed" },
              { k: "100%", l: "Fully insured" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur px-4 py-4">
                <div className="text-2xl md:text-3xl font-extrabold text-white">{s.k}</div>
                <div className="text-xs text-white/85 mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-orange" : "w-5 bg-white/60 hover:bg-white/70"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
