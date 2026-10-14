"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

const slides = [
  {

  title: (
    <div className="text-white text-center drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]">
      <div className="text-base sm:text-xl md:text-2xl tracking-[0.4em] uppercase font-medium mb-2 text-white/90">
        ANDREW DIETZ
      </div>
      <div className="text-5xl sm:text-6xl md:text-8xl font-extrabold uppercase leading-tight">
        AWAKEN
      </div>
      <div className="flex items-center justify-center gap-4 text-base sm:text-xl md:text-2xl tracking-widest uppercase mt-2 mb-2">
        <span className="hidden sm:block h-px w-12 bg-white/70"></span>
        YOUR PURPOSE
        <span className="hidden sm:block h-px w-12 bg-white/70"></span>
      </div>
      <div className="text-5xl sm:text-6xl md:text-8xl font-extrabold uppercase leading-tight">
        WITHIN
      </div>
    </div>
    ),
    subtitle: "",
    cta: "Register Now",
    href: "/workshop",
    bgImage: "https://storage.googleapis.com/msgsndr/xQlIEgJuDpymPFH4Fs60/media/68932da7d8d33817c65f0af4.jpeg",
  },
  {
    title: (<h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]">
        You are just 7-days away from Lasting Happiness
      </h2>),
    subtitle: "Our free resource, with daily activities that actually work. Seven days of simple, powerful practices to reset your happiness.",
    cta: "Download Now",
    href: "/contact",
    bgImage: "https://storage.googleapis.com/msgsndr/xQlIEgJuDpymPFH4Fs60/media/68935f2ceedaf82662bf37bb.jpeg",
  },

]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [isPaused, currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section
      className="relative h-[600px] md:h-[700px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images (cross-fade with slow zoom) */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-[1500ms] ease-out ${
            index === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
          style={{ backgroundImage: `url(${slide.bgImage})` }}
          aria-hidden="true"
        ></div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-[#191970]/60 via-[#191970]/30 to-[#191970]/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

      {/* Slide Content */}
      <div
        key={currentSlide}
        className="absolute bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-6 text-center text-white animate-in fade-in slide-in-from-bottom-6 duration-1000"
      >
  <div>{slides[currentSlide].title}</div>

  {slides[currentSlide].subtitle && (
    <p className="text-lg md:text-2xl mt-4 opacity-90 max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
      {slides[currentSlide].subtitle}
    </p>
  )}

  <Button
    asChild
    size="lg"
    className="group mt-8 bg-white text-[#191970] hover:bg-white hover:scale-105 hover:shadow-2xl shadow-lg text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300"
  >
    <Link href={slides[currentSlide].href}>
      {slides[currentSlide].cta}
      <ArrowRight className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  </Button>
</div>


      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-3 md:left-6 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white/80 hover:bg-white/25 hover:text-white transition-all"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 md:right-6 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white/80 hover:bg-white/25 hover:text-white transition-all"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide}
            className={`h-3 rounded-full transition-all duration-500 ${index === currentSlide ? "w-8 bg-white" : "w-3 bg-white/50 hover:bg-white/80"}`}
          />
        ))}
      </div>
    </section>
  )
}
