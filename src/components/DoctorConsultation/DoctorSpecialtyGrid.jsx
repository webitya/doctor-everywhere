"use client"

import WhatsAppIcon from "@mui/icons-material/WhatsApp"

const DoctorSpecialtyGrid = () => {
  const specialties = [
    "Orthopedics",
    "Neurology",
    "General Physician",
    "Gynecology",
    "Cardiology",
    "Dermatology",
    "Emergency Medicine",
    "Family Medicine",
    "Gastroenterology",
    "General Surgery",
    "Internal Medicine",
    "Ophthalmology",
    "Pediatrics",
    "Psychiatry",
    "Urology",
    "ENT (Ear, Nose & Throat)", // ✅ Added new specialty
  ]

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/message/NR7BCWYYMPAOC1`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Consult Doctor by Specialty</h2>
            <p className="text-gray-600">Select specialty to find relevant doctors</p>
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col justify-between transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Specialty Name */}
              <h3 className="text-lg font-semibold text-teal-700 text-center mb-6">{specialty}</h3>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="mt-auto w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-3 rounded-lg text-sm font-medium flex items-center justify-center transition-colors duration-200 shadow-md"
              >
                <WhatsAppIcon className="h-4 w-4 mr-2" />
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DoctorSpecialtyGrid
