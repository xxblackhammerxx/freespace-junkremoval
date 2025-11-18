import Button from '@/components/Button'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import { getAboutMetadata } from '@/utils/metadataHelpers'
import { getBusinessConfig } from '@/utils/businessHelpers'

export const metadata = getAboutMetadata()

export default function About() {
  const config = getBusinessConfig()

  return (
    <Layout
      ctaProps={{
        title: 'READY TO WORK WITH THE EXPERTS?',
        description: `Experience the ${config.business.name} difference. Contact us today to discuss your project and discover why we're the trusted choice for professional services.`,
        primaryButtonText: 'Start Your Project',
      }}
    >
      <Hero
        title={`ABOUT ${config.business.name.toUpperCase()}`}
        subtitle={`${config.business.experience} Years of Excellence in Professional Services`}
        description={`${config.business.missionStatement} Established in ${config.business.yearEstablished}.`}
        buttonText="Get Started Today"
        buttonLink="/contact"
        backgroundImage="/images/floor-demo-team.jpg"
      />

      {/* Company Story */}
      <Section paddingY="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">OUR STORY</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {config.business.missionStatement}
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Established in {config.business.yearEstablished}, {config.business.name} has been
              dedicated to serving {config.contact.address.serviceArea} with professional, reliable
              services. With {config.business.experience} years of experience, our commitment to
              excellence and customer satisfaction has earned us the trust of countless satisfied
              clients.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              As a locally owned and operated company, we take pride in knowing and serving the
              great people in {config.contact.address.serviceArea} as valued neighbors. We're more
              than just a service company - we're passionate about building lasting relationships
              with our community.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {config.business.description} Equipped with professional-grade tools and extensive
              industry knowledge, our team gets the job done efficiently and reliably, making us the
              go-to choice for all your service needs.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Today, we're proud to be a leading provider of professional services throughout{' '}
              {config.contact.address.serviceArea}, with a team of experienced professionals who
              bring expertise, integrity, and passion to every project.
            </p>
            <Button href="/gallery" variant="primary" size="lg">
              See Our Work
            </Button>
          </div>
          <div className="relative">
            <div
              className="bg-contain bg-center bg-no-repeat rounded-lg h-[500px] lg:h-[600px] shadow-xl"
              style={{
                backgroundImage: "url('/images/owner-couple-image-sam-emily.jpg')",
              }}
            ></div>
            <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-brand-dark">
                  {config.business.yearEstablished}
                </div>
                <div className="text-sm font-semibold text-brand-dark">ESTABLISHED</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Values */}
      <Section background="gray" paddingY="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">OUR CORE VALUES</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide every project and interaction with our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">SAFETY FIRST</h3>
            <p className="text-gray-600">
              Every project begins and ends with safety. Professional procedures protect our team
              and your property.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="h-8 w-8 text-white"
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
            <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">INTEGRITY</h3>
            <p className="text-gray-600">
              Honest communication, transparent pricing, and reliable service you can count on for
              every project.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">EXCELLENCE</h3>
            <p className="text-gray-600">
              We take pride in delivering superior results that exceed expectations and stand the
              test of time.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"
                />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">SUSTAINABILITY</h3>
            <p className="text-gray-600">
              Environmentally responsible practices including sustainable methods and responsible
              resource management on every project.
            </p>
          </div>
        </div>
      </Section>

      {/* Certifications & Awards */}
      <Section background="gray" paddingY="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">
            CERTIFICATIONS & RECOGNITION
          </h2>
          <p className="text-xl text-gray-600">
            Industry credentials and awards that demonstrate our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="h-8 w-8 text-brand-dark"
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
              LICENSED CONTRACTOR
            </h3>
            <p className="text-gray-600 text-sm">
              State-licensed general contractor with all required permits and bonds
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="h-8 w-8 text-brand-dark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">FULLY INSURED</h3>
            <p className="text-gray-600 text-sm">
              Comprehensive liability and workers' compensation insurance coverage
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="h-8 w-8 text-brand-dark"
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
              [REPLACE WITH CERTIFICATION 3]
            </h3>
            <p className="text-gray-600 text-sm">[REPLACE WITH CERTIFICATION 3 DESCRIPTION]</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="h-8 w-8 text-brand-dark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">
              [REPLACE WITH RATING/AWARD]
            </h3>
            <p className="text-gray-600 text-sm">[REPLACE WITH RATING/AWARD DESCRIPTION]</p>
          </div>
        </div>
      </Section>

      {/* Service Area */}
      <Section paddingY="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">SERVICE AREA</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We proudly serve homeowners and businesses throughout{' '}
              {config.contact.address.serviceArea}. Our service area includes major cities and
              communities throughout the region, bringing our expertise to your project wherever you
              are.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-2">
                <h4 className="font-semibold text-brand-dark">Primary Service Area:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>
                    • {config.contact.address.city}, {config.contact.address.state}
                  </li>
                  <li>• {config.contact.address.serviceArea}</li>
                  <li>• Surrounding communities</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-brand-dark">Contact Information:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Phone: {config.contact.phone.display}</li>
                  <li>• Email: {config.contact.email.main}</li>
                  <li>• Service Area: {config.contact.address.serviceArea}</li>
                </ul>
              </div>
            </div>
            <Button href="/contact" variant="primary" size="lg">
              Check Service Availability
            </Button>
          </div>
          <div className="rounded-lg h-96 overflow-hidden shadow-lg">
            <div className="bg-gray-300 h-full flex items-center justify-center">
              <p className="text-gray-600">Service Area Map</p>
              {/* You can integrate a real map service here */}
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
