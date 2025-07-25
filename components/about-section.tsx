import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/images/andrew-1.jpg"
              alt="Happiness Coach"
              width={200}
              height={400}
              className="rounded-lg shadow-lg"
            />
            
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              <span className="text-[#1d1f23]">Awaken Your Purpose Within</span>
            </h2>
            <p className=" text-gray-600 mb-6">
              Awaken the Power Within is a transformational experience designed to help you uncover and release
the hidden patterns holding you back.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-6">
              What are we going to talk about?
            </h3>

           <p className="text-gray-600 mb-6">
             It combines powerful psychological insights, breakthrough coaching strategies, and immersive
exercises to build unstoppable momentum, and create lasting change in your life.
            </p>

            <p className="text-xl font-bold text-gray-900 mb-6">
             What are they going to get out of it?
            </p>


            <p className=" text-gray-600 mb-6">
             Whether you want to achieve greater success in your career, improve your health and relationships,
or find deeper purpose and fulfillment, this event will guide you to tap into the power already within
you and live the life you’ve always envisioned.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#191970] hover:bg-[#2d4373] text-white">Learn More</Button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
