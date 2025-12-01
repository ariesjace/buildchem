import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { OurCompanies } from "@/components/our-companies"
import { Solutions } from "@/components/solutions"
import { WhatsNew } from "@/components/whats-new"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#261c12" }}>
      <Navigation />
      <Hero />
      <OurCompanies />
      <Solutions />
      <WhatsNew />
      <Footer />
    </main>
  )
}
