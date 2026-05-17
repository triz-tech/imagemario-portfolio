
export const siteConfig = {
  nome: "Imagemario",
  nomeCompleto: "IMAGEMARIO | Arquitetura & Cenografia",
  descricao:
    "Estudio de arquitetura e cenografia de Mario Sergio Martins. Projetos arquitetonicos, cenografia, modelagem 3D e layouts humanizados no Rio de Janeiro.",
  dono: "Mario Sergio Martins",
  profissao: "Arquiteto",
  cidade: "Rio de Janeiro, RJ",
  pais: "Brasil",
}



export const contato = {
  email: "mariosergiomartins2021@gmail.com",
  whatsapp: "5521999999999",
  whatsappTexto: "(21) 99999-9999",
  endereco: "Rio de Janeiro, RJ — Brasil",
}



export const redesSociais = {
  instagram: "https://www.instagram.com/",
  linkedin: "https://www.linkedin.com/",
  behance: "https://www.behance.net/",
}

export const navegacao = [
  { href: "/", label: "Home" },
  { href: "/arquitetura", label: "Arquitetura" },
  { href: "/cenografia", label: "Cenografia" },
  { href: "/design", label: "Design" },
  { href: "/contato", label: "Contato" },
]

// ─── Servicos ───────────────────────────────────────

export const servicos = [
  {
    numero: "01",
    titulo: "Projetos Arquitetônicos",
    descricao:
      "Residências, lojas e espaços comerciais projetados com atenção aos detalhes e funcionalidade.",
  },
  {
    numero: "02",
    titulo: "Cenografia",
    descricao:
      "Palcos de shows, eventos corporativos e stands projetados para criar impacto visual.",
  },
  {
    numero: "03",
    titulo: "Modelagem 3D",
    descricao:
      "Visualizações fotorrealistas que dão vida aos projetos antes da construção.",
  },
  {
    numero: "04",
    titulo: "Layouts Humanizados",
    descricao:
      "Plantas baixas detalhadas com representação realista de mobiliário e ambientação.",
  },
  {
    numero: "05",
    titulo: "Projetos BIM",
    descricao:
      "Modelagem com tecnologia BIM para projetos integrados e eficientes.",
  },
]

// ─── Textos da Home ─────────────────────────────────

export const textoHome = {
  heroSubtitulo: "Arquitetura & Cenografia",
  heroTitulo: "Transformamos\nespaços em\nexperiências",
  heroDescricao:
    "Estudio de arquitetura, cenografia e design no Rio de Janeiro. Criamos projetos que unem funcionalidade, estética e emoção.",
  sobreSubtitulo: "Sobre o estúdio",
  sobreTitulo: "Design com propósito e identidade",
  sobreTexto1:
    "O IMAGEMARIO é um estúdio de arquitetura e cenografia fundado pelo arquiteto Mario Sergio Martins, com base no Rio de Janeiro. Nosso trabalho une criatividade, técnica e sensibilidade para transformar cada projeto em uma experiência única.",
  sobreTexto2:
    "De residências a palcos de shows, de layouts humanizados a projetos BIM, cada trabalho reflete nosso compromisso com a excelência e a atenção aos detalhes.",
  ctaTitulo: "Pronto para transformar seu próximo projeto?",
}

// ─── Tipo dos projetos ──────────────────────────────

export interface Projeto {
  slug: string
  titulo: string
  categoria: string
  descricao: string
  ano: string
  local: string
  // A primeira imagem e usada como capa na galeria.
  // Adicione quantas quiser — todas aparecem na pagina do projeto.
  imagens: { src: string; alt: string }[]
}

// ─── Projetos Destaque (Home) ───────────────────────
// Esses sao os projetos que aparecem na home.
// O "href" deve apontar para a pagina do projeto (ex: /arquitetura/residencia-jardim-botanico)

export const projetosDestaque = [
  {
    src: "/images/project-1.jpg",
    titulo: "Residência Jardim Botânico",
    categoria: "Arquitetura Residencial",
    href: "/arquitetura/residencia-jardim-botanico",
  },
  {
    src: "/images/scenography-1.jpg",
    titulo: "Festival de Música",
    categoria: "Cenografia",
    href: "/cenografia/festival-rock-in-rio",
  },
  {
    src: "/images/project-2.jpg",
    titulo: "Apartamento Leblon",
    categoria: "Design de Interiores",
    href: "/arquitetura/apartamento-leblon",
  },
]

