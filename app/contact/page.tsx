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
              <iframe
    src="https://api.leadconnectorhq.com/widget/form/wayxTO6ZaPuxelgpiEbr"
    style={{width: "100%", height: "100%", border: "none"}}
    id="inline-wayxTO6ZaPuxelgpiEbr" 
    data-layout="{'id':'INLINE'}"
    data-trigger-type="alwaysShow"
    data-trigger-value=""
    data-activation-type="alwaysActivated"
    data-activation-value=""
    data-deactivation-type="neverDeactivate"
    data-deactivation-value=""
    data-form-name="Form 0"
    data-height="658"
    data-layout-iframe-id="inline-wayxTO6ZaPuxelgpiEbr"
    data-form-id="wayxTO6ZaPuxelgpiEbr"
    title="Form 0"
        >
</iframe>
<script src="https://link.msgsndr.com/js/form_embed.js"></script>
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
