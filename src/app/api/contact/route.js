import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const { name, email, phone, message, service } = await request.json()

    // Create transporter - Corrected from createTransporter to createTransport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use 'true' if your SMTP server requires SSL/TLS on port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "admin@doctoreverywhere.com", // Or your desired recipient email
      subject: `New ${service || "Contact"} Request from ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #14b8a6;">New ${service || "Contact"} Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service || "General Contact"}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f0fdfa; padding: 15px; border-left: 4px solid #14b8a6; border-radius: 4px;">${message}</p>
          <p style="font-size: 0.9em; color: #777; margin-top: 20px;">This email was sent from your DoctorEveryWhere website contact form.</p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Email error:", error)
    return new Response(JSON.stringify({ success: false, message: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
