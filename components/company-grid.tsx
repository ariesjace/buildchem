"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import type { Company } from "@/lib/companies-data"

interface CompanyGridProps {
  companies: Company[]
}

export function CompanyGrid({ companies }: CompanyGridProps) {
  const [hoveredCompany, setHoveredCompany] = useState<string | null>(null)

  return (
    <section className="py-12 md:py-16 px-4 md:px-8" style={{ backgroundColor: "#261c12" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {companies.map((company, index) => (
            <Link key={company.id} href={`/companies/${company.id}`}>
              <div
                onMouseEnter={() => setHoveredCompany(company.id)}
                onMouseLeave={() => setHoveredCompany(null)}
                className="relative cursor-pointer group h-full"
              >
                {/* Card Background */}
                <div
                  className="absolute inset-0 rounded-lg transition-all duration-300 ease-out"
                  style={{
                    background:
                      hoveredCompany === company.id
                        ? "linear-gradient(135deg, rgba(220, 180, 133, 0.25) 0%, rgba(220, 180, 133, 0.1) 100%)"
                        : "linear-gradient(135deg, rgba(60, 50, 35, 0.5) 0%, rgba(38, 28, 18, 0.4) 100%)",
                    border:
                      hoveredCompany === company.id
                        ? "2px solid rgba(220, 180, 133, 0.6)"
                        : "1px solid rgba(220, 180, 133, 0.2)",
                    transform: hoveredCompany === company.id ? "translateY(-8px)" : "translateY(0)",
                  }}
                />

                {/* Content */}
                <div className="relative p-8 md:p-12 h-full flex flex-col justify-between">
                  {/* Logo */}
                  <div className="mb-6">
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      width={120}
                      height={60}
                      className="object-contain transition-all duration-300"
                      style={{
                        filter: hoveredCompany === company.id ? "brightness(1.3)" : "brightness(1.1) opacity(0.85)",
                      }}
                    />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3
                      className="text-2xl md:text-3xl font-bold mb-3 transition-all duration-300"
                      style={{ color: "#DCB485" }}
                    >
                      {company.name}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: "#FFFFFF" }}>
                      {company.description}
                    </p>
                    <p
                      className="text-xs md:text-sm font-semibold uppercase tracking-wide transition-all duration-300"
                      style={{
                        color: "#DCB485",
                        opacity: hoveredCompany === company.id ? 1 : 0.7,
                      }}
                    >
                      {company.category}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    className="mt-6 transition-all duration-300"
                    style={{
                      transform: hoveredCompany === company.id ? "translateX(8px)" : "translateX(0)",
                    }}
                  >
                    <span style={{ color: "#DCB485" }}>→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
