// app/layout.js
import './globals.css'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import ClientLayout from '@/components/shared/ClientLayout' 
import Specialist from "./../components/shared/Specialist"

export const metadata = {
  title: "DoctorEveryWhere - Medical Services & Consultations",
  description: "Book doctor consultations, blood tests, and X-ray services online",
  generator: "v0.dev",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="min-h-screen bg-white">
        <Header />
        <ClientLayout>
          <main>{children}</main>
        </ClientLayout>
        <Specialist/>
        <Footer />
      </body>
    </html>
  )
}
