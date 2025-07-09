import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const { name, email, phone, message, service } = await request.json()

    // Create transporter
    const transporter = nodemailer.createTransporter({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "admin@doctoreverywhere.com",
      subject: `New ${service || "Contact"} Request from ${name}`,
      html: `
        <h2>New ${service || "Contact"} Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service || "General Contact"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return Response.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Email error:", error)
    return Response.json({ success: false, message: "Failed to send email" }, { status: 500 })
  }
}
