"use client"

import WhatsAppIcon from "@mui/icons-material/WhatsApp"

const DoctorSpecialtyGrid = () => { 

const specialties = [
  // 1st line
  {
    name: "Orthopedics",
    image: "/placeholder.svg?height=150&width=200&text=Orthopedics&bg-color=14b8a6",
    whatsappMessage:
      "Hello, I would like to book an orthopedics consultation for bone or joint concerns. Please help me schedule an appointment.",
  },
  {
    name: "Neurology",
    image: "/placeholder.svg?height=150&width=200&text=Neurology&bg-color=0d9488",
    whatsappMessage:
      "Hello, I would like to consult a neurologist for nerve or brain-related concerns. Please help me book an appointment.",
  },
  {
    name: "General Physician",
    image: "/placeholder.svg?height=150&width=200&text=General+Physician&bg-color=14b8a6",
    whatsappMessage:
      "Hello, I would like to consult with a General Physician. Please help me book an appointment.",
  },
  {
    name: "Gynecology",
    image: "/placeholder.svg?height=150&width=200&text=Gynecology&bg-color=0d9488",
    whatsappMessage:
      "Hello, I need a gynecology consultation. Could you please help me schedule an appointment?",
  },

  // 2nd line
  {
    name: "Cardiology",
    image: "/placeholder.svg?height=150&width=200&text=Cardiology&bg-color=14b8a6",
    whatsappMessage:
      "Hello, I would like to book a cardiology consultation for heart-related concerns. Please let me know available slots.",
  },
  {
    name: "Dermatology",
    image: "/placeholder.svg?height=150&width=200&text=Dermatology&bg-color=0d9488",
    whatsappMessage:
      "Hello, I would like to book a dermatology consultation for skin concerns. Please advise on availability.",
  },
  {
    name: "Emergency Medicine",
    image: "/placeholder.svg?height=150&width=200&text=Emergency+Medicine&bg-color=14b8a6",
    whatsappMessage:
      "Hello, I need urgent medical attention and would like to consult an emergency medicine specialist. Please assist immediately.",
  },
  {
    name: "Family Medicine",
    image: "/placeholder.svg?height=150&width=200&text=Family+Medicine&bg-color=0d9488",
    whatsappMessage:
      "Hello, I would like to consult a family medicine doctor for general health care. Please help me book an appointment.",
  },
  {
    name: "Gastroenterology",
    image: "/placeholder.svg?height=150&width=200&text=Gastroenterology&bg-color=14b8a6",
    whatsappMessage:
      "Hello, I have digestive health concerns and would like to consult a gastroenterologist. Please help me schedule an appointment.",
  },
  {
    name: "General Surgery",
    image: "/placeholder.svg?height=150&width=200&text=General+Surgery&bg-color=0d9488",
    whatsappMessage:
      "Hello, I would like to consult a general surgeon regarding a surgical procedure. Please help me book an appointment.",
  },
  {
    name: "Internal Medicine",
    image: "/placeholder.svg?height=150&width=200&text=Internal+Medicine&bg-color=14b8a6",
    whatsappMessage:
      "Hello, I would like to consult an internal medicine doctor for overall health management. Please assist with booking.",
  },
  {
    name: "Neurology",
    image: "/placeholder.svg?height=150&width=200&text=Neurology&bg-color=0d9488",
    whatsappMessage:
      "Hello, I would like to consult a neurologist for nerve or brain-related concerns. Please help me book an appointment.",
  },
  {
    name: "Ophthalmology",
    image: "/placeholder.svg?height=150&width=200&text=Ophthalmology&bg-color=14b8a6",
    whatsappMessage:
      "Hello, I would like to book an ophthalmology consultation for eye-related concerns. Please advise on availability.",
  },
  {
    name: "Pediatrics",
    image: "/placeholder.svg?height=150&width=200&text=Pediatrics&bg-color=0d9488",
    whatsappMessage:
      "Hello, I would like to consult a pediatrician for my child's health concerns. Please help me schedule an appointment.",
  },
  {
    name: "Psychiatry",
    image: "/placeholder.svg?height=150&width=200&text=Psychiatry&bg-color=14b8a6",
    whatsappMessage:
      "Hello, I need a psychiatric consultation for mental health concerns. Please help me schedule an appointment.",
  },
  {
    name: "Urology",
    image: "/placeholder.svg?height=150&width=200&text=Urology&bg-color=0d9488",
    whatsappMessage:
      "Hello, I would like to consult a urologist for urinary or kidney concerns. Please help me book an appointment.",
  },
];


  const handleWhatsAppClick = (specialty) => {
    const message = encodeURIComponent(specialty.whatsappMessage)
    const whatsappUrl = `https://wa.me/919693245941?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const handleViewAll = () => {
    const doctorsSection = document.getElementById("doctors-list")
    if (doctorsSection) {
      doctorsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Consult Doctor by Specialty</h2>
            <p className="text-gray-600">Select specialty to find relevant doctors</p>
          </div>
          <button
            onClick={handleViewAll}
            className="mt-4 sm:mt-0 px-6 py-2 border-2 border-teal-600 text-teal-600 rounded-lg font-medium hover:bg-teal-50 transition-colors duration-200"
          >
            View All Doctors
          </button>
        </div>
        {/* Specialties Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-24">
                <img
                  src={specialty.image || "/placeholder.svg"}
                  alt={specialty.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-teal-900 bg-opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center p-2">
                  <h3 className="text-white font-semibold text-center text-sm">{specialty.name}</h3>
                </div>
              </div>
              {/* WhatsApp Button */}
              <div className="p-3">
                <button
                  onClick={() => handleWhatsAppClick(specialty)}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-3 rounded-md text-sm font-medium flex items-center justify-center transition-colors duration-200"
                >
                  <WhatsAppIcon className="h-4 w-4 mr-1" />
                 Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DoctorSpecialtyGrid
