import AnimatedSection from '@/components/AnimatedSection'
import BeforeAfter from '@/components/BeforeAfter'
import Button from '@/components/Button'
import FAQ from '@/components/FAQ'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import ServiceCard from '@/components/ServiceCard'
import Testimonials from '@/components/Testimonials'
import { getBusinessConfig, getActiveServices } from '@/utils/businessHelpers'
import { getHomeMetadata } from '@/utils/metadataHelpers'
import './global.css'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = getHomeMetadata()

export default function HomePage() {
  const config = getBusinessConfig()
  const services = getActiveServices()

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title={config.business.tagline.toUpperCase()}
        subtitle={`Serving ${config.contact.address.serviceArea}`}
        description={`${config.business.name} is ${config.business.generalServiceArea}'s trusted local service contractor. ${config.business.description} We specialize in professional services throughout ${config.contact.address.serviceArea.toLowerCase()} and beyond.`}
        buttonText="View Our Services"
        buttonLink="/services"
        isMainPage={true}
        backgroundImage={config.business.mainHeroImage || '/images/default.webp'}
      />

      {/* Services Overview */}
      <Section paddingY="xl">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-4 md:mb-6">
              COMPREHENSIVE SERVICE SOLUTIONS
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4">
              {config.business.description} We provide comprehensive services throughout{' '}
              {config.contact.address.serviceArea.toLowerCase()} with over{' '}
              {config.business.experience} years of experience. Our professional team specializes in
              delivering exceptional results for all your project requirements.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => (
            <AnimatedSection key={service.id} delay={100 * (index + 1)}>
              <ServiceCard
                title={service.name.toUpperCase()}
                description={service.shortDescription}
                backgroundImage={service.image}
                href={`/services/${service.slug}`}
                buttonText={service.buttonText || 'Learn More'}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={700}>
          <div className="text-center mt-12">
            <Button href="/services" variant="accent" size="lg">
              View All Services
            </Button>
          </div>
        </AnimatedSection>
      </Section>

      {/* Service Process */}
      <Section paddingY="xl">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-4 md:mb-6">
              OUR SERVICE PROCESS
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4">
              As professional {config.business.mainRole}s, we follow a systematic approach to every
              project. From initial assessment through final completion, our team ensures
              high-quality and efficient work.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedSection delay={100}>
            <div className="text-center">
              <div className="bg-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">ASSESSMENT</h3>
              <p className="text-gray-600">
                Our service professionals conduct thorough evaluation to plan the most effective
                approach for your project.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="text-center">
              <div className="bg-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                PREPARATION & SETUP
              </h3>
              <p className="text-gray-600">
                Site preparation includes proper setup and safety protocols. Our team prioritizes
                safety protocols for all work.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="text-center">
              <div className="bg-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                SERVICE EXECUTION
              </h3>
              <p className="text-gray-600">
                Professional service providers perform the actual work according to project
                specifications and requirements.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="text-center">
              <div className="bg-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                COMPLETION & CLEANUP
              </h3>
              <p className="text-gray-600">
                Complete project finalization and site cleanup follow every project. Our team
                ensures proper completion and leaves your site clean and ready for next steps.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="gray" paddingY="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-4 md:mb-6">
              WHY WE ARE THE BEST
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
                    LICENSED & INSURED PROFESSIONALS
                  </h3>
                  <p className="text-gray-600">Expert care from our Master Plumber</p>
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
                    FAST & RELIABLE SERVICE
                  </h3>
                  <p className="text-gray-600">
                    We answer promptly and provide dependable service you can trust.
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
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">We care</h3>
                  <p className="text-gray-600">
                    As {config.business.generalServiceArea} locals, we are deeply committed to our
                    community and provide personalized service with a genuine touch.
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
                    LOCAL SERVICE EXPERTS
                  </h3>
                  <p className="text-gray-600">
                    As the premier local {config.business.mainRole} in{' '}
                    {config.contact.address.serviceArea}, we have unparalleled knowledge of local
                    building codes and requirements. Our exceptional services guarantee compliance
                    and superior community-focused project management.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div>
              <Image
                src="/images/default.webp"
                alt="Why Choose Us"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-brand-dark">
                  {config.business.experience}
                </div>
                <div className="text-sm font-semibold text-brand-dark">YEARS EXPERIENCE</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Service Areas */}
      <Section paddingY="xl">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-4 md:mb-6">
              SERVICE AREAS
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4">
              We are proud to serve the following areas throughout{' '}
              {config.business.generalServiceArea}:{' '}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {config.serviceAreas.map((area, index) => (
                <Link
                  className="cursor-pointer"
                  href={`service-areas/${area.slug}`}
                  key={area.name}
                >
                  <div className="min-w-[250px] rounded-md border-2 border-primary hover:bg-primary-50/50 p-4 flex flex-col items-center justify-center gap-2">
                    {/* location icon svg in primary color */}
                    <svg
                      className="h-6 w-6 text-primary mb-2"
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
                    {area.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={100}>
            <div>
              <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                {config.contact.address.serviceArea.toUpperCase()} SERVICE COVERAGE
              </h3>
              <p className="text-gray-600 mb-6">
                Our {config.contact.address.serviceArea} team provides extensive coverage throughout{' '}
                {config.serviceAreas.map((i) => i.name).join(', ')} for all projects of any size
                across {config.contact.address.serviceArea}.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-primary mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {config.services[0]?.name || ''} services throughout{' '}
                  {config.contact.address.serviceArea}
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-primary mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {config.services[1]?.name || ''} across local areas
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-primary mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {config.services[2]?.name || ''} throughout {config.contact.address.serviceArea}
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-primary mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Same-day estimates and flexible project scheduling
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-ph-light p-8 rounded-lg">
              <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                GET YOUR {config.contact.address.serviceArea.toUpperCase()} SERVICE QUOTE
              </h3>
              <p className="text-gray-600 mb-6">
                Get a free estimate for your {config.contact.address.serviceArea} project from our
                experienced {config.business.mainRole.toLocaleLowerCase()}. We provide detailed
                quotes for all services including project consultation throughout{' '}
                {config.contact.address.serviceArea}.
              </p>
              <div className="space-y-4">
                <Button href="/contact" variant="primary" size="lg" className="w-full">
                  Get Free Service Quote
                </Button>
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Call for emergency services in {config.contact.address.serviceArea}
                  </p>
                  <a
                    href={config.contact.phone.link}
                    className="text-lg font-bold text-primary hover:text-primary-700 transition-colors"
                  >
                    {config.contact.phone.display}
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Testimonials */}
      <Section paddingY="xl">
        <Testimonials layout="compact" />
      </Section>

      {/* FAQ Section */}
      <Section background="gray" paddingY="xl">
        <FAQ items={config.faq} />
      </Section>
    </Layout>
  )
}
