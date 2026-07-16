import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, Shield, Heart, Users, Award } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { SITE } from "@/lib/site";

const stageDuring = "/assets/partition-wall-removal.jpeg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Us — North Soft Strip Liverpool" },
      { name: "description", content: "Liverpool-based soft strip specialists. Meet the team behind hundreds of clean, on-time strip outs across Merseyside." },
      { property: "og:title", content: "About North Soft Strip" },
      { property: "og:description", content: "Liverpool-based soft strip specialists serving homeowners, landlords, builders and local businesses across Merseyside." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  const values = [
    { icon: Shield, title: "Safety first", body: "Full PPE, safe methods, dust control and site protection on every job — every time." },
    { icon: Heart, title: "Respectful", body: "We work in people's homes and premises. Tidy, quiet where we can be, and courteous with neighbours." },
    { icon: Award, title: "Properly finished", body: "A strip out isn't finished until the floor is swept and the last skip bag is gone." },
    { icon: Users, title: "Local team", body: "A tight-knit Liverpool crew. You'll see the same faces from quote to handover." },
  ];
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Liverpool's soft strip specialists."
        description="We're not a heavy structural demolition contractor. We do one thing extremely well — careful, clean strip out for the properties most in demand across Merseyside."
      />
      <section className="py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-center">
          <img src={stageDuring} alt="North Soft Strip team at work" width={1200} height={900} loading="lazy" className="rounded-3xl shadow-lift" />
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">Founded by tradespeople, run for tradespeople and homeowners.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              North Soft Strip was set up to fill a gap in the Liverpool market — a reliable, insured, fairly priced team for the strip out jobs bigger demolition firms won't turn out for.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Today we work with homeowners, landlords, builders, letting agents and business owners across the whole of Merseyside — from single-room kitchen strips to full flat and shop clearances.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm">
              {["Fully insured", "Licensed waste carrier", "Free written quotes", "Fixed pricing", "PPE & site protection", "Neighbour-friendly"].map((v) => (
                <li key={v} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange" /> {v}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-20 bg-mist">
        <div className="container-x">
          <SectionHeader center eyebrow="How We Work" title="Four values on every job." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="card-lift p-7">
                <div className="h-12 w-12 rounded-2xl bg-orange/10 grid place-items-center text-orange"><v.icon className="h-6 w-6" /></div>
                <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link to="/quote" className="btn-primary btn-primary-hover">Work with us <ArrowRight className="h-4 w-4" /></Link>
            <p className="mt-4 text-sm text-muted-foreground">Or call {SITE.phoneDisplay} — we'll pick up.</p>
          </div>
        </div>
      </section>
    </>
  );
}
