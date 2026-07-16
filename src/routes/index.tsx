// src/routes/index.tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, ArrowRight, Shield, Clock, PoundSterling, Sparkles, Users, Star, CheckCircle2, HardHat, Home, Store } from "lucide-react";

import { SITE, SERVICES, AREAS, PROPERTY_TYPES } from "@/lib/site";
import { SectionHeader } from "@/components/SectionHeader";
import { HeroSlider } from "@/components/HeroSlider";

const faqs = [
  { q: "What is soft strip?", a: "Soft strip is the careful removal of a building's non-structural interior — kitchens, bathrooms, ceilings, partitions, floor coverings, fixtures and fittings — leaving a clean shell ready for refurbishment." },
  { q: "Do you cover the whole of Merseyside?", a: "Yes. We work across Liverpool, Wirral, Bootle, Knowsley, Sefton, Southport, St Helens and the wider Merseyside area." },
  { q: "Are you insured?", a: "Fully. We carry public liability and employer's liability insurance, and we're licensed waste carriers with full duty-of-care paperwork." },
  { q: "How quickly can you start?", a: "For most jobs we can be on site within a few days. Emergency and rapid-turnaround requests are welcome — just call us." },
  { q: "Do you clear the waste too?", a: "Yes. Every quote includes site clearance and licensed waste removal by default. You get a clean, empty property back — no rubble left behind." },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "North Soft Strip — Liverpool Soft Strip Contractors" },
      { name: "description", content: "Trusted Liverpool soft strip contractors for houses, flats, shops and light commercial units. Clean, insured, fast turnaround across Merseyside. Free quote today." },
      { property: "og:title", content: "North Soft Strip — Liverpool Soft Strip Contractors" },
      { property: "og:description", content: "Trusted Liverpool soft strip contractors for houses, flats, shops and light commercial units. Clean, insured, fast turnaround across Merseyside. Free quote today." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
});

// Clean and reliable path mapping using standard relative paths
const imgMap: Record<string, string> = {
  "house-strip-out": "/assets/house-strip-out.jpeg",
  "flat-strip-out": "/assets/flat-strip-out.jpeg",
  "kitchen-strip-out": "/assets/kitchen-strip-out.jpeg",
  "bathroom-strip-out": "/assets/bathroom-strip-out.jpeg",
  "ceiling-removal": "/assets/ceiling-removal.jpeg",
  "partition-wall-removal": "/assets/partition-wall-removal.jpeg",
  "floor-covering-removal": "/assets/floor-covering-removal.jpeg",
  "garage-strip-out": "/assets/garage-strip-out.jpeg",
  "office-strip-out": "/assets/office-strip-out.jpeg",
  "retail-strip-out": "/assets/commercial-strip-out.jpeg",
  "commercial-strip-out": "/assets/commercial-strip-out.jpeg",
  "internal-strip-out": "/assets/house-strip-out.jpeg",
  "site-clearance": "/assets/site-clearance.jpeg",
  "waste-removal": "/assets/waste-removal.jpeg",
  "property-preparation": "/assets/property-preparation.jpeg",
};

const trustBadges = [
  { icon: Shield, label: "Fully Insured" },
  { icon: HardHat, label: "Professional Team" },
  { icon: Clock, label: "Fast Response" },
  { icon: PoundSterling, label: "Competitive Pricing" },
  { icon: Sparkles, label: "Clean-Site Guarantee" },
  { icon: Home, label: "Residential & Commercial" },
  { icon: Users, label: "Liverpool Based" },
  { icon: CheckCircle2, label: "Free Quotations" },
];

