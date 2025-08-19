import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Social */}
          <div>
            <h3 className="text-2xl font-bold text-teal-400 mb-4">DoctorEveryWhere</h3>
            <p className="text-gray-400 text-sm mb-5">
            Your trusted partner in medical care in Gurgaon, Haryana, India. From online consultations to diagnostics—accessible anytime, anywhere.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 p-2 rounded-full hover:bg-teal-500 transition-colors cursor-pointer"
                >
                  <Icon className="h-4 w-4 text-gray-300 hover:text-white" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about-us" },
                { label: "Doctor Consultation", href: "/doctor-consultation" },
                { label: "Blood Test", href: "/blood-test" },
                { label: "X-Ray Services", href: "/xray" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Online Consultations</li>
              <li>Blood Test Packages</li>
              <li>X-Ray Imaging</li>
              <li>Health Checkups</li>
              <li>Emergency Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-teal-400 mr-3 mt-0.5" />
                <a href="tel:9211013699">  +91 9211013699 </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 text-teal-400 mr-3 mt-0.5" />
                  <a
                  className="decoration-0"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=doctoreverywhere.in@gmail.com"
                  target="_blank"
                  >
                  doctoreverywhere.in@gmail.com
                  </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 text-teal-400 mr-3 mt-0.5" />
                  <a href="" target="_blank"> Gurgaon/Delhi NCR </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © 2024 DoctorEveryWhere. All rights reserved. |{" "}
            <Link href="/privacy-policy" className="hover:text-teal-400">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms" className="hover:text-teal-400">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
