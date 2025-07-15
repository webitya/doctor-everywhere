import Link from "next/link"
import { Stethoscope, TestTube, X, Clock, Shield, Users } from "lucide-react"

export default function HomePageServices() {
  const services = [
    {
      icon: Stethoscope,
      title: "Doctor Consultation",
      description: "Connect with qualified doctors for online consultations and medical advice.",
      link: "/doctor-consultation",
      color: "bg-teal-600",
    },
    {
      icon: TestTube,
      title: "Blood Test",
      description: "Comprehensive blood testing packages with accurate results and fast turnaround.",
      link: "/blood-test",
      color: "bg-rose-500",
    },
    {
      icon: X,
      title: "X-Ray Services",
      description: "Advanced imaging services with state-of-the-art equipment and expert analysis.",
      link: "/xray",
      color: "bg-emerald-600",
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare solutions designed to meet all your medical needs with convenience and quality care.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                </div>
                <Link
                  href={service.link}
                  className="inline-block text-center w-full px-5 py-2 mt-auto bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition"
                >
                  Learn More
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
            const Icon = feature.icon
            return (
              <div key={index} className="bg-teal-50 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow">
                  <Icon className="h-7 w-7 text-teal-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
