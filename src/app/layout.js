// app/layout.js
import './globals.css'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import ClientLayout from '@/components/shared/ClientLayout'

export const metadata = {
  title: "DoctorEveryWhere - Medical Services & Consultations",
  description: "Book doctor consultations, blood tests, and X-ray services online",
  generator: "v0.dev",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <Header />
        <ClientLayout>
          <main>{children}</main>
        </ClientLayout>
        <Footer />
      </body>
    </html>
  )
}
