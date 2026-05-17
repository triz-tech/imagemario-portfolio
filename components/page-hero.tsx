"use client"

import { SectionReveal, TextReveal } from "./animations"

interface PageHeroProps {
  title: string
  subtitle: string
  description?: string
}

export function PageHero({ title, subtitle, description }: PageHeroProps) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12">
      <SectionReveal>
        <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
          {subtitle}
        </span>
      </SectionReveal>
      <TextReveal delay={0.2}>
        <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-serif font-light text-primary leading-tight text-balance">
          {title}
        </h1>
      </TextReveal>
      {description && (
        <TextReveal delay={0.4}>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {description}
          </p>
        </TextReveal>
      )}
    </section>
  )
}
