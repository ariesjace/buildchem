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
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-24 bg-white">
        <SolutionsHero />
        <SolutionsContent />
      </main>
      <Footer />
    </div>
  );
}