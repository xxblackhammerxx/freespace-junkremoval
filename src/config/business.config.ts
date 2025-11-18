// Business Configuration Template
// This file contains all customizable parameters for the service business template

import { BusinessConfig } from './types'

// Default Configuration Template
export const businessConfig: BusinessConfig = {
  business: {
    name: 'Your Business Name',
    tagline: 'Your Service Area Tagline',
    description: 'Professional services for your community',
    yearEstablished: 2024,
    experience: '10+',
    missionStatement: 'To deliver professional, reliable services with exceptional customer care.',
    ownerNames: ['Owner Name'],
    countiesServed: ['County One', 'County Two', 'County Three'],
    generalServiceArea: 'Your General Service Area', // e.g., 'Northern Utah'
    mainRole: 'Contractor', // i.e. , 'Plumber', 'Electrician', etc.
    mainService: 'Construction', // e.g., 'construction', 'plumbing', etc.
  },
  socialMedia: {
    instagram: 'yourbusiness',
    facebook: 'yourbusiness',
    twitter: 'yourbusiness',
    linkedIn: 'yourbusiness',
    yelp: 'yourbusiness',
    houzz: 'yourbusiness',
    angiesList: 'yourbusiness',
  },

  branding: {
    logo: {
      main: '/images/logo-main.svg',
      horizontal: '/images/logo-horizontal.svg',
      icon: '/images/logo-icon.svg',
      white: '/images/logo-white.svg',
    },
    colors: {
      primary: '#007bff',
      secondary: '#1c1c1c',
      accent: '#28a745',
      light: '#f8f9fa',
    },
    fonts: {
      heading: 'Inter',
      body: 'Inter',
    },
  },

  website: {
    url: 'https://yourbusiness.com',
    domain: 'yourbusiness.com',
  },

  analytics: {
    googleTagManager: {
      id: 'GTM-T3BJJPWH',
      enabled: true,
    },
  },

  navigation: {
    main: [
      { label: 'Home', href: '/', type: 'link', showInMobile: true },
      {
        label: 'Services',
        href: '/services',
        type: 'dropdown',
        showInMobile: true,
        children: [
          { label: 'All Services', href: '/services', type: 'link' },
          { label: 'Service One', href: '/services/service-one', type: 'link' },
          { label: 'Service Two', href: '/services/service-two', type: 'link' },
          { label: 'Service Three', href: '/services/service-three', type: 'link' },
        ],
      },
      {
        label: 'Service Areas',
        type: 'dropdown',
        showInMobile: true,
        children: [
          { label: 'All Service Areas', href: '/service-areas', type: 'link' },
          { label: 'City One', href: '/service-areas/city-one', type: 'link' },
          { label: 'City Two', href: '/service-areas/city-two', type: 'link' },
          { label: 'City Three', href: '/service-areas/city-three', type: 'link' },
        ],
      },
      { label: 'About', href: '/about', type: 'link', showInMobile: true },
      { label: 'Gallery', href: '/gallery', type: 'link', showInMobile: true },
      { label: 'Blog', href: '/blog', type: 'link', showInMobile: true },
    ],
    footer: {
      sections: [
        {
          title: 'Quick Links',
          links: [
            { label: 'About Us', href: '/about' },
            { label: 'Gallery', href: '/gallery' },
            { label: 'Blog', href: '/blog' },
            { label: 'Contact', href: '/contact' },
          ],
        },
        {
          title: 'Services',
          links: [
            { label: 'Service One', href: '/services/service-one' },
            { label: 'Service Two', href: '/services/service-two' },
            { label: 'Service Three', href: '/services/service-three' },
          ],
        },
      ],
      social: [
        {
          platform: 'Facebook',
          href: 'https://www.facebook.com/yourbusiness',
          icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
        },
      ],
      bottomLinks: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
      ],
      showServiceAreas: true,
    },
    cta: {
      text: 'Get Quote',
      href: '/contact',
      type: 'button',
    },
  },

  contact: {
    phone: {
      display: '(555) 123-4567',
      link: 'tel:5551234567',
    },
    email: {
      main: 'office@yourbusiness.com',
      info: 'info@yourbusiness.com',
    },
    address: {
      street: '123 Main Street',
      city: 'Your City',
      state: 'Your State',
      zip: '12345',
      serviceArea: 'Your Service Area', // general service area, i.e. 'Northern Utah'
    },
  },

  services: [
    {
      id: 'service-one',
      name: 'Service One',
      slug: 'service-one',
      shortDescription:
        'Description of your first service offering. Explain what this service includes and who it benefits.',
      longDescription:
        'Detailed description of service one including all aspects and benefits provided to customers.',
      features: [
        'Feature one of this service',
        'Feature two of this service',
        'Feature three of this service',
        'Feature four of this service',
      ],
      image: '/images/service-one.jpg',
      category: 'service',
      buttonText: 'Learn More About Service One',
      isActive: true,
    },
    {
      id: 'service-two',
      name: 'Service Two',
      slug: 'service-two',
      shortDescription:
        'Description of your second service offering. Explain what this service includes and who it benefits.',
      longDescription:
        'Detailed description of service two including all aspects and benefits provided to customers.',
      features: [
        'Feature one of this service',
        'Feature two of this service',
        'Feature three of this service',
        'Feature four of this service',
      ],
      image: '/images/service-two.jpg',
      category: 'service',
      buttonText: 'Learn More About Service Two',
      isActive: true,
    },
    {
      id: 'service-three',
      name: 'Service Three',
      slug: 'service-three',
      shortDescription:
        'Description of your third service offering. Explain what this service includes and who it benefits.',
      longDescription:
        'Detailed description of service three including all aspects and benefits provided to customers.',
      features: [
        'Feature one of this service',
        'Feature two of this service',
        'Feature three of this service',
        'Feature four of this service',
      ],
      image: '/images/service-three.jpg',
      category: 'service',
      buttonText: 'Learn More About Service Three',
      isActive: true,
    },
  ],

  serviceAreas: [
    {
      id: 'city-one',
      name: 'City One',
      slug: 'city-one',
      state: 'ST',
      county: 'County Name',
      description: 'Professional services throughout City One and surrounding areas.',
      specialties: [
        'Residential projects',
        'Commercial services',
        'Emergency response',
        'Specialized solutions',
      ],
      isActive: true,
    },
    {
      id: 'city-two',
      name: 'City Two',
      slug: 'city-two',
      state: 'ST',
      county: 'County Name',
      description: 'Comprehensive services serving City Two and surrounding communities.',
      specialties: [
        'Local expertise',
        'Community focused',
        'Reliable service',
        'Professional solutions',
      ],
      isActive: true,
    },
    {
      id: 'city-three',
      name: 'City Three',
      slug: 'city-three',
      state: 'ST',
      county: 'County Name',
      description: 'Professional services for City Three and surrounding areas.',
      specialties: ['Quality service', 'Local knowledge', 'Professional team', 'Trusted solutions'],
      isActive: true,
    },
  ],

  seo: {
    title: 'Your Business Name | Professional Service Provider',
    description:
      'Professional services provider offering quality solutions for your needs. Licensed, insured, and trusted by customers.',
    keywords: [
      'service provider',
      'professional services',
      'local business',
      'quality service',
      'licensed contractor',
      'your city',
      'your area',
    ],
  },

  testimonials: {
    data: [
      {
        name: 'Sarah Johnson',
        initial: 'S',
        projectType: 'Home Renovation Project',
        review: `If I could give these professionals 6 stars I would in a heartbeat! The entire crew was professional, respectful, friendly, extremely hard-working, and they exceeded my expectations every day. They left the work site in spotless condition despite the extensive work they completed. Despite all the challenges on this job, they made the most difficult tasks seem effortless.
The team lead kept everything running smoothly and kept me informed throughout the process. Every team member was courteous and skilled at their craft. I can't remember all of their names, but each person was awesome and contributed to the success of the project.
I highly recommend this company for jobs big or small. Outstanding work!`,
        rating: 5,
      },
      {
        name: 'Mike Thompson',
        initial: 'M',
        projectType: 'Commercial Renovation',
        review:
          'The team completed a large commercial project for our business. They showed up on time, and the crew did a fantastic job. The work was complex, but they managed it professionally and did a great job of minimizing disruption to our operations. I will definitely use them again for future projects.',
        rating: 5,
      },
      {
        name: 'Jennifer Davis',
        initial: 'J',
        projectType: 'Residential Service Project',
        review: `The owner and team were exceptional. One of my favorite things was how responsive they were and how quickly they were able to schedule and complete the work. The crew showed up on time and did excellent work throughout our home. They cleaned up after themselves and were extremely efficient. I'd highly recommend them for any of your service needs and will definitely be using them for future projects.`,
        rating: 5,
      },
    ],
    reviewsLink: 'https://www.google.com/search?q=Your+Business+Name+reviews',
  },
  faq: [],
}

export default businessConfig
