import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/site-data"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: siteConfig.nomeCompleto,
  description: siteConfig.descricao,
  keywords: [
    "arquitetura",
    "cenografia",
    "Rio de Janeiro",
    "design",
    "modelagem 3D",
    "BIM",
    "Mario Sergio Martins",
  ],
  authors: [{ name: siteConfig.dono }],
  openGraph: {
    title: siteConfig.nomeCompleto,
    description: siteConfig.descricao,
    type: "website",
    locale: "pt_BR",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
