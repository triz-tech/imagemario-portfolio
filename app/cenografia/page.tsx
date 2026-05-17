"use client"

import { PageHero } from "@/components/page-hero"
import { MasonryGallery } from "@/components/masonry-gallery"
import { FilterableGallery } from "@/components/filter-tabs"
import {
  projetosCenografia,
  categoriasCenografia,
  textosCenografia,
} from "@/lib/site-data"

export default function CenografiaPage() {
  return (
    <main>
      <PageHero
        title={textosCenografia.titulo}
        subtitle={textosCenografia.subtitulo}
        description={textosCenografia.descricao}
      />

      <FilterableGallery categories={categoriasCenografia}>
        {(categoriaAtiva) => {
          const filtrados =
            categoriaAtiva === "Todos"
              ? projetosCenografia
              : projetosCenografia.filter((p) => p.categoria === categoriaAtiva)

          return (
            <MasonryGallery
              items={filtrados.map((p) => ({
                src: p.imagens[0].src,
                alt: p.imagens[0].alt,
                titulo: p.titulo,
                categoria: p.categoria,
                href: `/cenografia/${p.slug}`,
              }))}
            />
          )
        }}
      </FilterableGallery>

      <div className="h-24" />
    </main>
  )
}
