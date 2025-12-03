"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { OurCompanies } from "@/components/our-companies"
import { Solutions } from "@/components/solutions"
import { WhatsNew } from "@/components/whats-new"
import { Footer } from "@/components/footer"
import { ArrowUp } from "lucide-react"


export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const clientHeight = window.innerHeight
      const scrolledToNearBottom = scrollHeight - scrollTop - clientHeight < 1000
      
      setShowScrollTop(scrolledToNearBottom)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#261c12" }}>
      <Navigation />
      <Hero />
      <OurCompanies />
      <Solutions />
      <WhatsNew />
      <Footer />
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-amber-600 hover:bg-amber-700 text-black p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          style={{ backgroundColor: "#DCB485" }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </main>
  )
}