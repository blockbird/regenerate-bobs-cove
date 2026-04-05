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
          "inline-flex rounded-full border px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.16em]",
          inverted
            ? "border-white/15 bg-white/10 text-white/90"
            : "border-deep/10 bg-deep/6 text-deep",
        ].join(" ")}
      >
        {eyebrow}
      </span>
      <h2
        className={[
          "mt-4 font-display text-4xl leading-none tracking-[-0.05em] text-balance sm:text-5xl lg:text-6xl",
          inverted ? "text-white" : "text-ink",
        ].join(" ")}
      >
        {title}
      </h2>
      <p
        className={[
          "mt-4 max-w-3xl text-base leading-7 text-pretty sm:text-lg",
          inverted ? "text-white/78" : "text-ink/70",
        ].join(" ")}
      >
        {description}
      </p>
    </div>
  );
}
