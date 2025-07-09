import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactUsInfo() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "text-blue-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@doctoreverywhere.com", "support@doctoreverywhere.com"],
      color: "text-green-600",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Medical Center Drive", "Health City, HC 12345"],
      color: "text-red-600",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 8:00 AM - 8:00 PM", "Sat-Sun: 9:00 AM - 5:00 PM"],
      color: "text-purple-600",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
        <p className="text-gray-600 mb-8">
          We're here to help you with any questions or concerns. Reach out to us through any of the following methods:
        </p>
      </div>

      <div className="space-y-6">
        {contactInfo.map((info, index) => {
          const IconComponent = info.icon
          return (
            <div key={index} className="flex items-start">
              <div className={`${info.color} mr-4 mt-1`}>
                <IconComponent className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-2">Emergency Services</h4>
        <p className="text-gray-600 mb-2">
          For medical emergencies, please call 911 or visit your nearest emergency room.
        </p>
        <p className="text-blue-600 font-semibold">24/7 Emergency Hotline: +1 (555) 911-HELP</p>
      </div>
    </div>
  )
}
