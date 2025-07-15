"use client"

import { Zap, Shield, Clock, Award } from "lucide-react"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"

export default function XrayServices() {
  const services = [
    {
      title: "Chest X-Ray",
      description: "Comprehensive chest imaging for respiratory and cardiac evaluation.",
      price: "₹899",
      whatsappMessage: "Hello, I would like to book a Chest X-Ray (₹899). Please provide details for scheduling.",
    },
    {
      title: "Bone X-Ray",
      description: "Detailed bone imaging for fractures, arthritis, and joint problems.",
      price: "₹799",
      whatsappMessage: "Hello, I would like to book a Bone X-Ray (₹799). Please help me schedule an appointment.",
    },
    {
      title: "Abdominal X-Ray",
      description: "Abdominal imaging for digestive system evaluation.",
      price: "₹959",
      whatsappMessage: "Hello, I would like to book an Abdominal X-Ray (₹959). Please advise on availability.",
    },
    {
      title: "Spine X-Ray",
      description: "Spinal imaging for back pain and posture assessment.",
      price: "₹999",
      whatsappMessage: "Hello, I would like to book a Spine X-Ray (₹999). Could you please help me schedule?",
    },
    {
      title: "Dental X-Ray",
      description: "Focused imaging for dental health and oral structures.",
      price: "₹599",
      whatsappMessage: "Hello, I would like to book a Dental X-Ray (₹599). Please provide details for scheduling.",
    },
    {
      title: "Joint X-Ray",
      description: "Specific imaging for joint injuries, pain, and mobility issues.",
      price: "₹749",
      whatsappMessage: "Hello, I would like to book a Joint X-Ray (₹749). Please help me schedule an appointment.",
    },
    {
      title: "Skull X-Ray",
      description: "Imaging of the skull for head injuries or structural abnormalities.",
      price: "₹849",
      whatsappMessage: "Hello, I would like to book a Skull X-Ray (₹849). Please advise on availability.",
    },
    {
      title: "Extremity X-Ray",
      description: "Imaging for arms, legs, hands, and feet to diagnose injuries.",
      price: "₹699",
      whatsappMessage: "Hello, I would like to book an Extremity X-Ray (₹699). Could you please help me schedule?",
    },
  ]

  const features = [
    {
      icon: Zap,
      title: "Digital Technology",
      description: "Latest digital X-ray equipment for superior image quality.",
    },
    {
      icon: Shield,
      title: "Low Radiation",
      description: "Minimal radiation exposure with advanced safety protocols.",
    },
    {
      icon: Clock,
      title: "Quick Results",
      description: "Fast processing with results available within hours.",
    },
    {
      icon: Award,
      title: "Expert Analysis",
      description: "Certified radiologists provide detailed interpretations.",
    },
  ]

  const handleWhatsAppClick = (message) => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/919693245941?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-800 mb-4">X-Ray Services</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive X-ray imaging services for accurate diagnosis and treatment planning.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center border border-teal-100 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-teal-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{service.description}</p>
              <div className="text-3xl font-bold text-teal-600 mb-4">{service.price}</div>
              <button
                onClick={() => handleWhatsAppClick(service.whatsappMessage)}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2.5 px-4 rounded-lg font-semibold flex items-center justify-center shadow-md cursor-pointer transition-colors duration-200"
              >
                <WhatsAppIcon className="h-5 w-5 mr-2" />
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-teal-800 mb-4">Why Choose Our X-Ray Services?</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center bg-white rounded-lg shadow-sm p-6 border border-teal-50">
                <div className="bg-teal-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                  <IconComponent className="h-7 w-7 text-teal-600" />
                </div>
                <h4 className="text-xl font-bold text-teal-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
