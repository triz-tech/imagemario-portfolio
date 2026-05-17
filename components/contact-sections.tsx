"use client"

import { useState } from "react"
import { SectionReveal, TextReveal } from "./animations"
import { Send } from "lucide-react"
import { contato, redesSociais } from "@/lib/site-data"

export function ContactForm() {
  const [dados, setDados] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  })
  const [enviado, setEnviado] = useState(false)

  const aoEnviar = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui voce pode integrar com um servico de email (Resend, EmailJS, etc.)
    setEnviado(true)
    setTimeout(() => setEnviado(false), 4000)
    setDados({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" })
  }

  return (
    <SectionReveal>
      <form onSubmit={aoEnviar} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="nome" className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
              Nome
            </label>
            <input
              id="nome"
              type="text"
              required
              value={dados.nome}
              onChange={(e) => setDados({ ...dados, nome: e.target.value })}
              className="bg-transparent border-b border-border py-3 text-sm text-primary placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors duration-300"
              placeholder="Seu nome"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={dados.email}
              onChange={(e) => setDados({ ...dados, email: e.target.value })}
              className="bg-transparent border-b border-border py-3 text-sm text-primary placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors duration-300"
              placeholder="seu@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="telefone" className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
              Telefone
            </label>
            <input
              id="telefone"
              type="tel"
              value={dados.telefone}
              onChange={(e) => setDados({ ...dados, telefone: e.target.value })}
              className="bg-transparent border-b border-border py-3 text-sm text-primary placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors duration-300"
              placeholder="(21) 99999-9999"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="assunto" className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
              Assunto
            </label>
            <input
              id="assunto"
              type="text"
              required
              value={dados.assunto}
              onChange={(e) => setDados({ ...dados, assunto: e.target.value })}
              className="bg-transparent border-b border-border py-3 text-sm text-primary placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors duration-300"
              placeholder="Projeto residencial, cenografia..."
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="mensagem" className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            required
            rows={5}
            value={dados.mensagem}
            onChange={(e) => setDados({ ...dados, mensagem: e.target.value })}
            className="bg-transparent border-b border-border py-3 text-sm text-primary placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
            placeholder="Conte-nos sobre seu projeto..."
          />
        </div>

        <div className="flex items-center gap-4 mt-4">
          <button
            type="submit"
            className="inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Enviar mensagem
            <Send size={14} />
          </button>
          {enviado && (
            <span className="text-sm text-muted-foreground">
              Mensagem enviada com sucesso!
            </span>
          )}
        </div>
      </form>
    </SectionReveal>
  )
}

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-10">
      <TextReveal>
        <div>
          <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Email
          </h3>
          <a
            href={`mailto:${contato.email}`}
            className="text-base text-primary hover:text-muted-foreground transition-colors duration-300 break-all"
          >
            {contato.email}
          </a>
        </div>
      </TextReveal>

      <TextReveal delay={0.1}>
        <div>
          <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
            {"Localização"}
          </h3>
          <p className="text-base text-primary">
            {contato.endereco}
          </p>
        </div>
      </TextReveal>

      <TextReveal delay={0.2}>
        <div>
          <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
            WhatsApp
          </h3>
          <a
            href={`https://wa.me/${contato.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border border-primary text-primary text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Fale pelo WhatsApp
          </a>
        </div>
      </TextReveal>

      <TextReveal delay={0.3}>
        <div>
          <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Redes Sociais
          </h3>
          <div className="flex gap-6">
            <a
              href={redesSociais.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href={redesSociais.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href={redesSociais.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Behance
            </a>
          </div>
        </div>
      </TextReveal>
    </div>
  )
}

export function MapSection() {
  return (
    <SectionReveal>
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden border border-border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235205.10894649444!2d-43.58841912529348!3d-22.911014085498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Localização — ${contato.endereco}`}
        />
      </div>
    </SectionReveal>
  )
}
