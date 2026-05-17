import { HeroSection } from "@/components/hero-section"
import {
  AboutSection,
  ServicesSection,
  FeaturedSection,
  CTASection,
} from "@/components/home-sections"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedSection />
      <CTASection />
    </main>
  )
}
