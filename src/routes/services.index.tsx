import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SERVICES } from "@/lib/site";

// Replace imports with direct static string paths
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

export const Route = createFileRoute("/services/")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Soft Strip Services — Liverpool & Merseyside | North Soft Strip" },
      { name: "description", content: "Full list of soft strip and clearance services: house, flat, kitchen, bathroom, ceilings, partitions, retail and commercial strip out across Liverpool." },
      { property: "og:title", content: "Soft Strip Services in Liverpool" },
      { property: "og:description", content: "Careful strip out for homes, flats, shops and light commercial units — plus site clearance and licensed waste removal." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Everything we do." description="Careful strip out, site clearance and property preparation for projects of all sizes across Merseyside." />
      <section className="py-20">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group card-lift overflow-hidden hover:-translate-y-1 hover:shadow-lift">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={imgMap[s.img]} alt={s.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <h3 className="text-white text-lg font-bold">{s.title}</h3>
                  <div className="h-9 w-9 rounded-full grid place-items-center bg-orange text-white group-hover:translate-x-1 transition-transform"><ArrowRight className="h-4 w-4" /></div>
                </div>
              </div>
              <div className="p-5"><p className="text-sm text-muted-foreground leading-relaxed">{s.short}</p></div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}