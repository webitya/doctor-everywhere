"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import WhatsAppIcon from "@mui/icons-material/WhatsApp" // Using MUI WhatsApp icon

export default function HealthScansSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(1) // Default for smallest screens
  const [touchStartX, setTouchStartX] = useState(0)
  const [touchEndX, setTouchEndX] = useState(0)

  const healthScans = [
    {
      id: 1,
      name: "Ultrasound",
      price: "₹429",
      image: "/images/ultrasound-imaging.jpg?height=150&width=200&text=Ultrasound&bg-color=14b8a6",
      description: "Non-invasive imaging using sound waves for internal organ examination.",
      whatsappMessage: "Hello, I would like to book an Ultrasound scan (₹429). Please help me schedule an appointment.",
    },
    {
      id: 2,
      name: "CT Scan",
      price: "₹900",
      image: "/images/ct-scan.jpg?height=150&width=200&text=CT+Scan&bg-color=0d9488",
      description: "Detailed cross-sectional images using X-ray technology.",
      whatsappMessage: "Hello, I need to book a CT Scan (₹900). Could you please help me schedule an appointment?",
    },
    {
      id: 3,
      name: "MRI Scan",
      price: "₹1499",
      image: "/images/mri.jpg?height=150&width=200&text=MRI+Scan&bg-color=14b8a6",
      description: "High-resolution imaging using magnetic fields and radio waves.",
      whatsappMessage: "Hello, I would like to book an MRI Scan (₹1499). Please advise on available slots.",
    },
    {
      id: 4,
      name: "ECG Test",
      price: "₹149",
      image: "/images/ecg.jpg?height=150&width=200&text=ECG+Test&bg-color=0d9488",
      description: "Heart rhythm and electrical activity monitoring.",
      whatsappMessage: "Hello, I need an ECG Test (₹149) for heart monitoring. Please help me book an appointment.",
    },
    {
      id: 5,
      name: "Echo Test",
      price: "₹1350",
      image: "/images/echo.jpg?height=150&width=200&text=Echo+Test&bg-color=14b8a6",
      description: "Ultrasound examination of the heart structure and function.",
      whatsappMessage:
        "Hello, I would like to book an Echo Test (₹1350) for heart examination. Please help me schedule.",
    },
    {
      id: 6,
      name: "TMT Test",
      price: "₹1109",
      image: "/images/tmt.jpg?height=150&width=200&text=TMT+Test&bg-color=0d9488",
      description: "Treadmill test to evaluate heart function during exercise.",
      whatsappMessage: "Hello, I need a TMT Test (₹1109). Could you please help me book an appointment?",
    },
    {
      id: 7,
      name: "X-Ray",
      price: "₹299",
      image: "/images/xray.jpg?height=150&width=200&text=X-Ray&bg-color=14b8a6",
      description: "Basic imaging for bones, chest, and internal structures.",
      whatsappMessage:
        "Hello, I would like to book an X-Ray examination (₹299). Please help me schedule an appointment.",
    },
    {
      id: 8,
      name: "Mammography",
      price: "₹1200",
      image: "/images/Mammography.jpg?height=150&width=200&text=Mammography&bg-color=0d9488",
      description: "Specialized breast imaging for early cancer detection.",
      whatsappMessage: "Hello, I need to book a Mammography screening (₹1200). Please help me schedule an appointment.",
    },
    {
      id: 9,
      name: "Bone Density",
      price: "₹800",
      image: "/images/bonedensity.jpg?height=150&width=200&text=Bone+Density&bg-color=14b8a6",
      description: "DEXA scan to measure bone mineral density.",
      whatsappMessage: "Hello, I would like to book a Bone Density test (₹800). Please advise on availability.",
    },
    {
      id: 10,
      name: "PET Scan",
      price: "₹15000",
      image: "/images/petscan.jpg?height=150&width=200&text=PET+Scan&bg-color=0d9488",
      description: "Advanced imaging to detect cancer and other diseases.",
      whatsappMessage: "Hello, I need to book a PET Scan (₹15000). Could you please help me schedule an appointment?",
    },
  ]

  const totalSlides = Math.ceil(healthScans.length / itemsPerView)

  // Determine items per view based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg and up
        setItemsPerView(4)
      } else if (window.innerWidth >= 768) {
        // md
        setItemsPerView(3)
      } else if (window.innerWidth >= 640) {
        // sm
        setItemsPerView(2)
      } else {
        // xs
        setItemsPerView(1)
      }
      // Reset currentSlide to ensure it's within bounds for new itemsPerView
      setCurrentSlide(0)
    }

    handleResize() // Set initial itemsPerView
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // This hook will manage the auto-slide interval.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 2000) // Auto-slide every 2 seconds

    // Clear the interval when the component unmounts or when the slide changes
    return () => clearInterval(interval)
  }, [currentSlide, totalSlides]) // Re-run effect if currentSlide or totalSlides changes

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getCurrentItems = () => {
    const startIndex = currentSlide * itemsPerView
    let currentItems = healthScans.slice(startIndex, startIndex + itemsPerView)

    // If the current slice is not full, take elements from the beginning to fill it
    if (currentItems.length < itemsPerView) {
      const remainingNeeded = itemsPerView - currentItems.length
      currentItems = [...currentItems, ...healthScans.slice(0, remainingNeeded)]
    }
    return currentItems
  }

  const handleWhatsAppClick = (test) => {
    const message = encodeURIComponent(test.whatsappMessage)
    const whatsappUrl = `https://wa.me/919693245941?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  // Touch event handlers for swiping
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      // Swiped left
      nextSlide()
    } else if (touchEndX - touchStartX > 50) {
      // Swiped right
      prevSlide()
    }
    // Reset touch positions
    setTouchStartX(0)
    setTouchEndX(0)
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
        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {getCurrentItems().map((test) => (
                <div
                  key={test.id}
                  className="relative bg-white rounded-xl shadow-md overflow-hidden group cursor-default"
                >
                  <div className="relative h-40 w-full">
                    <img
                      src={test.image || "/placeholder.svg"}
                      alt={test.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent flex items-end p-4">
                      <h3 className="text-xl font-bold text-white">{test.name}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{test.description}</p>
                    {/* <div className="text-lg font-bold text-teal-600 mb-4">Starting @ {test.price}</div> */}
                    <div className="space-y-3">
                      <button
                        onClick={() => handleWhatsAppClick(test)}
                        className="w-full bg-teal-600 text-white py-2.5 px-4 rounded-lg font-semibold flex items-center justify-center shadow-md cursor-pointer hover:bg-teal-700 transition-colors duration-200"
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
          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-full shadow-lg z-10 transition-colors duration-200 hidden md:block"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-full shadow-lg z-10 transition-colors duration-200 hidden md:block"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
          {/* Removed Slide Indicators */}
        </div>
      </div>
    </section>
  )
}
