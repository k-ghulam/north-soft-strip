import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X, Phone, MessageCircle, FileText } from "lucide-react";
import { SITE } from "@/lib/site";

const KEY = "nss_popup_dismissed_at";
const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;

export function QuotePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let t: number | undefined;
    try {
      const last = Number(localStorage.getItem(KEY) || 0);
      if (Date.now() - last > SEVEN_DAYS) {
        t = window.setTimeout(() => setOpen(true), 8000);
      }
    } catch { /* ignore */ }
    return () => { if (t) clearTimeout(t); };
  }, []);

  const close = () => {
    setOpen(false);
    try { localStorage.setItem(KEY, String(Date.now())); } catch { /* ignore */ }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-navy-deep/60 backdrop-blur-sm p-4 animate-fade-up">
      <div className="relative max-w-md w-full bg-white rounded-3xl overflow-hidden shadow-lift">
        <button onClick={close} aria-label="Close" className="absolute right-3 top-3 h-9 w-9 grid place-items-center rounded-full bg-mist text-navy hover:bg-border">
          <X className="h-4 w-4" />
        </button>
        <div className="p-8 pt-10 text-center">
          <span className="eyebrow justify-center">Free Quote</span>
          <h3 className="mt-3 text-2xl font-extrabold">Need a Soft Strip Contractor?</h3>
          <p className="mt-2 text-muted-foreground text-sm">
            Get your FREE, no-obligation quote today. Fast response — usually within the hour.
          </p>
          <div className="mt-6 flex flex-col gap-2.5">
            <a href={SITE.phoneHref} className="btn-primary btn-primary-hover justify-center">
              <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
            </a>
            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-white"
              style={{ background: "var(--whatsapp)" }}>
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <Link to="/quote" onClick={close} className="btn-ghost-dark">
              <FileText className="h-4 w-4" /> Request a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
