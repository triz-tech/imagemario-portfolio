import { notFound } from "next/navigation"
import { projetosCenografia, buscarProjeto } from "@/lib/site-data"
import { ProjetoDetalhe } from "@/components/projeto-detalhe"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ProjetoCenografiaPage({ params }: Props) {
  const { slug } = await params
  const projeto = buscarProjeto(projetosCenografia, slug)

  if (!projeto) {
    notFound()
  }

  const indice = projetosCenografia.findIndex((p) => p.slug === slug)
  const anterior = indice > 0 ? projetosCenografia[indice - 1] : null
  const proximo = indice < projetosCenografia.length - 1 ? projetosCenografia[indice + 1] : null

  return (
    <ProjetoDetalhe
      projeto={projeto}
      voltarHref="/cenografia"
      voltarLabel="Voltar para Cenografia"
      projetoAnterior={anterior}
      proximoProjeto={proximo}
      basePath="/cenografia"
    />
  )
}

export function generateStaticParams() {
  return projetosCenografia.map((p) => ({ slug: p.slug }))
}
