import { Zap, Shield, Clock, Award } from "lucide-react"

export default function XrayServices() {
  const services = [
    {
      title: "Chest X-Ray",
      description: "Comprehensive chest imaging for respiratory and cardiac evaluation",
      price: "$89",
    },
    {
      title: "Bone X-Ray",
      description: "Detailed bone imaging for fractures, arthritis, and joint problems",
      price: "$79",
    },
    {
      title: "Abdominal X-Ray",
      description: "Abdominal imaging for digestive system evaluation",
      price: "$95",
    },
    {
      title: "Spine X-Ray",
      description: "Spinal imaging for back pain and posture assessment",
      price: "$99",
    },
  ]

  const features = [
    {
      icon: Zap,
      title: "Digital Technology",
      description: "Latest digital X-ray equipment for superior image quality",
    },
    {
      icon: Shield,
      title: "Low Radiation",
      description: "Minimal radiation exposure with advanced safety protocols",
    },
    {
      icon: Clock,
      title: "Quick Results",
      description: "Fast processing with results available within hours",
    },
    {
      icon: Award,
      title: "Expert Analysis",
      description: "Certified radiologists provide detailed interpretations",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">X-Ray Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive X-ray imaging services for accurate diagnosis and treatment planning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-2xl font-bold text-green-600">{service.price}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our X-Ray Services?</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
