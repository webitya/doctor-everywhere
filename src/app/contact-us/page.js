import ContactUsHero from "@/components/ContactUs/ContactUsHero"
import ContactUsForm from "@/components/ContactUs/ContactUsForm"
import ContactUsInfo from "@/components/ContactUs/ContactUsInfo"

export default function ContactUsPage() {
  return (
    <div>
      <ContactUsHero />
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactUsForm />
            <ContactUsInfo />
          </div>
        </div>
      </div>
    </div>
  )
}
