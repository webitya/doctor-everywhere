// components/shared/StickyContactButtons.jsx
"use client"

import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import PhoneIcon from "@mui/icons-material/Phone"

export default function StickyContactButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a

  href="https://wa.me/919211013699?text=how%20can%20i%20help%20you%20from%20doctor%20everywhere"        target="_blank"

        href="https://wa.me/919211013699"
        target="_blank"

        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-xl shadow-md flex items-center justify-center"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </a>

      {/* Phone */}
      <a
        href="tel:9693245941"
        className="bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-xl shadow-md flex items-center justify-center"
        title="Call Us"
      >
        <PhoneIcon />
      </a>
    </div>
  )
}
