import AnimatedSection from '@/components/AnimatedSection'
import Button from '@/components/Button'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import { getBusinessConfig } from '@/utils/businessHelpers'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Transparent Junk Removal Pricing | Free Space Junk Removal',
  description:
    'Upfront, transparent pricing for junk removal services in Northern Utah. No hidden fees. Single items start at $50. Truck loads, trailer loads, and add-on services available.',
  keywords:
    'junk removal pricing utah, transparent junk removal costs, northern utah junk removal prices, appliance removal cost, furniture removal pricing, trailer load cost',
  openGraph: {
    title: 'Transparent Junk Removal Pricing | Free Space Junk Removal',
    description:
      'Clear, upfront pricing for all junk removal services. No surprises, no hidden fees. See our complete price list for Northern Utah.',
    type: 'website',
  },
}

// Pricing data based on the provided table
const pricingData = {
  services: [
    {
      name: 'Single Item Pickup',
      price: '$50',
      description: 'Perfect for removing one bulky item like furniture, appliances, or exercise equipment',
      features: [
        'One large item removal',
        'Quick and efficient service',
        'Eco-friendly disposal',
        'Same-day availability',
      ],
    },
    {
      name: 'Truck Full Load',
      price: '$95',
      description: 'Ideal for small cleanouts, garage organization, or multiple items',
      features: [
        'Full truck capacity (6-8 cubic yards)',
        'Multiple items removal',
        'Perfect for room cleanouts',
        'Professional loading service',
      ],
    },
    {
      name: '1/4 Trailer Load',
      price: '$125',
      description: 'Great for medium-sized projects and small renovation debris',
      features: [
        'Quarter trailer capacity',
        'Construction debris removal',
        'Home renovation cleanup',
        'Bulk item disposal',
      ],
    },
    {
      name: '1/2 Trailer Load',
      price: '$320',
      description: 'Excellent for larger cleanouts and substantial junk removal projects',
      features: [
        'Half trailer capacity',
        'Large-scale cleanouts',
        'Estate cleanout services',
        'Commercial junk removal',
      ],
    },
    {
      name: 'Trailer Full Load',
      price: '$490',
      description: 'Maximum capacity for complete property cleanouts and large projects',
      features: [
        'Full trailer capacity',
        'Complete house cleanouts',
        'Large commercial projects',
        'Construction site cleanup',
      ],
    },
  ],
  addOns: [
    {
      name: 'Garage/Yard Cleaning',
      price: '$100+',
      description: 'Professional cleaning service for garages, yards, and outdoor spaces',
    },
    {
      name: 'Appliance Removal',
      price: '$40 - $80',
      description: 'Safe removal and disposal of refrigerators, washers, dryers, and other appliances',
    },
    {
      name: 'Scrap Metal Hauling',
      price: '(on weight & volume)',
      description: 'Competitive pricing based on current market rates for scrap metal disposal',
    },
  ],
}

