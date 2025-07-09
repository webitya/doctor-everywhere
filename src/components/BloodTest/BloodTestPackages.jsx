import { Check } from "lucide-react"

export default function BloodTestPackages() {
  const packages = [
    {
      name: "Basic Health Panel",
      price: "$99",
      tests: ["Complete Blood Count (CBC)", "Basic Metabolic Panel", "Lipid Profile", "Thyroid Function Test"],
      popular: false,
    },
    {
      name: "Comprehensive Panel",
      price: "$199",
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
      price: "$299",
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
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Blood Test Packages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive blood test packages designed to meet your health monitoring needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 relative ${pkg.popular ? "ring-2 ring-red-500" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-red-600 mb-4">{pkg.price}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.tests.map((test, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{test}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  pkg.popular ? "bg-red-600 hover:bg-red-700 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }`}
              >
                Select Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
