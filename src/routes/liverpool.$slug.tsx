import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";
import { SectionHeader } from "@/components/SectionHeader";
import hero from "@/assets/hero-strip-out.jpg";
import kitchen from "@/assets/service-kitchen.jpg";
import bathroom from "@/assets/service-bathroom.jpg";
import ceiling from "@/assets/service-ceiling.jpg";
import retail from "@/assets/service-retail.jpg";

type Page = {
  slug: string;
  title: string;
  h1: string;
  intro: string;
  benefits: string[];
  img: string;
};

const IMG: Record<string, string> = { hero, kitchen, bathroom, ceiling, retail };

const PAGES: Page[] = [
  {
    slug: "house-strip-out-liverpool",
    title: "House Strip Out Liverpool — Residential Soft Strip Specialists",
    h1: "House Strip Out in Liverpool",
    intro: "Full residential soft strip for terraces, semis and detached houses across Liverpool. Careful room-by-room removal of kitchens, bathrooms, ceilings, partitions and floor coverings — handed back clean.",
    benefits: ["Fully insured Liverpool crew", "Fixed written quotes", "All waste removed with duty-of-care paperwork", "Neighbour-friendly, low-noise working"],
    img: "hero",
  },
  {
    slug: "garage-strip-out-liverpool",
    title: "Garage Strip Out Liverpool — Clearance & Preparation",
    h1: "Garage Strip Out in Liverpool",
    intro: "Full garage strip out and internal preparation across Liverpool — ready for conversion, workshop or a full refit.",
    benefits: ["Attached & detached garages", "Old fixtures, shelving & partitions removed", "Site left swept and prep-ready", "Same-week starts across Merseyside"],
    img: "ceiling",
  },
  {
    slug: "kitchen-strip-out-liverpool",
    title: "Kitchen Strip Out Liverpool — Careful Removal & Prep",
    h1: "Kitchen Strip Out in Liverpool",
    intro: "Units, worktops, tiles, splashbacks and appliances carefully removed. We leave Liverpool kitchens clean, capped and ready for the new fit-out.",
    benefits: ["Careful isolation of services", "Tiles & adhesive removed to substrate", "Floor coverings lifted", "Waste bagged and cleared same day"],
    img: "kitchen",
  },
  {
    slug: "bathroom-strip-out-liverpool",
    title: "Bathroom Strip Out Liverpool — Suite, Tile & Pipework Removal",
    h1: "Bathroom Strip Out in Liverpool",
    intro: "Suites, tiles, boxing and pipework carefully removed with full dust control across Liverpool. Ready for your plumber and tiler.",
    benefits: ["Dust sheeting & floor protection", "Tiles removed to the wall", "Pipework capped safely", "All rubble taken away"],
    img: "bathroom",
  },
  {
    slug: "commercial-strip-out-liverpool",
    title: "Commercial Strip Out Liverpool — Shops, Salons & Offices",
    h1: "Commercial Soft Strip in Liverpool",
    intro: "Independent shops, cafés, salons, clinics and boutique offices across Liverpool — stripped, cleared and ready for the incoming trade.",
    benefits: ["Out-of-hours and weekend working", "Suspended ceilings and partitions removed", "Shopfittings & signage taken down", "Licensed waste removal included"],
    img: "retail",
  },
  {
    slug: "property-preparation-liverpool",
    title: "Property Preparation Liverpool — Handover-Ready Clearance",
    h1: "Property Preparation in Liverpool",
    intro: "End-to-end property preparation for Liverpool landlords, builders and refurbishment teams — from soft strip through to a clean, empty, handover-ready shell.",
    benefits: ["One team from quote to handover", "Detailed condition photos throughout", "Scheduled to your refurb programme", "Fully insured & compliant"],
    img: "hero",
  },
  {
    slug: "site-clearance-liverpool",
    title: "Site Clearance Liverpool — Licensed Waste Removal",
    h1: "Site Clearance in Liverpool",
    intro: "Post-strip site clearance and licensed waste removal across Liverpool. One visit — everything gone, paperwork issued.",
    benefits: ["Registered waste carrier", "Full duty-of-care paperwork", "Same or next-day turnaround", "Recycling prioritised where possible"],
    img: "ceiling",
  },
];

export const Route = createFileRoute("/liverpool/$slug")({
  component: LiverpoolLanding,
  loader: ({ params }) => {
    const p = PAGES.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => {
    const title = loaderData?.title ?? "Liverpool Soft Strip";
    const desc = loaderData
      ? `${loaderData.h1} by North Soft Strip. ${loaderData.intro.slice(0, 130)}`
      : "";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/liverpool/${loaderData?.slug ?? ""}` },
      ],
      links: [{ rel: "canonical", href: `/liverpool/${loaderData?.slug ?? ""}` }],
    };
  },
  notFoundComponent: () => (
    <div className="pt-40 text-center">
      Page not found. <Link to="/" className="text-orange">Go home</Link>.
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="pt-40 text-center">Something went wrong. {String(error)}</div>
  ),
});

function LiverpoolLanding() {
  const p = Route.useLoaderData();
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <img src={IMG[p.img]} alt="" width={1920} height={1200} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,43,70,0.75) 0%, rgba(15,43,70,0.92) 100%)" }} />
        <div className="container-x relative">
          <span className="eyebrow text-orange-soft">Liverpool · Merseyside</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold text-white leading-[1.05] max-w-4xl">{p.h1}</h1>
          <p className="mt-5 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">{p.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/quote" className="btn-primary btn-primary-hover">Get Free Quote <ArrowRight className="h-4 w-4" /></Link>
            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-outline hover:bg-white/10">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a href={SITE.phoneHref} className="btn-outline hover:bg-white/10">
              <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1.2fr_1fr] items-start">
          <div>
            <SectionHeader eyebrow="Why North Soft Strip" title={`Trusted for ${p.h1.toLowerCase()}.`} />
            <ul className="mt-8 space-y-3">
              {p.benefits.map((b: string) => (
                <li key={b} className="flex items-start gap-3 text-navy">
                  <CheckCircle2 className="h-5 w-5 text-orange shrink-0 mt-0.5" />
                  <span className="font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-lift p-8 bg-navy text-white">
            <h3 className="text-2xl font-bold">Free quote in Liverpool</h3>
            <p className="mt-2 text-white/80">Local team, local pricing, local response times.</p>
            <div className="mt-6 flex flex-col gap-2.5">
              <Link to="/quote" className="btn-primary btn-primary-hover justify-center">Request Quote <ArrowRight className="h-4 w-4" /></Link>
              <a href={SITE.phoneHref} className="btn-outline hover:bg-white/10 justify-center"><Phone className="h-4 w-4" /> {SITE.phoneDisplay}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-mist">
        <div className="container-x">
          <SectionHeader eyebrow="Related Services" title="Explore more of what we do" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s) => (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="card-lift p-5 flex items-center justify-between gap-3 group hover:-translate-y-0.5">
                <span className="font-semibold text-navy">{s.title}</span>
                <ArrowRight className="h-4 w-4 text-orange group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
