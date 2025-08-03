import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function GET() {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    console.log('Testing email send to newwaveprepacademy@gmail.com...')

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['newwaveprepacademy@gmail.com'],
      subject: 'Test Email from Basketball Academy',
      text: 'This is a test email to verify Resend is working correctly. If you receive this, the email system is working!',
    })

    console.log('Resend result:', result)

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully',
      result: result,
    })
  } catch (error) {
    console.error('Test email error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Test email failed',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
