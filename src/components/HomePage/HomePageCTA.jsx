import Link from "next/link"

export default function HomePageCTA() {
  return (
    <section className="py-14 bg-teal-600">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Ready to Take Control of Your Health?
        </h2>
        <p className="text-sm sm:text-base text-teal-100 mb-6 max-w-2xl mx-auto">
          Join thousands who trust <span className="font-semibold">DoctorEveryWhere</span> for expert care.
          Book your appointment today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/doctor-consultation"
            className="bg-white text-teal-700 hover:bg-gray-100 px-6 py-2.5 text-sm rounded-md font-semibold transition"
          >
            Book Consultation
          </Link>
          <Link
            href="/contact-us"
            className="border border-white text-white hover:bg-white hover:text-teal-700 px-6 py-2.5 text-sm rounded-md font-semibold transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
