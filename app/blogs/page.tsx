import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogsHero } from "@/components/blogs-hero"
import { BlogsContent } from "@/components/blogs-content"

export const metadata = {
  title: "Blogs | Value Acquisitions Holdings Inc.",
  description:
    "Read our latest blog posts and insights about construction solutions, concrete technology, and industry trends.",
}

export default function BlogsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#261c12" }}>
      <Navigation />
      <main className="pt-24">
        <BlogsHero />
        <BlogsContent />
      </main>
      <Footer />
    </div>
  )
}
