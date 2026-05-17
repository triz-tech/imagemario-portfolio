import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { siteConfig, contato, navegacao, servicos, redesSociais } from "@/lib/site-data"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

          <div className="md:col-span-1">
            <Link href="/">
              <span className="text-lg font-light tracking-[0.3em] text-primary uppercase">
                {siteConfig.nome}
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Arquitetura, Cenografia & Design
              <br />
              {siteConfig.cidade}, {siteConfig.pais}
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
              {"Navegação"}
            </h4>
            <ul className="flex flex-col gap-3">
              {navegacao.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
              {"Serviços"}
            </h4>
            <ul className="flex flex-col gap-3">
              {servicos.map((s) => (
                <li key={s.numero} className="text-sm text-muted-foreground">
                  {s.titulo}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Contato
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-muted-foreground mt-0.5 shrink-0" />
                <a
                  href={`mailto:${contato.email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 break-all"
                >
                  {contato.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-muted-foreground mt-0.5 shrink-0" />
                <a
                  href={`https://wa.me/${contato.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {contato.whatsappTexto}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-muted-foreground mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  {contato.endereco}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.nome}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={redesSociais.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300 tracking-[0.15em] uppercase"
            >
              Instagram
            </a>
            <a
              href={redesSociais.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300 tracking-[0.15em] uppercase"
            >
              LinkedIn
            </a>
            <a
              href={redesSociais.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300 tracking-[0.15em] uppercase"
            >
              Behance
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
