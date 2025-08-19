import { Star } from "lucide-react"

export default function HomePageTestimonials() {
  const testimonials = [
    {
      name: "Anjali Mehta",
      role: "Patient, Gurgaon",
      image: "/placeholder.svg?height=80&width=80&text=A",
      rating: 5,
      text: "The doctor consultation was really smooth and helpful. I'm thankful for the quick diagnosis and advice.",
    },
    {
      name: "Rohit Sharma",
      role: "Patient, Gurgaon",
      image: "/placeholder.svg?height=80&width=80&text=R",
      rating: 5,
      text: "Got my blood test results within hours. Hassle-free service and very professional lab staff!",
    },
    {
      name: "Priya Verma",
      role: "Patient, Gurgaon",
      image: "/placeholder.svg?height=80&width=80&text=P",
      rating: 5,
      text: "X-Ray center was well-equipped, and the doctor took time to explain everything. Excellent experience!",
    },
  ]

  return (
    <section className="py-16 bg-teal-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">What Our Patients Say</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Real stories from people who trusted our healthcare services.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col justify-between"
            >
              <div>
                {/* Rating */}
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                  ))}
                </div>

                {/* Message */}
                <p className="text-gray-700 text-sm italic mb-6">"{testimonial.text}"</p>
              </div>

              {/* User Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
