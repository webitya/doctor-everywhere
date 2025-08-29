"use client"

import { useRef, useEffect } from "react"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"

export default function HealthScansSlider() {
  const scrollRef = useRef(null)

  const healthScans = [
    { id: 1, name: "Ultrasound", price: "₹429", image: "/images/ultrasound-imaging.jpg", description: "Non-invasive imaging using sound waves for internal organ examination." },
    { id: 2, name: "CT Scan", price: "₹900", image: "/images/ct-scan.jpg", description: "Detailed cross-sectional images using X-ray technology." },
    { id: 3, name: "MRI Scan", price: "₹1499", image: "/images/mri.jpg", description: "High-resolution imaging using magnetic fields and radio waves." },
    { id: 4, name: "ECG Test", price: "₹149", image: "/images/ecg.jpg", description: "Heart rhythm and electrical activity monitoring." },
    { id: 5, name: "Echo Test", price: "₹1350", image: "/images/echo.jpg", description: "Ultrasound examination of the heart structure and function." },
    { id: 6, name: "TMT Test", price: "₹1109", image: "/images/tmt.jpg", description: "Treadmill test to evaluate heart function during exercise." },
    { id: 7, name: "X-Ray", price: "₹299", image: "/images/xray.jpg", description: "Basic imaging for bones, chest, and internal structures." },
    { id: 8, name: "Mammography", price: "₹1200", image: "/images/Mammography.jpg", description: "Specialized breast imaging for early cancer detection." },
    { id: 9, name: "Bone Density", price: "₹800", image: "/images/bonedensity.jpg", description: "DEXA scan to measure bone mineral density." },
    { id: 10, name: "PET Scan", price: "₹15000", image: "/images/petscan.jpg", description: "Advanced imaging to detect cancer and other diseases." },
  ]

  // Infinite auto-scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scrollStep = 1 // speed
    const interval = setInterval(() => {
      scrollContainer.scrollLeft += scrollStep
      scrollAmount += scrollStep

      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0 // reset loop
        scrollAmount = 0
      }
    }, 20) // smaller = faster

    return () => clearInterval(interval)
  }, [])

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/message/NR7BCWYYMPAOC1", "_blank")
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-600 mb-4">Health Scans & Imaging Tests</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive diagnostic imaging services with advanced technology and expert analysis
          </p>
        </div>

        {/* ✅ Infinite auto-loop slider */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-hidden" // ❌ no scroll bar visible
        >
          {healthScans.concat(healthScans).map((test, idx) => ( // duplicate for smooth looping
            <div
              key={idx}
              className="flex-shrink-0 w-72 bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <div className="relative h-40 w-full">
                <img src={test.image || "/placeholder.svg"} alt={test.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent flex items-end p-4">
                  <h3 className="text-xl font-bold text-white">{test.name}</h3>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{test.description}</p>
                {/* ✅ Button pinned at bottom */}
                <div className="mt-auto">
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-teal-600 text-white py-2.5 px-4 rounded-lg font-semibold flex items-center justify-center shadow-md hover:bg-teal-700 transition-colors duration-200"
                  >
                    <WhatsAppIcon className="h-5 w-5 mr-2" />
                    Book Now
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
