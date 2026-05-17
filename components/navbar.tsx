"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { navegacao, siteConfig } from "@/lib/site-data"

export function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [rolou, setRolou] = useState(false)
  const caminho = usePathname()

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 50)
    window.addEventListener("scroll", aoRolar)
    return () => window.removeEventListener("scroll", aoRolar)
  }, [])

  useEffect(() => {
    setMenuAberto(false)
  }, [caminho])

  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuAberto])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          rolou
            ? "bg-background/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-6 md:px-12 py-5">
          <Link href="/" className="relative z-50">
            <span className="text-lg md:text-xl font-light tracking-[0.3em] text-primary uppercase">
              {siteConfig.nome}
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navegacao.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:text-primary ${
                    caminho === link.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="relative z-50 md:hidden text-primary"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          >
            {menuAberto ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuAberto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-background flex items-center justify-center"
          >
            <nav>
              <ul className="flex flex-col items-center gap-8">
                {navegacao.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={`text-2xl font-light tracking-[0.2em] uppercase transition-colors duration-300 hover:text-primary ${
                        caminho === link.href ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
// contact section