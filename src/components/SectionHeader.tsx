export function SectionHeader({
  eyebrow, title, description, center = false,
}: { eyebrow?: string; title: string; description?: string; center?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-3 text-3xl md:text-5xl font-extrabold leading-[1.05]">{title}</h2>
      {description && <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">{description}</p>}
    </div>
  );
}
