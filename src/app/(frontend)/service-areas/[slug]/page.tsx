import AnimatedSection from '@/components/AnimatedSection'
import Button from '@/components/Button'
import FAQ from '@/components/FAQ'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import ServiceCard from '@/components/ServiceCard'
import {
  getActiveServiceAreas,
  getServiceAreaBySlug,
  getBusinessConfig,
} from '@/utils/businessHelpers'
import { getServiceAreaMetadata } from '@/utils/metadataHelpers'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const serviceAreas = getActiveServiceAreas()
  return serviceAreas.map((area) => ({
    slug: area.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  return getServiceAreaMetadata(resolvedParams.slug)
}

export default async function ServiceAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const serviceArea = getServiceAreaBySlug(resolvedParams.slug)
  const config = getBusinessConfig()

  if (!serviceArea) {
    notFound()
  }

  // Default content if no custom content is provided
  const defaultHero = {
    title: `${config.business.name} - ${serviceArea.name} ${serviceArea.state}`,
    subtitle: `Professional Services in ${serviceArea.name}, ${serviceArea.state}`,
    description: `${config.business.name} serves ${serviceArea.name}, ${serviceArea.state} with expert services. ${serviceArea.description} Contact us for [REPLACE services] in ${serviceArea.name}.`,
    backgroundImage: serviceArea.image || '/images/default.webp',
  }

  const defaultLocalServices = serviceArea.specialties.map((specialty, index) => ({
    title: `${specialty} - ${serviceArea.name}`,
    description: `Professional ${specialty.toLowerCase()} services in ${serviceArea.name}, ${serviceArea.state}.`,
    href: '/services',
    backgroundImage: `/images/${specialty.toLowerCase().replace(/\s+/g, '-')}.jpg`,
  }))

  const hero = serviceArea.content?.hero || defaultHero
  const mainContent = serviceArea.content?.sections?.mainContent
  const localServices = serviceArea.content?.sections?.localServices
  const neighborhoods = serviceArea.content?.sections?.neighborhoods
  const whyChooseUs = serviceArea.content?.sections?.whyChooseUs
  const faq = serviceArea.content?.sections?.faq

  return (
    <Layout
      ctaProps={{
        title: `READY TO START YOUR ${serviceArea.name.toUpperCase()} PROJECT?`,
        description: `Contact ${config.business.name} today for a free estimate on your ${serviceArea.name}, ${serviceArea.state} project. As your trusted local [RELACEME contractor], we provide expert service throughout ${serviceArea.county || serviceArea.state}.`,
      }}
    >
      <Hero
        title={hero.title || defaultHero.title}
        subtitle={hero.subtitle || defaultHero.subtitle}
        description={hero.description || defaultHero.description}
        buttonText={`Get Free ${serviceArea.name} ${serviceArea.state} Quote`}
        buttonLink="/contact"
        backgroundImage={hero.backgroundImage || defaultHero.backgroundImage}
      />

      {mainContent && (
        <Section paddingY="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
                  {mainContent.title ||
                    `${config.business.name} in ${serviceArea.name}, ${serviceArea.state}`}
                </h2>
                {mainContent.content?.map((paragraph, index) => (
                  <p key={index} className="text-xl text-gray-600 mb-6">
                    {paragraph}
                  </p>
                ))}
                {mainContent.highlights && (
                  <div className="space-y-4">
                    {mainContent.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <svg
                          className="h-6 w-6 text-primary mt-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div>
                          <h3 className="font-heading font-bold text-brand-dark">
                            {highlight.title}
                          </h3>
                          <p className="text-gray-600">{highlight.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <Button href="/contact" variant="primary" size="lg">
                  Get Your Free {serviceArea.name} Estimate
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="relative">
                <div
                  className="bg-cover bg-center rounded-lg h-96 shadow-lg"
                  style={{ backgroundImage: "url('/images/team-consultation.jpg')" }}
                ></div>
                <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-brand-dark">
                      {config.business.experience}
                    </div>
                    <div className="text-sm font-semibold text-brand-dark">YEARS EXPERIENCE</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Section>
      )}

      {/* Service Areas Local Services */}
      {localServices && (
        <Section background="gray" paddingY="xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">
                {localServices.title ||
                  `SERVICES IN ${serviceArea.name.toUpperCase()}, ${serviceArea.state}`}
              </h2>
              {localServices.subtitle && (
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">{localServices.subtitle}</p>
              )}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localServices.services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100} direction="up">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  backgroundImage={service.backgroundImage}
                />
              </AnimatedSection>
            ))}
          </div>
        </Section>
      )}

      {/* Fallback local services if no custom content */}
      {!localServices && (
        <Section background="gray" paddingY="xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">
                SERVICES IN {serviceArea.name.toUpperCase()}, {serviceArea.state}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {config.business.name} provides comprehensive services throughout {serviceArea.name}
                , {serviceArea.state}. Our specialties include:
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {defaultLocalServices.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100} direction="up">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  backgroundImage={service.backgroundImage}
                />
              </AnimatedSection>
            ))}
          </div>
        </Section>
      )}

      {/* Neighborhoods Section */}
      {neighborhoods && (
        <Section paddingY="xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {neighborhoods.areas.map((area, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="bg-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    {area.icon ? (
                      <div dangerouslySetInnerHTML={{ __html: area.icon }} />
                    ) : (
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
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                    {area.title}
                  </h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Section>
      )}

      {/* Why Choose Us Section */}
      {whyChooseUs && (
        <Section paddingY="xl">
          <AnimatedSection>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                {whyChooseUs.title || `Why Choose ${config.business.name} in ${serviceArea.name}`}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whyChooseUs.content.map((item, index) => (
                  <div key={index}>
                    <h4 className="font-heading font-bold text-brand-dark mb-2">{item.title}</h4>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </Section>
      )}

      {/* FAQ Section */}
      {faq && (
        <Section paddingY="xl">
          <FAQ
            title={faq.title || `${serviceArea.name} ${serviceArea.state} SERVICE FAQ`}
            subtitle={
              faq.subtitle ||
              `Common questions about our services in ${serviceArea.name}, ${serviceArea.state}`
            }
            items={faq.items}
          />
        </Section>
      )}

      {/* Fallback FAQ if no custom content */}
      {!faq && (
        <Section paddingY="xl">
          <FAQ
            title={`${serviceArea.name} ${serviceArea.state} SERVICE FAQ`}
            subtitle={`Common questions about our services in ${serviceArea.name}, ${serviceArea.state}`}
            items={[
              {
                question: `Do you serve all areas of ${serviceArea.name}, ${serviceArea.state}?`,
                answer: `Yes, we provide comprehensive services throughout all of ${serviceArea.name}, ${serviceArea.state} and surrounding areas in ${serviceArea.county || serviceArea.state}.`,
              },
              {
                question: `How long have you been serving ${serviceArea.name}?`,
                answer: `${config.business.name} has been proudly serving ${serviceArea.name}, ${serviceArea.state} for ${config.business.experience} years with professional, reliable service.`,
              },
              {
                question: 'Are you licensed and insured?',
                answer: `Yes, ${config.business.name} is fully licensed and insured to provide professional services throughout ${serviceArea.name}, ${serviceArea.state} and surrounding areas.`,
              },
            ]}
          />
        </Section>
      )}
    </Layout>
  )
}
