import { useEffect, useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

interface Slide {
  img: string;
  eyebrow: string;
  title: string;
  copy: string;
}

const SLIDES: Slide[] = [
  { img: "/assets/house-strip-out.jpeg", eyebrow: "Residential Specialists", title: "Residential House Soft Strip", copy: "Precision soft strip for terraces, semis and detached homes across Liverpool & Merseyside." },
  { img: "/assets/kitchen-strip-out.jpeg", eyebrow: "Kitchen Preparation", title: "Kitchen Strip Out & Preparation", copy: "Units, worktops, tiles and appliances carefully removed — ready for your new fit-out." },
  { img: "/assets/bathroom-strip-out.jpeg", eyebrow: "Bathroom Clear-out", title: "Bathroom Strip Out & Clear-out", copy: "Suites, tiles and pipework removed cleanly, with all waste taken away." },
  { img: "/assets/ceiling-removal.jpeg", eyebrow: "Structural Prep", title: "Garage Strip Out & Structural Prep", copy: "Full garage clearance and internal preparation, ready for conversion." },
  { img: "/assets/commercial-strip-out.jpeg", eyebrow: "Commercial Services", title: "Commercial Soft Strip Services", copy: "Shops, cafés, salons and light commercial units stripped ready for refit." },
];

export function HeroSlider() {
  const [i, setI] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setI((p) => (p + 1) % SLIDES.length);
    }, 6000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleSlideSelect = (idx: number) => {
    setI(idx);
    startTimer(); // Reset the 6-second timer upon manual selection
  };

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {SLIDES.map((s, idx) => (
        <img
          key={idx}
          src={s.img}
          alt={s.title}
          width={1920}
          height={1200}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-in-out ${
            idx === i ? "opacity-100 scale-[1.04]" : "opacity-0 scale-100"
          }`}
          style={{ transitionProperty: "opacity, transform" }}
          fetchPriority={idx === 0 ? "high" : "low"}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f2b46]/55 to-[#0f2b46]/90" />

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
              onClick={() => handleSlideSelect(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === i ? "w-10 bg-orange" : "w-5 bg-white/60 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}