import AnimatedSection from '@/components/AnimatedSection'
import Button from '@/components/Button'
import Link from 'next/link'

const PricingSummary = () => {
  // Key pricing data for home page display
  const keyPrices = [
    {
      name: 'Single Item',
      price: '$50',
      description: 'Perfect for one bulky item removal',
      features: ['Same-day available', 'No hidden fees'],
    },
    {
      name: 'Truck Load',
      price: '$95',
      description: 'Ideal for room cleanouts',
      features: ['6-8 cubic yards', 'Professional loading'],
    },
    {
      name: '1/2 Trailer Load',
      price: '$320',
      description: 'Great for multi-room cleanouts',
      features: ['Multi-room projects', 'Commercial cleanouts'],
    },
    {
      name: 'Full Trailer Load',
      price: '$490',
      description: 'Maximum capacity projects',
      features: ['Complete house cleanouts', 'Construction cleanup'],
    },
    {
      name: 'Multi Trailer Load',
      price: '$849',
      description: 'Great for estate cleanouts',
      features: ['Estate cleanouts', 'Large property clearing'],
    },
    {
      name: 'Custom Haul',
      price: 'Call for Quote',
      description: 'Specialized pricing for unique projects',
      features: ['Custom assessment', 'Flexible solutions'],
    },
  ]

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-4 md:mb-6">
              TRANSPARENT PRICING
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4">
              No hidden fees, no surprise charges. What you see is what you pay - it's that simple.
            </p>
          </div>
        </AnimatedSection>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {keyPrices.map((service, index) => (
            <AnimatedSection key={service.name} delay={100 * (index + 1)}>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">
                    {service.name.toUpperCase()}
                  </h3>
                  <div className="text-3xl font-heading font-bold text-primary mb-3">
                    {service.price}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                </div>
                
                <div className="flex-grow">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <svg
                          className="h-4 w-4 text-primary mr-2 flex-shrink-0"
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
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Key Benefits */}
        <AnimatedSection delay={500}>
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
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
                <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">
                  NO HIDDEN FEES
                </h3>
                <p className="text-gray-600 text-sm">
                  The price you see is exactly what you pay
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
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
                <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">
                  SAME-DAY SERVICE
                </h3>
                <p className="text-gray-600 text-sm">
                  Often available throughout Northern Utah
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
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
                <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">
                  ECO-FRIENDLY
                </h3>
                <p className="text-gray-600 text-sm">
                  We recycle and donate whenever possible
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection delay={600}>
          <div className="text-center">
            <div className="mb-6">
              <Button href="https://calendar.app.google/S8TaQaP9DRGngVtV7" variant="primary" size="lg" className="mr-4 mb-4 sm:mb-0">
                Schedule Junk Removal
              </Button>
              <Button href="/pricing" variant="secondary" size="lg">
                View Complete Pricing
              </Button>
            </div>
            <p className="text-gray-600">
              Need a custom quote? Call us at{' '}
              <a
                href="tel:3853268426"
                className="font-bold text-primary hover:text-primary-700 transition-colors"
              >
                (385) 326-8426
              </a>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default PricingSummary
