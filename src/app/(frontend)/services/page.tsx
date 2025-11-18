import AnimatedSection from '@/components/AnimatedSection'
import Button from '@/components/Button'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import Link from 'next/link'
import { getBusinessConfig, getActiveServices } from '@/utils/businessHelpers'
import { getServicesMetadata } from '@/utils/metadataHelpers'

export const metadata = getServicesMetadata()

export default function ServicesPage() {
  const config = getBusinessConfig()
  const services = getActiveServices()

  return (
    <Layout
      ctaProps={{
        title: `NEED PROFESSIONAL SERVICES IN ${config.contact.address.serviceArea.toUpperCase()}?`,
        description: `Contact ${config.contact.address.serviceArea}'s premier service contractors today for a free estimate. Professional, reliable, and trusted throughout the region.`,
      }}
    >
      <Hero
        title="PROFESSIONAL SERVICES"
        subtitle={`${config.contact.address.serviceArea}'s Trusted Service Contractors`}
        description={`${config.business.description} Licensed, insured contractors ready to handle your project with expertise and care.`}
        buttonText="Get Free Quote"
        buttonLink="/contact"
        backgroundImage="/images/floor-demo-team-work.jpg"
      />

      <Section paddingY="xl">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark mb-4 md:mb-6">
              {config.contact.address.serviceArea.toUpperCase()} PROFESSIONAL SERVICES
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4">
              At {config.business.name}, we are {config.contact.address.serviceArea}'s trusted
              professional service contractors. {config.business.description}
              We serve residential and commercial clients throughout{' '}
              {config.contact.address.serviceArea} with precision, reliability, and complete
              satisfaction guaranteed.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 100} direction="up">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.shortDescription}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
                  >
                    {service.buttonText || 'Learn More'}
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section background="gray" paddingY="xl">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark mb-4 md:mb-6">
              WHY CHOOSE {config.contact.address.serviceArea.toUpperCase()}'S TOP SERVICE
              CONTRACTORS?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <AnimatedSection delay={100}>
                <div className="text-center">
                  <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">ON TIME</h3>
                  <p className="text-gray-600">We show up when we say we will, every time.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <div className="text-center">
                  <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">
                    CLEAN & ACCURATE
                  </h3>
                  <p className="text-gray-600">Precise work that protects your property.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={300}>
                <div className="text-center">
                  <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">TRUSTED</h3>
                  <p className="text-gray-600">Licensed, insured, and professionally certified.</p>
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={400}>
              <p className="text-xl text-accent font-semibold mb-6">
                "{config.business.tagline.toUpperCase()}"
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Get Your Free Estimate
              </Button>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </Section>
    </Layout>
  )
}
