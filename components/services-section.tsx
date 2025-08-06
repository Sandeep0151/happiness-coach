import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Small Group Workshops",
    description:
      "Curated spaces for reflection, recalibration, and connection.",
    image: "https://storage.googleapis.com/msgsndr/xQlIEgJuDpymPFH4Fs60/media/68935f2cd69f99a4c1d4ef50.jpeg",

  },
  {
    title: "Private Consulting",
    description:
      "Build your next chapter with purpose and clarity.",
    image: "https://storage.googleapis.com/msgsndr/xQlIEgJuDpymPFH4Fs60/media/68935f2ced9c8f6ca5896a36.png",

  },
  {
    title: "1-on-1 Mentorship",
    description:
      "Strategic, discreet, and deeply personal guidance.",
    image: "https://storage.googleapis.com/msgsndr/xQlIEgJuDpymPFH4Fs60/media/68935f2d5b9f87d7f7918150.jpeg",

  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Here’s what <span className="text-[#191970]">we offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the path that best fits your journey to freedom. Each service is designed to provide you with the
            tools and support you need to create lasting positive change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-gray-900 mb-3">{service.title}</CardTitle>
                <p className="text-gray-600 mb-4">{service.description}</p>

                {/*<ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#191970] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-2xl font-bold text-[#191970] mb-4">{service.price}</div>*/}
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-[#191970] hover:bg-[#0f0f4d] text-white">Book Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
