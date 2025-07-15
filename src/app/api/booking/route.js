import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const { name, email, phone, service, date, time, specialty, testType, notes } = await request.json()

    // Create transporter
    const transporter = nodemailer.createTransport({
      // Corrected to createTransport
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "bookings@doctoreverywhere.com",
      subject: `New ${service} Booking from ${name}`,
      html: `
        <h2>New ${service} Booking</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        ${specialty ? `<p><strong>Specialty:</strong> ${specialty}</p>` : ""}
        ${testType ? `<p><strong>Test Type:</strong> ${testType}</p>` : ""}
        ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ""}
      `,
    }

    await transporter.sendMail(mailOptions)

    return Response.json({ success: true, message: "Booking request sent successfully" })
  } catch (error) {
    console.error("Booking error:", error)
    return Response.json({ success: false, message: "Failed to send booking request" }, { status: 500 })
  }
}