// ─── Projetos de Arquitetura ────────────────────────
// Para adicionar um projeto:
//   1. Copie um bloco inteiro abaixo
//   2. Altere o slug (sem acentos, sem espacos — use hifens)
//   3. Adicione quantas imagens quiser no array "imagens"
//   4. Coloque as fotos na pasta /public/images/

export const projetosArquitetura: Projeto[] = [
  {
    slug: "Loft-angra",
    titulo: "Loft-angra",
    categoria: "Casas",
    descricao:
      "Projeto realizado em parceria com a arquiteta Natasha Alves.",
    ano: "2019",
    local: "Angra dos Reis, Rio de Janeiro",
    imagens: [
      { src: "/images/project-1.jpg", alt: "Fachada principal da residência" },
      { src: "/images/project-6.jpg", alt: "Vista noturna da residência" },
      { src: "/images/project-4.jpg", alt: "Perspectiva 3D do projeto" },
      { src: "/images/project-7.jpg", alt: "global" },
    ],
  },
  {
    slug: "Casa-Renan-val",
    titulo: "Casa Renan e Val",
    categoria: "Projetos",
    descricao:
      "Projeto de reforma de residência de 3 andares.",
    ano: "2019",
    local: "Jacarepaguá, Rio de Janeiro",
    imagens: [
      { src: "/images/project-2.jpg", alt: "Sala de estar com vista para o mar" },
      { src: "/images/project-5.jpg", alt: "Planta humanizada do apartamento" },
      { src: "/images/project-9.jpg", alt: "Planta humanizada do apartamento" },
      { src: "/images/project-10.jpg", alt: "Planta humanizada do apartamento" },
    ],
  },
  {
    slug: "boutique-ipanema",
    titulo: "Loja-C&a",
    categoria: "Lojas",
    descricao:
      "Projeto Loja C&A feito em conjunto com a LM Arquitetura.",
    ano: "2008",
    local: "Centro, Rio de Janeiro",
    imagens: [
      { src: "/images/project-3.jpg", alt: "Interior da loja com iluminação dramática" },
      { src: "/images/project-11.jpg", alt: "Interior da loja com iluminação dramática" },
      { src: "/images/project-12.jpg", alt: "Interior da loja com iluminação dramática" },
      { src: "/images/project-13.jpg", alt: "Interior da loja com iluminação dramática" },
    ],
  },
  {
    slug: "villa-barra-3d",
    titulo: "Caltex",
    categoria: "Visualização 3D",
    descricao:
      "Estudo nova identidade visual de postos de gasolina da empresa e afins.",
    ano: "2010",
    local: "Estados Unidos",
    imagens: [
      { src: "/images/project-23.jpg", alt: "Renderização 3D da fachada" },
      { src: "/images/project-24.jpg", alt: "Detalhe da área de lazer" },
      { src: "/images/project-25.jpg", alt: "Detalhe da área de lazer" },
    ],
  },
  {
    slug: "Quiosque-ASICS",
    titulo: "Quiosque ASICS",
    categoria: "Layouts",
    descricao:
      "Quiosque da ASICS na orla da praia durante os jogos olímpicos Rio 2016.",
    ano: "2016",
    local: "Leblon, Rio de Janeiro",
    imagens: [
      { src: "/images/project-17.jpg", alt: "Layout humanizado completo" },
      { src: "/images/project-18.jpg", alt: "Layout humanizado completo" },
      { src: "/images/project-19.jpg", alt: "Layout humanizado completo" },
    ],
  },
  {
    slug: "Casa-Qatar",
    titulo: "Casa Qatar",
    categoria: "Projetos",
    descricao:
      "Estudo para casa do Qatar durante os jogos olímpicos Rio 2016.",
    ano: "2016",
    local: "Rio de Janeiro",
    imagens: [
      { src: "/images/project-20.jpg", alt: "Vista ao entardecer da residência" },
      { src: "/images/project-21.jpg", alt: "Detalhe da fachada" },
      { src: "/images/project-22.jpg", alt: "Visualização 3D do projeto" },
    ],
  },
  {
    slug: "loft-centro",
    titulo: "Perfil Carioca",
    categoria: "Projetos",
    descricao:
      "Perspectivas de projeto de Loja no shopping Nova América.",
    ano: "2016",
    local: "Del Castilho, Rio de Janeiro",
    imagens: [
      { src: "/images/project-26.jpg", alt: "Visualização 3D do projeto" },
      { src: "/images/project-27.jpg", alt: "Visualização 3D do projeto" },
      { src: "/images/project-28.jpg", alt: "Visualização 3D do projeto" },
      { src: "/images/project-29.jpg", alt: "Visualização 3D do projeto" },
    ],
  },
  {
    slug: "Loja-Ponto-Frio",
    titulo: "Loja Ponto Frio",
    categoria: "Lojas",
    descricao:
      "Estudo para uma nova identidade visual feito em parceria com a LM Arquitetura",
    ano: "2013",
    local: "Rio de Janeiro",
    imagens: [
      { src: "/images/project-14.jpg", alt: "Visualização 3D do projeto" },
      { src: "/images/project-15.jpg", alt: "tv" }
    ],
  },
  {
    slug: "apartamento-gavea-3d",
    titulo: "Elegance",
    categoria: "Lojas",
    descricao:
      "BMW - Loja de automóveis.",
    ano: "2010",
    local: "Alemanha",
    imagens: [
      { src: "/images/project-30.jpg", alt: "tv" },
      { src: "/images/project-31.jpg", alt: "Visualização do quarto" },
      { src: "/images/project-32.jpg", alt: "Visualização do quarto" },

    ],
  },
]

