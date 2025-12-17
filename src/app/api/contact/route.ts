import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactFormSchema } from '@/lib/validators'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = contactFormSchema.parse(body)

    // Email to instructor
    await resend.emails.send({
      from: 'SM Driving School <onboarding@resend.dev>',
      to: process.env.INSTRUCTOR_EMAIL!,
      subject: `📩 New Inquiry from ${validatedData.name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; background: #f3f4f6;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone}</p>
          ${validatedData.service ? `<p><strong>Service:</strong> ${validatedData.service}</p>` : ''}
          <p><strong>Message:</strong> ${validatedData.message}</p>
        </div>
      `,
    })

    // Confirmation email to student
    await resend.emails.send({
      from: 'SM Driving School <onboarding@resend.dev>',
      to: validatedData.email,
      subject: '✅ We Received Your Inquiry!',
      html: `
        <div style="font-family: sans-serif; padding: 20px; background: #f3f4f6;">
          <h2>Thank You, ${validatedData.name}!</h2>
          <p>We've received your inquiry and will get back to you within 2 hours.</p>
          <p>Contact us anytime via WhatsApp: <a href="https://wa.me/447700900000">+44 7700 900000</a></p>
        </div>
      `,
    })

    return NextResponse.json({ success: true, message: 'Email sent successfully!' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 })
  }
}
