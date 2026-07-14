// src/routes/gallery.tsx
import { useCallback, useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () => ({
    meta: [
      { title: "Gallery — Soft Strip Photos Liverpool | North Soft Strip" },
      { name: "description", content: "Browse photos of house, flat, kitchen, bathroom, ceiling, garage, shop and completed soft strip projects across Liverpool and Merseyside." },
      { property: "og:title", content: "Soft Strip Photo Gallery — North Soft Strip Liverpool" },
      { property: "og:description", content: "Real photos from residential and light commercial soft strip projects across Liverpool and Merseyside." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "North Soft Strip Project Gallery",
        description: "Photo portfolio of residential and light commercial soft strip projects completed across Liverpool and Merseyside.",
        url: "https://strip-and-prep-pro.lovable.app/gallery",
        about: "Soft strip, kitchen strip out, bathroom strip out, ceiling removal, garage clearance and commercial strip out projects.",
      }),
    }],
  }),
});

type Category =
  | "Houses"
  | "Flats"
  | "Garages"
  | "Shops"
  | "Kitchens"
  | "Bathrooms"
  | "Ceilings"
  | "Completed";

type Item = {
  src: string;
  alt: string;
  caption: string;
  category: Category;
  span?: string;
};

const items: Item[] = [
  { 
    src: "/assets/hero-strip-out.jpg", 
    category: "Houses", 
    span: "lg:row-span-2 lg:col-span-2",
    alt: "North Soft Strip crew removing plasterboard ceiling in a Liverpool terraced house during soft strip",
    caption: "Terraced house soft strip · Wavertree, Liverpool" 
  },
  { 
    src: "/assets/kitchen-cabinet-strip.jpg", 
    category: "Kitchens",
    alt: "Fitted kitchen units and worktops being carefully removed during a residential kitchen strip out in Merseyside",
    caption: "Kitchen strip out · Aigburth" 
  },
  { 
    src: "/assets/bathroom-wall-scrape.jpg", 
    category: "Bathrooms",
    alt: "Bathroom suite, tiles and pipework stripped back to bare walls ready for a new fit-out",
    caption: "Bathroom strip out · Bootle flat" 
  },
  { 
    src: "/assets/stage-during.jpg", 
    category: "Flats", 
    span: "lg:col-span-2",
    alt: "Two-bed apartment mid-strip with dust sheeting, floor protection and bagged waste ready for removal",
    caption: "Apartment soft strip in progress · Liverpool waterfront" 
  },
  { 
    src: "/assets/service-ceiling.jpg", 
    category: "Ceilings",
    alt: "Suspended ceiling tiles and grid being taken down safely in a light commercial unit",
    caption: "Suspended ceiling removal · St Helens" 
  },
  { 
    src: "/assets/service-retail.jpg", 
    category: "Shops",
    alt: "Independent shop unit stripped of shelving, counters and signage ready for the next tenant",
    caption: "Retail unit strip out · Liverpool city centre" 
  },
  { 
    src: "/assets/stage-before.jpg", 
    category: "Garages",
    alt: "Cluttered garage interior photographed before a full strip out and clearance in Wirral",
    caption: "Garage · before works · Wirral" 
  },
  { 
    src: "/assets/stage-completed.jpg", 
    category: "Completed", 
    span: "lg:col-span-2",
    alt: "Empty, swept and handover-ready property after completed soft strip and licensed waste removal",
    caption: "Handover-ready · completed project · Sefton" 
  },
  { 
    src: "/assets/kitchen-before.jpg", 
    category: "Houses",
    alt: "Semi-detached family home interior mid soft strip with fixtures and fittings being removed",
    caption: "Semi-detached house strip · Knowsley" 
  },
  { 
    src: "/assets/bathtub-removal.jpg", 
    category: "Bathrooms",
    alt: "Ensuite bathroom stripped to bare substrate with tiles and adhesive fully removed",
    caption: "Ensuite strip out · Southport" 
  },
  { 
    src: "/assets/ceiling-board-removal.jpg", 
    category: "Ceilings",
    alt: "Plasterboard ceiling taken down carefully in a Liverpool ground-floor flat during soft strip",
    caption: "Plasterboard ceiling down · Liverpool" 
  },
  { 
    src: "/assets/commercial-strip-out.jpg", 
    category: "Shops",
    alt: "Café interior stripped of seating, counter and wall panelling ready for refurbishment",
    caption: "Café strip out · Bootle" 
  },
];

const CATEGORIES: ("All" | Category[])[number][] = [
  "All", "Houses", "Flats", "Garages", "Shops", "Kitchens", "Bathrooms", "Ceilings", "Completed",
];

function Gallery() {
  const [active, setActive] = useState<"All" | Category>("All");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((i) => i.category === active)),
    [active],
  );

  const close = useCallback(() => setOpenIdx(null), []);
  const next = useCallback(
    () => setOpenIdx((i) => (i === null ? i : (i + 1) % filtered.length)),
    [filtered.length],
  );
  const prev = useCallback(
    () => setOpenIdx((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length],
  );

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIdx, close, next, prev]);

  // Preload neighbours for snappy nav
  useEffect(() => {
    if (openIdx === null) return;
    [1, -1].forEach((d) => {
      const idx = (openIdx + d + filtered.length) % filtered.length;
      const img = new Image();
      img.src = filtered[idx].src;
    });
  }, [openIdx, filtered]);

  const current = openIdx !== null ? filtered[openIdx] : null;

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Real jobs, real progress."
        description="Every image below is from a project we've completed across Liverpool and Merseyside — filter by property type or work stage."
      />

      <section className="py-16">
        <div className="container-x">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filter gallery by category">
            {CATEGORIES.map((c) => {
              const isActive = c === active;
              return (
                <button
                  key={c}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(c)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-navy text-white shadow-md"
                      : "bg-mist text-navy hover:bg-border"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>

          {/* Changed auto-rows-[220px] to auto-rows-55 to resolve Tailwind CSS warnings */}
          <div className="grid gap-3 grid-cols-2 lg:grid-cols-4 auto-rows-55">
            {filtered.map((it, i) => (
              <button
                key={`${it.src}-${i}`}
                type="button"
                onClick={() => setOpenIdx(i)}
                aria-label={`Open image: ${it.caption}`}
                className={`relative overflow-hidden rounded-2xl group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange ${it.span ?? ""}`}
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-x-3 bottom-3 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-left text-white text-sm font-semibold drop-shadow max-w-[70%]">
                    {it.caption}
                  </span>
                  <span className="h-9 w-9 rounded-full bg-orange text-white grid place-items-center shrink-0">
                    <ZoomIn className="h-4 w-4" />
                  </span>
                </div>
                <span className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-navy">
                  {it.category}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {current && openIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-50 bg-navy-deep/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-up"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close gallery"
            className="absolute top-4 right-4 h-11 w-11 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 h-12 w-12 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 h-12 w-12 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <figure
            className="max-w-6xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={current.src + openIdx}
              src={current.src}
              alt={current.alt}
              width={1600}
              height={1200}
              className="max-h-[80vh] w-auto object-contain rounded-xl shadow-2xl animate-fade-up"
              decoding="async"
            />
            <figcaption className="mt-4 text-center text-white/90">
              <div className="text-base font-semibold">{current.caption}</div>
              <div className="text-xs text-white/85 mt-1">
                {current.category} · {openIdx + 1} / {filtered.length}
              </div>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}