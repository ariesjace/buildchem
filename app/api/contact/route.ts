import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Create a transporter using Gmail SMTP and your App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: "ariesjaceu@gmail.com", // where the message will be sent
      subject: `New Inquiry: ${data.subject}`,
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Full Name:</strong> ${data.fullName}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong><br>${data.message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("EMAIL ERROR:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
