"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["HOME", "ABOUT US", "COMPANIES", "SOLUTIONS", "CONTACT US"]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-gradient-to-r from-gray-900 to-amber-900 shadow-lg" : "bg-transparent",
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/VAH-white.png"
              alt="BUILDCHEM Logo"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className={cn(
                  "text-sm font-semibold transition-all duration-200",
                  isScrolled ? "text-white hover:text-gray-100" : "text-white hover:text-gray-200",
                )}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 bg-gradient-to-r from-gray-900 to-amber-900">
            {navItems.map((item) => (
              <a key={item} href="#" className="block px-4 py-2 text-white text-sm font-semibold hover:bg-white/10">
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
