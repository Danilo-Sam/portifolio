"use client";

import { MessageCircle } from "lucide-react";
import { profile } from "@/lib/data";

/**
 * Botão flutuante fixo, sempre visível, para contato rápido via WhatsApp
 * com uma mensagem padrão já pronta.
 */
export default function FloatingWhatsApp() {
  const defaultText = encodeURIComponent(
    `Olá ${profile.name.split(" ")[0]}, vi seu portfólio e gostaria de falar sobre um projeto.`
  );
  const href = `https://wa.me/${profile.whatsappNumber}?text=${defaultText}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-void border border-[#25D366]/60 text-[#25D366] px-4 py-3 clip-corner-sm shadow-lg shadow-[#25D366]/10 hover:bg-[#25D366] hover:text-void transition-colors font-mono text-xs uppercase tracking-wider"
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
