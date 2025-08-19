import { Target, Heart, Globe } from "lucide-react"

export default function AboutUsMission() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide accessible, high-quality healthcare services through innovative technology and compassionate care.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "Compassion, integrity, excellence, and innovation guide everything we do in serving our patients.",
    },
    {
      icon: Globe,
      title: "Our Vision",
      description:
        "To be the leading platform for accessible healthcare, connecting patients with quality medical services worldwide.",
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-teal-800 mb-2">Our Purpose & Principles</h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            We are driven by a mission to transform healthcare for all, guided by strong values and a global vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-100 mx-auto mb-3">
                  <Icon className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-base font-semibold text-teal-800 mb-1">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