export const categoriasArquitetura = [
  "Todos",
  "Projetos",
  "Visualização 3D",
  "Layouts",
  "Casas",
  "Lojas",
]

// ─── Projetos de Cenografia ─────────────────────────

export const projetosCenografia: Projeto[] = [
  {
    slug: "festival-rock-in-rio",
    titulo: "Festival Rock in Rio",
    categoria: "Palcos de Shows",
    descricao:
      "Projeto cenográfico para palco secundário do Rock in Rio. Estrutura metálica com painéis de LED, iluminação programável e design que dialoga com a identidade visual do festival.",
    ano: "2024",
    local: "Parque Olímpico, Rio de Janeiro",
    imagens: [
      { src: "/images/scenography-1.jpg", alt: "Vista frontal do palco" },
      { src: "/images/project-3.jpg", alt: "Detalhe da estrutura de iluminação" },
    ],
  },
  {
    slug: "conferencia-nacional",
    titulo: "Conferência Nacional",
    categoria: "Eventos Corporativos",
    descricao:
      "Cenografia completa para conferência empresarial. Palco principal com backdrop, púlpito e iluminação técnica pensados para transmissão ao vivo e experiência presencial.",
    ano: "2023",
    local: "Centro de Convenções, Rio de Janeiro",
    imagens: [
      { src: "/images/scenography-2.jpg", alt: "Palco da conferência" },
    ],
  },
  {
    slug: "stand-expo-brasil",
    titulo: "Stand Expo Brasil",
    categoria: "Projetos de Stands",
    descricao:
      "Stand de exposição para feira internacional. Design modular, iluminação cenográfica e materiais premium que refletem a identidade da marca.",
    ano: "2024",
    local: "Riocentro, Rio de Janeiro",
    imagens: [
      { src: "/images/scenography-3.jpg", alt: "Vista geral do stand" },
      { src: "/images/design-2.jpg", alt: "Detalhe da area de exposição" },
    ],
  },
  {
    slug: "show-ao-vivo-arena",
    titulo: "Show Ao Vivo — Arena",
    categoria: "Palcos de Shows",
    descricao:
      "Projeto de palco para show ao vivo em arena. Estrutura com telões laterais, grid de iluminação e cenografia que acompanha o roteiro musical.",
    ano: "2023",
    local: "Arena Rio, Rio de Janeiro",
    imagens: [
      { src: "/images/project-3.jpg", alt: "Cenografia do show" },
    ],
  },
  {
    slug: "lancamento-de-produto",
    titulo: "Lançamento de Produto",
    categoria: "Eventos Corporativos",
    descricao:
      "Cenografia para evento de lançamento de produto. Ambiente minimalista com foco total no produto, iluminação cirúrgica e materiais nobres.",
    ano: "2024",
    local: "Rio de Janeiro",
    imagens: [
      { src: "/images/hero-architecture.jpg", alt: "Ambiente do lançamento" },
    ],
  },
  {
    slug: "stand-feira-internacional",
    titulo: "Stand Feira Internacional",
    categoria: "Projetos de Stands",
    descricao:
      "Stand premium para feira internacional. Espaço de 80m2 com lounge, area de demonstração e painel interativo.",
    ano: "2023",
    local: "São Paulo",
    imagens: [
      { src: "/images/design-2.jpg", alt: "Vista do stand na feira" },
    ],
  },
]

export const categoriasCenografia = [
  "Todos",
  "Palcos de Shows",
  "Eventos Corporativos",
  "Projetos de Stands",
]

// ─── Projetos de Design ─────────────────────────────

