import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-void-line px-6 sm:px-10 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-wider text-steel">
        <p>
          © {year} {profile.name}. Construído com Next.js
          <span className="text-cyan">.</span>
        </p>
        <a href="#topo" className="hover:text-cyan transition-colors">
          voltar ao topo ↑
        </a>
      </div>
    </footer>
  );
}
