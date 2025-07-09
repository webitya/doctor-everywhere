export default function AboutUsTeam() {
  const team = [
    {
      name: "Dr. Sarah Wilson",
      role: "Chief Medical Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Board-certified physician with 15+ years of experience in internal medicine and telemedicine.",
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Head of Radiology",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert radiologist specializing in diagnostic imaging with advanced training in digital radiology.",
    },
    {
      name: "Dr. Emily Chen",
      role: "Laboratory Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Clinical pathologist with expertise in laboratory medicine and diagnostic testing protocols.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of medical professionals is committed to providing you with the highest quality
            healthcare services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
