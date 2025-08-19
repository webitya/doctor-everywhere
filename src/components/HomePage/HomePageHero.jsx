"use client";

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const HomePageHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "doctor-consultation",
  })
  const [modal, setModal] = useState(null)
  const [showFormModal, setShowFormModal] = useState(false) // mobile form modal

  /* ───── slides ───── */
  const slides = [
    {
      title: "Advanced X-Ray Services",
      subtitle: "State-of-the-art imaging technology",
      image: "/images/homeslide1.jpg",
    },
    {
      title: "Doctor Consultation",
      subtitle: "Talk to certified doctors anytime",
      image: "/images/homeslide2.jpg",
    },
    {
      title: "Blood Test at Home",
      subtitle: "Fast and reliable test collection",
      image: "/images/homeslide3.jpg",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const prevSlide = () => {
    setCurrentSlide((p) => (p - 1 + slides.length) % slides.length)
  }

  const nextSlide = () => {
    setCurrentSlide((p) => (p + 1) % slides.length)
  }

  /* ───── form handler ───── */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setModal({ type: "success", message: "Booking successful!" })
        setForm({ name: "", phone: "", service: "doctor-consultation" })
        setShowFormModal(false)
      } else {
        throw new Error("Something went wrong")
      }
    } catch (err) {
      setModal({ type: "error", message: err.message })
    }
  }

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Slides */}
      <AnimatePresence>
        {slides.map((slide, i) =>
          i === currentSlide ? (
            <motion.div
              key={i}
              className="absolute inset-0 bg-cover bg-center flex items-center justify-start px-10"
              style={{ backgroundImage: `url(${slide.image})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/15" />

              {/* Text */}
              <div className="relative text-white max-w-xl">
                <h1 className="text-5xl font-extrabold drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="mt-4 text-lg drop-shadow-md">{slide.subtitle}</p>
                <button
                  onClick={() => setShowFormModal(true)}
                  className="mt-6 px-6 py-3 bg-teal-600 rounded-lg text-white font-semibold shadow-md hover:bg-teal-700 transition"
                >
                  Book Appointment
                </button>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Quick Booking Form - desktop only */}
      <div className="hidden md:block absolute top-1/2 right-12 transform -translate-y-1/2 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl w-full max-w-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Quick Booking
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
            required
          />
          <select
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
          >
            <option value="doctor-consultation">Doctor Consultation</option>
            <option value="xray">X-Ray</option>
            <option value="blood-test">Blood Test</option>
          </select>
          <button
            type="submit"
            className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition"
          >
            Book Appointment
          </button>
        </form>
      </div>

      {/* Mobile Modal for Quick Booking */}
      <AnimatePresence>
        {showFormModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Quick Booking
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                  required
                  autoFocus
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                  required
                />
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                >
                  <option value="doctor-consultation">Doctor Consultation</option>
                  <option value="xray">X-Ray</option>
                  <option value="blood-test">Blood Test</option>
                </select>
                <button
                  type="submit"
                  className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition"
                >
                  Book Appointment
                </button>
              </form>
              <button
                onClick={() => setShowFormModal(false)}
                className="mt-4 w-full py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Toast Modal */}
      {modal && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-xl shadow-lg text-center">
          <p
            className={
              modal.type === "success" ? "text-green-600" : "text-red-600"
            }
          >
            {modal.message}
          </p>
        </div>
      )}
    </div>
  )
}

export default HomePageHero
