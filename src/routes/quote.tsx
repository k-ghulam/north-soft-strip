import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Upload, Phone, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SITE, SERVICES, AREAS } from "@/lib/site";

export const Route = createFileRoute("/quote")({
  component: Quote,
  head: () => ({
    meta: [
      { title: "Request a Free Quote — North Soft Strip Liverpool" },
      { name: "description", content: "Get a free, no-obligation soft strip quote in Liverpool and Merseyside. Upload photos, tell us about your project — usually answered within the hour." },
      { property: "og:title", content: "Free Soft Strip Quote — Liverpool" },
      { property: "og:description", content: "Same-day free quotes for soft strip and clearance across Merseyside." },
      { property: "og:url", content: "/quote" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
});

function Quote() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Front-end only — real submission wiring can be added later.
    setSent(true);
  };
  return (
    <>
      <PageHero eyebrow="Free Quote" title="Request a free, no-obligation quote." description="A couple of details and — if you have them — a few photos. That's all we need to get you a fixed price." />
      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="card-lift p-8">
            {sent ? (
              <div className="text-center py-12">
                <div className="mx-auto h-14 w-14 rounded-full bg-orange/10 grid place-items-center text-orange"><CheckCircle2 className="h-8 w-8" /></div>
                <h2 className="mt-5 text-2xl font-bold">Thanks — request received.</h2>
                <p className="mt-2 text-muted-foreground">We'll get back to you shortly, usually within the hour during working hours.</p>
                <div className="mt-6 flex justify-center gap-3">
                  <a href={SITE.phoneHref} className="btn-primary btn-primary-hover"><Phone className="h-4 w-4" /> Call us</a>
                  <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Your name" name="name" required />
                  <Field label="Phone number" name="phone" type="tel" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email" name="email" type="email" />
                  <Field label="Property postcode" name="postcode" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Select label="Service needed" name="service" options={SERVICES.map(s => s.title)} />
                  <Select label="Area" name="area" options={AREAS.map(a => a.name)} />
                </div>
                <Field label="Property type" name="propertyType" placeholder="e.g. 3-bed terraced house, independent shop unit…" />
                <div>
                  <label className="text-sm font-semibold text-navy">Tell us about the job</label>
                  <textarea name="message" rows={5} required placeholder="Rooms involved, what's staying, timeline…" className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-navy">Photos (optional)</label>
                  <div className="mt-2 rounded-2xl border-2 border-dashed border-border p-6 text-center hover:border-orange transition-colors">
                    <Upload className="h-6 w-6 mx-auto text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Drag &amp; drop or <label htmlFor="file" className="text-orange font-semibold cursor-pointer">browse</label> — up to 6 photos.</p>
                    <input id="file" name="photos" type="file" multiple accept="image/*" className="sr-only" />
                  </div>
                </div>
                <button type="submit" className="btn-primary btn-primary-hover justify-center py-4 text-base">Send Quote Request</button>
                <p className="text-xs text-muted-foreground text-center">By submitting you agree to our <a className="underline" href="/privacy">Privacy Policy</a>.</p>
              </form>
            )}
          </div>

          <aside className="space-y-5">
            <div className="card-lift p-6">
              <h3 className="font-bold text-lg">Prefer to talk?</h3>
              <p className="mt-1 text-sm text-muted-foreground">Give us a call or send a quick WhatsApp — most quotes done same day.</p>
              <div className="mt-4 flex flex-col gap-2.5">
                <a href={SITE.phoneHref} className="btn-primary btn-primary-hover justify-center"><Phone className="h-4 w-4" /> {SITE.phoneDisplay}</a>
                <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark justify-center"><MessageCircle className="h-4 w-4" /> WhatsApp Us</a>
              </div>
            </div>
            <div className="rounded-3xl bg-navy text-white p-6">
              <h3 className="font-bold text-lg text-white">What happens next</h3>
              <ol className="mt-4 space-y-3 text-sm text-white/85">
                {["We reply, usually within the hour.", "Free on-site survey (or from your photos).", "Fixed, written quote — no obligation.", "Book a start date that suits you."].map((s, i) => (
                  <li key={i} className="flex gap-3"><span className="h-6 w-6 shrink-0 rounded-full bg-orange text-white text-xs font-bold grid place-items-center">{i+1}</span>{s}</li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-navy">{label}{required && <span className="text-orange"> *</span>}</label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange" />
    </div>
  );
}
function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-navy">{label}</label>
      <select id={name} name={name} className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange">
        <option value="">Choose…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
