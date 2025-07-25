import ServicesSection from "@/components/services-section"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <main className="">
      {/* Hero Section */}
      

      <ServicesSection />

      {/* CTA Section */}
      <section className="py-16 bg-[#191970] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Life?</h2>
          <p className="text-xl mb-8">
            Don't wait another day to start your journey toward lasting happiness and fulfillment.
          </p>
          <Button className="bg-white text-[#191970] hover:bg-gray-100 text-lg px-8 py-3">
            Book Your First Session
          </Button>
        </div>
      </section>
    </main>
  )
}
