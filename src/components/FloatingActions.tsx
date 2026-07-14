import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingActions() {
  return (
    <>
      {/* Desktop floating stack */}
      <div className="fixed right-4 bottom-6 z-40 hidden md:flex flex-col gap-3">
        <a
          href={SITE.whatsappHref}
          target="_blank" rel="noopener noreferrer"
          aria-label="WhatsApp us"
          className="h-14 w-14 rounded-full grid place-items-center text-white shadow-lift animate-pulse-ring"
          style={{ background: "var(--whatsapp)" }}
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <a
          href={SITE.phoneHref}
          aria-label="Call now"
          className="h-14 w-14 rounded-full grid place-items-center text-white shadow-lift"
          style={{ background: "var(--navy)" }}
        >
          <Phone className="h-6 w-6" />
        </a>
        <Link
          to="/quote"
          aria-label="Get a free quote"
          className="h-14 w-14 rounded-full grid place-items-center text-white shadow-lift"
          style={{ background: "var(--orange)" }}
        >
          <FileText className="h-6 w-6" />
        </Link>
      </div>

      {/* Mobile sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 md:hidden bg-white border-t border-border shadow-[0_-8px_24px_-12px_rgba(15,43,70,0.2)]">
        <div className="grid grid-cols-3">
          <a href={SITE.phoneHref} className="flex flex-col items-center justify-center gap-1 py-3 text-navy font-semibold text-xs">
            <Phone className="h-5 w-5" /> Call
          </a>
          <a
            href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 py-3 text-white font-semibold text-xs"
            style={{ background: "var(--whatsapp)" }}
          >
            <MessageCircle className="h-5 w-5" /> WhatsApp
          </a>
          <Link to="/quote" className="flex flex-col items-center justify-center gap-1 py-3 text-white font-semibold text-xs" style={{ background: "var(--orange)" }}>
            <FileText className="h-5 w-5" /> Quote
          </Link>
        </div>
      </div>
    </>
  );
}
