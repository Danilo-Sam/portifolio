type GlitchTextProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
};

export default function GlitchText({
  text,
  className = "",
  as = "span",
}: GlitchTextProps) {
  const Tag = as;
  return (
    <Tag data-text={text} className={`glitch ${className}`}>
      {text}
    </Tag>
  );
}
