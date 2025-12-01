"use client"

import Image from "next/image"
import { useEffect, useState, useRef } from "react"

export function AboutContent() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 md:py-20 px-6 md:px-12 lg:px-16" style={{ backgroundColor: "#261c12" }}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Who We Are Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#DCB485" }}>
                Who We Are
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "#FFFFFF" }}>
                Value Acquisitions Holdings Inc. oversees a portfolio of brands that support the nation's construction,
                commercial, and industrial sectors. Through unified leadership and strategic direction, we enable each
                company to operate with excellence, efficiency, and long-term growth.
              </p>

              <p className="text-base md:text-lg leading-relaxed" style={{ color: "#FFFFFF" }}>
                Our group is built on a commitment to quality, innovation, and dependable service, delivering essential
                products and solutions that drive progress across multiple industries.
              </p>
            </div>
          </div>

          {/* Corporate Hierarchy Image */}
          <div
            className="rounded-lg overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105"
            style={{
              backgroundColor: "#1a1410",
              padding: "20px",
            }}
          >
            <Image
              src="/images/corporate-hierarchy.jpg"
              alt="Corporate Hierarchy"
              width={500}
              height={400}
              className="w-full h-auto object-contain"
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
