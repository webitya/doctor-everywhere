"use client"
import { useState } from "react"
import { X, Calendar, Clock, User, Phone, Mail, MessageCircle } from "lucide-react"

export default function DoctorSpecialtyGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedSpecialty, setSelectedSpecialty] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  })

  const specialties = [
    {
      name: "General Physician",
      image: "/placeholder.svg?height=200&width=300",
      whatsappMessage: "Hello, I would like to consult with a General Physician. Please help me book an appointment.",
    },
    {
      name: "Gynaecology",
      image: "/placeholder.svg?height=200&width=300",
      whatsappMessage: "Hello, I need a gynecology consultation. Could you please help me schedule an appointment?",
    },
    {
      name: "Dermatology",
      image: "/placeholder.svg?height=200&width=300",
      whatsappMessage:
        "Hello, I would like to book a dermatology consultation for skin concerns. Please advise on availability.",
    },
    {
      name: "Diabetology",
      image: "/placeholder.svg?height=200&width=300",
      whatsappMessage:
        "Hello, I need a diabetology consultation for diabetes management. Please help me book an appointment.",
    },
    {
      name: "Gastroenterology",
      image: "/placeholder.svg?height=200&width=300",
      whatsappMessage:
        "Hello, I have digestive health concerns and would like to consult a gastroenterologist. Please help me schedule an appointment.",
    },
    {
      name: "Cardiology",
      image: "/placeholder.svg?height=200&width=300",
      whatsappMessage:
        "Hello, I would like to book a cardiology consultation for heart-related concerns. Please let me know available slots.",
    },
    {
      name: "Sexology",
      image: "/placeholder.svg?height=200&width=300",
      whatsappMessage:
        "Hello, I would like to consult with a sexologist. Please help me book a confidential appointment.",
    },
    {
      name: "Psychiatry",
      image: "/placeholder.svg?height=200&width=300",
      whatsappMessage:
        "Hello, I need a psychiatric consultation for mental health concerns. Please help me schedule an appointment.",
    },
    {
      name: "ENT",
      image: "/placeholder.svg?height=200&width=300",
      whatsappMessage:
        "Hello, I have ENT (Ear, Nose, Throat) concerns and would like to book a consultation. Please advise on availability.",
    },
    {
      name: "Endocrinology",
      image: "/placeholder.svg?height=200&width=300",
      whatsappMessage:
        "Hello, I would like to book an endocrinology consultation for hormone-related concerns. Please help me schedule an appointment.",
    },
  ]

  const handleSpecialtyClick = (specialty) => {
    setSelectedSpecialty(specialty.name)
    setIsModalOpen(true)
  }

  const handleWhatsAppClick = (specialty) => {
    const message = encodeURIComponent(specialty.whatsappMessage)
    const whatsappUrl = `https://wa.me/919693245941?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: "Doctor Consultation",
          specialty: selectedSpecialty,
        }),
      })

      if (response.ok) {
        alert("Booking request sent successfully!")
        setFormData({ name: "", email: "", phone: "", date: "", time: "", notes: "" })
        setIsModalOpen(false)
      }
    } catch (error) {
      alert("Failed to send booking request")
    }
  }

  const handleViewAll = () => {
    const doctorsSection = document.getElementById("doctors-list")
    if (doctorsSection) {
      doctorsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Consult Doctor by Specialty</h2>
              <p className="text-gray-600">Select specialty to find relevant doctors</p>
            </div>
            <button
              onClick={handleViewAll}
              className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              View all
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {specialties.map((specialty, index) => (
              <div key={index} className="group cursor-pointer">
                <div
                  className="relative h-32 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  onClick={() => handleSpecialtyClick(specialty)}
                >
                  <img
                    src={specialty.image || "/placeholder.svg"}
                    alt={specialty.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white font-semibold text-center px-2">{specialty.name}</h3>
                  </div>
                </div>

                {/* WhatsApp button for each specialty */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleWhatsAppClick(specialty)
                  }}
                  className="w-full mt-2 bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center"
                >
                  <MessageCircle className="h-4 w-4 mr-1" />
                  Chat on WhatsApp
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-bold text-gray-900">Book {selectedSpecialty} Consultation</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-4 space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Full Name"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Phone Number"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Clock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <input
                    type="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Symptoms or concerns (optional)"
              />

              <div className="flex space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
