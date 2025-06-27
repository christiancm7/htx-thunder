import { NextRequest, NextResponse } from 'next/server'
import { SquareClient } from 'square'

// Initialize Square client
const client = new SquareClient({
  token: process.env.SQUARE_ACCESS_TOKEN,
  environment: process.env.NODE_ENV === 'production' ? 'production' : 'sandbox',
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { sourceId, amountMoney, idempotencyKey, registrationData } = body

    // Validate required fields
    if (!sourceId || !amountMoney || !idempotencyKey) {
      return NextResponse.json(
        { error: 'Missing required payment fields' },
        { status: 400 },
      )
    }

    // Process payment with Square
    const paymentRequest = {
      sourceId,
      amountMoney: {
        amount: BigInt(amountMoney.amount),
        currency: amountMoney.currency || 'USD',
      },
      idempotencyKey,
      autocomplete: true,
      locationId: process.env.SQUARE_LOCATION_ID,
      note: 'New Wave Academy Registration',
    }

    console.log('Processing payment request:', paymentRequest)

    const response = await client.payments.create(paymentRequest)

    if (response.payment) {
      const payment = response.payment

      // Payment successful - save registration data
      try {
        await saveRegistrationData({
          ...registrationData,
          paymentId: payment.id,
          paymentStatus: payment.status,
          amount: amountMoney.amount,
          createdAt: new Date().toISOString(),
        })

        // Send confirmation email (you would implement this)
        await sendConfirmationEmail(registrationData)

        return NextResponse.json({
          success: true,
          paymentId: payment.id,
          paymentStatus: payment.status,
          message: 'Registration completed successfully!',
        })
      } catch (dbError) {
        console.error('Error saving registration:', dbError)

        // Payment succeeded but registration save failed
        // You might want to implement a rollback or manual review process
        return NextResponse.json({
          success: true,
          paymentId: payment.id,
          warning:
            'Payment processed but registration data needs manual review',
          message: 'Payment completed. Our team will contact you shortly.',
        })
      }
    } else {
      throw new Error('Payment processing failed')
    }
  } catch (error: any) {
    console.error('Payment processing error:', error)

    // Handle specific Square API errors
    if (error.body && error.body.errors) {
      const squareError = error.body.errors[0]
      return NextResponse.json(
        {
          error: squareError.detail || 'Payment processing failed',
          code: squareError.code,
        },
        { status: 400 },
      )
    }

    return NextResponse.json(
      { error: 'Internal server error during payment processing' },
      { status: 500 },
    )
  }
}

async function saveRegistrationData(data: any) {
  // This is where you would save to your database
  // For now, we'll just log it and simulate saving
  console.log('Saving registration data:', data)

  // Example using a database (you would implement this based on your setup):
  // const registration = await db.registrations.create({
  //   data: {
  //     playerName: `${data.playerData.firstName} ${data.playerData.lastName}`,
  //     playerEmail: data.playerData.email,
  //     playerAge: parseInt(data.playerData.age),
  //     programId: data.selectedProgram.id,
  //     programName: data.selectedProgram.name,
  //     parentEmail: data.parentData?.parentEmail,
  //     emergencyContact: data.parentData?.emergencyContactName,
  //     emergencyPhone: data.parentData?.emergencyContactPhone,
  //     preferredStartDate: data.scheduleData.startDate,
  //     specialRequests: data.scheduleData.specialRequests,
  //     paymentId: data.paymentId,
  //     paymentStatus: data.paymentStatus,
  //     amountPaid: data.amount,
  //     createdAt: new Date()
  //   }
  // })

  // For demonstration, we'll simulate a successful save
  await new Promise((resolve) => setTimeout(resolve, 500))
  return true
}

async function sendConfirmationEmail(registrationData: any) {
  // This is where you would send confirmation emails
  // You could use services like SendGrid, Mailgun, or AWS SES
  console.log(
    'Sending confirmation email to:',
    registrationData.playerData.email,
  )

  // Example email content:
  const emailData = {
    to: registrationData.playerData.email,
    subject: 'Welcome to New Wave Academy!',
    html: `
      <h1>Registration Confirmed!</h1>
      <p>Dear ${registrationData.playerData.firstName},</p>
      <p>Welcome to New Wave Academy! Your registration for the ${registrationData.selectedProgram.name} program has been confirmed.</p>
      <h3>Program Details:</h3>
      <ul>
        <li>Program: ${registrationData.selectedProgram.name}</li>
        <li>Age Range: ${registrationData.selectedProgram.ageRange}</li>
        <li>Schedule: ${registrationData.selectedProgram.schedule}</li>
        <li>Duration: ${registrationData.selectedProgram.duration}</li>
        <li>Start Date: ${registrationData.scheduleData.startDate}</li>
      </ul>
      <p>Our team will contact you within 24 hours to finalize your schedule and answer any questions.</p>
      <p>Welcome to the Thunder family!</p>
      <p>Best regards,<br>New Wave Academy Team</p>
    `,
  }

  // Simulate email sending
  await new Promise((resolve) => setTimeout(resolve, 300))
  return true
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    service: 'Square Payment Processing',
    timestamp: new Date().toISOString(),
  })
}
