import { techMarquee } from "@/lib/data";

export default function TechMarquee() {
  const items = [...techMarquee, ...techMarquee];

  return (
    <div className="relative z-10 border-y border-void-line bg-void-panel/60 overflow-hidden py-4">
      <div className="flex w-max animate-marquee">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="font-mono text-sm sm:text-base px-6 whitespace-nowrap text-steel"
          >
            <span className="text-cyan mr-2">/</span>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
