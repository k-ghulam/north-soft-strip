import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { AREAS, SERVICES, SITE } from "@/lib/site";
import { SectionHeader } from "@/components/SectionHeader";
import hero from "@/assets/hero-strip-out.jpg";

export const Route = createFileRoute("/areas/$slug")({
  component: Area,
  loader: ({ params }) => {
    const a = AREAS.find((x) => x.slug === params.slug);
    if (!a) throw notFound();
    return a;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `Soft Strip ${loaderData.name} — Local Contractors | North Soft Strip` : "Area";
    const desc = loaderData ? `Local soft strip contractors in ${loaderData.name}. Residential and light commercial strip out, site clearance and property prep. Free quotes.` : "";
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/areas/${loaderData?.slug ?? ""}` },
      ],
      links: [{ rel: "canonical", href: `/areas/${loaderData?.slug ?? ""}` }],
    };
  },
  notFoundComponent: () => <div className="pt-40 text-center">Area not found. <Link to="/areas" className="text-orange">See all areas</Link>.</div>,
  errorComponent: ({ error }) => <div className="pt-40 text-center">Something went wrong. {String(error)}</div>,
});

function Area() {
  const a = Route.useLoaderData();
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <img src={hero} alt="" width={1920} height={1200} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,43,70,0.75) 0%, rgba(15,43,70,0.92) 100%)" }} />
        <div className="container-x relative">
          <span className="eyebrow text-orange-soft">Local Coverage</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold text-white leading-[1.05] max-w-4xl">Soft Strip Contractors in {a.name}</h1>
          <p className="mt-5 text-lg text-white/85 max-w-2xl">Trusted, local, fully insured strip out and clearance across {a.name} and the wider Merseyside area.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/quote" className="btn-primary btn-primary-hover">Get Free Quote <ArrowRight className="h-4 w-4" /></Link>
            <a href={SITE.phoneHref} className="btn-outline hover:bg-white/10"><Phone className="h-4 w-4" /> {SITE.phoneDisplay}</a>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container-x max-w-3xl">
          <SectionHeader eyebrow={a.name} title={`Local soft strip contractors serving ${a.name}.`} />
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>We work across {a.name} on houses, flats, independent shops, cafés, salons and light commercial units. From single-room kitchen strips to full property clearances, we bring the same clean, insured and neighbour-friendly approach to every job.</p>
            <p>Because we're based locally, response times are fast and pricing is fair — no long-distance travel loaded onto your quote.</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-mist">
        <div className="container-x">
          <SectionHeader eyebrow="Popular in this area" title={`Services we offer in ${a.name}`} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 9).map((s) => (
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
