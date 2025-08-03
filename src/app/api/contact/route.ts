import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const contactData = await request.json()

    // Email content for the contact form submission
    const emailContent = `
New Contact Form Submission - New Wave Academy

CONTACT INFORMATION:
- Name: ${contactData.firstName} ${contactData.lastName}
- Email: ${contactData.email}
- Phone: ${contactData.phone || 'Not provided'}

INQUIRY DETAILS:
- Player Age: ${contactData.playerAge || 'Not specified'}
- Program Interest: ${contactData.interestedProgram || 'General inquiry'}

MESSAGE:
${contactData.message}

---
Submitted: ${new Date().toLocaleString()}
From: Website Contact Form
    `.trim()

    console.log('Contact Form Submission:', {
      name: `${contactData.firstName} ${contactData.lastName}`,
      email: contactData.email,
      phone: contactData.phone,
      timestamp: new Date().toISOString(),
    })

    console.log('Sending email to cmoralestech@gmail.com:')
    console.log(emailContent)

    // Send email using Resend
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['cmoralestech@gmail.com'],
      subject: `New Contact Form Submission - ${contactData.firstName} ${contactData.lastName}`,
      text: emailContent,
    })

    return NextResponse.json(
      {
        success: true,
        message:
          "Message sent successfully! We'll get back to you within 24 hours.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        success: false,
        message:
          'Failed to send message. Please try again or contact us directly.',
      },
      { status: 500 },
    )
  }
}
