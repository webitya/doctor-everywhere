import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactUsInfo() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9211013699"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["doctoreverywhere.in@gmail.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: [" Gurgaon, Haryana ,India"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 8:00 AM - 8:00 PM", "Sat-Sun: 9:00 AM - 5:00 PM"],
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-3xl font-bold text-gray-900 mb-3">Get in Touch</h3>
        <p className="text-lg text-gray-600">
          We're here to help you with any questions or concerns. Reach out to us through any of the following methods:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactInfo.map((info, index) => {
          const IconComponent = info.icon
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="bg-teal-100 p-3 rounded-full flex items-center justify-center mx-auto mb-3 flex-shrink-0">
                <IconComponent className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-xl mb-1">{info.title}</h4>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm text-center">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          )
        })}
      </div>


    </div>
  )
}
