"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, MapPin, Calendar } from "lucide-react"
import { SectionReveal, ImageReveal, TextReveal } from "./animations"
import type { Projeto } from "@/lib/site-data"

interface ProjetoDetalheProps {
  projeto: Projeto
  voltarHref: string
  voltarLabel: string
  projetoAnterior?: { slug: string; titulo: string } | null
  proximoProjeto?: { slug: string; titulo: string } | null
  basePath: string
}

export function ProjetoDetalhe({
  projeto,
  voltarHref,
  voltarLabel,
  projetoAnterior,
  proximoProjeto,
  basePath,
}: ProjetoDetalheProps) {
  return (
    <main>
      {/* Cabecalho */}
      <section className="pt-32 pb-12 px-6 md:px-12">
        <SectionReveal>
          <Link
            href={voltarHref}
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300 mb-12"
          >
            <ArrowLeft size={14} />
            {voltarLabel}
          </Link>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div>
            <SectionReveal>
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                {projeto.categoria}
              </span>
            </SectionReveal>
            <TextReveal delay={0.1}>
              <h1 className="mt-3 text-3xl md:text-5xl lg:text-6xl font-serif font-light text-primary leading-tight text-balance">
                {projeto.titulo}
              </h1>
            </TextReveal>
          </div>

          <div className="md:pt-8">
            <TextReveal delay={0.2}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {projeto.descricao}
              </p>
            </TextReveal>
            <TextReveal delay={0.3}>
              <div className="mt-8 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} />
                  {projeto.local}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={14} />
                  {projeto.ano}
                </div>
              </div>
            </TextReveal>
          </div>
        </div>
      </section>

      {/* Galeria de fotos */}
      <section className="px-6 md:px-12 pb-24">
        <div className="flex flex-col gap-6 md:gap-8">
          {projeto.imagens.map((img, index) => (
            <ImageReveal key={img.src} delay={index * 0.15}>
              <div className="relative w-full overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1600}
                  height={1000}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority={index === 0}
                />
              </div>
            </ImageReveal>
          ))}
        </div>
      </section>

      {/* Navegacao entre projetos */}
      {(projetoAnterior || proximoProjeto) && (
        <section className="px-6 md:px-12 pb-24 border-t border-border pt-12">
          <div className="flex items-center justify-between">
            {projetoAnterior ? (
              <Link
                href={`${basePath}/${projetoAnterior.slug}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
                <div>
                  <span className="block text-xs tracking-[0.15em] uppercase">Anterior</span>
                  <span className="block text-sm font-light mt-1">{projetoAnterior.titulo}</span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {proximoProjeto ? (
              <Link
                href={`${basePath}/${proximoProjeto.slug}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 text-right"
              >
                <div>
                  <span className="block text-xs tracking-[0.15em] uppercase">Próximo</span>
                  <span className="block text-sm font-light mt-1">{proximoProjeto.titulo}</span>
                </div>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </section>
      )}
    </main>
  )
}
