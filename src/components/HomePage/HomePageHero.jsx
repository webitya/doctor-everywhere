"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  User,
  X,
} from "lucide-react"

/**
 * Home page hero with auto‑advancing image slider + quick‑booking form.
 * - Accent palette: teal‑600 / teal‑700 on white
 * - Accessible focus rings & hover states
 * - Form stacks below the text on small screens (per Aditya’s preference)
 */
export default function HomePageHero() {
  /* ──────────────────────── state ──────────────────────── */
  const [currentSlide, setCurrentSlide] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "doctor-consultation",
    date: "",
    time: "",
  })
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({ type: "", message: "" })

  /* ──────────────────────── slides ──────────────────────── */
  const slides = [
    {
      image:
        "/placeholder.svg?height=640&width=1280&text=Expert Medical Care&bg-color=14b8a6",
      title: "Expert Medical Care",
      subtitle: "Connect with qualified doctors anytime",
    },
    {
      image:
        "/placeholder.svg?height=640&width=1280&text=Comprehensive Blood Tests&bg-color=0d9488",
      title: "Comprehensive Blood Tests",
      subtitle: "Accurate results with fast turnaround",
    },
    {
      image:
        "/placeholder.svg?height=640&width=1280&text=Advanced X‑Ray Services&bg-color=0f766e",
      title: "Advanced X‑Ray Services",
      subtitle: "State‑of‑the‑art imaging technology",
    },
  ]

  /* ───────── auto‑advance every 5 s; pause on hover (optional) ───────── */
  useEffect(() => {
    const id = setInterval(
      () => setCurrentSlide((p) => (p + 1) % slides.length),
      5000,
    )
    return () => clearInterval(id)
  }, [slides.length])

  /* ──────────────────────── handlers ──────────────────────── */
  const next = () => setCurrentSlide((p) => (p + 1) % slides.length)
  const prev = () =>
    setCurrentSlide((p) => (p - 1 + slides.length) % slides.length)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: formData.service.replace("-", " "),
          notes: "Quick booking from homepage",
        }),
      })

      if (res.ok) {
        setModalContent({
          type: "success",
          message:
            "Your booking request has been sent successfully! We will contact you shortly.",
        })
        setShowModal(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "doctor-consultation",
          date: "",
          time: "",
        })
      } else {
        const { message } = await res.json()
        throw new Error(message || "Failed to send booking request.")
      }
    } catch (err) {
      setModalContent({ type: "error", message: err.message })
      setShowModal(true)
    }
  }

  /* ──────────────────────── render ──────────────────────── */
  return (
    <section className="container mx-auto px-4 flex items-center justify-center min-h-[80vh] lg:min-h-[90vh]">
      {/* ░░░░░░░░░░░░░░ background slider + overlay ░░░░░░░░░░░░░░ */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence>
          {slides.map(
            (slide, i) =>
              i === currentSlide && (
                <motion.img
                  key={i}
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  onError={(e) =>
                    (e.currentTarget.style.backgroundColor = "#0f766e")
                  }
                />
              ),
          )}
        </AnimatePresence>

        {/* subtle dark‑to‑transparent gradient for better text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent" />
      </div>

      {/* ░░░░░░░░░░░░░░ slider controls ░░░░░░░░░░░░░░ */}
      <button
        aria-label="Previous slide"
        onClick={prev}
        className="group absolute inset-y-0 left-0 grid w-12 place-items-center
                   text-white/90 hover:text-white focus-visible:outline-none
                   focus-visible:ring-2 focus-visible:ring-teal-400"
      >
        <ChevronLeft className="h-6 w-6 drop-shadow-md transition group-hover:-translate-x-1" />
      </button>
      <button
        aria-label="Next slide"
        onClick={next}
        className="group absolute inset-y-0 right-0 grid w-12 place-items-center
                   text-white/90 hover:text-white focus-visible:outline-none
                   focus-visible:ring-2 focus-visible:ring-teal-400"
      >
        <ChevronRight className="h-6 w-6 drop-shadow-md transition group-hover:translate-x-1" />
      </button>

      {/* ░░░░░░░░░░░░░░ content ░░░░░░░░░░░░░░ */}
      <div className="container mx-auto px-4 h-full flex items-center py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          {/* text block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-lg mb-6">
              {slides[currentSlide].title}
            </h1>
            <p className="max-w-xl text-lg sm:text-xl text-white/80 mb-8">
              {slides[currentSlide].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="rounded-xl px-8 py-3 font-semibold shadow
                                 bg-teal-600 hover:bg-teal-700 transition">
                Book Appointment
              </button>
              <button className="rounded-xl px-8 py-3 font-semibold border-2
                                 border-white hover:bg-white hover:text-teal-800 transition">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* booking form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/20 backdrop-blur-lg bg-white/10 p-6 shadow-xl mx-auto w-full max-w-sm"
          >
            <h3 className="text-center text-xl font-semibold text-white mb-4">
              Quick Booking
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* name */}
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  required
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="peer w-full pl-9 pr-3 py-2 text-sm rounded-lg
                             bg-white/80 text-black placeholder-gray-500
                             border border-gray-300 focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* email & phone */}
              <input
                required
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-3 py-2 text-sm rounded-lg
                           bg-white/80 text-black placeholder-gray-500
                           border border-gray-300 focus:ring-2 focus:ring-teal-500"
              />
              <input
                required
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-3 py-2 text-sm rounded-lg
                           bg-white/80 text-black placeholder-gray-500
                           border border-gray-300 focus:ring-2 focus:ring-teal-500"
              />

              {/* service */}
              <select
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
                className="w-full px-3 py-2 text-sm rounded-lg
                           bg-white/80 text-black border border-gray-300
                           focus:ring-2 focus:ring-teal-500"
              >
                <option value="doctor-consultation">Doctor Consultation</option>
                <option value="blood-test">Blood Test</option>
                <option value="xray">X‑Ray</option>
              </select>

              {/* date + time */}
              <div className="grid grid-cols-2 gap-2">
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    required
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg
                               bg-white/80 text-black border border-gray-300
                               focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    required
                    type="time"
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg
                               bg-white/80 text-black border border-gray-300
                               focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              {/* submit */}
              <button
                type="submit"
                className="w-full rounded-lg py-2.5 text-sm font-semibold
                           bg-teal-600 hover:bg-teal-700 transition text-white"
              >
                Book Appointment
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* ░░░░░░░░░░░░░░ slide indicators ░░░░░░░░░░░░░░ */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-3 w-3 rounded-full transition
                        ${
                          i === currentSlide
                            ? "bg-teal-500 scale-110"
                            : "bg-white/50 hover:bg-white/70"
                        }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ░░░░░░░░░░░░░░ modal ░░░░░░░░░░░░░░ */}
      {showModal && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-sm rounded-xl bg-white p-6 text-center shadow-2xl"
          >
            {/* close */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              <X className="h-5 w-5" />
            </button>

            {/* icon */}
            <div
              className={`mx-auto mb-4 h-16 w-16 ${
                modalContent.type === "success"
                  ? "text-teal-600"
                  : "text-red-600"
              }`}
            >
              {modalContent.type === "success" ? <CheckIcon /> : <ErrorIcon />}
            </div>

            {/* message */}
            <h3 className="mb-2 text-2xl font-bold text-gray-900">
              {modalContent.type === "success"
                ? "Booking Successful!"
                : "Submission Failed"}
            </h3>
            <p className="mb-6 text-gray-600">{modalContent.message}</p>

            <button
              onClick={() => setShowModal(false)}
              className={`w-full rounded-lg py-2.5 font-semibold transition
                          ${
                            modalContent.type === "success"
                              ? "bg-teal-600 hover:bg-teal-700"
                              : "bg-red-600 hover:bg-red-700"
                          } text-white`}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  )
}

/* ──────────────────────── helper icons ──────────────────────── */
const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-full w-full"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const ErrorIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-full w-full"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M15 9l-6 6M9 9l6 6" />
  </svg>
)
