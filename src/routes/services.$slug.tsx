import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { SERVICES, SITE } from "@/lib/site";
import { SectionHeader } from "@/components/SectionHeader";
import kitchen from "@/assets/service-kitchen.jpg";
import bathroom from "@/assets/service-bathroom.jpg";
import ceiling from "@/assets/service-ceiling.jpg";
import retail from "@/assets/service-retail.jpg";
import hero from "@/assets/hero-strip-out.jpg";

const imgMap: Record<string, string> = { kitchen, bathroom, ceiling, retail };

export const Route = createFileRoute("/services/$slug")({
  component: ServiceDetail,
  loader: ({ params }) => {
    const s = SERVICES.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.title} Liverpool — North Soft Strip` : "Service — North Soft Strip";
    const desc = loaderData ? `${loaderData.title.toLowerCase()} in Liverpool & Merseyside. ${loaderData.short} Free quote from your local soft strip specialist.` : "";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/services/${loaderData?.slug ?? ""}` },
      ],
      links: [{ rel: "canonical", href: `/services/${loaderData?.slug ?? ""}` }],
      scripts: loaderData ? [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: loaderData.title,
          description: loaderData.short,
          areaServed: { "@type": "City", name: "Liverpool" },
          provider: {
            "@type": "LocalBusiness",
            name: "North Soft Strip",
            areaServed: "Liverpool and Merseyside",
          },
        }),
      }] : [],
    };
  },
  notFoundComponent: () => <div className="pt-40 text-center">Service not found. <Link to="/services" className="text-orange">See all services</Link>.</div>,
  errorComponent: ({ error }) => <div className="pt-40 text-center">Something went wrong. {String(error)}</div>,
});

const benefits = [
  "Free written quote — no obligation",
  "Fixed price, no hidden extras",
  "Fully insured, PPE-equipped team",
  "Waste removed with duty-of-care paperwork",
  "Property left swept & handover-ready",
  "Careful with neighbours and shared walls",
];

function ServiceDetail() {
  const s = Route.useLoaderData();
  const img = imgMap[s.img] || hero;
  const related = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <img src={img} alt="" width={1920} height={1200} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,43,70,0.75) 0%, rgba(15,43,70,0.9) 100%)" }} />
        <div className="container-x relative">
          <span className="eyebrow text-orange-soft">Soft Strip Service</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold text-white max-w-4xl leading-[1.05]">{s.title} in Liverpool &amp; Merseyside</h1>
          <p className="mt-5 text-lg text-white/85 max-w-2xl">{s.short}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/quote" className="btn-primary btn-primary-hover">Get Free Quote <ArrowRight className="h-4 w-4" /></Link>
            <a href={SITE.phoneHref} className="btn-outline hover:bg-white/10"><Phone className="h-4 w-4" /> {SITE.phoneDisplay}</a>
            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-outline hover:bg-white/10"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeader eyebrow="Overview" title={`Our ${s.title.toLowerCase()} service`} />
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>Whether it's a single room or an entire property, our {s.title.toLowerCase()} service is designed for projects of all sizes across Liverpool and Merseyside. We survey, quote, strip, clear and hand back — one team from start to finish.</p>
              <p>We work in occupied and vacant properties, coordinate around your builder's programme, and always leave the site cleaner than we found it.</p>
            </div>
            <h3 className="mt-10 text-2xl font-bold">What's included</h3>
            <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-orange mt-0.5 shrink-0" /> {b}</li>
              ))}
            </ul>
          </div>
          <aside className="card-lift p-7 h-fit lg:sticky lg:top-28">
            <h3 className="text-xl font-bold">Get a free quote today</h3>
            <p className="mt-2 text-sm text-muted-foreground">Send a couple of photos or ask a quick question — usually answered within the hour.</p>
            <div className="mt-5 flex flex-col gap-2.5">
              <Link to="/quote" className="btn-primary btn-primary-hover justify-center">Request a Quote</Link>
              <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark justify-center"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
              <a href={SITE.phoneHref} className="btn-ghost-dark justify-center"><Phone className="h-4 w-4" /> Call</a>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-20 bg-mist">
        <div className="container-x">
          <SectionHeader eyebrow="Related Services" title="You might also need…" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to="/services/$slug" params={{ slug: r.slug }} className="card-lift p-6 group hover:-translate-y-1 hover:shadow-lift">
                <h3 className="font-bold text-navy">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange">Learn more <ArrowRight className="h-3.5 w-3.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
