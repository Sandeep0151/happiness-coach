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
    <section className="py-16 bg-[#f3f4f6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Words of Inspiration</h2>

          <div className="relative bg-white rounded-2xl p-8 shadow-md border border-gray-200">
            <Quote className="absolute top-4 left-4 text-gray-300" size={40} />

            <div className="min-h-[120px] flex items-center justify-center">
              <div className="text-center">
                <p className="text-xl md:text-2xl text-gray-700 font-medium mb-4 italic">
                  "{quotes[currentQuote].text}"
                </p>
                <p className="text-gray-500 font-semibold">— {quotes[currentQuote].author}</p>
              </div>
            </div>

            <div className="flex justify-between items-center mt-6">
              <button onClick={prevQuote} className="text-gray-500 hover:text-gray-700 transition-colors">
                <ChevronLeft size={24} />
              </button>

              <div className="flex space-x-2">
                {quotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuote(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentQuote ? "bg-gray-700" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button onClick={nextQuote} className="text-gray-500 hover:text-gray-700 transition-colors">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
