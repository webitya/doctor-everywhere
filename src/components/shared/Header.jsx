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
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar (desktop only) */}
      <div className="hidden md:block bg-teal-600 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
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
            <span className="font-medium">24/7 Emergency Services Available</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-teal-700">
          DoctorEveryWhere
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className="bg-teal-600 text-white px-5 py-2 rounded-full shadow hover:bg-teal-700 transition text-sm font-semibold"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-gray-700 hover:text-teal-600 focus:outline-none"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Slide-In Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-[999] shadow-lg transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-teal-700">
            DoctorEveryWhere
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-600 hover:text-teal-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-8 gap-5 text-base">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact-us"
            onClick={() => setIsMenuOpen(false)}
            className="mt-6 bg-teal-600 text-white text-center py-3 rounded-full shadow hover:bg-teal-700 transition font-semibold"
          >
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Backdrop when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[998] bg-black/30 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  )
}
