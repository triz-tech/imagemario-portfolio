import { notFound } from "next/navigation"
import { projetosArquitetura, buscarProjeto } from "@/lib/site-data"
import { ProjetoDetalhe } from "@/components/projeto-detalhe"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ProjetoArquiteturaPage({ params }: Props) {
  const { slug } = await params
  const projeto = buscarProjeto(projetosArquitetura, slug)

  if (!projeto) {
    notFound()
  }

  const indice = projetosArquitetura.findIndex((p) => p.slug === slug)
  const anterior = indice > 0 ? projetosArquitetura[indice - 1] : null
  const proximo = indice < projetosArquitetura.length - 1 ? projetosArquitetura[indice + 1] : null

  return (
    <ProjetoDetalhe
      projeto={projeto}
      voltarHref="/arquitetura"
      voltarLabel="Voltar para Arquitetura"
      projetoAnterior={anterior}
      proximoProjeto={proximo}
      basePath="/arquitetura"
    />
  )
}

export function generateStaticParams() {
  return projetosArquitetura.map((p) => ({ slug: p.slug }))
}
