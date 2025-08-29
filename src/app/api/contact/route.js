import nodemailer from "nodemailer"

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json()

    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      )
    }

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Mail options
    const mailOptions = {
      from: `"Doctor Everywhere" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Admin will receive messages
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    }

    // Send mail
    await transporter.sendMail(mailOptions)

    return new Response(
      JSON.stringify({ message: "Message sent successfully!" }),
      { status: 200 }
    )
  } catch (error) {
    console.error("Email sending error:", error)
    return new Response(
      JSON.stringify({ message: "Error sending message" }),
      { status: 500 }
    )
  }
}
