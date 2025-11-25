import { Metadata } from 'next'
import { getBusinessConfig, getActiveServices, getActiveServiceAreas } from './businessHelpers'

/**
 * Generates dynamic metadata for pages based on business configuration
 */

const config = getBusinessConfig()

/**
 * Base metadata that can be extended by specific pages
 */
export function getBaseMetadata(): Metadata {
  return {
    title: config.seo.title,
    description: config.seo.description,
    keywords: config.seo.keywords,
    openGraph: {
      title: config.seo.title,
      description: config.seo.description,
      url: config.website.url,
      siteName: config.business.name,
      type: 'website',
      images: [
        {
          url: `${config.website.url}${config.branding.logo.main}`,
          width: 1200,
          height: 630,
          alt: `${config.business.name} Logo`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: config.seo.title,
      description: config.seo.description,
      images: [`${config.website.url}${config.branding.logo.main}`],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

/**
 * Home page metadata
 */
export function getHomeMetadata(): Metadata {
  return {
    ...getBaseMetadata(),
    title: `Junk Removal Near Me | #1 ${config.contact.address.serviceArea} Junk Removal Service`,
    description: `Looking for junk removal near me? Free Space Junk Removal is Northern Utah's #1 rated junk removal service. Same-day pickup, transparent pricing, eco-friendly disposal. Serving Ogden, Logan, Brigham City with professional junk hauling services. Call now for immediate junk removal near you!`,
    keywords: 'junk removal near me, junk hauling near me, same day junk removal, furniture removal near me, appliance removal near me, junk removal services near me, northern utah junk removal, ogden junk removal, logan junk removal, local junk removal, residential junk removal, commercial junk removal'
  }
}

/**
 * About page metadata
 */
export function getAboutMetadata(): Metadata {
  return {
    ...getBaseMetadata(),
    title: `About ${config.business.name} | Expert ${config.business.tagline}`,
    description: `Learn about ${config.business.name} - ${config.business.experience} years of experience in professional services. ${config.business.missionStatement} Licensed, insured, and trusted by homeowners.`,
    keywords: `about ${config.business.name.toLowerCase()}, ${config.business.tagline.toLowerCase()}, experienced contractors, licensed contractors`,
  }
}

/**
 * Contact page metadata
 */
export function getContactMetadata(): Metadata {
  return {
    ...getBaseMetadata(),
    title: `Contact ${config.business.name} | Free Estimates & Consultation`,
    description: `Contact ${config.business.name} for a free estimate. Call ${config.contact.phone.display} or email ${config.contact.email.main}. Serving ${config.contact.address.serviceArea}. Licensed, insured, and ready to help.`,
    keywords: `contact ${config.business.name.toLowerCase()}, free estimate, ${config.contact.address.serviceArea.toLowerCase()}, ${config.contact.phone.display}`,
  }
}

/**
 * Services page metadata
 */
export function getServicesMetadata(): Metadata {
  const services = getActiveServices()
  const serviceNames = services.map((service) => service.name.toLowerCase()).join(', ')

  return {
    ...getBaseMetadata(),
    title: `Professional Services ${config.contact.address.serviceArea} | Expert Contractors`,
    description: `Expert services throughout ${config.contact.address.serviceArea}. Professional ${serviceNames} and more. Licensed contractors serving ${config.contact.address.serviceArea} and surrounding areas.`,
    keywords: `services ${config.contact.address.serviceArea.toLowerCase()}, ${serviceNames}, professional contractor, ${config.contact.address.serviceArea.toLowerCase()}`,
  }
}

/**
 * Service areas page metadata
 */
export function getServiceAreasMetadata(): Metadata {
  const serviceAreas = getActiveServiceAreas()
  const areaNames = serviceAreas.map((area) => area.name).join(', ')

  return {
    ...getBaseMetadata(),
    title: `Service Areas | ${config.business.name} Coverage Throughout ${config.contact.address.serviceArea}`,
    description: `${config.business.name} serves ${areaNames} and surrounding communities. Professional services throughout ${config.contact.address.serviceArea} with local expertise and reliable service.`,
    keywords: `service areas, ${areaNames.toLowerCase()}, ${config.contact.address.serviceArea.toLowerCase()}, local contractors`,
  }
}

/**
 * Blog page metadata
 */
export function getBlogMetadata(): Metadata {
  return {
    ...getBaseMetadata(),
    title: `${config.business.name} Blog | Tips, News & Insights`,
    description: `Expert tips, industry news, and insights from ${config.business.name}. Stay informed about best practices, trends, and updates in ${config.contact.address.serviceArea}.`,
    keywords: `${config.business.name.toLowerCase()} blog, tips, industry news, ${config.contact.address.serviceArea.toLowerCase()}`,
  }
}

/**
 * Gallery page metadata
 */
export function getGalleryMetadata(): Metadata {
  return {
    ...getBaseMetadata(),
    title: `${config.business.name} Gallery | Professional Work Examples`,
    description: `View examples of ${config.business.name}'s professional work throughout ${config.contact.address.serviceArea}. See the quality and craftsmanship that makes us the trusted choice.`,
    keywords: `${config.business.name.toLowerCase()} gallery, work examples, before and after, ${config.contact.address.serviceArea.toLowerCase()}`,
  }
}

/**
 * Dynamic metadata for individual service pages
 */
export function getServiceMetadata(serviceSlug: string): Metadata {
  const services = getActiveServices()
  const service = services.find((s) => s.slug === serviceSlug)

  if (!service) {
    return getServicesMetadata() // Fallback to services page metadata
  }

  const title = service.seo?.title || `${service.name} Services | ${config.business.name}`
  const description = service.seo?.description || service.shortDescription

  return {
    ...getBaseMetadata(),
    title,
    description,
    keywords: `${service.name.toLowerCase()}, ${service.name.toLowerCase()} ${config.contact.address.serviceArea.toLowerCase()}, ${service.category}, professional contractors`,
  }
}

/**
 * Dynamic metadata for individual service area pages
 */
export function getServiceAreaMetadata(areaSlug: string): Metadata {
  const serviceAreas = getActiveServiceAreas()
  const area = serviceAreas.find((a) => a.slug === areaSlug)

  if (!area) {
    return getServiceAreasMetadata() // Fallback to service areas page metadata
  }

  const title = area.seo?.title || `${area.name} ${area.state} Services | ${config.business.name}`
  const description =
    area.seo?.description ||
    `${config.business.name} serves ${area.name}, ${area.state}. ${area.description} Contact us for professional services in ${area.name}.`

  return {
    ...getBaseMetadata(),
    title,
    description,
    keywords: `${area.name.toLowerCase()}, ${area.state.toLowerCase()}, ${config.business.name.toLowerCase()}, local contractors ${area.name.toLowerCase()}`,
  }
}

/**
 * Generate structured data for the organization
 */
export function getOrganizationStructuredData() {
  const serviceAreas = getActiveServiceAreas()
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': config.website.url,
    name: config.business.name,
    alternateName: 'Free Space Junk Removal',
    description: 'Professional junk removal and hauling services throughout Northern Utah. Same-day pickup, transparent pricing, eco-friendly disposal.',
    url: config.website.url,
    telephone: config.contact.phone.display,
    email: config.contact.email.main,
    address: {
      '@type': 'PostalAddress',
      addressLocality: config.contact.address.city,
      addressRegion: config.contact.address.state,
      postalCode: config.contact.address.zip,
      streetAddress: config.contact.address.street,
      addressCountry: 'US'
    },
    areaServed: [
      {
        '@type': 'State',
        name: 'Utah'
      },
      {
        '@type': 'City',
        name: 'Ogden',
        containedInPlace: {
          '@type': 'State',
          name: 'Utah'
        }
      },
      {
        '@type': 'City', 
        name: 'Logan',
        containedInPlace: {
          '@type': 'State',
          name: 'Utah'
        }
      },
      {
        '@type': 'City',
        name: 'Brigham City', 
        containedInPlace: {
          '@type': 'State',
          name: 'Utah'
        }
      }
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '41.7323',
      longitude: '-111.8766'
    },
    logo: `${config.website.url}${config.branding.logo.main}`,
    image: `${config.website.url}${config.branding.logo.main}`,
    foundingDate: config.business.yearEstablished.toString(),
    slogan: 'Northern Utah\'s Premier Junk Removal Experts',
    priceRange: '$$',
    paymentAccepted: ['Cash', 'Credit Card', 'Check'],
    openingHours: 'Mo-Su 07:00-19:00',
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '41.7323',
        longitude: '-111.8766'
      },
      geoRadius: '50000'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Junk Removal Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Residential Junk Removal',
            description: 'Professional junk removal services for homes throughout Northern Utah'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service', 
            name: 'Commercial Junk Removal',
            description: 'Business junk hauling and cleanout services for Northern Utah companies'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Appliance Removal',
            description: 'EPA-compliant appliance disposal and recycling throughout Northern Utah'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Furniture Removal',
            description: 'Professional furniture hauling and disposal services in Northern Utah'
          }
        }
      ]
    }
  }
}
