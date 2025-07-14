"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const quotes = [
  {
    text: "I’m not here to fix you. I’m here to help you meet yourself more fully; past, present, and future.",
    author: "Andrew Dietz",
  },

]

export default function MotivationalQuotes() {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length)
  }

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length)
  }

  return (
    <section className="py-16 bg-gradient-to-r from-[#191970] to-[#2a2a8a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Words of Inspiration</h2>

          <div className="relative bg-white rounded-lg p-8 shadow-lg">
            <Quote className="absolute top-4 left-4 text-[#3b5998] opacity-20" size={40} />

            <div className="min-h-[120px] flex items-center justify-center">
              <div className="text-center">
                <p className="text-xl md:text-2xl text-gray-800 font-medium mb-4 italic">
                  "{quotes[currentQuote].text}"
                </p>
                <p className="text-[#3b5998] font-semibold">— {quotes[currentQuote].author}</p>
              </div>
            </div>

            <div className="flex justify-between items-center mt-6">
              <button onClick={prevQuote} className="text-[#191970] hover:text-[#0f0f4d] transition-colors">
                <ChevronLeft size={24} />
              </button>

              <div className="flex space-x-2">
                {quotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuote(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentQuote ? "bg-[#191970]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button onClick={nextQuote} className="text-[#191970] hover:text-[#0f0f4d] transition-colors">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
