import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/projects")({
  component: Projects,
  head: () => ({
    meta: [
      { title: "Projects — Recent Soft Strip Work in Liverpool | North Soft Strip" },
      { name: "description", content: "Recent soft strip and clearance projects across Liverpool and Merseyside — houses, flats, cafés and light commercial units. Before, during and completed." },
      { property: "og:title", content: "Our Recent Soft Strip Projects" },
      { property: "og:description", content: "Real projects across Merseyside — homes, flats and light commercial units stripped and handed back clean." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

const projects = [
  { 
    title: "3-bed Victorian terrace strip out", 
    type: "Terraced house", 
    location: "Wavertree", 
    duration: "3 days", 
    before: "/assets/flat-strip-out.jpeg", 
    during: "/assets/partition-wall-removal.jpeg", 
    completed: "/assets/property-preparation.jpeg", 
    quote: "Turned up on time, cleaner than when they arrived." 
  },
  { 
    title: "Kitchen & bathroom strip", 
    type: "Semi-detached", 
    location: "Aigburth", 
    duration: "2 days", 
    before: "/assets/kitchen-strip-out.jpeg", 
    during: "/assets/partition-wall-removal.jpeg", 
    completed: "/assets/property-preparation.jpeg", 
    quote: "Protected the stairs, bagged everything." 
  },
  { 
    title: "1-bed flat full strip", 
    type: "Apartment", 
    location: "City centre", 
    duration: "2 days", 
    before: "/assets/bathroom-strip-out.jpeg", 
    during: "/assets/partition-wall-removal.jpeg", 
    completed: "/assets/property-preparation.jpeg", 
    quote: "Perfect for our BTL refurb." 
  },
  { 
    title: "High-street salon strip out", 
    type: "Light commercial", 
    location: "Bootle", 
    duration: "3 days", 
    before: "/assets/commercial-strip-out.jpeg", 
    during: "/assets/partition-wall-removal.jpeg", 
    completed: "/assets/property-preparation.jpeg", 
    quote: "Ready for the fit-out team on the Monday." 
  },
];

function Projects() {
  return (
    <>
      <PageHero eyebrow="Projects" title="Recent work across Merseyside." description="A snapshot of the properties we've stripped and handed back handover-ready this season." />
      <section className="py-20">
        <div className="container-x space-y-16">
          {projects.map((p, i) => (
            <article key={i} className="card-lift overflow-hidden">
              <div className="grid md:grid-cols-3">
                {[
                  { img: p.before, tag: "Before" },
                  { img: p.during, tag: "During" },
                  { img: p.completed, tag: "Completed" },
                ].map((s) => (
                  <div key={s.tag} className="relative aspect-[4/3]">
                    <img src={s.img} alt={`${p.title} — ${s.tag}`} width={1200} height={900} loading="lazy" className="h-full w-full object-cover" />
                    <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-navy">{s.tag}</span>
                  </div>
                ))}
              </div>
              <div className="p-8 grid gap-6 md:grid-cols-[1.6fr_1fr] items-start">
                <div>
                  <h3 className="text-2xl font-bold">{p.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-orange" /> {p.location}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4 text-orange" /> {p.duration}</span>
                    <span className="rounded-full bg-mist px-3 py-0.5 text-xs font-semibold text-navy">{p.type}</span>
                  </div>
                  <blockquote className="mt-4 text-navy font-medium italic">"{p.quote}"</blockquote>
                </div>
                <Link to="/quote" className="btn-primary btn-primary-hover self-center md:justify-self-end">Request similar quote <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}