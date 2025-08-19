"use client";

export default function AboutUsTeam() {
  const team = [
    {
      name: "Dr. Sarah Wilson",
      role: "Chief Medical Officer",
      image: "/profile.svg?height=300&width=300&text=Sarah+Wilson",
      bio: "Board-certified physician with 15+ years of experience in internal medicine and telemedicine.",
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Head of Radiology",
      image: "/profile.svg?height=300&width=300&text=Michael+Rodriguez",
      bio: "Expert radiologist specializing in diagnostic imaging with advanced training in digital radiology.",
    },
    {
      name: "Dr. Emily Chen",
      role: "Laboratory Director",
      image: "/profile.svg?height=300&width=300&text=Emily+Chen",
      bio: "Clinical pathologist with expertise in laboratory medicine and diagnostic testing protocols.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">
            Meet Partner With Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Our dedicated professionals are here to ensure top-tier healthcare with compassion and precision.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <span className="inline-block mt-2 mb-4 px-3 py-1 text-sm font-semibold text-teal-700 bg-teal-100 rounded-full">
                  {member.role}
                </span>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
