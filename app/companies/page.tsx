import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { GoldButton } from "@/components/gold-button"
import { companies } from "@/lib/companies"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Our Companies | Industrial Holdings Group",
  description: "Explore our portfolio of market-leading companies in construction, infrastructure, and industrial materials.",
}

export default function CompaniesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="/images/HERO.png" alt="Corporate buildings" fill priority className="object-cover"/>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-5xl font-bold text-white mb-4">Our Companies</h1>
          <p className="text-xl text-white/90">A diverse portfolio of market-leading companies across key industrial sectors.</p>
        </div>
      </section>

      {/* Companies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {Object.values(companies).map((company) => (
            <Link key={company.id} href={`/companies/${company.id}`}>
              <div className="border-2 border-border p-10 rounded-lg hover:border-accent hover:shadow-xl transition-all cursor-pointer group">
                <Image src={company.logo} alt="company name" width={180} height={100} className="object-contain mb-6 group-hover:scale-110 transition-transform"/>
                <p className="text-muted-foreground text-lg">{company.description}</p>
                <div className="mt-6 font-semibold text-accent">Learn More →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Interested in Partnering With Us?</h2>
        <Link href="/contact"><GoldButton>Contact Us</GoldButton></Link>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
