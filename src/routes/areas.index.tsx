import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AREAS } from "@/lib/site";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/areas/")({
  component: Areas,
  head: () => ({
    meta: [
      { title: "Areas We Cover — Soft Strip Merseyside | North Soft Strip" },
      { name: "description", content: "Soft strip contractors covering Liverpool, Wirral, Bootle, Knowsley, Sefton, Southport, St Helens and all of Merseyside." },
      { property: "og:title", content: "Areas We Cover — Liverpool & Merseyside" },
      { property: "og:description", content: "Local soft strip contractors covering the whole of Merseyside." },
      { property: "og:url", content: "/areas" },
    ],
    links: [{ rel: "canonical", href: "/areas" }],
  }),
});

function Areas() {
  return (
    <>
      <PageHero eyebrow="Areas Covered" title="Local across Liverpool & Merseyside." description="Same crew, same standards, whether you're in the city centre or out toward Southport." />
      <section className="py-20">
        <div className="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map((a) => (
            <Link key={a.slug} to="/areas/$slug" params={{ slug: a.slug }} className="card-lift p-6 group hover:-translate-y-1 hover:shadow-lift">
              <div className="flex items-center justify-between">
                <span className="font-bold text-navy text-lg">{a.name}</span>
                <ArrowRight className="h-4 w-4 text-orange group-hover:translate-x-1 transition-transform" />
              </div>
              <span className="text-sm text-muted-foreground">Soft strip {a.name}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
