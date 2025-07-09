import { Star } from "lucide-react"

export default function HomePageTestimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Excellent service! The online consultation was convenient and the doctor was very professional. Highly recommended!",
    },
    {
      name: "Michael Chen",
      role: "Patient",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Quick and accurate blood test results. The staff was friendly and the process was seamless from booking to results.",
    },
    {
      name: "Emily Davis",
      role: "Patient",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The X-ray service was efficient and the radiologist explained everything clearly. Great experience overall!",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read testimonials from our satisfied patients who have experienced our quality healthcare services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
