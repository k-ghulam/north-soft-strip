import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SERVICES, AREAS } from "@/lib/site";

const BASE_URL = "https://strip-and-prep-pro.lovable.app";

const LIVERPOOL_SLUGS = [
  "house-strip-out-liverpool",
  "garage-strip-out-liverpool",
  "kitchen-strip-out-liverpool",
  "bathroom-strip-out-liverpool",
  "commercial-strip-out-liverpool",
  "property-preparation-liverpool",
  "site-clearance-liverpool",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          "/", "/about", "/services", "/projects", "/gallery", "/areas", "/faq", "/contact", "/quote", "/privacy", "/terms",
          ...SERVICES.map((s) => `/services/${s.slug}`),
          ...AREAS.map((a) => `/areas/${a.slug}`),
          ...LIVERPOOL_SLUGS.map((s) => `/liverpool/${s}`),
        ];
        const urls = paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