export const projetosDesign: Projeto[] = [
  {
    slug: "gala-de-premiacao",
    titulo: "Gala de Premiação",
    categoria: "Design de Eventos",
    descricao:
      "Projeto de decoração e ambientação para gala de premiação. Arranjos florais, iluminação quente e mesa imperial compõem uma atmosfera sofisticada e acolhedora.",
    ano: "2024",
    local: "Copacabana Palace, Rio de Janeiro",
    imagens: [
      { src: "/images/design-1.jpg", alt: "Mesa principal do evento" },
      { src: "/images/scenography-2.jpg", alt: "Visão geral do salão" },
    ],
  },
  {
    slug: "instalacao-galeria-de-arte",
    titulo: "Instalação — Galeria de Arte",
    categoria: "Conceitos Decorativos",
    descricao:
      "Instalação artística para galeria contemporânea. Peças geométricas suspensas que dialogam com a arquitetura do espaço e criam uma experiência imersiva.",
    ano: "2024",
    local: "Galeria de Arte, Rio de Janeiro",
    imagens: [
      { src: "/images/design-2.jpg", alt: "Instalação artística" },
    ],
  },
  {
    slug: "identidade-visual-congresso",
    titulo: "Identidade Visual — Congresso",
    categoria: "Elementos Visuais",
    descricao:
      "Criação de identidade visual completa para congresso. Do backdrop ao material impresso, passando por sinalização e elementos digitais.",
    ano: "2023",
    local: "Rio de Janeiro",
    imagens: [
      { src: "/images/scenography-2.jpg", alt: "Backdrop do congresso" },
      { src: "/images/scenography-3.jpg", alt: "Sinalização do evento" },
    ],
  },
  {
    slug: "lounge-corporativo",
    titulo: "Lounge Corporativo",
    categoria: "Design de Eventos",
    descricao:
      "Design de lounge para evento corporativo. Mobiliário contemporâneo, paleta neutra e elementos naturais que criam um espaço de networking elegante.",
    ano: "2023",
    local: "Rio de Janeiro",
    imagens: [
      { src: "/images/project-2.jpg", alt: "Lounge do evento" },
    ],
  },
  {
    slug: "exposicao-contemporanea",
    titulo: "Exposição Contemporânea",
    categoria: "Conceitos Decorativos",
    descricao:
      "Projeto de exposição de arte contemporânea. Curadoria espacial, iluminação cenográfica e percurso guiado que conduz o visitante pela narrativa da mostra.",
    ano: "2024",
    local: "Centro Cultural, Rio de Janeiro",
    imagens: [
      { src: "/images/scenography-3.jpg", alt: "Espaço expositivo" },
    ],
  },
  {
    slug: "branding-visual-festival",
    titulo: "Branding Visual — Festival",
    categoria: "Elementos Visuais",
    descricao:
      "Identidade visual e elementos gráficos para festival de música. Do palco à comunicação digital, uma linguagem visual coesa e vibrante.",
    ano: "2023",
    local: "Rio de Janeiro",
    imagens: [
      { src: "/images/scenography-1.jpg", alt: "Elementos visuais do festival" },
    ],
  },
]

export const categoriasDesign = [
  "Todos",
  "Design de Eventos",
  "Conceitos Decorativos",
  "Elementos Visuais",
]

// ─── Textos das Paginas ─────────────────────────────

export const textosArquitetura = {
  titulo: "Arquitetura",
  subtitulo: "Portfólio",
  descricao:
    "Projetos residenciais, comerciais e interiores que refletem identidade, funcionalidade e beleza. Cada espaço é pensado como uma experiência única.",
}

export const textosCenografia = {
  titulo: "Cenografia",
  subtitulo: "Portfólio",
  descricao:
    "Criamos cenários que transformam eventos em experiências memoráveis. De palcos de shows a eventos corporativos, cada projeto é pensado para impactar.",
}

export const textosDesign = {
  titulo: "Design",
  subtitulo: "Portfólio",
  descricao:
    "Conceitos visuais e decorativos que elevam cada projeto. Do design de eventos aos elementos visuais que definem a identidade de cada espaço.",
}

export const textosContato = {
  titulo: "Contato",
  subtitulo: "Fale conosco",
  descricao:
    "Estamos prontos para ouvir sobre seu projeto. Entre em contato e vamos transformar sua ideia em realidade.",
}

// ─── Funcao auxiliar ────────────────────────────────
// Busca um projeto pelo slug dentro de uma lista.
// Usada internamente pelas paginas de detalhe.

export function buscarProjeto(lista: Projeto[], slug: string): Projeto | undefined {
  return lista.find((p) => p.slug === slug)
}
