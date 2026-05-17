"use client"

import Image from "next/image"
import Link from "next/link"
import { ImageReveal } from "./animations"

interface ItemGaleria {
  src: string
  alt: string
  titulo: string
  categoria?: string
  href?: string
}

interface MasonryGalleryProps {
  items: ItemGaleria[]
}

export function MasonryGallery({ items }: MasonryGalleryProps) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
      {items.map((item, index) => (
        <ImageReveal key={`${item.src}-${index}`} delay={index * 0.1} className="mb-4 md:mb-6 break-inside-avoid">
          <ConteudoItem item={item} index={index} />
        </ImageReveal>
      ))}
    </div>
  )
}

function ConteudoItem({ item, index }: { item: ItemGaleria; index: number }) {
  const conteudo = (
    <div className="group relative overflow-hidden cursor-pointer">
      <Image
        src={item.src}
        alt={item.alt}
        width={800}
        height={index % 3 === 0 ? 1000 : index % 3 === 1 ? 600 : 800}
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-500 flex items-end p-6">
        <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          {item.categoria && (
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              {item.categoria}
            </span>
          )}
          <h3 className="text-lg font-light text-primary mt-1">
            {item.titulo}
          </h3>
        </div>
      </div>
    </div>
  )

  if (item.href) {
    return <Link href={item.href}>{conteudo}</Link>
  }

  return conteudo
}
