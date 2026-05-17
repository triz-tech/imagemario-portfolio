import { PageHero } from "@/components/page-hero"
import { ContactForm, ContactInfo, MapSection } from "@/components/contact-sections"
import { textosContato } from "@/lib/site-data"

export default function ContatoPage() {
  return (
    <main>
      <PageHero
        title={textosContato.titulo}
        subtitle={textosContato.subtitulo}
        description={textosContato.descricao}
      />

      <section className="px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-24">
        <MapSection />
      </section>
    </main>
  )
}
