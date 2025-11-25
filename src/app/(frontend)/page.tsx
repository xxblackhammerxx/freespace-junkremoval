import AnimatedSection from '@/components/AnimatedSection'
import BeforeAfter from '@/components/BeforeAfter'
import Button from '@/components/Button'
import FAQ from '@/components/FAQ'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import PricingSummary from '@/components/PricingSummary'
import Section from '@/components/Section'
import ServiceCard from '@/components/ServiceCard'
import Testimonials from '@/components/Testimonials'
import { getBusinessConfig, getActiveServices } from '@/utils/businessHelpers'
import { getHomeMetadata, getOrganizationStructuredData } from '@/utils/metadataHelpers'
import './global.css'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = getHomeMetadata()

export default function HomePage() {
  const config = getBusinessConfig()
  const services = getActiveServices()
  const structuredData = getOrganizationStructuredData()

  return (
    <Layout>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      {/* Hero Section */}
      <Hero
        title="JUNK REMOVAL NEAR ME - #1 NORTHERN UTAH SERVICE"
        subtitle={`Professional Junk Hauling Throughout ${config.contact.address.serviceArea}`}
        description={`Looking for reliable junk removal near me? Free Space Junk Removal is Northern Utah's most trusted junk removal service with same-day pickup, transparent pricing, and eco-friendly disposal. Our professional junk hauling team serves homeowners and businesses throughout Ogden, Logan, Brigham City, and surrounding areas. From single item pickup to full property cleanouts, we're the local junk removal experts you can count on for fast, fair, and environmentally responsible service.`}
        buttonText="Get Same-Day Junk Removal"
        buttonLink="/contact"
        isMainPage={true}
        backgroundImage={config.business.mainHeroImage || '/images/default.webp'}
      />

      {/* Services Overview */}
      <Section paddingY="xl">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-4 md:mb-6">
              PROFESSIONAL JUNK REMOVAL SERVICES NEAR YOU
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4">
              When you're searching for "junk removal near me," Free Space Junk Removal is your trusted local solution. Our comprehensive junk hauling services cover everything from furniture removal and appliance disposal to full property cleanouts throughout Northern Utah. As licensed and insured junk removal specialists serving Ogden, Logan, Brigham City, and surrounding communities, we've built our reputation on transparent pricing, same-day availability, and environmentally responsible disposal practices. Whether you need residential junk removal, commercial cleanouts, or construction debris hauling, our experienced team delivers professional service that Northern Utah homeowners and businesses have trusted for years.
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

      {/* Pricing Summary */}
      <Section background="gray" paddingY="xl">
        <PricingSummary />
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
              WHY NORTHERN UTAH CHOOSES US FOR JUNK REMOVAL
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              When searching for "junk removal near me," Northern Utah residents consistently choose Free Space Junk Removal because we're not just another hauling company - we're your local neighbors committed to providing exceptional service with complete transparency and environmental responsibility.
            </p>
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
                    LICENSED & INSURED JUNK REMOVAL EXPERTS
                  </h3>
                  <p className="text-gray-600">Our fully licensed and insured junk removal professionals carry comprehensive liability coverage, ensuring your property is protected during every junk hauling project. We maintain all required Utah state licenses and certifications for safe, legal junk removal services.</p>
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
                    SAME-DAY JUNK REMOVAL NEAR YOU
                  </h3>
                  <p className="text-gray-600">
                    Need junk removal today? We provide same-day junk hauling services throughout Northern Utah when you call before noon. Our local junk removal team is always ready to respond quickly to your urgent furniture removal, appliance disposal, or cleanout needs.
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">TRANSPARENT JUNK REMOVAL PRICING</h3>
                  <p className="text-gray-600">
                    Unlike other junk removal companies that provide vague "starting at" estimates, we offer real, itemized pricing online before we arrive. No surprise fees, inflated on-site quotes, or hidden costs - just honest, upfront pricing for all your junk hauling needs.
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
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">
                    ECO-FRIENDLY LOCAL JUNK DISPOSAL
                  </h3>
                  <p className="text-gray-600">
                    As Northern Utah locals, we prioritize environmental responsibility by partnering with local charities and recycling centers throughout Weber County, Cache County, and Box Elder County. Every junk removal project includes photo documentation showing exactly how your items were recycled, donated, or properly disposed of in our community.
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
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">
                    COMPREHENSIVE JUNK REMOVAL SERVICES
                  </h3>
                  <p className="text-gray-600">
                    From single furniture piece removal to complete estate cleanouts, our junk removal services handle projects of any size throughout Northern Utah. We specialize in appliance removal, construction debris hauling, garage cleanouts, and commercial junk removal with professional-grade equipment and techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div>
              <Image
                src="/images/why-we-are-the-best.jpeg"
                alt="Why We Are The Best - Free Space Junk Removal Team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-heading font-bold mb-2">
                  TRANSPARENT PRICING
                </div>
                <div className="text-sm font-medium mb-3">No Hidden Fees Ever</div>
                <div className="text-lg font-bold">
                  LOCAL & TRUSTED
                </div>
                <div className="text-xs font-medium">Northern Utah Experts</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Expert Junk Removal Experience */}
      <Section paddingY="xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <AnimatedSection>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">5★</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">TRUSTED LOCAL EXPERTS</h3>
              <p className="text-gray-600">
                Highly rated junk removal professionals serving Northern Utah communities with proven expertise in residential and commercial junk hauling services.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">1K+</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">PROJECTS COMPLETED</h3>
              <p className="text-gray-600">
                Thousands of successful junk removal projects throughout Ogden, Logan, Brigham City, and surrounding Northern Utah areas.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">24H</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">FAST RESPONSE TIME</h3>
              <p className="text-gray-600">
                Same-day junk removal services available when you need urgent junk hauling throughout Northern Utah communities.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-6 text-center">
              YOUR TRUSTED JUNK REMOVAL EXPERTS NEAR YOU
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">Local Junk Removal Experience You Can Trust</h3>
                <p className="text-gray-600 mb-4">
                  As Northern Utah's premier junk removal service, we understand what it means to provide reliable, professional junk hauling in our local communities. Our team has deep roots in Weber County, Cache County, and Box Elder County, giving us unique insight into local disposal regulations, recycling opportunities, and community needs.
                </p>
                <p className="text-gray-600 mb-4">
                  When you search for "junk removal near me," you're not just looking for any hauling company - you're looking for local junk removal experts who understand your community, respect your property, and deliver exceptional service every time. That's exactly what Free Space Junk Removal provides throughout Northern Utah.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">Comprehensive Junk Removal Expertise</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    EPA-compliant appliance removal and recycling
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Safe furniture removal from any floor or location
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Construction debris and renovation waste hauling
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Estate cleanouts with compassionate service
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Commercial junk removal with business-class service
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Eco-friendly disposal with detailed impact reporting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Service Areas */}
      <Section paddingY="xl">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-4 md:mb-6">
              JUNK REMOVAL SERVICE AREAS NEAR YOU
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4">
              Looking for junk removal near me? We proudly provide professional junk hauling services throughout Northern Utah's major communities. Our local junk removal experts serve residential and commercial customers with same-day availability, transparent pricing, and eco-friendly disposal practices in these areas:
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
                COMPREHENSIVE JUNK REMOVAL COVERAGE THROUGHOUT {config.contact.address.serviceArea.toUpperCase()}
              </h3>
              <p className="text-gray-600 mb-6">
                As your local junk removal specialists, we provide comprehensive junk hauling services throughout Weber County, Cache County, Box Elder County, and surrounding Northern Utah communities. Whether you need furniture removal in Ogden, appliance disposal in Logan, or construction debris hauling in Brigham City, our professional junk removal team is equipped to handle projects of any size with the expertise and reliability Northern Utah residents trust.
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
                GET YOUR FREE JUNK REMOVAL QUOTE TODAY
              </h3>
              <p className="text-gray-600 mb-6">
                Ready to schedule junk removal near you? Get a free, no-obligation estimate for your Northern Utah junk hauling project. Our transparent pricing means you'll know exactly what your junk removal will cost before we arrive - no surprise fees or inflated quotes. Whether you need same-day service or want to schedule ahead, our junk removal experts are ready to help with professional, reliable service throughout Northern Utah.
              </p>
              <div className="space-y-4">
                <Button href="/contact" variant="primary" size="lg" className="w-full">
                  Get Free Junk Removal Quote
                </Button>
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Call now for same-day junk removal near you
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
