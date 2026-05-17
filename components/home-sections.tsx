"use client"

import Image from "next/image"
import Link from "next/link"
import { SectionReveal, TextReveal, ImageReveal } from "./animations"
import { ArrowRight } from "lucide-react"
import { textoHome, servicos, projetosDestaque } from "@/lib/site-data"

export function AboutSection() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
        <div>
          <SectionReveal>
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              {textoHome.sobreSubtitulo}
            </span>
          </SectionReveal>
          <TextReveal delay={0.2}>
            <h2 className="mt-4 text-3xl md:text-5xl font-serif font-light text-primary leading-tight text-balance">
              {textoHome.sobreTitulo}
            </h2>
          </TextReveal>
        </div>
        <div className="md:pt-12">
          <TextReveal delay={0.3}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {textoHome.sobreTexto1}
            </p>
          </TextReveal>
          <TextReveal delay={0.4}>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              {textoHome.sobreTexto2}
            </p>
          </TextReveal>
        </div>
      </div>
    </section>
  )
}

export function ServicesSection() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
      <SectionReveal>
        <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
          {"Serviços"}
        </span>
      </SectionReveal>
      <TextReveal delay={0.2}>
        <h2 className="mt-4 mb-16 text-3xl md:text-5xl font-serif font-light text-primary text-balance">
          {"O que fazemos"}
        </h2>
      </TextReveal>

      <div className="flex flex-col">
        {servicos.map((servico, index) => (
          <SectionReveal key={servico.numero} delay={index * 0.1}>
            <div className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-8 border-b border-border transition-colors duration-300 hover:border-muted-foreground/40">
              <span className="text-xs text-muted-foreground tracking-wider w-8 shrink-0">
                {servico.numero}
              </span>
              <h3 className="text-xl md:text-2xl font-light text-primary md:w-72 shrink-0">
                {servico.titulo}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {servico.descricao}
              </p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  )
}

export function FeaturedSection() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
        <div>
          <SectionReveal>
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              {"Portfólio"}
            </span>
          </SectionReveal>
          <TextReveal delay={0.2}>
            <h2 className="mt-4 text-3xl md:text-5xl font-serif font-light text-primary text-balance">
              Projetos selecionados
            </h2>
          </TextReveal>
        </div>
        <TextReveal delay={0.3}>
          <Link
            href="/arquitetura"
            className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Ver todos os projetos
            <ArrowRight size={14} />
          </Link>
        </TextReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {projetosDestaque.map((projeto, index) => (
          <ImageReveal key={projeto.src} delay={index * 0.15}>
            <Link href={projeto.href} className="group block">
              <div className="relative overflow-hidden aspect-[3/4]">
                <Image
                  src={projeto.src}
                  alt={projeto.titulo}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    {projeto.categoria}
                  </span>
                  <h3 className="text-lg font-light text-primary mt-1">
                    {projeto.titulo}
                  </h3>
                </div>
              </div>
            </Link>
          </ImageReveal>
        ))}
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
      <div className="flex flex-col items-center text-center">
        <SectionReveal>
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            {"Vamos conversar"}
          </span>
        </SectionReveal>
        <TextReveal delay={0.2}>
          <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-serif font-light text-primary text-balance max-w-3xl">
            {textoHome.ctaTitulo}
          </h2>
        </TextReveal>
        <TextReveal delay={0.4}>
          <Link
            href="/contato"
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Entrar em contato
            <ArrowRight size={14} />
          </Link>
        </TextReveal>
      </div>
    </section>
  )
}
 // mobile gallery layout