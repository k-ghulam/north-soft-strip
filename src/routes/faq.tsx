import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const faqs = [
  { q: "What is soft strip?", a: "The careful removal of non-structural interior elements — kitchens, bathrooms, ceilings, partitions, floor coverings, fixtures and fittings — leaving a clean shell ready for refurbishment." },
  { q: "Do you do heavy structural demolition?", a: "No. We specialise only in residential and light commercial soft strip. We don't undertake heavy or industrial demolition, factories, warehouses or high-rise work." },
  { q: "Which areas do you cover?", a: "Liverpool, Wirral, Bootle, Knowsley, Sefton, Southport, St Helens and the wider Merseyside area." },
  { q: "Are you fully insured?", a: "Yes — public liability and employer's liability, plus licensed waste carrier registration with full duty-of-care paperwork." },
  { q: "How much does a strip out cost?", a: "Every property is different. We give free, written, fixed-price quotes after a quick on-site visit or from photos and a description." },
  { q: "How long does a strip out take?", a: "A single room typically takes a day. A full two-bed flat is usually two to three days. Larger houses and shops are quoted individually." },
  { q: "Do you remove the waste?", a: "Yes. Every quote includes site clearance and licensed waste removal with duty-of-care paperwork." },
  { q: "Do you work in occupied properties?", a: "Yes, carefully — with dust sheeting, floor protection and clear communication with the residents." },
  { q: "Can you work weekends or evenings?", a: "For commercial and retail units, yes — we regularly work around trading hours." },
  { q: "How do I book?", a: "Call, WhatsApp or use our quote form. We'll come out for a free survey and give you a fixed price." },
];

export const Route = createFileRoute("/faq")({
  component: FAQ,
  head: () => ({
    meta: [
      { title: "FAQ — Soft Strip Questions Answered | North Soft Strip" },
      { name: "description", content: "Common questions about soft strip out, waste removal, pricing and turnaround times in Liverpool and Merseyside." },
      { property: "og:title", content: "Soft Strip FAQ" },
      { property: "og:description", content: "Answers to the most common questions we get from Liverpool homeowners, landlords and business owners." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }),
    }],
  }),
});


function FAQ() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently asked questions." description="Everything you might want to know before booking — and if it's not here, just ask." />
      <section className="py-16">
        <div className="container-x max-w-3xl space-y-3">
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
      </section>
    </>
  );
}
