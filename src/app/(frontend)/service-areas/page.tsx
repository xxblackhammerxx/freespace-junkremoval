import AnimatedSection from '@/components/AnimatedSection'
import Button from '@/components/Button'
import FAQ from '@/components/FAQ'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import Link from 'next/link'
import { getBusinessConfig, getActiveServiceAreas } from '@/utils/businessHelpers'
import { getServiceAreasMetadata } from '@/utils/metadataHelpers'

export const metadata = getServiceAreasMetadata()

export default function ServiceAreasPage() {
  const config = getBusinessConfig()
  const serviceAreas = getActiveServiceAreas()

  return (
    <Layout
      ctaProps={{
        title: `NEED PROFESSIONAL SERVICES IN ${config.contact.address.serviceArea.toUpperCase()}?`,
        description: `Contact our local service contractors today for a free estimate. We serve residential and commercial projects throughout ${config.contact.address.serviceArea} with professional services.`,
      }}
    >
      <Hero
        title="SERVICE AREAS"
        subtitle={`Local Service Contractor Serving ${config.contact.address.serviceArea}`}
        description={`${config.business.name} provides professional services throughout ${config.contact.address.serviceArea}. Our experienced team specializes in residential and commercial projects with comprehensive service and support.`}
        buttonText="Get Free Quote"
        buttonLink="/contact"
        backgroundImage="/images/floor-demo-team-work.jpg"
      />

      {/* Service Areas Overview */}
      <Section paddingY="xl">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
              LOCAL SERVICE CONTRACTOR COVERAGE
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              As your trusted local service contractor, we provide comprehensive professional
              services throughout {config.contact.address.serviceArea}. Our team of experienced
              professionals specializes in quality service delivery for residential and commercial
              project needs.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceAreas.map((area, index) => (
            <AnimatedSection key={index} delay={index * 100} direction="up">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${area.image || '/images/default-service-area.jpg'})`,
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">
                    {area.name}, {area.state}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{area.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-brand-dark mb-2">Specialties:</h4>
                    <ul className="space-y-1">
                      {area.specialties.map((specialty, specialtyIndex) => (
                        <li
                          key={specialtyIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <svg
                            className="h-4 w-4 text-primary mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link
                      href={`/service-areas/${area.slug}`}
                      className="inline-flex items-center justify-center px-4 py-2 bg-white border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors rounded"
                    >
                      Learn More About {area.name}
                    </Link>
                    <Button href="/contact" variant="primary" size="sm" className="w-full">
                      Get Quote for {area.name}
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Why Choose Local */}
      <Section background="gray" paddingY="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
                WHY CHOOSE LOCAL DEMOLITION CONTRACTORS?
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
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">
                      LOCAL EXPERTISE & KNOWLEDGE
                    </h3>
                    <p className="text-gray-600">
                      Our local demolition contractor team understands regional building codes,
                      permits, and regulations. We know the local requirements for demolition
                      projects, debris removal, and site cleanup in each community we serve.
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">
                      FASTER RESPONSE TIMES
                    </h3>
                    <p className="text-gray-600">
                      Being local demolition contractors means we can respond quickly to your
                      project needs. From emergency demolition services to scheduled interior
                      demolition and selective demolition, we're nearby and ready to work.
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">
                      COMMUNITY REPUTATION
                    </h3>
                    <p className="text-gray-600">
                      Our reputation in each community matters to us. As local demolition
                      contractors, we build lasting relationships through quality demolition work,
                      professional debris removal, and complete site cleanup on every project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="relative">
              <div
                className="bg-cover bg-center rounded-lg h-96 shadow-lg"
                style={{
                  backgroundImage: "url('/images/team-consultation.jpg')",
                }}
              ></div>
              <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-brand-dark">14+</div>
                  <div className="text-sm font-semibold text-brand-dark">CITIES SERVED</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Service Types */}
      <Section paddingY="xl">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
              COMPREHENSIVE DEMOLITION SERVICES IN ALL AREAS
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our demolition contractors provide consistent, professional service across all our
              service areas. Every location receives the same high-quality demolition services,
              debris removal, and site cleanup.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedSection delay={100}>
            <div className="text-center">
              <div className="bg-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                RESIDENTIAL DEMOLITION
              </h3>
              <p className="text-gray-600">
                Kitchen demolition, bathroom removal, interior demolition, and selective demolition
                for home renovation projects.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="text-center">
              <div className="bg-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                COMMERCIAL DEMOLITION
              </h3>
              <p className="text-gray-600">
                Professional demolition contractors handle office renovations, retail space
                clearing, and commercial project demolition.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="text-center">
              <div className="bg-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                DEBRIS REMOVAL
              </h3>
              <p className="text-gray-600">
                Complete debris removal and site cleanup services following any demolition work,
                with proper disposal methods.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="text-center">
              <div className="bg-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                SPECIALIZED SERVICES
              </h3>
              <p className="text-gray-600">
                Concrete demolition, tile removal, flooring removal, and specialized demolition for
                unique project requirements.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="gray" paddingY="xl">
        <FAQ
          title="SERVICE AREA QUESTIONS"
          subtitle="Common questions about our local demolition contractor services and coverage areas."
          items={[
            {
              question: 'Do you provide demolition services in all listed areas?',
              answer:
                "Yes, our demolition contractors provide comprehensive services in all listed service areas. We offer the same professional demolition services, debris removal, and site cleanup in every community we serve. Our local demolition team is familiar with each area's specific requirements and regulations.",
            },
            {
              question: 'What types of demolition projects do you handle in each area?',
              answer:
                'Our demolition contractors handle both residential and commercial projects in all service areas. This includes kitchen demolition, bathroom removal, interior demolition, selective demolition, concrete demolition, tile removal, flooring removal, and complete debris removal with site cleanup.',
            },
            {
              question: 'How quickly can local demolition contractors respond?',
              answer:
                'As local demolition contractors, we typically provide same-day estimates and can begin most demolition projects within 2-3 business days. Emergency demolition services are available for urgent situations requiring immediate attention and debris removal.',
            },
            {
              question: 'Are your demolition contractors licensed in all service areas?',
              answer:
                'Yes, our demolition contractors are properly licensed and insured to work in all our service areas. We maintain all required permits and certifications for demolition work, debris removal, and site safety protocols in each community we serve.',
            },
            {
              question: 'Do you charge extra for travel to different service areas?',
              answer:
                'No, there are no additional travel charges within our established service areas. Our demolition contractors provide consistent pricing for all demolition services, debris removal, and site cleanup regardless of which community your project is located in.',
            },
            {
              question: 'Can you handle large commercial demolition projects?',
              answer:
                'Absolutely. Our demolition contractors are equipped to handle both residential and commercial projects of all sizes. From small selective demolition to large-scale interior demolition and total demolition projects, we have the experience and equipment for commercial project demolition with comprehensive debris removal.',
            },
          ]}
        />
      </Section>
    </Layout>
  )
}