export default function PricingPage() {
  const config = getBusinessConfig()

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="TRANSPARENT PRICING"
        subtitle="No Hidden Fees, No Surprises"
        description="Get clear, upfront pricing for all our junk removal services throughout Northern Utah. What you see is what you pay - it's that simple."
        buttonText="Get Free Quote"
        buttonLink="/contact"
        backgroundImage="/images/default.webp"
      />

      {/* Main Pricing Section */}
      <Section paddingY="xl">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-4 md:mb-6">
              JUNK REMOVAL SERVICES
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4">
              Simple, transparent pricing for all your junk removal needs. No hidden fees, no surprise charges - just honest, upfront costs you can trust.
            </p>
          </div>
        </AnimatedSection>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pricingData.services.map((service, index) => (
            <AnimatedSection key={service.name} delay={100 * (index + 1)}>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-primary hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-heading font-bold text-brand-dark mb-2">
                    {service.name.toUpperCase()}
                  </h3>
                  <div className="text-4xl font-heading font-bold text-primary mb-4">
                    {service.price}
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                
                <div className="flex-grow">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <svg
                          className="h-5 w-5 text-primary mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Button href="/contact" variant="primary" className="w-full">
                    Book This Service
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Add-on Services */}
        <AnimatedSection delay={600}>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-brand-dark mb-4">
                ADD-ON SERVICES
              </h3>
              <p className="text-lg text-gray-600">
                Enhance your junk removal service with these additional options
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingData.addOns.map((addon, index) => (
                <div key={addon.name} className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-center">
                    <h4 className="text-xl font-heading font-bold text-brand-dark mb-2">
                      {addon.name}
                    </h4>
                    <div className="text-2xl font-bold text-primary mb-3">
                      {addon.price}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {addon.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Why Our Pricing is Different */}
      <Section background="gray" paddingY="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark mb-6">
                WHY OUR PRICING IS DIFFERENT
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-2 rounded-full flex-shrink-0">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">
                      NO HIDDEN FEES
                    </h3>
                    <p className="text-gray-600">
                      The price you see is the price you pay. No surprise charges, no "additional fees" at the end.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-2 rounded-full flex-shrink-0">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">
                      UPFRONT ONLINE QUOTES
                    </h3>
                    <p className="text-gray-600">
                      Get accurate pricing immediately online. No waiting for estimates or on-site visits required.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-2 rounded-full flex-shrink-0">
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">
                      FAIR & COMPETITIVE
                    </h3>
                    <p className="text-gray-600">
                      Our pricing is competitive with local and national companies, but with better service and transparency.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-2 rounded-full flex-shrink-0">
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
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">
                      ECO-FRIENDLY INCLUDED
                    </h3>
                    <p className="text-gray-600">
                      Environmental responsibility is built into our pricing. We donate, recycle, and dispose responsibly at no extra cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                  READY TO GET STARTED?
                </h3>
                <p className="text-gray-600 mb-6">
                  Get your free quote today and experience the difference of transparent, honest pricing.
                </p>
              </div>
              
              <div className="space-y-4">
                <Button href="/contact" variant="primary" size="lg" className="w-full">
                  Get Free Quote Now
                </Button>
                
                <div className="text-center border-t pt-4">
                  <p className="text-sm text-gray-600 mb-2">
                    Questions about pricing? Call us directly:
                  </p>
                  <a
                    href={config.contact.phone.link}
                    className="text-xl font-bold text-primary hover:text-primary-700 transition-colors"
                  >
                    {config.contact.phone.display}
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Pricing FAQ */}
      <Section paddingY="xl">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark mb-6">
              PRICING QUESTIONS & ANSWERS
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">
                    Do you charge extra for stairs?
                  </h3>
                  <p className="text-gray-600">
                    No, stair access is included in our standard pricing. We handle the heavy lifting at no additional cost.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">
                    What's included in the service?
                  </h3>
                  <p className="text-gray-600">
                    All labor, loading, transportation, disposal fees, and cleanup. Everything is included in the quoted price.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">
                    Can I get a discount for multiple services?
                  </h3>
                  <p className="text-gray-600">
                    Yes! Contact us for custom pricing on large or multiple service bookings.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">
                    Do you offer same-day service?
                  </h3>
                  <p className="text-gray-600">
                    Yes, same-day service is often available. Contact us to check availability in your area.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">
                    What payment methods do you accept?
                  </h3>
                  <p className="text-gray-600">
                    We accept cash, check, and all major credit cards. Payment is due upon completion of service.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">
                    Is there a minimum charge?
                  </h3>
                  <p className="text-gray-600">
                    Our minimum charge is $50 for single item pickup, making us affordable for any size job.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Call to Action */}
      <Section background="primary" paddingY="lg">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              TRANSPARENT PRICING, EXCEPTIONAL SERVICE
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Experience the difference of honest, upfront pricing with professional junk removal service throughout Northern Utah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="accent" size="lg">
                Get Your Free Quote
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                View All Services
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </Layout>
  )
}
