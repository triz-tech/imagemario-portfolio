import { notFound } from "next/navigation"
import { projetosDesign, buscarProjeto } from "@/lib/site-data"
import { ProjetoDetalhe } from "@/components/projeto-detalhe"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ProjetoDesignPage({ params }: Props) {
  const { slug } = await params
  const projeto = buscarProjeto(projetosDesign, slug)

  if (!projeto) {
    notFound()
  }

  const indice = projetosDesign.findIndex((p) => p.slug === slug)
  const anterior = indice > 0 ? projetosDesign[indice - 1] : null
  const proximo = indice < projetosDesign.length - 1 ? projetosDesign[indice + 1] : null

  return (
    <ProjetoDetalhe
      projeto={projeto}
      voltarHref="/design"
      voltarLabel="Voltar para Design"
      projetoAnterior={anterior}
      proximoProjeto={proximo}
      basePath="/design"
    />
  )
}

export function generateStaticParams() {
  return projetosDesign.map((p) => ({ slug: p.slug }))
}
