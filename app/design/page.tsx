"use client"

import { PageHero } from "@/components/page-hero"
import { MasonryGallery } from "@/components/masonry-gallery"
import { FilterableGallery } from "@/components/filter-tabs"
import {
  projetosDesign,
  categoriasDesign,
  textosDesign,
} from "@/lib/site-data"

export default function DesignPage() {
  return (
    <main>
      <PageHero
        title={textosDesign.titulo}
        subtitle={textosDesign.subtitulo}
        description={textosDesign.descricao}
      />

      <FilterableGallery categories={categoriasDesign}>
        {(categoriaAtiva) => {
          const filtrados =
            categoriaAtiva === "Todos"
              ? projetosDesign
              : projetosDesign.filter((p) => p.categoria === categoriaAtiva)

          return (
            <MasonryGallery
              items={filtrados.map((p) => ({
                src: p.imagens[0].src,
                alt: p.imagens[0].alt,
                titulo: p.titulo,
                categoria: p.categoria,
                href: `/design/${p.slug}`,
              }))}
            />
          )
        }}
      </FilterableGallery>

      <div className="h-24" />
    </main>
  )
}
