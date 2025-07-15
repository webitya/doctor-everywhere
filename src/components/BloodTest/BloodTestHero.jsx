export default function BloodTestHero() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-teal-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-md">
          Blood Test Services
        </h1>
        <p className="text-lg sm:text-xl text-teal-100 max-w-2xl mx-auto leading-relaxed">
          Comprehensive blood testing with accurate results and fast turnaround times. Monitor your health with our wide
          range of diagnostic tests.
        </p>
    
      </div>
    </section>
  )
}
