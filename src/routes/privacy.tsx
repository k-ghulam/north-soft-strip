import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => ({
    meta: [{ title: "Privacy Policy — North Soft Strip" }, { name: "description", content: "How North Soft Strip collects, uses and protects the personal information you share when requesting a soft strip quote in Liverpool or Merseyside." }, { property: "og:url", content: "/privacy" }],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
});

function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="py-16"><div className="container-x max-w-3xl prose-sm text-muted-foreground space-y-4">
        <p>This privacy policy explains how North Soft Strip ("we", "us") collects and uses your personal information when you contact us through this website.</p>
        <h3 className="text-navy font-bold text-lg">What we collect</h3>
        <p>Your name, phone number, email, postcode and any project details or photos you choose to send us via the quote form or email.</p>
        <h3 className="text-navy font-bold text-lg">How we use it</h3>
        <p>Only to respond to your enquiry, prepare a quote and (if you book us) deliver the work. We do not sell, share or market your data to third parties.</p>
        <h3 className="text-navy font-bold text-lg">Your rights</h3>
        <p>You can request a copy of the data we hold about you, or ask us to delete it, at any time by emailing info@northsoftstrip.co.uk.</p>
      </div></section>
    </>
  );
}
