import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () => ({
    meta: [{ title: "Terms & Conditions — North Soft Strip" }, { name: "description", content: "Terms and conditions for North Soft Strip services." }, { property: "og:url", content: "/terms" }],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
});

function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <section className="py-16"><div className="container-x max-w-3xl text-muted-foreground space-y-4">
        <p>These terms apply to all quotes and works carried out by North Soft Strip.</p>
        <h3 className="text-navy font-bold text-lg">Quotes</h3>
        <p>Written quotes are valid for 30 days. Any change to the agreed scope will be re-quoted before additional work begins.</p>
        <h3 className="text-navy font-bold text-lg">Payment</h3>
        <p>Payment terms are agreed in writing before work begins and stated on the quote.</p>
        <h3 className="text-navy font-bold text-lg">Insurance</h3>
        <p>We are fully insured for public and employer's liability. Certificates available on request.</p>
        <h3 className="text-navy font-bold text-lg">Waste</h3>
        <p>All waste is removed under our licensed waste carrier registration with full duty-of-care paperwork.</p>
      </div></section>
    </>
  );
}
