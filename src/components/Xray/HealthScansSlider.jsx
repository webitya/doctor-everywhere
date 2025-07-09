"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, X, Calendar, Clock, User, Phone, Mail, MessageCircle } from "lucide-react"

export default function HealthScansSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTest, setSelectedTest] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  })

  // Array of health scans and imaging tests
  const healthScans = [
    {
      id: 1,
      name: "Ultrasound",
      price: "₹429",
      icon: "🔊",
      description: "Non-invasive imaging using sound waves for internal organ examination",
      whatsappMessage: "Hello, I would like to book an Ultrasound scan. Please help me schedule an appointment.",
      details: "Ultrasound uses high-frequency sound waves to create images of organs and structures inside the body.",
    },
    {
      id: 2,
      name: "CT Scan",
      price: "₹900",
      icon: "🏥",
      description: "Detailed cross-sectional images using X-ray technology",
      whatsappMessage: "Hello, I need to book a CT Scan. Could you please help me schedule an appointment?",
      details: "CT scan combines X-ray images taken from different angles to create cross-sectional images.",
    },
    {
      id: 3,
      name: "MRI Scan",
      price: "₹1499",
      icon: "🧲",
      description: "High-resolution imaging using magnetic fields and radio waves",
      whatsappMessage: "Hello, I would like to book an MRI Scan. Please advise on available slots.",
      details: "MRI uses strong magnetic fields and radio waves to generate detailed images of organs and tissues.",
    },
    {
      id: 4,
      name: "ECG Test",
      price: "₹149",
      icon: "💓",
      description: "Heart rhythm and electrical activity monitoring",
      whatsappMessage: "Hello, I need an ECG Test for heart monitoring. Please help me book an appointment.",
      details: "ECG records the electrical activity of the heart to detect heart problems.",
    },
    {
      id: 5,
      name: "Echo Test",
      price: "₹1350",
      icon: "❤️",
      description: "Ultrasound examination of the heart structure and function",
      whatsappMessage: "Hello, I would like to book an Echo Test for heart examination. Please help me schedule.",
      details: "Echocardiogram uses ultrasound to create images of the heart's chambers, valves, and walls.",
    },
    {
      id: 6,
      name: "TMT Test",
      price: "₹1109",
      icon: "🏃",
      description: "Treadmill test to evaluate heart function during exercise",
      whatsappMessage: "Hello, I need a TMT Test (Treadmill Test). Could you please help me book an appointment?",
      details: "TMT evaluates heart function and blood flow during physical stress on a treadmill.",
    },
    {
      id: 7,
      name: "X-Ray",
      price: "₹299",
      icon: "🦴",
      description: "Basic imaging for bones, chest, and internal structures",
      whatsappMessage: "Hello, I would like to book an X-Ray examination. Please help me schedule an appointment.",
      details: "X-Ray uses electromagnetic radiation to create images of bones and internal structures.",
    },
    {
      id: 8,
      name: "Mammography",
      price: "₹1200",
      icon: "🎗️",
      description: "Specialized breast imaging for early cancer detection",
      whatsappMessage: "Hello, I need to book a Mammography screening. Please help me schedule an appointment.",
      details: "Mammography is specialized breast imaging used for early detection of breast cancer.",
    },
    {
      id: 9,
      name: "Bone Density",
      price: "₹800",
      icon: "🦴",
      description: "DEXA scan to measure bone mineral density",
      whatsappMessage: "Hello, I would like to book a Bone Density test. Please advise on availability.",
      details: "DEXA scan measures bone mineral density to diagnose osteoporosis and fracture risk.",
    },
    {
      id: 10,
      name: "PET Scan",
      price: "₹15000",
      icon: "🔬",
      description: "Advanced imaging to detect cancer and other diseases",
      whatsappMessage: "Hello, I need to book a PET Scan. Could you please help me schedule an appointment?",
      details: "PET scan uses radioactive sugar to detect cancer cells and other diseases in the body.",
    },
  ]

  const itemsPerSlide = 6
  const totalSlides = Math.ceil(healthScans.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getCurrentItems = () => {
    const startIndex = currentSlide * itemsPerSlide
    return healthScans.slice(startIndex, startIndex + itemsPerSlide)
  }

  const handleViewDetails = (test) => {
    setSelectedTest(test)
    setIsModalOpen(true)
  }

  const handleWhatsAppClick = (test) => {
    const message = encodeURIComponent(test.whatsappMessage)
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
          service: "Health Scan",
          testType: selectedTest.name,
          notes: `${selectedTest.name} - ${selectedTest.price}. ${formData.notes}`,
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

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-teal-600 mb-4">Health Scans & Imaging Tests</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive diagnostic imaging services with advanced technology and expert analysis
            </p>
          </div>

          <div className="relative">
            {/* Slider Container */}
            <div className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                {getCurrentItems().map((test) => (
                  <div
                    key={test.id}
                    className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="text-4xl mb-4">{test.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{test.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{test.description}</p>
                    <div className="text-lg font-bold text-teal-600 mb-4">Starting @ {test.price}</div>

                    <div className="space-y-2">
                      <button
                        onClick={() => handleViewDetails(test)}
                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => handleWhatsAppClick(test)}
                        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                      >
                        <MessageCircle className="h-4 w-4 mr-1" />
                        WhatsApp
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {totalSlides > 1 && (
              <div className="flex justify-center mt-8 space-x-4">
                <button
                  onClick={prevSlide}
                  className="bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full transition-colors duration-200"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full transition-colors duration-200"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}

            {/* Slide Indicators */}
            {totalSlides > 1 && (
              <div className="flex justify-center mt-4 space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentSlide ? "bg-teal-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Details Modal */}
      {isModalOpen && selectedTest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-bold text-gray-900">Book {selectedTest.name}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">{selectedTest.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900">{selectedTest.name}</h4>
                <p className="text-teal-600 font-bold text-xl">{selectedTest.price}</p>
                <p className="text-gray-600 mt-2">{selectedTest.details}</p>
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
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                    className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div className="relative">
                    <Clock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <input
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                  placeholder="Any specific requirements (optional)"
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
                    className="flex-1 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    Book Test
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
