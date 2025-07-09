import Link from "next/link"

export default function HomePageCTA() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Ready to Take Control of Your Health?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join thousands of satisfied patients who trust DoctorEveryWhere for their healthcare needs. Book your
          appointment today and experience quality medical care.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/doctor-consultation"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Book Consultation
          </Link>
          <Link
            href="/contact-us"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
