"use client"

import WhatsAppIcon from "@mui/icons-material/WhatsApp"

export default function DoctorConsultationSpecialties() {  
  
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Wilson",
      specialization: "Cardiologist",
      experience: "15+ years",
      image: "/profile.svg?height=300&width=300",
      rating: 4.9,
      consultationFee: "$150",
      availability: "Mon-Fri: 9AM-5PM",
      whatsappNumber: "9693245941",
      whatsappMessage:
        "Hello Dr. Sarah Wilson, I would like to book a cardiology consultation. Please let me know your available slots.",
    },
    {
      id: 2,
      name: "Dr. Michael Rodriguez",
      specialization: "Neurologist",
      experience: "12+ years",
      image: "/profile.svg?height=300&width=300",
      rating: 4.8,
      consultationFee: "$180",
      availability: "Mon-Sat: 10AM-6PM",
      whatsappNumber: "9693245941",
      whatsappMessage:
        "Hello Dr. Michael Rodriguez, I need a neurology consultation. Could you please help me schedule an appointment?",
    },
    {
      id: 3,
      name: "Dr. Emily Chen",
      specialization: "Pediatrician",
      experience: "10+ years",
      image: "/profile.svg?height=300&width=300",
      rating: 4.9,
      consultationFee: "$120",
      availability: "Mon-Fri: 8AM-4PM",
      whatsappNumber: "9693245941",
      whatsappMessage:
        "Hello Dr. Emily Chen, I would like to book a pediatric consultation for my child. Please advise on available timings.",
    },
    {
      id: 4,
      name: "Dr. James Thompson",
      specialization: "Orthopedic Surgeon",
      experience: "18+ years",
      image: "/profile.svg?height=300&width=300",
      rating: 4.7,
      consultationFee: "$200",
      availability: "Tue-Sat: 11AM-7PM",
      whatsappNumber: "9693245941",
      whatsappMessage:
        "Hello Dr. James Thompson, I have orthopedic concerns and would like to schedule a consultation. Please let me know your availability.",
    },
    {
      id: 5,
      name: "Dr. Lisa Anderson",
      specialization: "Dermatologist",
      experience: "8+ years",
      image: "/profile.svg?height=300&width=300",
      rating: 4.8,
      consultationFee: "$130",
      availability: "Mon-Fri: 9AM-5PM",
      whatsappNumber: "9693245941",
      whatsappMessage:
        "Hello Dr. Lisa Anderson, I need a dermatology consultation for skin concerns. Could you please help me book an appointment?",
    },
    {
      id: 6,
      name: "Dr. Robert Kumar",
      specialization: "General Physician",
      experience: "20+ years",
      image: "/profile.svg?height=300&width=300",
      rating: 4.9,
      consultationFee: "$100",
      availability: "Mon-Sun: 8AM-8PM",
      whatsappNumber: "9693245941",
      whatsappMessage:
        "Hello Dr. Robert Kumar, I would like to book a general consultation. Please let me know your available slots.",
    },
    {
      id: 7,
      name: "Dr. Maria Garcia",
      specialization: "Gynecologist",
      experience: "14+ years",
      image: "/profile.svg?height=300&width=300",
      rating: 4.8,
      consultationFee: "$160",
      availability: "Mon-Fri: 10AM-6PM",
      whatsappNumber: "9693245941",
      whatsappMessage:
        "Hello Dr. Maria Garcia, I need a gynecology consultation. Could you please help me schedule an appointment?",
    },
    {
      id: 8,
      name: "Dr. David Lee",
      specialization: "Ophthalmologist",
      experience: "11+ years",
      image: "/profile.svg?height=300&width=300",
      rating: 4.7,
      consultationFee: "$140",
      availability: "Tue-Sat: 9AM-5PM",
      whatsappNumber: "9693245941",
      whatsappMessage:
        "Hello Dr. David Lee, I have eye-related concerns and would like to book an ophthalmology consultation. Please advise on availability.",
    },
    {
      id: 9,
      name: "Dr. Jennifer Brown",
      specialization: "Psychiatrist",
      experience: "13+ years",
      image: "/profile.svg?height=300&width=300",
      rating: 4.9,
      consultationFee: "$170",
      availability: "Mon-Fri: 11AM-7PM",
      whatsappNumber: "9693245941",
      whatsappMessage:
        "Hello Dr. Jennifer Brown, I would like to schedule a psychiatric consultation. Please let me know your available timings.",
    },
    {
      id: 10,
      name: "Dr. Ahmed Hassan",
      specialization: "Urologist",
      experience: "16+ years",
      image: "/profile.svg?height=300&width=300",
      rating: 4.8,
      consultationFee: "$180",
      availability: "Mon-Sat: 10AM-6PM",
      whatsappNumber: "9693245941",
      whatsappMessage:
        "Hello Dr. Ahmed Hassan, I need a urology consultation. Could you please help me book an appointment?",
    },
    {
      id: 11,
      name: "Dr. Rachel Green",
      specialization: "Endocrinologist",
      experience: "9+ years",
      image: "/profile.svg?height=300&width=300",
      rating: 4.7,
      consultationFee: "$150",
      availability: "Mon-Fri: 9AM-5PM",
      whatsappNumber: "9693245941",
      whatsappMessage:
        "Hello Dr. Rachel Green, I would like to book an endocrinology consultation for hormone-related concerns. Please advise on availability.",
    },
    {
      id: 12,
      name: "Dr. Kevin Park",
      specialization: "Gastroenterologist",
      experience: "12+ years",
      image: "/profile.svg?height=300&width=300",
      rating: 4.8,
      consultationFee: "$160",
      availability: "Tue-Sat: 10AM-6PM",
      whatsappNumber: "9693245941",
      whatsappMessage:
        "Hello Dr. Kevin Park, I have digestive health concerns and would like to schedule a gastroenterology consultation. Please let me know your availability.",
    },
  ]

  const handleWhatsAppClick = (doctor) => {
    const message = encodeURIComponent(doctor.whatsappMessage)
    const whatsappUrl = `https://wa.me/91${doctor.whatsappNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="doctors-list" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-teal-900 mb-4">Our Expert Doctors</h2>
          <p className="text-xl text-teal-700 max-w-3xl mx-auto">
            Connect with our qualified doctors across various specialties. Chat directly on WhatsApp for instant
            consultation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-lg shadow-lg border border-teal-100 overflow-hidden hover:shadow-xl hover:border-teal-200 transition-all duration-300"
            >
              <div className="relative">
                <img src={doctor.image || "/placeholder.svg"} alt={doctor.name} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 text-sm font-semibold text-teal-700 shadow-md">
                  ⭐ {doctor.rating}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-900 mb-1">{doctor.name}</h3>
                <p className="text-teal-600 font-semibold mb-2">{doctor.specialization}</p>
                <p className="text-teal-700 text-sm mb-2">Experience: {doctor.experience}</p>
                <p className="text-teal-700 text-sm mb-4">{doctor.availability}</p>
                <div className="space-y-2">
                  <button
                    onClick={() => handleWhatsAppClick(doctor)}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center shadow-md hover:shadow-lg"
                  >
                    <WhatsAppIcon className="h-5 w-5 mr-2" />
                    Chat on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
