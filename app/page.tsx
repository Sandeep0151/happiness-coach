import HeroSlider from "@/components/hero-slider"
import AboutSection from "@/components/about-section"
import MotivationalQuotes from "@/components/motivational-quotes"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import BlogSection from "@/components/blog-section"


export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <AboutSection />
      <MotivationalQuotes />
      <ServicesSection />
      <TestimonialsSection />
      <BlogSection />
    </main>
  )
}
