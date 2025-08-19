"use client"
import { useState } from "react"
import { Mail, Phone, User, MessageSquare, X } from "lucide-react"

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [showSubmissionModal, setShowSubmissionModal] = useState(false)
  const [modalContent, setModalContent] = useState({ type: "", message: "" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setModalContent({
          type: "success",
          message: "Your message has been sent successfully! We will get back to you shortly.",
        })
        setShowSubmissionModal(true)
        setFormData({ name: "", email: "", phone: "", message: "" }) // Reset form on success
      } else {
        const errorData = await response.json()
        setModalContent({
          type: "error",
          message: errorData.message || "Failed to send message. Please check your details and try again.",
        })
        setShowSubmissionModal(true)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setModalContent({
        type: "error",
        message: "An error occurred while sending your message. Please try again later.",
      })
      setShowSubmissionModal(true)
    }
  }

  const handleCloseModal = () => {
    setShowSubmissionModal(false)
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Send us a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-10 pr-3 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                placeholder="Full Name"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-10 pr-3 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                placeholder="Email Address"
              />
            </div>
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full pl-10 pr-3 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
              placeholder="Phone Number"
            />
          </div>

          <div className="relative">
            <MessageSquare className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full pl-10 pr-3 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none transition-all duration-200"
              placeholder="Your Message"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3.5 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Custom Modal for Submission Success/Error */}
      {showSubmissionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-6 text-center">
            <div className="flex justify-end">
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className={`${modalContent.type === "success" ? "text-green-500" : "text-red-500"} mb-4`}>
              {modalContent.type === "success" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {modalContent.type === "success" ? "Message Sent!" : "Submission Failed!"}
            </h3>
            <p className="text-gray-600 mb-6">{modalContent.message}</p>
            <button
              onClick={handleCloseModal}
              className={`w-full py-2.5 rounded-lg font-semibold transition-colors duration-200 ${
                modalContent.type === "success"
                  ? "bg-teal-600 hover:bg-teal-700 text-white"
                  : "bg-red-600 hover:bg-red-700 text-white"
              }`}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
