type SectionHeadingProps = {
  description: string;
  eyebrow: string;
  inverted?: boolean;
  title: string;
};

export function SectionHeading({
  description,
  eyebrow,
  inverted = false,
  title,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <span
        className={[
          "text-xs font-semibold uppercase tracking-widest",
          inverted ? "text-white/80" : "text-ink-muted",
        ].join(" ")}
      >
        {eyebrow}
      </span>
      <h2
        className={[
          "mt-6 font-display text-4xl font-normal leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl",
          inverted ? "text-white" : "text-ink",
        ].join(" ")}
      >
        {title}
      </h2>
      <p
        className={[
          "mt-6 max-w-2xl text-lg leading-relaxed text-pretty",
          inverted ? "text-white/80" : "text-ink-muted",
        ].join(" ")}
      >
        {description}
      </p>
    </div>
  );
}
