"use client"

import { Zap, Shield, Clock, Award } from "lucide-react"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import { motion } from "framer-motion"

export default function XrayServices() {
  const services = [
    {
      title: "Chest X-Ray",
      description: "Comprehensive chest imaging for respiratory and cardiac evaluation.",
      price: "₹899",
    },
    {
      title: "Bone X-Ray",
      description: "Detailed bone imaging for fractures, arthritis, and joint problems.",
      price: "₹799",
    },
    {
      title: "Abdominal X-Ray",
      description: "Abdominal imaging for digestive system evaluation.",
      price: "₹959",
    },
    {
      title: "Spine X-Ray",
      description: "Spinal imaging for back pain and posture assessment.",
      price: "₹999",
    },
    {
      title: "Dental X-Ray",
      description: "Focused imaging for dental health and oral structures.",
      price: "₹599",
    },
    {
      title: "Joint X-Ray",
      description: "Specific imaging for joint injuries, pain, and mobility issues.",
      price: "₹749",
    },
    {
      title: "Skull X-Ray",
      description: "Imaging of the skull for head injuries or structural abnormalities.",
      price: "₹849",
    },
    {
      title: "Extremity X-Ray",
      description: "Imaging for arms, legs, hands, and feet to diagnose injuries.",
      price: "₹699",
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

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/message/NR7BCWYYMPAOC1`
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
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center border border-teal-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-teal-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{service.description}</p>
              {/* Book Now Button */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2.5 px-4 rounded-lg font-semibold flex items-center justify-center shadow-md cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
              >
                <WhatsAppIcon className="h-5 w-5 mr-2" />
                Book Now
              </button>
            </motion.div>
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
              <motion.div
                key={index}
                className="text-center bg-white rounded-lg shadow-sm p-6 border border-teal-50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-teal-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                  <IconComponent className="h-7 w-7 text-teal-600" />
                </div>
                <h4 className="text-xl font-bold text-teal-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
