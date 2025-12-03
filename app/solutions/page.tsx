import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SolutionsHero } from "@/components/solutions-hero";

export const metadata = {
  title: "Solutions | Value Acquisitions Holdings Inc.",
  description:
    "Explore our portfolio of companies leading in construction, distribution, and industrial solutions.",
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#261c12" }}>
      <Navigation />
      <main className="pt-24">
        <SolutionsHero />
      </main>
      <Footer />
    </div>
  );
}