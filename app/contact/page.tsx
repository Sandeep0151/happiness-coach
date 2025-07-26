import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="">
      {/* Hero Section */}
      <section className="py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl text-[#191970] font-bold mb-6">Contact Us</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input id="firstName" type="text" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input id="lastName" type="text" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input id="email" type="email" required />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#191970]"
                  >
                    <option value="">Select a service</option>
                    <option value="coaching">Individual Coaching</option>
                    <option value="webinar">Group Webinars</option>
                    <option value="seminar">Weekend Seminars</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea id="message" rows={5} required />
                </div>

                <Button className="w-full bg-[#191970] hover:bg-[#0f0f4d] text-white">Send Message</Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>

              <div className="space-y-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-[#191970]">
                      <Mail className="mr-3" size={20} />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">andrewdietzcoach@gmail.com</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-[#191970]">
                      <Phone className="mr-3" size={20} />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">+1 (410) 913-0048</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-[#191970]">
                      <MapPin className="mr-3" size={20} />
                      Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      123 Wellness Street
                      <br />
                      Happy City, HC 12345
                    </p>
                  </CardContent>
                </Card>

                
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
