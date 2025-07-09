"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Doctor Consultation", href: "/doctor-consultation" },
    { name: "Blood Test", href: "/blood-test" },
    { name: "X-Ray", href: "/xray" },
  ]

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      {/* Top Bar (Hidden on small screens) */}
      <div className="bg-blue-600 text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              <span>info@doctoreverywhere.com</span>
            </div>
          </div>
          <div>
            <span>24/7 Emergency Services Available</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          DoctorEveryWhere
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className="bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition duration-200 text-sm font-semibold"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Overlay Drawer with Transition */}
      <div
        className={`fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-6 border-b">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-blue-600">
            DoctorEveryWhere
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700 hover:text-blue-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-8 gap-6 text-lg">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact-us"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 bg-blue-600 text-white text-center py-3 rounded-full shadow hover:bg-blue-700 transition font-semibold"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  )
}
