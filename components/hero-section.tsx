"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { textoHome } from "@/lib/site-data"

export function HeroSection() {
  const linhas = textoHome.heroTitulo.split("\n")

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-architecture.jpg"
          alt="Projeto arquitetônico"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/50" />
      </div>

      <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-12 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            {textoHome.heroSubtitulo}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-4 text-5xl md:text-7xl lg:text-8xl font-serif font-light text-primary leading-[0.95] text-balance max-w-4xl"
        >
          {linhas.map((linha, i) => (
            <span key={i}>
              {linha}
              {i < linhas.length - 1 && <br />}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-8 text-sm md:text-base text-muted-foreground max-w-lg leading-relaxed"
        >
          {textoHome.heroDescricao}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 right-6 md:right-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
              Scroll
            </span>
            <div className="w-px h-12 bg-muted-foreground/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
