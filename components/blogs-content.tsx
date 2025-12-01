"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function BlogsContent() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: "PRECISION TIMING FOR SUPERIOR CONCRETE PERFORMANCE",
      description:
        "BuildChem's Retarding Admixture gives you precision timing for superior concrete performance. Build with precision. Build with BuildChem",
      category: "BUILDCHEM",
      image: "/images/blogs.jpg",
    },
    {
      id: 2,
      title: "PRECISION TIMING FOR SUPERIOR CONCRETE PERFORMANCE",
      description:
        "BuildChem's Retarding Admixture gives you precision timing for superior concrete performance. Build with precision. Build with BuildChem",
      category: "BUILDCHEM",
      image: "/images/blogs.jpg",
    },
    {
      id: 3,
      title: "PRECISION TIMING FOR SUPERIOR CONCRETE PERFORMANCE",
      description:
        "BuildChem's Retarding Admixture gives you precision timing for superior concrete performance. Build with precision. Build with BuildChem",
      category: "BUILDCHEM",
      image: "/images/blogs.jpg",
    },
    {
      id: 4,
      title: "PRECISION TIMING FOR SUPERIOR CONCRETE PERFORMANCE",
      description:
        "BuildChem's Retarding Admixture gives you precision timing for superior concrete performance. Build with precision. Build with BuildChem",
      category: "BUILDCHEM",
      image: "/images/blogs.jpg",
    },
    {
      id: 5,
      title: "PRECISION TIMING FOR SUPERIOR CONCRETE PERFORMANCE",
      description:
        "BuildChem's Retarding Admixture gives you precision timing for superior concrete performance. Build with precision. Build with BuildChem",
      category: "BUILDCHEM",
      image: "/images/blogs.jpg",
    },
    {
      id: 6,
      title: "PRECISION TIMING FOR SUPERIOR CONCRETE PERFORMANCE",
      description:
        "BuildChem's Retarding Admixture gives you precision timing for superior concrete performance. Build with precision. Build with BuildChem",
      category: "BUILDCHEM",
      image: "/images/blogs.jpg",
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 md:px-12" style={{ backgroundColor: "#261c12" }}>
      <div className="max-w-7xl mx-auto">
        {/* Blog Cards Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              {/* Image */}
              <div
                className="relative h-64 md:h-72 rounded-lg overflow-hidden mb-6 border bg-black"
                style={{ borderColor: "rgba(220, 180, 133, 0.4)" }}
              >
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-blue-900/80 text-white text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3
                className="text-lg md:text-xl font-bold mb-3 group-hover:opacity-80 transition-colors"
                style={{ color: "#DCB485" }}
              >
                Control the pace and perfect the process.
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#FFFFFF" }}>
                {post.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
