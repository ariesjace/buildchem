import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { AboutContent } from "@/components/about-content"

export const metadata = {
  title: "About Us | Value Acquisitions Holdings Inc.",
  description:
    "Learn about Value Acquisitions Holdings Inc. and our portfolio of companies leading in construction, distribution, and industrial solutions.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#261c12" }}>
      <Navigation />
      <main className="pt-24">
        <AboutHero />
        <AboutContent />
      </main>
      <Footer />
    </div>
  )
}
