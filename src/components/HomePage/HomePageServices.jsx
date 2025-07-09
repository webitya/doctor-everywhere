import Link from "next/link"
import { Stethoscope, TestTube, X, Clock, Shield, Users } from "lucide-react"

export default function HomePageServices() {
  const services = [
    {
      icon: Stethoscope,
      title: "Doctor Consultation",
      description: "Connect with qualified doctors for online consultations and medical advice.",
      link: "/doctor-consultation",
      color: "bg-blue-500",
    },
    {
      icon: TestTube,
      title: "Blood Test",
      description: "Comprehensive blood testing packages with accurate results and fast turnaround.",
      link: "/blood-test",
      color: "bg-red-500",
    },
    {
      icon: X,
      title: "X-Ray Services",
      description: "Advanced imaging services with state-of-the-art equipment and expert analysis.",
      link: "/xray",
      color: "bg-green-500",
    },
  ]

  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock medical services whenever you need them.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your health data is protected with enterprise-grade security.",
    },
    {
      icon: Users,
      title: "Expert Doctors",
      description: "Qualified and experienced medical professionals at your service.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare solutions designed to meet all your medical needs with convenience and quality
            care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Learn More
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            )
          })}
        </div>

        {/* Features Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose DoctorEveryWhere?</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-blue-600" />
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
