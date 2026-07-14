import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — North Soft Strip Liverpool" },
      { name: "description", content: `Contact North Soft Strip in Liverpool. Call ${SITE.phoneDisplay}, WhatsApp or email — same-day response for soft strip enquiries across Merseyside.` },
      { property: "og:title", content: "Contact North Soft Strip" },
      { property: "og:description", content: "Same-day response for soft strip enquiries across Liverpool and Merseyside." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk about your project." description="Call, WhatsApp, email or drop us a message — usually answered within the hour." />
      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <a href={SITE.phoneHref} className="card-lift p-6 flex items-center gap-4 hover:-translate-y-0.5">
              <div className="h-12 w-12 rounded-2xl bg-orange/10 grid place-items-center text-orange"><Phone className="h-6 w-6" /></div>
              <div><div className="text-xs uppercase font-bold text-muted-foreground tracking-wider">Phone</div><div className="font-bold text-navy text-lg">{SITE.phoneDisplay}</div></div>
            </a>
            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="card-lift p-6 flex items-center gap-4 hover:-translate-y-0.5">
              <div className="h-12 w-12 rounded-2xl grid place-items-center text-white" style={{ background: "var(--whatsapp)" }}><MessageCircle className="h-6 w-6" /></div>
              <div><div className="text-xs uppercase font-bold text-muted-foreground tracking-wider">WhatsApp</div><div className="font-bold text-navy text-lg">Message us anytime</div></div>
            </a>
            <a href={`mailto:${SITE.email}`} className="card-lift p-6 flex items-center gap-4 hover:-translate-y-0.5">
              <div className="h-12 w-12 rounded-2xl bg-orange/10 grid place-items-center text-orange"><Mail className="h-6 w-6" /></div>
              <div><div className="text-xs uppercase font-bold text-muted-foreground tracking-wider">Email</div><div className="font-bold text-navy text-lg">{SITE.email}</div></div>
            </a>
            <div className="card-lift p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-orange/10 grid place-items-center text-orange"><MapPin className="h-6 w-6" /></div>
              <div><div className="text-xs uppercase font-bold text-muted-foreground tracking-wider">Based in</div><div className="font-bold text-navy text-lg">Liverpool, Merseyside</div></div>
            </div>
            <div className="card-lift p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-orange/10 grid place-items-center text-orange"><Clock className="h-6 w-6" /></div>
              <div><div className="text-xs uppercase font-bold text-muted-foreground tracking-wider">Hours</div><div className="font-bold text-navy text-lg">{SITE.hours}</div><div className="text-xs text-muted-foreground">Emergency call-outs available</div></div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden card-lift">
            <iframe
              title="Liverpool map"
              src="https://www.google.com/maps?q=Liverpool&output=embed"
              className="w-full h-[520px]"
              loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white">
        <div className="container-x max-w-3xl text-center">
          <span className="eyebrow text-orange-soft justify-center">Emergency response</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white">Urgent strip out or clearance?</h2>
          <p className="mt-3 text-white/80">If it's urgent — post-flood, post-fire, insurance work, or a tight refurb window — call us direct. We reshape schedules to fit.</p>
          <a href={SITE.phoneHref} className="btn-primary btn-primary-hover mt-6 inline-flex"><Phone className="h-4 w-4" /> {SITE.phoneDisplay}</a>
        </div>
      </section>
    </>
  );
}
