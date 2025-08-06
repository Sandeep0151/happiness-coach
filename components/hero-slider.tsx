"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {

  title: (
    <div className="text-white text-center">
      <div className="text-xl md:text-2xl tracking-[0.4em] uppercase font-medium mb-2">
        ANDREW DIETZ
      </div>
      <div className="text-6xl md:text-8xl font-extrabold uppercase leading-tight">
        AWAKEN
      </div>
      <div className="text-xl md:text-2xl tracking-widest uppercase mt-2 mb-2">
        YOUR PURPOSE
      </div>
      <div className="text-6xl md:text-8xl font-extrabold uppercase leading-tight">
        WITHIN
      </div>
      <br></br>
    </div>
    ),
    subtitle: "",
    cta: "Register Now",
    bgImage: "https://storage.googleapis.com/msgsndr/xQlIEgJuDpymPFH4Fs60/media/68932da7d8d33817c65f0af4.jpeg",
  },
  {
    title: (<h2 className="text-4xl md:text-6xl font-bold leading-tight">
        You are just 7-days away from Lasting Happiness
      </h2>),
    subtitle: (
      <p className="text-xl md:text-2xl mt-4 opacity-90 max-w-3xl mx-auto">
        Our free resource, with daily activities that actually work. Seven days of simple, powerful practices to reset your happiness.
      </p>
    ),
    cta: "Download Now",
    bgImage: "https://storage.googleapis.com/msgsndr/xQlIEgJuDpymPFH4Fs60/media/68935f2ceedaf82662bf37bb.jpeg",
  },

]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[700px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url(${slides[currentSlide].bgImage})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#191970]/50 to-[#191970]/20"></div>

      {/* Background Pattern */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-4 text-center text-white">
  <div>{slides[currentSlide].title}</div>

  {slides[currentSlide].subtitle && (
    <p className="text-xl md:text-2xl mt-4 mb-6 opacity-90 max-w-3xl mx-auto">
      {slides[currentSlide].subtitle}
    </p>
  )}

  <Button
    size="lg"
    className="bg-white text-[#3b5998] hover:bg-gray-100 text-lg px-8 py-3 rounded-full font-semibold"
  >
    {slides[currentSlide].cta}
  </Button>
</div>


      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
      >
        <ChevronRight size={40} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  )
}
