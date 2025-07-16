import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist, Roboto, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"


const inter = Inter({ subsets: ["latin"] })
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const playfair = Playfair_Display({
  weight: '600',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Andrew Dietz",
  description: "Join our webinars and seminars to discover the path to lasting happiness and personal growth.",
    generator: 'Andrew Dietz'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
