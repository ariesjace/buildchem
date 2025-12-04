"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SolutionsGrid from "@/components/solutions-grid";

export const SolutionsContent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="products" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* TOP INTRO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <Image
            src="/images/buildchem.png"
            alt="BuildChem Logo"
            width={180}
            height={60}
            className="mx-auto mb-4 object-contain"
            priority
          />

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Advanced Concrete Solutions
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            BuildChem Solutions Inc., a subsidiary under Progressive Materials
            Solutions Inc., delivers high-performance chemical admixtures for concrete and
            soil stabilization. Our products optimize workability, strength,
            durability, and water resistance for ready-mix, precast, underwater,
            or road foundation applications.
          </p>
        </motion.div>

        {/* OUR PRODUCTS HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Complete Product Catalog
          </h2>
        </motion.div>

        {/* GRID SECTIONS */}
        <div className="space-y-16 md:space-y-24">
          <SolutionsGrid
            index={1}
            title="Superplasticizers & High-Range Water Reducers"
            description="Enhance concrete flow, reduce water-cement ratio, and achieve superior strength with our HP, PC, and SI series."
            products={[
              { category: "BUILDCHEM HP Series", items: ["HP 1000", "HP 515"] },
              {
                category: "BUILDCHEM PC Series",
                items: ["PC 700", "PC 800", "PC 900", "PC 1000", "PC 1100", "PC 1180", "RCC"],
              },
              { category: "BUILDCHEM SI Series", items: ["SI 90-112", "SI 115-111", "SI 102 AIR"] },
            ]}
          />

          <SolutionsGrid
            index={2}
            title="Set Retarders & Accelerators"
            description="Control setting times and ensure optimal workability with our retarder and accelerator products."
            products={[
              { category: "BUILDCHEM Retarders", items: ["RETARDER", "STABLE"] },
              { category: "BUILDCHEM SET Series", items: ["SET 100", "SET 500", "SET 500P"] },
            ]}
            reverse
          />

          <SolutionsGrid
            index={3}
            title="Underwater Concrete Solutions"
            description="Specialized formulations for underwater concrete applications."
            products={[
              { category: "BUILDCHEM UW Series", items: ["BUILDCHEM UW", "BUILDCHEM UW50"] },
            ]}
          />

          <SolutionsGrid
            index={4}
            title="Waterproofing Solutions"
            description="Comprehensive waterproofing systems that protect concrete structures."
            products={[
              { category: "BUILDCHEM WP Series", items: ["WP 10L", "WP 20"] },
            ]}
            reverse
          />

          <SolutionsGrid
            index={5}
            title="Soil Stabilization & Road Foundation"
            description="Solutions that improve load-bearing capacity and ground durability."
            products={[
              { category: "BUILDCHEM SSTAB Series", items: ["SSTAB-1000", "SSTAB-2000"] },
            ]}
          />
        </div>
      </div>
    </section>
  );
};
