export interface TestimonialData {
  name: string
  initial: string
  projectType: string
  review: string
  rating: number
}

export interface BusinessConfig {
  // Core Business Information
  business: {
    name: string
    tagline: string
    description: string
    yearEstablished: number
    experience: string
    missionStatement: string
    ownerNames?: string[]
    mainHeroImage?: string
    countiesServed: string[]
    generalServiceArea: string // e.g., 'Northern Utah'
    mainRole: string // e.g., 'Contractor', 'Plumber', etc.
    mainService: string // e.g., 'construction', 'plumbing', etc.
  }
  socialMedia: {
    instagram?: string
    facebook?: string
    twitter?: string
    linkedIn?: string
    yelp?: string
    houzz?: string
    angiesList?: string
  }

  // Branding & Visual Identity
  branding: {
    logo: {
      main: string // Main logo for headers
      horizontal?: string // Horizontal version for wider spaces
      icon: string // Icon/favicon version
      white: string // White version for dark backgrounds
      primary?: string // Primary logo variant
      accent?: string // Accent logo variant
    }
    colors: {
      primary: string // Main brand color
      secondary: string // Secondary brand color (typically dark)
      accent: string // Accent color for highlights
      light: string // Light background color
    }
    fonts: {
      heading: string // Font family for headings
      body: string // Font family for body text
    }
  }

  // Website Configuration
  website: {
    url: string // Primary website URL (e.g., https://yourbusiness.com)
    domain: string // Domain name (e.g., yourbusiness.com)
  }

  // Analytics & Tracking
  analytics?: {
    googleTagManager?: {
      id: string // GTM container ID (e.g., GTM-XXXXXXX)
      enabled?: boolean // Enable/disable GTM
    }
    googleAnalytics?: {
      id?: string // GA4 measurement ID (e.g., G-XXXXXXXXXX)
      enabled?: boolean // Enable/disable GA4
    }
  }

  // Navigation Configuration
  navigation: {
    main: NavItem[]
    footer: {
      sections: FooterSection[]
      social: SocialLink[]
      bottomLinks: FooterLink[]
      showServiceAreas: boolean
    }
    cta: {
      text: string
      href: string
      type: 'button' | 'phone'
    }
  }

  // Contact Information
  contact: {
    phone: {
      display: string // Human readable format
      link: string // tel: link format
    }
    email: {
      main: string // Primary business email
      info: string // Info/contact email
    }
    address: {
      street: string
      city: string
      state: string
      zip: string
      serviceArea: string // General service area description
    }
  }

  // Services offered
  services: Service[]

  // Geographic service areas
  serviceAreas: ServiceArea[]

  // SEO & Meta
  seo: {
    title: string
    description: string
    keywords: string[]
  }

  // Testimonials & Reviews
  testimonials: {
    data: TestimonialData[]
    reviewsLink: string
  }

  // Frequently Asked Questions
  faq: {
    question: string
    answer: string
  }[]
}

export interface NavItem {
  label: string
  href?: string
  type: 'link' | 'dropdown'
  children?: NavItem[]
  showInMobile?: boolean
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface FooterLink {
  label: string
  href: string
}

export interface SocialLink {
  platform: string
  href: string
  icon: string // SVG path or icon identifier
}

export interface Service {
  id: string
  name: string
  slug: string
  shortDescription: string
  longDescription: string
  features: string[]
  image: string
  category: string
  buttonText?: string
  isActive: boolean
  seo?: {
    title?: string
    description?: string
  }
  content?: {
    hero?: {
      title?: string
      subtitle?: string
      description?: string
      backgroundImage?: string
    }
    sections?: {
      mainContent?: {
        title?: string
        content?: string[]
        benefits?: { title: string; description: string }[]
      }
      processSteps?: {
        title?: string
        steps: { title: string; description: string }[]
      }
      serviceTypes?: {
        title?: string
        types: { title: string; description: string; features: string[] }[]
      }
      faq?: {
        title?: string
        subtitle?: string
        items: { question: string; answer: string }[]
      }
    }
  }
}

export interface ServiceArea {
  id: string
  name: string
  slug: string
  state: string
  county?: string
  description: string
  specialties: string[]
  image?: string
  isActive: boolean
  seo?: {
    title?: string
    description?: string
  }
  content?: {
    hero?: {
      title?: string
      subtitle?: string
      description?: string
      backgroundImage?: string
    }
    sections?: {
      mainContent?: {
        title?: string
        content?: string[]
        highlights?: { title: string; description: string; icon?: string }[]
      }
      localServices?: {
        title?: string
        subtitle?: string
        services: { title: string; description: string; href: string; backgroundImage: string }[]
      }
      neighborhoods?: {
        title?: string
        areas: { title: string; description: string; icon?: string }[]
      }
      whyChooseUs?: {
        title?: string
        content: { title: string; description: string }[]
      }
      faq?: {
        title?: string
        subtitle?: string
        items: { question: string; answer: string }[]
      }
    }
  }
}
