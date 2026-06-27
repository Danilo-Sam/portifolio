type SectionHeadingProps = {
  index: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  index,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="section-label font-mono text-xs tracking-[0.3em] text-cyan uppercase mb-3">
        {index}
      </p>
      <h2 className="font-mono font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-offwhite">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-steel text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
