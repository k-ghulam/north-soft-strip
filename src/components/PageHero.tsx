import { Link } from "@tanstack/react-router";

const heroImg = "/assets/house-strip-out.jpeg";

export function PageHero({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <img src={heroImg} alt="" width={1920} height={1200}
        className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,43,70,0.85) 0%, rgba(15,43,70,0.75) 100%)" }} />
      <div className="container-x relative">
        {eyebrow && <span className="eyebrow text-orange-soft">{eyebrow}</span>}
        <h1 className="mt-3 text-4xl md:text-6xl font-extrabold text-white leading-[1.05] max-w-4xl">{title}</h1>
        {description && <p className="mt-5 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">{description}</p>}
        <nav aria-label="Breadcrumb" className="mt-6 text-sm text-white/70">
          <Link to="/" className="hover:text-orange-soft">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{title.split("—")[0].trim()}</span>
        </nav>
      </div>
    </section>
  );
}