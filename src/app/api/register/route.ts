import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const registrationData = await request.json()

    // Here you would typically:
    // 1. Validate the data
    // 2. Save to database
    // 3. Send confirmation email to the family
    // 4. Send notification email to your company

    // For now, we'll just log the registration data
    console.log('New Registration Received:', {
      playerName: `${registrationData.playerFirstName} ${registrationData.playerLastName}`,
      age: registrationData.playerAge,
      parentEmail: registrationData.parentEmail,
      parentPhone: registrationData.parentPhone,
      timestamp: registrationData.registrationDate,
    })

    // In a real implementation, you would:
    // - Send an email to your company email with all the registration details
    // - Send a confirmation email to the parent
    // - Save the registration to your database

    // Email content to be sent to info@newwaveprepacademy.com
    const emailContent = `
New Basketball Training Registration - New Wave Academy

PLAYER INFORMATION:
- Name: ${registrationData.playerFirstName} ${registrationData.playerLastName}
- Age: ${registrationData.playerAge}
- Gender: ${registrationData.playerGender || 'Not specified'}
- School: ${registrationData.school || 'Not specified'}
- Grade: ${registrationData.grade || 'Not specified'}
- Experience Level: ${registrationData.experienceLevel || 'Not specified'}

PARENT/GUARDIAN INFORMATION:
- Name: ${registrationData.parentFirstName} ${registrationData.parentLastName}
- Email: ${registrationData.parentEmail}
- Phone: ${registrationData.parentPhone}
- Relationship: ${registrationData.relationship || 'Not specified'}

EMERGENCY CONTACT:
- Name: ${registrationData.emergencyContactName}
- Phone: ${registrationData.emergencyContactPhone}
- Relationship: ${
      registrationData.emergencyContactRelationship || 'Not specified'
    }

ADDITIONAL INFORMATION:
- Preferred Start Date: ${
      registrationData.preferredStartDate || 'Not specified'
    }
- Medical Conditions: ${registrationData.medicalConditions || 'None specified'}
- Special Requests: ${registrationData.specialRequests || 'None'}

PROGRAM: ${registrationData.program}
REGISTRATION DATE: ${new Date(
      registrationData.registrationDate,
    ).toLocaleString()}

---
Next Steps:
1. Contact family within 24 hours
2. Schedule initial assessment/trial session
3. Discuss scheduling preferences
4. Send welcome packet with policies
    `.trim()

    console.log('Sending registration email to info@newwaveprepacademy.com:')
    console.log(emailContent)

    // Send email using Resend
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['newwaveprepacademy@gmail.com'],
      subject: `New Registration: ${registrationData.playerFirstName} ${registrationData.playerLastName}`,
      text: emailContent,
    })

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message:
          'Registration submitted successfully. We will contact you within 24 hours.',
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      {
        success: false,
        message:
          'Registration failed. Please try again or contact us directly.',
      },
      { status: 500 },
    )
  }
}
