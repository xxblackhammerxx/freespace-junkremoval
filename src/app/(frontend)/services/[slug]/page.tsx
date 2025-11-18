import Button from '@/components/Button'
import FAQ from '@/components/FAQ'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import AnimatedSection from '@/components/AnimatedSection'
import BeforeAfter from '@/components/BeforeAfter'
import { getActiveServices, getServiceBySlug, getBusinessConfig } from '@/utils/businessHelpers'
import { getServiceMetadata } from '@/utils/metadataHelpers'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const services = getActiveServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  return getServiceMetadata(resolvedParams.slug)
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const service = getServiceBySlug(resolvedParams.slug)
  const config = getBusinessConfig()

  if (!service) {
    notFound()
  }

  // Default content if no custom content is provided
  const defaultHero = {
    title: service.name,
    subtitle: `Professional ${service.name} Services`,
    description: service.shortDescription,
    backgroundImage: service.image,
  }

  const hero = service.content?.hero || defaultHero
  const mainContent = service.content?.sections?.mainContent
  const processSteps = service.content?.sections?.processSteps
  const serviceTypes = service.content?.sections?.serviceTypes
  const faq = service.content?.sections?.faq

  return (
    <Layout
      ctaProps={{
        title: `READY FOR YOUR ${service.name.toUpperCase()}?`,
        description: `Get a free estimate for your ${service.name.toLowerCase()} project. Fast, safe, and professional service guaranteed.`,
        primaryButtonText: 'Get Free Quote',
      }}
    >
      <Hero
        title={hero.title || defaultHero.title}
        subtitle={hero.subtitle || defaultHero.subtitle}
        description={hero.description || defaultHero.description}
        buttonText={`Get Free ${service.name} Quote`}
        buttonLink="/contact"
        backgroundImage={hero.backgroundImage || defaultHero.backgroundImage}
      />

      {/* Service Before & After Gallery - Only show for services with image variations */}
      {service.slug === 'kitchen-demolition' && (
        <Section background="gray" paddingY="xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">
                {service.name.toUpperCase()} BEFORE & AFTER
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                See the dramatic transformation our professional {service.name.toLowerCase()}{' '}
                services provide. From outdated spaces to clean slates ready for renovation - our
                expert contractors deliver exceptional results every time.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <AnimatedSection delay={100}>
              <BeforeAfter
                beforeImage="web-content/kitchen-before.jpg"
                afterImage="web-content/kitchen-after.jpg"
                title="Complete Kitchen Demolition"
                description="Full kitchen demo including cabinets, countertops, appliances, and flooring removal"
              />
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <BeforeAfter
                beforeImage="web-content/kitchenfancy-before.jpg"
                afterImage="web-content/kitchenfancy-after.jpg"
                title="High-End Kitchen Demo"
                description="Careful demolition of luxury kitchen preserving valuable structural elements"
              />
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection delay={300}>
              <BeforeAfter
                beforeImage="web-content/kitchenfloor-before.jpg"
                afterImage="web-content/kitchenfloor-after.jpg"
                title="Kitchen Floor Demolition"
                description="Professional kitchen flooring removal down to subfloor preparation"
              />
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <BeforeAfter
                beforeImage="web-content/smallkitchen-before.jpg"
                afterImage="web-content/smallkitchen-after.jpg"
                title="Compact Kitchen Demo"
                description="Efficient demolition of smaller kitchen spaces with precise care"
              />
            </AnimatedSection>
          </div>
        </Section>
      )}

      {/* Main Content Section */}
      {mainContent && (
        <Section paddingY="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div>
                <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">
                  {mainContent.title || `EXPERT ${service.name.toUpperCase()} SERVICES`}
                </h2>
                {mainContent.content?.map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {mainContent.benefits && (
                  <div className="space-y-4 mb-8">
                    {mainContent.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="bg-primary p-1 rounded-full">
                          <svg
                            className="h-4 w-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">{benefit.title}</span>
                      </div>
                    ))}
                  </div>
                )}

                <Button href="/contact" variant="primary" size="lg">
                  Schedule {service.name}
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={200}>
              <div className="relative">
                <div
                  className="bg-cover bg-center rounded-lg h-96 shadow-xl"
                  style={{
                    backgroundImage: `url('${service.image}')`,
                  }}
                ></div>
              </div>
            </AnimatedSection>
          </div>
        </Section>
      )}

      {/* Fallback main content */}
      {!mainContent && (
        <Section paddingY="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div>
                <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">
                  EXPERT {service.name.toUpperCase()} SERVICES
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {service.longDescription}
                </p>

                <div className="space-y-4 mb-8">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-primary p-1 rounded-full">
                        <svg
                          className="h-4 w-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button href="/contact" variant="primary" size="lg">
                  Schedule {service.name}
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={200}>
              <div className="relative">
                <div
                  className="bg-cover bg-center rounded-lg h-96 shadow-xl"
                  style={{
                    backgroundImage: `url('${service.image}')`,
                  }}
                ></div>
              </div>
            </AnimatedSection>
          </div>
        </Section>
      )}

      {/* Service Types Section */}
      {serviceTypes && (
        <Section background="gray" paddingY="xl">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">
                {serviceTypes.title || `${service.name.toUpperCase()} SERVICES WE PROVIDE`}
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our expert contractors specialize in all types of {service.name.toLowerCase()}{' '}
                projects.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceTypes.types.map((type, index) => (
              <AnimatedSection key={index} delay={(index + 1) * 100}>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <ul className="space-y-2 text-gray-600">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
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
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Section>
      )}

      {/* Process Steps Section */}
      {processSteps && (
        <Section paddingY="xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatedSection direction="left" className="lg:col-span-2">
              <div>
                <h2 className="text-4xl font-heading font-bold text-brand-dark mb-8">
                  {processSteps.title || 'OUR PROCESS'}
                </h2>

                <div className="space-y-8">
                  {processSteps.steps.map((step, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-brand-dark font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={300}>
              <div className="space-y-6">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                    Safety First
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• OSHA-compliant safety procedures</li>
                    <li>• Licensed and insured team</li>
                    <li>• Proper protective equipment</li>
                    <li>• Dust control systems</li>
                    <li>• Structural integrity protection</li>
                  </ul>
                </div>

                <div className="bg-accent-50 p-6 rounded-lg">
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                    Eco-Friendly Disposal
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Material recycling programs</li>
                    <li>• Donation of reusable items</li>
                    <li>• Responsible waste disposal</li>
                    <li>• Environmental compliance</li>
                    <li>• Minimal landfill impact</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Section>
      )}

      {/* What We Service/Demolish - Generic section for services without custom content */}
      {!serviceTypes && !processSteps && (
        <Section background="gray" paddingY="xl">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">
                WHAT WE HANDLE
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive {service.name.toLowerCase()} services for every component
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <AnimatedSection key={index} delay={(index + 1) * 100}>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="h-8 w-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">{feature}</h3>
                  <p className="text-gray-600">
                    Professional {feature.toLowerCase()} with expert care and attention to detail.
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Section>
      )}

      {/* FAQ Section */}
      {faq && (
        <Section background="gray" paddingY="xl">
          <FAQ
            title={faq.title || `${service.name.toUpperCase()} FREQUENTLY ASKED QUESTIONS`}
            subtitle={
              faq.subtitle ||
              `Common questions about ${service.name.toLowerCase()} services answered by our expert contractors.`
            }
            items={faq.items}
          />
        </Section>
      )}

      {/* Fallback FAQ if no custom content */}
      {!faq && (
        <Section background="gray" paddingY="xl">
          <FAQ
            title={`${service.name.toUpperCase()} FREQUENTLY ASKED QUESTIONS`}
            subtitle={`Common questions about ${service.name.toLowerCase()} services answered by our expert contractors.`}
            items={[
              {
                question: `How long does ${service.name.toLowerCase()} take?`,
                answer: `${service.name} timeline varies based on project size and complexity. Most standard ${service.name.toLowerCase()} projects take 2-3 days. Our contractors provide accurate timelines during the initial consultation.`,
              },
              {
                question: `What's included in ${service.name.toLowerCase()} services?`,
                answer: `Our ${service.name.toLowerCase()} services include ${service.features.join(', ').toLowerCase()}. We handle all aspects from start to finish.`,
              },
              {
                question: 'Do you handle permits?',
                answer: `We obtain permits for our specific ${service.name.toLowerCase()} work. Property owners and other contractors are responsible for handling their own permits related to reconstruction, electrical, plumbing, or other non-demolition work.`,
              },
              {
                question: `How much does ${service.name.toLowerCase()} cost?`,
                answer: `${service.name} costs depend on the scope of work, project size, and complexity. Our contractors provide detailed free estimates that include all work, materials, and cleanup.`,
              },
              {
                question: 'Are you licensed and insured?',
                answer: `Yes, ${config.business.name} is fully licensed and insured to provide professional ${service.name.toLowerCase()} services throughout ${config.contact.address.serviceArea}.`,
              },
            ]}
          />
        </Section>
      )}
    </Layout>
  )
}
