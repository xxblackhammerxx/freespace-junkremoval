// Service management utilities
import { businessConfig } from '@/config/business.config'
import { FooterLink, FooterSection, NavItem, Service, ServiceArea, SocialLink } from '@/config/types'

// Export types for use in components
export type { NavItem, FooterSection, FooterLink, SocialLink }

/**
 * Get all active services
 */
export function getActiveServices(): Service[] {
  return businessConfig.services.filter((service) => service.isActive)
}

/**
 * Get service by slug
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return businessConfig.services.find((service) => service.slug === slug && service.isActive)
}

/**
 * Get services by category
 */
export function getServicesByCategory(category: string): Service[] {
  return businessConfig.services.filter(
    (service) => service.category === category && service.isActive,
  )
}

/**
 * Get all active service areas
 */
export function getActiveServiceAreas(): ServiceArea[] {
  return businessConfig.serviceAreas.filter((area) => area.isActive)
}

/**
 * Get service area by slug
 */
export function getServiceAreaBySlug(slug: string): ServiceArea | undefined {
  return businessConfig.serviceAreas.find((area) => area.slug === slug && area.isActive)
}

/**
 * Get service areas by state
 */
export function getServiceAreasByState(state: string): ServiceArea[] {
  return businessConfig.serviceAreas.filter((area) => area.state === state && area.isActive)
}

/**
 * Get service areas by county
 */
export function getServiceAreasByCounty(county: string): ServiceArea[] {
  return businessConfig.serviceAreas.filter((area) => area.county === county && area.isActive)
}

/**
 * Generate service navigation links
 */
export function getServiceNavigation(): Array<{ href: string; label: string }> {
  return getActiveServices().map((service) => ({
    href: `/services/${service.slug}`,
    label: service.name,
  }))
}

/**
 * Generate service area navigation links
 */
export function getServiceAreaNavigation(): Array<{ href: string; label: string }> {
  return getActiveServiceAreas().map((area) => ({
    href: `/service-areas/${area.slug}`,
    label: `${area.name}, ${area.state}`,
  }))
}

/**
 * Get business configuration
 */
export function getBusinessConfig() {
  return businessConfig
}
