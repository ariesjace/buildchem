import { Suspense } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SolutionsHero } from "@/components/solutions-hero";
import { SolutionsContent } from "@/components/solutions-content";

export const metadata = {
  title: "Solutions | Value Acquisitions Holdings Inc.",
  description:
    "Explore our portfolio of companies leading in construction, distribution, and industrial solutions.",
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#004AAD" }}>
      <Navigation />
      <main className="pt-24" style={{ backgroundColor: "#004AAD" }}>
        <SolutionsHero />
        <Suspense fallback={<div>Loading solutions...</div>}>
      <SolutionsContent />
    </Suspense>
      </main>
      <Footer />
    </div>
  );
}