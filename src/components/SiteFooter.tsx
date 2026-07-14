import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE, SERVICES, AREAS } from "@/lib/site";

const logo = "/assets/logo.png"; // Changed to static public asset URL

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white/90">
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="" width={40} height={40} className="h-10 w-10 bg-white rounded-lg p-1" />
            <span className="font-display font-extrabold text-xl">North Soft Strip</span>
          </div>
          <p className="mt-4 text-sm text-white/85 leading-relaxed">
            Professional soft strip contractors for residential and light commercial projects across Liverpool and Merseyside.
          </p>
          <div className="mt-6 space-y-2.5 text-sm">
            <a href={SITE.phoneHref} className="flex items-center gap-2.5 hover:text-orange-soft">
              <Phone className="h-4 w-4 text-orange" /> {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 hover:text-orange-soft">
              <Mail className="h-4 w-4 text-orange" /> {SITE.email}
            </a>
            <p className="flex items-center gap-2.5"><MapPin className="h-4 w-4 text-orange" /> Liverpool, Merseyside</p>
            <p className="flex items-center gap-2.5"><Clock className="h-4 w-4 text-orange" /> {SITE.hours}</p>
          </div>
        </div>

        <div>
          <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            {SERVICES.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-orange-soft">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">Areas Covered</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            {AREAS.map((a) => (
              <li key={a.slug}>
                <Link to="/areas/$slug" params={{ slug: a.slug }} className="hover:text-orange-soft">Soft Strip {a.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            <li><Link to="/about" className="hover:text-orange-soft">About Us</Link></li>
            <li><Link to="/projects" className="hover:text-orange-soft">Projects</Link></li>
            <li><Link to="/gallery" className="hover:text-orange-soft">Gallery</Link></li>
            <li><Link to="/faq" className="hover:text-orange-soft">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-orange-soft">Contact</Link></li>
            <li><Link to="/quote" className="hover:text-orange-soft">Request a Quote</Link></li>
            <li><Link to="/privacy" className="hover:text-orange-soft">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-orange-soft">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-white/85">
          <p>© {new Date().getFullYear()} North Soft Strip. All rights reserved.</p>
          <p>Fully insured · Licensed waste carrier · Liverpool based</p>
        </div>
      </div>
    </footer>
  );
}