"use client"

import { PageHero } from "@/components/page-hero"
import { MasonryGallery } from "@/components/masonry-gallery"
import { FilterableGallery } from "@/components/filter-tabs"
import {
  projetosArquitetura,
  categoriasArquitetura,
  textosArquitetura,
} from "@/lib/site-data"

export default function ArquiteturaPage() {
  return (
    <main>
      <PageHero
        title={textosArquitetura.titulo}
        subtitle={textosArquitetura.subtitulo}
        description={textosArquitetura.descricao}
      />

      <FilterableGallery categories={categoriasArquitetura}>
        {(categoriaAtiva) => {
          const filtrados =
            categoriaAtiva === "Todos"
              ? projetosArquitetura
              : projetosArquitetura.filter((p) => p.categoria === categoriaAtiva)

          return (
            <MasonryGallery
              items={filtrados.map((p) => ({
                src: p.imagens[0].src,
                alt: p.imagens[0].alt,
                titulo: p.titulo,
                categoria: p.categoria,
                href: `/arquitetura/${p.slug}`,
              }))}
            />
          )
        }}
      </FilterableGallery>

      <div className="h-24" />
    </main>
  )
}
