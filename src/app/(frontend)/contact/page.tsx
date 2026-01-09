'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import { getBusinessConfig } from '@/utils/businessHelpers'

export default function Contact() {
  const config = getBusinessConfig()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'general',
    propertyType: 'residential',
    urgency: 'standard',
    message: '',
    address: '',
    preferredContact: 'email',
    bestTimeToCall: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'general',
          propertyType: 'residential',
          urgency: 'standard',
          message: '',
          address: '',
          preferredContact: 'email',
          bestTimeToCall: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout>
      <Hero
        title={`CONTACT ${config.business.name.toUpperCase()}`}
        subtitle="Get Your Free Estimate Today"
        description={`Ready to start your project? Contact our expert team for a free consultation and estimate. Call ${config.contact.phone.display} or fill out the form below.`}
        buttonText="Call Now"
        buttonLink={config.contact.phone.link}
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <Section paddingY="xl">
        {/* Contact Form with CRM Widget */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">
              GET YOUR FREE ESTIMATE
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Fill out the form below and our team will contact you within 24 hours to discuss your
              project and provide a detailed estimate. All consultations are free with no
              obligation.
            </p>

            {/* Call Now Button */}
            <div className="mb-8">
              <Button href={config.contact.phone.link} variant="accent" size="lg">
                📞 Call Now: {config.contact.phone.display}
              </Button>
            </div>

            {/* Google Calendar Scheduling */}
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                Schedule Your Junk Removal
              </h3>
              <p className="text-gray-600 mb-6">
                Book your appointment online and get started right away
              </p>
              
              {/* Google Calendar Appointment Scheduling begin */}
              <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet"/>
              <script src="https://calendar.google.com/calendar/scheduling-button-script.js" async></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    (function() {
                      var target = document.currentScript;
                      window.addEventListener('load', function() {
                        calendar.schedulingButton.load({
                          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2AqtZJq9tK525xatbu_cOP-YHZQbrO8HZf4tkQ5LSuAAHUWVoMIeHIZ553E376dnnJ8BQdpJws?gv=true',
                          color: '#039BE5',
                          label: 'Book an appointment',
                          target,
                        });
                      });
                    })();
                  `
                }}
              />
              {/* end Google Calendar Appointment Scheduling */}
            </div>
          </div>

          {/* Contact Form */}
          <div className="border-2 border-gray-200 rounded-lg p-6 bg-gray-50">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                <h3 className="font-bold">Thank you for your message!</h3>
                <p>We've received your request and will contact you within 24 hours.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                <h3 className="font-bold">Error submitting form</h3>
                <p>Please try again or call us directly at {config.contact.phone.display}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="(385) 326-8426"
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="tree-removal">Tree Removal</option>
                    <option value="tree-trimming">Tree Trimming</option>
                    <option value="emergency">Emergency Tree Service</option>
                    <option value="storm-cleanup">Storm Cleanup</option>
                    <option value="land-clearing">Land Clearing</option>
                    <option value="municipal">Municipal Service</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                {/* Property Type */}
                <div>
                  <label
                    htmlFor="propertyType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Property Type
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="municipal">Municipal</option>
                  </select>
                </div>

                {/* Urgency */}
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="emergency">Emergency (24 hours)</option>
                    <option value="urgent">Urgent (2-3 days)</option>
                    <option value="standard">Standard (1-2 weeks)</option>
                    <option value="planning">Planning ahead</option>
                  </select>
                </div>
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Property Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="123 Main St, City, State"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message / Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Please describe your project, tree situation, or any specific requirements..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Preferred Contact */}
                <div>
                  <label
                    htmlFor="preferredContact"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Preferred Contact Method
                  </label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="text">Text</option>
                  </select>
                </div>

                {/* Best Time to Call */}
                <div>
                  <label
                    htmlFor="bestTimeToCall"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Best Time to Call
                  </label>
                  <input
                    type="text"
                    id="bestTimeToCall"
                    name="bestTimeToCall"
                    value={formData.bestTimeToCall}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g., Weekdays 9-5, Evenings after 6pm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>

      {/* Contact Information Section */}
      <Section background="gray" paddingY="xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">GET IN TOUCH</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Prefer to speak directly? We're here to answer your questions and provide expert
              guidance for your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Phone */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-primary p-3 rounded-lg flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">PHONE</h3>
                  <p className="text-gray-600 mb-2">
                    <a
                      href={config.contact.phone.link}
                      className="text-primary hover:text-primary-700 font-semibold"
                    >
                      {config.contact.phone.display}
                    </a>
                  </p>
                  <p className="text-gray-600 text-sm">Monday - Friday: 7:00 AM - 6:00 PM</p>
                  <p className="text-gray-600 text-sm">Saturday: 8:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-primary p-3 rounded-lg flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">EMAIL</h3>
                  <p className="text-gray-600 mb-2">
                    <a
                      href={`mailto:${config.contact.email.main}`}
                      className="text-primary hover:text-primary-700 font-semibold"
                    >
                      {config.contact.email.main}
                    </a>
                  </p>
                  <p className="text-gray-600 text-sm">
                    We respond to emails within 4 hours during business hours
                  </p>
                </div>
              </div>
            </div>

            {/* Office Address */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-primary p-3 rounded-lg flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">OFFICE</h3>
                  <p className="text-gray-600 mb-2">
                    {config.contact.address.street}<br />
                    {config.contact.address.city}, {config.contact.address.state} {config.contact.address.zip}
                  </p>
                  <p className="text-gray-600 text-sm">By appointment only</p>
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-primary p-3 rounded-lg flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">
                    SERVICE AREA
                  </h3>
                  <p className="text-gray-600 mb-2">{config.contact.address.serviceArea}</p>
                  <p className="text-gray-600 text-sm">
                    Professional service throughout the region
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="gray" paddingY="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-xl text-gray-600">
            Quick answers to common questions about our services
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
              How quickly can you provide an estimate?
            </h3>
            <p className="text-gray-600">
              We provide written estimates within 24-48 hours of site visit. For simple projects, we
              can often provide preliminary estimates over the phone or via email.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
              Do you handle permits and approvals?
            </h3>
            <p className="text-gray-600">
              Yes, we handle all necessary permits and approvals for demolition work. Our team is
              familiar with local building codes and permit requirements.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
              What's included in your cleanup service?
            </h3>
            <p className="text-gray-600">
              Complete debris removal, site cleanup, and proper disposal of all materials. We leave
              your property clean and ready for the next phase of your project.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
              Are you licensed and insured?
            </h3>
            <p className="text-gray-600">
              Yes, we are fully licensed contractors with comprehensive liability and workers'
              compensation insurance. We provide certificates of insurance upon request.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark" paddingY="xl">
        <div className="text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">START YOUR PROJECT TODAY</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait - contact {config.business.name} today for your free estimate and
            consultation. Let's bring your vision to life.
          </p>
          <div className="space-x-4">
            <Button href={config.contact.phone.link} variant="accent" size="lg">
              Call {config.contact.phone.display}
            </Button>
            <Button href={`mailto:${config.contact.email.main}`} variant="secondary" size="lg">
              Send Email
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
