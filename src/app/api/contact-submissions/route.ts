import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config })
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    // Create the contact submission in Payload
    const contactSubmission = await payload.create({
      collection: 'contact-submissions',
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        service: data.service || 'general',
        propertyType: data.propertyType || 'residential',
        urgency: data.urgency || 'standard',
        message: data.message || '',
        address: data.address || '',
        preferredContact: data.preferredContact || 'email',
        bestTimeToCall: data.bestTimeToCall || '',
        status: 'new',
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Contact submission received successfully',
        id: contactSubmission.id,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('Error creating contact submission:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
