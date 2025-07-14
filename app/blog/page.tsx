import BlogSection from "@/components/blog-section"

export default function BlogPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-[#191970] to-[#2a2a8a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Insights, tips, and strategies for living a happier, more fulfilling life
          </p>
        </div>
      </section>

      <BlogSection />
    </main>
  )
}
