import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { SITE } from "@/lib/site";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/areas", label: "Areas" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-[0_6px_24px_-12px_rgba(15,43,70,0.25)]" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <img src={logo} alt="North Soft Strip logo" width={40} height={40} className="h-10 w-10" />
          <span className={`font-display font-extrabold text-lg leading-tight tracking-tight ${scrolled ? "text-navy" : "text-white"}`}>
            North Soft Strip
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className={`px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
                scrolled ? "text-navy hover:text-orange" : "text-white hover:text-orange-soft"
              }`}
              activeProps={{ className: "text-orange" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href={SITE.phoneHref} className={`hidden xl:inline-flex items-center gap-2 text-sm font-semibold ${scrolled ? "text-navy" : "text-white"}`}>
            <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
          </a>
          <Link to="/quote" className="btn-primary btn-primary-hover">Get Free Quote</Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className={`lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border ${
            scrolled ? "border-border text-navy" : "border-white/70 text-white"
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <div className="container-x py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                className="px-3 py-3 rounded-lg text-base font-semibold text-navy hover:bg-mist"
                activeProps={{ className: "text-orange" }}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/quote" onClick={() => setOpen(false)} className="btn-primary btn-primary-hover mt-3">
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
