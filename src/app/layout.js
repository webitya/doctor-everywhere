import Header from "@/components/shared/Header"
import Footer from "@/components/shared/Footer"

export const metadata = {
  title: "DoctorEveryWhere - Medical Services & Consultations",
  description: "Book doctor consultations, blood tests, and X-ray services online",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}


import './globals.css'