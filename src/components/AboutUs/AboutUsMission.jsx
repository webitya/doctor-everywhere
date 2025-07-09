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
      description: "Compassion, integrity, excellence, and innovation guide everything we do in serving our patients.",
    },
    {
      icon: Globe,
      title: "Our Vision",
      description:
        "To be the leading platform for accessible healthcare, connecting patients with quality medical services worldwide.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
