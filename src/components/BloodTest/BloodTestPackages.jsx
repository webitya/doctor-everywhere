"use client"

import { Check } from "lucide-react"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"

export default function BloodTestPackages() {
  const packages = [
    {
      name: "Basic Health Panel",
      price: "₹999",
      tests: ["Complete Blood Count (CBC)", "Basic Metabolic Panel", "Lipid Profile", "Thyroid Function Test"],
      popular: false,
    },
    {
      name: "Comprehensive Panel",
      price: "₹1999",
      tests: [
        "All Basic Panel Tests",
        "Liver Function Tests",
        "Kidney Function Tests",
        "Diabetes Screening",
        "Vitamin D Level",
        "Iron Studies",
      ],
      popular: true,
    },
    {
      name: "Executive Package",
      price: "₹2999",
      tests: [
        "All Comprehensive Panel Tests",
        "Cardiac Markers",
        "Tumor Markers",
        "Hormone Panel",
        "Allergy Testing",
        "Nutritional Assessment",
      ],
      popular: false,
    },
    {
      name: "Women's Health Panel",
      price: "₹1799",
      tests: [
        "Complete Blood Count (CBC)",
        "Hormone Panel (Estrogen, Progesterone)",
        "Thyroid Function Tests",
        "Iron & Ferritin Levels",
        "Vitamin B12 & Folate",
        "Bone Health Markers",
      ],
      popular: false,
    },
    {
      name: "Men's Health Panel",
      price: "₹1699",
      tests: [
        "Complete Blood Count (CBC)",
        "Testosterone Levels",
        "PSA (Prostate Specific Antigen)",
        "Lipid Profile",
        "Liver Function Tests",
        "Vitamin D Level",
      ],
      popular: false,
    },
    {
      name: "Diabetes Monitoring",
      price: "₹899",
      tests: [
        "Fasting Blood Glucose",
        "HbA1c (Glycated Hemoglobin)",
        "Insulin Levels",
        "Kidney Function Tests",
        "Lipid Profile",
      ],
      popular: false,
    },
    {
      name: "Heart Health Package",
      price: "₹1499",
      tests: [
        "Lipid Profile (Complete)",
        "Cardiac Enzymes",
        "C-Reactive Protein (CRP)",
        "Homocysteine",
        "Troponin Levels",
        "ECG Analysis",
      ],
      popular: false,
    },
    {
      name: "Senior Citizen Package",
      price: "₹2499",
      tests: [
        "Complete Blood Count (CBC)",
        "Comprehensive Metabolic Panel",
        "Bone Density Markers",
        "Vitamin B12 & D Levels",
        "Thyroid Function Tests",
        "Prostate/Breast Cancer Markers",
        "Kidney & Liver Function",
      ],
      popular: false,
    },
    {
      name: "Immunity Booster Panel",
      price: "₹1299",
      tests: [
        "Complete Blood Count (CBC)",
        "Vitamin C & D Levels",
        "Zinc & Selenium",
        "Inflammatory Markers",
        "Immunoglobulin Levels",
        "Antioxidant Status",
      ],
      popular: false,
    },
  ]

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/message/NR7BCWYYMPAOC1`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Blood Test Packages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive blood test packages designed to meet your health monitoring needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 relative hover:shadow-xl transition-shadow duration-300 flex flex-col h-full ${
                pkg.popular ? "ring-2 ring-teal-500" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-teal-600 mb-4">{pkg.price}</div>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.tests.map((test, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{test}</span>
                  </li>
                ))}
              </ul>

              {/* ✅ Button stays at bottom of card */}
              <div className="mt-auto">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white shadow-md"
                >
                  <WhatsAppIcon className="h-5 w-5 mr-2" />
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