const testimonials = [
  { name: "Sarah H.", location: "Wavertree, Liverpool", text: "Fantastic team. Turned up when they said, stripped the whole terrace in three days, cleaner than when they arrived. Handed over ready for our builder.", rating: 5 },
  { name: "Marcus D.", location: "Bootle", text: "Used North Soft Strip for a salon fit-out prep. Careful with the neighbours, tidy, and priced fairly. Would 100% use again.", rating: 5 },
  { name: "Priya S.", location: "Wirral", text: "Two-bed flat completely stripped ready for refurb. Great communication, honest quote, no surprises. Really appreciated the daily updates.", rating: 5 },
  { name: "Tom & Rachel", location: "Aigburth", text: "Kitchen and bathroom strip in a Victorian semi. Meticulous work — protected the stairs, bagged everything, took all waste away with paperwork.", rating: 5 },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <HeroSlider />

      {/* TRUST MARQUEE */}
      <section className="bg-navy border-y border-white/10 py-6 overflow-hidden">
        <div className="flex animate-marquee gap-14 whitespace-nowrap">
          {[...trustBadges, ...trustBadges].map((b, i) => (
            <div key={i} className="flex items-center gap-2.5 text-white/80 text-sm font-semibold">
              <b.icon className="h-4 w-4 text-orange" /> {b.label}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="What We Do"
              title="Soft strip services, done properly."
              description="A focused range of services for residential and light commercial projects. No heavy structural demolition — just careful, clean strip out and clearance."
            />
            <Link to="/services" className="btn-ghost-dark">All services <ArrowRight className="h-4 w-4" /></Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s) => (
              <Link
                key={s.slug} to="/services/$slug" params={{ slug: s.slug }}
                className="group card-lift overflow-hidden hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={imgMap[s.img]} alt={s.title} loading="lazy" width={1200} height={900}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  {/* Fixed warning: Changed from bg-gradient-to-t to Tailwind CSS v4's bg-linear-to-t */}
                  <div className="absolute inset-0 bg-linear-to-t from-navy/70 via-navy/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <h3 className="text-white text-lg font-bold">{s.title}</h3>
                    <div className="h-9 w-9 rounded-full grid place-items-center bg-orange text-white group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS: Before / During / Completed */}
      <section className="py-20 md:py-28 bg-mist">
        <div className="container-x">
          <SectionHeader
            center
            eyebrow="Our Process"
            title="Before · During · Completed"
            description="Every project follows the same clear stages so you always know exactly what happens next."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { img: "/assets/flat-strip-out.jpeg", tag: "01 · Before", title: "We survey the property", body: "Free on-site walk-through, transparent scope and a fixed quote. No hidden extras." },
              { img: "/assets/partition-wall-removal.jpeg", tag: "02 · During", title: "We strip it out", body: "Fixtures, fittings, kitchens, bathrooms, ceilings, partitions and floor coverings — carefully removed, room by room." },
              { img: "/assets/property-preparation.jpeg", tag: "03 · Completed", title: "We hand it back clean", body: "Waste removed, floors swept, ready for your builder. A blank canvas — not a building site." },
            ].map((step) => (
              <div key={step.tag} className="card-lift overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <img src={step.img} alt={step.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover" />
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-navy">{step.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
          <div>
            <SectionHeader
              eyebrow="Properties We Work On"
              title="Residential and light commercial — done properly."
              description="From two-up two-downs to high-street shops. We're specialists in the properties most contractors either won't touch or don't do properly."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-navy text-white px-4 py-2 text-xs font-semibold"><Home className="h-3.5 w-3.5" /> Residential</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange text-white px-4 py-2 text-xs font-semibold"><Store className="h-3.5 w-3.5" /> Light commercial</span>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              We <strong className="text-navy">do not</strong> undertake heavy or industrial demolition, factories, warehouses, tower blocks or bridge works.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {PROPERTY_TYPES.map((p) => (
              <div key={p} className="rounded-xl bg-mist border border-border px-3.5 py-3 text-sm font-medium text-navy flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-orange shrink-0" /> {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-20 md:py-28 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <span className="eyebrow text-orange-soft">Areas We Cover</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white">Working across Liverpool &amp; Merseyside.</h2>
            <p className="mt-4 text-white/75 text-lg">Local team, local pricing, local response times.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
            {AREAS.map((a) => (
              <Link key={a.slug} to="/areas/$slug" params={{ slug: a.slug }}
                className="group rounded-2xl border border-white/15 bg-white/5 backdrop-blur px-5 py-6 hover:bg-orange hover:border-orange transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">{a.name}</span>
                  <ArrowRight className="h-4 w-4 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
                <span className="text-xs text-white/85 group-hover:text-white/90">Soft strip {a.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-mist">
        <div className="container-x">
          <SectionHeader
            center
            eyebrow="Reviews"
            title="Homeowners, landlords &amp; local businesses trust us."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {testimonials.map((t) => (
              <div key={t.name} className="card-lift p-7">
                <div className="flex gap-0.5 text-orange">
                  {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-4 text-lg font-medium text-navy leading-relaxed">"{t.text}"</blockquote>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-navy text-white grid place-items-center font-bold text-sm">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-bold text-navy text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeader
              eyebrow="FAQ"
              title="Everything you need to know."
              description="Can't see your question? Give us a call or drop us a WhatsApp — happy to help."
            />
            <div className="mt-8 flex flex-col gap-3">
              <a href={SITE.phoneHref} className="btn-primary btn-primary-hover self-start"><Phone className="h-4 w-4" /> {SITE.phoneDisplay}</a>
              <Link to="/faq" className="btn-ghost-dark self-start">All FAQs <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group card-lift px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <span className="font-bold text-navy text-lg">{f.q}</span>
                  <span className="h-8 w-8 rounded-full bg-mist grid place-items-center text-navy group-open:bg-orange group-open:text-white transition-colors">
                    <ArrowRight className="h-4 w-4 rotate-90 group-open:-rotate-90 transition-transform" />
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-navy to-navy-deep text-white">
        <div className="container-x text-center max-w-3xl">
          <span className="eyebrow text-orange-soft justify-center">Ready when you are</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white">Get a free, no-obligation quote today.</h2>
          <p className="mt-4 text-white/80 text-lg">Same-day response. Fixed pricing. Fully insured team. Local to Liverpool.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/quote" className="btn-primary btn-primary-hover">Get Free Quote <ArrowRight className="h-4 w-4" /></Link>
            <a href={SITE.phoneHref} className="btn-outline hover:bg-white/10"><Phone className="h-4 w-4" /> {SITE.phoneDisplay}</a>
            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-outline hover:bg-white/10"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}