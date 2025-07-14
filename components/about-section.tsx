import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/images/andrew.jpg"
              alt="Happiness Coach"
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#191970] text-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Your <span className="text-[#191970]">Happiness Coach</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Welcome! I'm dedicated to helping individuals discover their path to genuine happiness and fulfillment.
              With over a decade of experience in personal development and positive psychology, I've had the privilege
              of guiding thousands of people toward more joyful, meaningful lives.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              My approach combines proven scientific methods with practical, real-world applications. Whether you're
              facing life transitions, seeking greater purpose, or simply wanting to enhance your overall well-being,
              I'm here to support your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#191970] hover:bg-[#2d4373] text-white">Learn More About Me</Button>
              <Button
                variant="outline"
                className="border-[#191970] text-[#191970] hover:bg-[#191970] hover:text-white bg-transparent"
              >
                View Credentials
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
