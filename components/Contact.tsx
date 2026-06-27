"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/lib/data";

/**
 * Monta o texto da mensagem a partir dos campos do formulário,
 * no mesmo formato para WhatsApp e para Email.
 */
function buildMessageText(name: string, email: string, message: string) {
  return [
    `Olá, meu nome é ${name}.`,
    `Email para retorno: ${email}`,
    "",
    message,
  ].join("\n");
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sentVia, setSentVia] = useState<"whatsapp" | "email" | null>(null);

  function getFormValues() {
    const form = formRef.current;
    if (!form) return null;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)
      .value;
    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value;
    return { name, email, message };
  }

  function handleSendWhatsapp() {
    const form = formRef.current;
    if (!form || !form.reportValidity()) return;
    const values = getFormValues();
    if (!values) return;

    const text = buildMessageText(values.name, values.email, values.message);
    const url = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSentVia("whatsapp");
  }

  function handleSendEmail() {
    const form = formRef.current;
    if (!form || !form.reportValidity()) return;
    const values = getFormValues();
    if (!values) return;

    const text = buildMessageText(values.name, values.email, values.message);
    const subject = `Contato via portfólio — ${values.name}`;
    const url = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(text)}`;
    window.location.href = url;
    setSentVia("email");
  }

  return (
    <section id="contato" className="relative z-10 px-6 sm:px-10 py-28 max-w-6xl mx-auto">
      <SectionHeading
        index="05 / contato"
        title="VAMOS CONSTRUIR ALGO"
        subtitle="Escreva sua mensagem e escolha por onde quer me enviar — WhatsApp ou Email. Ela já chega pronta, você só confirma o envio."
      />

      <div className="mt-14 grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-steel-light leading-relaxed max-w-md">
            Tem um projeto, uma vaga ou quer trocar uma ideia sobre arquitetura
            de software? Me envie uma mensagem — respondo rápido.
          </p>

          <div className="mt-8 space-y-4 font-mono text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-steel-light hover:text-cyan transition-colors"
            >
              <Mail size={16} className="text-cyan" />
              {profile.email}
            </a>
            <a
              href={`https://wa.me/${profile.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-steel-light hover:text-cyan transition-colors"
            >
              <MessageCircle size={16} className="text-cyan" />
              {profile.phone}
            </a>
            <p className="flex items-center gap-3 text-steel-light">
              <span className="w-4 h-4" />
              {profile.location}
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-void-line text-steel hover:text-cyan hover:border-cyan/50 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-void-line text-steel hover:text-cyan hover:border-cyan/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="bg-void-panel border border-void-line p-6 clip-corner space-y-4"
        >
          <div>
            <label className="block font-mono text-xs uppercase tracking-wide text-steel mb-2">
              Nome
            </label>
            <input
              name="name"
              required
              type="text"
              className="w-full bg-void border border-void-line px-4 py-3 text-sm text-offwhite font-mono focus:outline-none focus:border-cyan transition-colors"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label className="block font-mono text-xs uppercase tracking-wide text-steel mb-2">
              Email
            </label>
            <input
              name="email"
              required
              type="email"
              className="w-full bg-void border border-void-line px-4 py-3 text-sm text-offwhite font-mono focus:outline-none focus:border-cyan transition-colors"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label className="block font-mono text-xs uppercase tracking-wide text-steel mb-2">
              Mensagem
            </label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full bg-void border border-void-line px-4 py-3 text-sm text-offwhite font-mono focus:outline-none focus:border-cyan transition-colors resize-none"
              placeholder="Conte um pouco sobre o projeto..."
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-3 pt-1">
            <button
              type="button"
              onClick={handleSendWhatsapp}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-void border border-[#25D366]/50 text-offwhite font-mono text-xs font-bold uppercase tracking-wider clip-corner-sm transition-all hover:-translate-y-0.5 hover:border-[#25D366] hover:text-[#25D366]"
            >
              <MessageCircle size={16} className="text-[#25D366]" />
              Enviar por WhatsApp
            </button>
            <button
              type="button"
              onClick={handleSendEmail}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-crimson text-offwhite font-mono text-xs font-bold uppercase tracking-wider clip-corner-sm transition-all hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Enviar por Email
            </button>
          </div>

          <p className="font-mono text-[11px] text-steel leading-relaxed pt-1">
            {sentVia === "whatsapp" &&
              "> abrindo o WhatsApp com sua mensagem pronta — é só confirmar o envio por lá."}
            {sentVia === "email" &&
              "> abrindo seu aplicativo de email com a mensagem pronta — é só confirmar o envio."}
            {sentVia === null &&
              "Nenhum dado é salvo neste site: a mensagem é enviada direto do seu WhatsApp ou Email."}
          </p>
        </motion.form>
      </div>
    </section>
  );
}
