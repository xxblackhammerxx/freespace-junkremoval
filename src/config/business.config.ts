// Business Configuration - Generated from Google Sheets data
// Free Space Junk Removal & Cleaning - Professional Junk Removal Services

import { BusinessConfig } from './types'

export const businessConfig: BusinessConfig = {
  business: {
    name: 'Free Space Junk Removal & Cleaning',
    tagline: "Northern Utah's Premier Junk Removal Experts",
    description:
      'Professional junk removal and cleaning services for homes and businesses across Northern Utah. Transparent pricing, eco-friendly disposal, and same-day service available.',
    yearEstablished: 2025,
    experience: 'New',
    missionStatement:
      'Clear space, not wallets. We make junk removal radically easy, fairly priced, and environmentally responsible—today.',
    ownerNames: ['Free Space Team'],
    countiesServed: ['Ogden County', 'Weber County', 'Cache County', 'Box Elder County'],
    generalServiceArea: 'Northern Utah',
    mainRole: 'Junk Removal Specialist',
    mainService: 'junk removal',
    mainHeroImage: '/images/north-utah-ogden-mountain.jpeg',
  },
  socialMedia: {
    instagram: '',
    facebook: '',
    twitter: '',
    linkedIn: '',
    yelp: 'freespace-junk-removal',
    houzz: '',
    angiesList: '',
  },

  branding: {
    logo: {
      main: '/images/logo-main.svg',
      horizontal: '/images/logo-horizontal.svg',
      icon: '/images/logo-icon.svg',
      white: '/images/logo-white.svg',
    },
    colors: {
      primary: '#008037',
      secondary: '#1c1c1c',
      accent: '#dabb54',
      light: '#f8f9fa',
    },
    fonts: {
      heading: 'Poppins',
      body: 'Montserrat',
    },
  },

  website: {
    url: 'https://freespace-junkremoval.com',
    domain: 'freespace-junkremoval.com',
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
          { label: 'Single Item Pickup', href: '/services/single-item-pickup', type: 'link' },
          { label: 'Truck Load', href: '/services/truck-load', type: 'link' },
          { label: '1/4 Load Removal', href: '/services/quarter-trailer-load', type: 'link' },
          { label: '1/2 Load Removal', href: '/services/half-trailer-load', type: 'link' },
          { label: 'Trailer Full Load', href: '/services/trailer-full-load', type: 'link' },
          { label: 'Appliance Removal', href: '/services/appliance-removal', type: 'link' },
          { label: 'Garage Cleaning', href: '/services/garage-cleaning', type: 'link' },
        ],
      },
      { label: 'Pricing', href: '/pricing', type: 'link', showInMobile: true },
      {
        label: 'Service Areas',
        type: 'dropdown',
        showInMobile: true,
        children: [
          { label: 'All Service Areas', href: '/service-areas', type: 'link' },
          { label: 'Ogden', href: '/service-areas/ogden-utah', type: 'link' },
          { label: 'Logan', href: '/service-areas/logan-utah', type: 'link' },
          { label: 'Brigham City', href: '/service-areas/brigham-city-utah', type: 'link' },
          { label: 'Hyrum', href: '/service-areas/hyrum-utah', type: 'link' },
          { label: 'North Ogden', href: '/service-areas/north-ogden-utah', type: 'link' },
        ],
      },
      { label: 'About', href: '/about', type: 'link', showInMobile: true },
      { label: 'Blog', href: '/blog', type: 'link', showInMobile: true },
    ],
    footer: {
      sections: [
        {
          title: 'Quick Links',
          links: [
            { label: 'About Us', href: '/about' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Blog', href: '/blog' },
            { label: 'Contact', href: '/contact' },
          ],
        },
        {
          title: 'Services',
          links: [
            { label: 'Single Item Pickup', href: '/services/single-item-pickup' },
            { label: 'Truck Load', href: '/services/truck-load' },
            { label: 'Appliance Removal', href: '/services/appliance-removal' },
            { label: 'Garage Cleaning', href: '/services/garage-cleaning' },
          ],
        },
      ],
      social: [
        {
          platform: 'Facebook',
          href: 'https://www.facebook.com/freespace-junk-removal',
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
      display: '(385) 326-8426',
      link: 'tel:3853268426',
    },
    email: {
      main: 'contact@freedomremoval.com',
      info: 'info@freedomremoval.com',
    },
    address: {
      street: '375 E 300 S',
      city: 'Hyrum',
      state: 'UT',
      zip: '84319',
      serviceArea: 'Northern Utah',
    },
  },

  services: [
    {
      id: 'single-item-pickup',
      name: 'Single Item Pickup',
      slug: 'single-item-pickup',
      shortDescription:
        'Fast and affordable single item junk removal throughout Northern Utah. Perfect for furniture, appliances, or large items you need gone today.',
      longDescription:
        "Our single item pickup service is ideal for homeowners and businesses who need just one bulky item removed quickly and efficiently. Whether it's a broken appliance, old furniture, or exercise equipment, we provide transparent upfront pricing and same-day service across Northern Utah.",
      features: [
        'Transparent upfront pricing online',
        'Same-day pickup available',
        'Eco-friendly disposal and recycling',
        'Photo verification before and after',
        'No hidden fees or surprise costs',
        'Licensed and insured service',
      ],
      image: '/images/single-item-pickup.jpg',
      category: 'junk removal',
      buttonText: 'Schedule Single Item Pickup',
      isActive: true,
      seo: {
        title: 'Single Item Pickup Northern Utah | Free Space Junk Removal',
        description:
          'Fast single item junk removal in Ogden, Logan, Brigham City. Transparent pricing, same-day service, eco-friendly disposal. Get your free quote today.',
      },
      content: {
        hero: {
          title: 'SINGLE ITEM PICKUP - NORTHERN UTAH',
          subtitle: 'Fast, Affordable, and Transparent Junk Removal',
          description:
            'Need one bulky item gone today? Our single item pickup service offers transparent online pricing, same-day availability, and environmentally responsible disposal throughout Ogden County, Weber County, Cache County, and Box Elder County.',
        },
        sections: {
          mainContent: {
            title: 'Professional Single Item Junk Removal',
            content: [
              'Free Space Junk Removal & Cleaning specializes in hassle-free single item pickup across Northern Utah. Unlike traditional junk removal services that require on-site estimates, we provide transparent pricing online before we even arrive at your location.',
              'Our professional team handles everything from furniture removal to large appliance disposal with the same level of care and expertise. Each pickup includes photo documentation, proper disposal or recycling, and a satisfaction guarantee.',
              'We serve homeowners, property managers, and businesses throughout Ogden, Logan, Brigham City, Hyrum, and surrounding communities with reliable same-day and next-day service options.',
              'Every single item pickup contributes to our local environmental impact, with detailed reporting on recycling and donation outcomes provided after each job.',
            ],
            benefits: [
              {
                title: 'Transparent Online Pricing',
                description:
                  "Know exactly what you'll pay before we arrive. No surprise fees or inflated on-site quotes.",
              },
              {
                title: 'Same-Day Availability',
                description:
                  'Need it gone today? We offer same-day pickup for single items throughout Northern Utah.',
              },
              {
                title: 'Eco-Friendly Disposal',
                description:
                  'We prioritize recycling and donation, keeping usable items out of landfills whenever possible.',
              },
              {
                title: 'Professional Documentation',
                description:
                  'Before and after photos plus disposal/recycling verification for every pickup.',
              },
              {
                title: 'Satisfaction Guarantee',
                description:
                  "Our work is guaranteed. If you're not satisfied, we'll make it right or refund your money.",
              },
              {
                title: 'Local Impact Reporting',
                description:
                  'See exactly how your pickup contributed to local recycling and donation efforts.',
              },
            ],
          },
          processSteps: {
            title: 'OUR SINGLE ITEM PICKUP PROCESS',
            steps: [
              {
                title: 'Get Instant Quote Online',
                description:
                  'Upload photos of your item and get transparent pricing immediately - no waiting for estimates.',
              },
              {
                title: 'Schedule Pickup Time',
                description:
                  'Choose from same-day or next-day pickup windows that work with your schedule.',
              },
              {
                title: 'Professional Removal',
                description:
                  'Our insured team arrives on time, handles item safely, and cleans up the area.',
              },
              {
                title: 'Responsible Disposal',
                description:
                  'Item is recycled, donated, or properly disposed of with photo verification provided.',
              },
            ],
          },
          serviceTypes: {
            title: 'Items We Handle',
            types: [
              {
                title: 'Furniture Removal',
                description: 'Couches, chairs, tables, dressers, beds, and all household furniture',
                features: [
                  'Safe removal from any floor',
                  'Donation when possible',
                  'No damage to walls or floors',
                ],
              },
              {
                title: 'Appliance Pickup',
                description:
                  'Refrigerators, washers, dryers, dishwashers, and other large appliances',
                features: [
                  'Proper refrigerant handling',
                  'Metal recycling',
                  'EPA-compliant disposal',
                ],
              },
              {
                title: 'Exercise Equipment',
                description: 'Treadmills, weight benches, ellipticals, and home gym equipment',
                features: [
                  'Heavy equipment specialists',
                  'Disassembly if needed',
                  'Parts recycling',
                ],
              },
              {
                title: 'Electronics Disposal',
                description: 'TVs, computers, printers, and electronic equipment',
                features: [
                  'Certified e-waste disposal',
                  'Data security measures',
                  'Component recycling',
                ],
              },
            ],
          },
          faq: {
            title: 'SINGLE ITEM PICKUP FAQ',
            subtitle: 'Common questions about our single item removal service',
            items: [
              {
                question: 'How do I get pricing for my single item?',
                answer:
                  "Simply visit our website and upload photos of your item. You'll receive transparent pricing immediately - no waiting for estimates or on-site quotes.",
              },
              {
                question: 'Do you offer same-day pickup?',
                answer:
                  'Yes! We offer same-day pickup throughout Northern Utah when you schedule before noon, subject to availability.',
              },
              {
                question: "What if my item doesn't fit in your truck?",
                answer:
                  "We bring the right equipment for every job. If it's truly oversized, we'll recommend our trailer service and adjust pricing accordingly.",
              },
              {
                question: 'Do you remove items from upper floors?',
                answer:
                  'Absolutely. Our team safely removes items from any floor, including basements and attics, with proper equipment and techniques.',
              },
              {
                question: 'What happens to my item after pickup?',
                answer:
                  "We prioritize donation and recycling. You'll receive photo documentation showing how your item was responsibly processed.",
              },
              {
                question: "Are there any items you won't pick up?",
                answer:
                  'We handle most household items. Hazardous materials, chemicals, and certain electronics require special handling - contact us for specific questions.',
              },
            ],
          },
        },
      },
    },
    {
      id: 'f150-truck-load',
      name: 'Truck Full Load',
      slug: 'f150-truck-load',
      shortDescription:
        'Professional truck load junk removal service for medium-sized cleanouts throughout Northern Utah. Transparent pricing and eco-friendly disposal guaranteed.',
      longDescription:
        'Our truck load service is perfect for medium-sized junk removal projects including room cleanouts, garage organization, or small renovation debris. This service handles approximately 6-8 cubic yards of materials with transparent upfront pricing.',
      features: [
        'Holds 6-8 cubic yards of junk',
        'Perfect for room cleanouts',
        'Transparent online pricing',
        'Same-day service available',
        'Eco-friendly sorting and disposal',
        'Professional team and equipment',
      ],
      image: '/images/f150-truck-load.jpg',
      category: 'junk removal',
      buttonText: 'Schedule Truck Load',
      isActive: true,
      seo: {
        title: 'Truck Load Junk Removal Utah | Free Space Junk Removal',
        description:
          'Medium-sized junk removal service in Northern Utah. Truck loads perfect for room cleanouts, garage cleaning. Transparent pricing, same-day service.',
      },
      content: {
        hero: {
          title: 'TRUCK LOAD JUNK REMOVAL',
          subtitle: 'Perfect for Medium-Sized Cleanouts',
          description:
            'Our truck load service handles medium-sized junk removal projects with transparent pricing and professional service. Ideal for room cleanouts, garage organization, or small renovation projects throughout Northern Utah.',
        },
        sections: {
          mainContent: {
            title: 'Professional Medium-Volume Junk Removal',
            content: [
              'The truck load service is our most popular option for homeowners tackling medium-sized cleanout projects. With capacity for 6-8 cubic yards of materials, this service bridges the gap between single item pickups and large-scale demolition projects.',
              'Our professional team arrives with a fully equipped truck and the expertise to handle everything from furniture and appliances to construction debris and household clutter. Every load is carefully sorted for maximum recycling and donation potential.',
              'Unlike national chains that provide vague "starting at" pricing, we offer transparent costs online before we roll. You know exactly what you\'re paying for the entire truck load, with no hidden fees or surprise charges.',
              'Each truck load service includes photo documentation, professional loading, responsible disposal, and detailed impact reporting showing how your junk contributed to local recycling and donation efforts.',
            ],
          },
        },
      },
    },
    {
      id: 'quarter-load',
      name: '1/4 Load Removal',
      slug: 'quarter-load',
      shortDescription:
        'Affordable 1/4 load junk removal perfect for small cleanouts and decluttering projects throughout Northern Utah. Transparent pricing and eco-friendly disposal.',
      longDescription:
        'Our 1/4 load service is ideal for small cleanouts, closet organization, or getting rid of accumulated household items. This economical option provides professional junk removal for smaller volumes.',
      features: [
        'Economical option for small amounts',
        'Perfect for closet cleanouts',
        'Transparent upfront pricing',
        'Professional handling and disposal',
        'Eco-friendly sorting process',
        'Photo verification included',
      ],
      image: '/images/quarter-load.jpg',
      category: 'junk removal',
      buttonText: 'Schedule 1/4 Load Pickup',
      isActive: true,
    },
    {
      id: 'half-load',
      name: '1/2 Load Removal',
      slug: 'half-load',
      shortDescription:
        'Professional 1/2 load junk removal service for moderate cleanouts and home organization projects. Serving all of Northern Utah with transparent pricing.',
      longDescription:
        'Our 1/2 load removal service handles moderate amounts of junk removal, perfect for basement cleanouts, office clearing, or accumulated household items that need professional removal.',
      features: [
        'Moderate capacity for versatile projects',
        'Great for basement or office cleanouts',
        'Fixed transparent pricing',
        'Same-day availability',
        'Professional sorting and disposal',
        'Local impact documentation',
      ],
      image: '/images/half-load.jpg',
      category: 'junk removal',
      buttonText: 'Schedule 1/2 Load Pickup',
      isActive: true,
    },
    {
      id: 'trailer-full-load',
      name: 'Trailer Full Load',
      slug: 'trailer-full-load',
      shortDescription:
        'Large-scale trailer load junk removal for major cleanouts, construction debris, and estate clearing throughout Northern Utah. Professional and eco-friendly.',
      longDescription:
        'Our trailer full load service handles the biggest junk removal projects including estate cleanouts, major renovations, construction debris, and large property clearing projects across Northern Utah.',
      features: [
        'Maximum capacity for large projects',
        'Perfect for estate and construction cleanouts',
        'Professional crew and equipment',
        'Comprehensive sorting and recycling',
        'Business-class documentation',
        'Bulk debris handling capability',
      ],
      image: '/images/trailer-full-load.jpg',
      category: 'junk removal',
      buttonText: 'Schedule Trailer Load',
      isActive: true,
    },
    {
      id: 'appliance-removal',
      name: 'Appliance Removal',
      slug: 'appliance-removal',
      shortDescription:
        'Professional appliance removal and disposal throughout Northern Utah. Safe handling of refrigerators, washers, dryers, and all household appliances.',
      longDescription:
        'Specialized appliance removal service with proper handling of refrigerants, metals, and electronic components. We safely remove and responsibly dispose of all types of household appliances.',
      features: [
        'EPA-compliant refrigerant handling',
        'Safe removal from any location',
        'Professional metal recycling',
        'Electronic component disposal',
        'Same-day service available',
        'Transparent fixed pricing',
      ],
      image: '/images/appliance-removal.jpg',
      category: 'specialty',
      buttonText: 'Schedule Appliance Removal',
      isActive: true,
      seo: {
        title: 'Appliance Removal Northern Utah | Free Space Junk Removal',
        description:
          'Professional appliance removal in Ogden, Logan, Brigham City. EPA-compliant disposal of refrigerators, washers, dryers. Same-day service available.',
      },
    },
    {
      id: 'garage-cleaning',
      name: 'Garage & Yard Cleaning',
      slug: 'garage-cleaning',
      shortDescription:
        'Complete garage and yard cleaning services throughout Northern Utah. Professional decluttering, junk removal, and organization for residential properties.',
      longDescription:
        'Our garage and yard cleaning service transforms cluttered spaces into organized, functional areas. We handle everything from accumulated household items to yard debris and storage cleanouts.',
      features: [
        'Complete garage organization',
        'Yard debris removal',
        'Storage area cleaning',
        'Donation sorting included',
        'Before/after documentation',
        'Eco-friendly disposal methods',
      ],
      image: '/images/garage-cleaning.jpg',
      category: 'cleaning',
      buttonText: 'Schedule Garage Cleaning',
      isActive: true,
      seo: {
        title: 'Garage Cleaning Northern Utah | Free Space Junk Removal',
        description:
          'Professional garage and yard cleaning in Northern Utah. Complete decluttering, junk removal, and organization services. Transform your space today.',
      },
    },
    {
      id: 'scrap-metal-hauling',
      name: 'Scrap Metal Hauling',
      slug: 'scrap-metal-hauling',
      shortDescription:
        'Professional scrap metal collection and hauling throughout Northern Utah. Turn your metal waste into recycling value with our efficient pickup service.',
      longDescription:
        'Our scrap metal hauling service helps property owners efficiently dispose of metal waste while supporting local recycling efforts. We handle all types of ferrous and non-ferrous metals.',
      features: [
        'All metal types accepted',
        'Professional sorting and processing',
        'Competitive recycling value',
        'Large volume handling',
        'Construction site cleanup',
        'Environmental compliance',
      ],
      image: '/images/scrap-metal-hauling.jpg',
      category: 'specialty',
      buttonText: 'Schedule Metal Pickup',
      isActive: true,
    },
  ],

  serviceAreas: [
    {
      id: 'ogden-utah',
      name: 'Ogden',
      slug: 'ogden-utah',
      state: 'UT',
      county: 'Weber County',
      description: 'Professional junk removal services throughout Ogden, Utah and Weber County.',
      specialties: [
        'Same-day residential junk removal',
        'Commercial property cleanouts',
        'Construction debris removal',
        'Eco-friendly disposal and recycling',
      ],
      isActive: true,
      seo: {
        title: 'Junk Removal Ogden UT | Free Space Junk Removal & Cleaning',
        description:
          'Professional junk removal in Ogden, Utah. Same-day service, transparent pricing, eco-friendly disposal. Serving Weber County with reliable junk hauling.',
      },
      content: {
        hero: {
          title: 'JUNK REMOVAL OGDEN UT',
          subtitle: "Weber County's Most Trusted Junk Removal Service",
          description:
            'Free Space Junk Removal & Cleaning provides transparent, eco-friendly junk removal throughout Ogden and Weber County. From single items to full property cleanouts, we deliver professional service with upfront pricing and same-day availability.',
        },
        sections: {
          mainContent: {
            title: "Ogden's Premier Junk Removal Experts",
            content: [
              'Ogden residents and businesses choose Free Space Junk Removal & Cleaning for our transparent pricing, environmental responsibility, and professional service. Unlike national chains that provide vague estimates, we offer clear pricing online before we arrive.',
              "Our local team understands Weber County's unique needs, from historic downtown properties to growing suburban neighborhoods. We provide specialized services for residential cleanouts, business relocations, and construction site cleanup.",
              'Every junk removal job in Ogden contributes to our community recycling efforts. We partner with local organizations to ensure usable items find new homes while diverting waste from area landfills.',
            ],
            highlights: [
              {
                title: 'Same-Day Service',
                description: 'Available throughout Ogden and Weber County',
                icon: '⚡',
              },
              {
                title: 'Transparent Pricing',
                description: 'No surprise fees or inflated on-site quotes',
                icon: '💰',
              },
              {
                title: 'Local Environmental Impact',
                description: 'Supporting Weber County recycling initiatives',
                icon: '♻️',
              },
              {
                title: 'Professional Documentation',
                description: 'Before/after photos and disposal verification',
                icon: '📸',
              },
            ],
          },
          localServices: {
            title: 'JUNK REMOVAL SERVICES IN OGDEN, UTAH',
            subtitle: 'Comprehensive solutions for Weber County residents and businesses',
            services: [
              {
                title: 'Residential Junk Removal',
                description: 'Home cleanouts, furniture removal, appliance disposal',
                href: '/services/residential-junk-removal',
                backgroundImage: '/images/ogden-residential.jpg',
              },
              {
                title: 'Commercial Cleanouts',
                description: 'Office moves, retail space clearing, warehouse cleanouts',
                href: '/services/commercial-junk-removal',
                backgroundImage: '/images/ogden-commercial.jpg',
              },
              {
                title: 'Construction Debris',
                description: 'Renovation waste, demolition cleanup, contractor support',
                href: '/services/construction-debris',
                backgroundImage: '/images/ogden-construction.jpg',
              },
              {
                title: 'Estate Cleanouts',
                description: 'Sensitive estate clearing with donation coordination',
                href: '/services/estate-cleanouts',
                backgroundImage: '/images/ogden-estate.jpg',
              },
            ],
          },
          neighborhoods: {
            title: 'OGDEN AREAS WE SERVE',
            areas: [
              {
                title: 'Downtown Ogden',
                description: 'Historic district, Union Station area, commercial properties',
                icon: '🏢',
              },
              {
                title: 'East Ogden',
                description: 'Foothill neighborhoods, larger properties, mountain access areas',
                icon: '🏔️',
              },
              {
                title: 'West Ogden',
                description: 'Established neighborhoods, family homes, community areas',
                icon: '🏘️',
              },
              {
                title: 'South Ogden',
                description: 'Suburban developments, mixed residential and commercial',
                icon: '🏡',
              },
            ],
          },
          whyChooseUs: {
            title: 'Why Ogden Residents Choose Free Space Junk Removal',
            content: [
              {
                title: 'Weber County Expertise',
                description:
                  "We know Ogden's neighborhoods, access challenges, and local disposal regulations.",
              },
              {
                title: 'Community Partnership',
                description:
                  'We work with local charities and recycling centers to maximize community benefit.',
              },
              {
                title: 'Professional Standards',
                description:
                  'Licensed, insured, and committed to the highest service standards in Weber County.',
              },
            ],
          },
          faq: {
            title: 'OGDEN JUNK REMOVAL FAQ',
            subtitle: 'Common questions from Weber County residents',
            items: [
              {
                question: 'Do you provide same-day service in Ogden?',
                answer:
                  'Yes, we offer same-day junk removal throughout Ogden and Weber County when you schedule before noon, subject to availability.',
              },
              {
                question: "How do you handle downtown Ogden's parking restrictions?",
                answer:
                  'Our team is experienced with downtown Ogden logistics. We coordinate parking and access to ensure efficient service without violations.',
              },
              {
                question: 'What areas of Weber County do you serve?',
                answer:
                  'We serve all of Ogden plus surrounding Weber County communities including Roy, Riverdale, Washington Terrace, and South Ogden.',
              },
              {
                question: 'Do you work with Ogden businesses and contractors?',
                answer:
                  'Absolutely. We provide business-class service including COI documentation, before/after photos, and flexible scheduling for commercial clients.',
              },
            ],
          },
        },
      },
    },
    {
      id: 'logan-utah',
      name: 'Logan',
      slug: 'logan-utah',
      state: 'UT',
      county: 'Cache County',
      description: 'Comprehensive junk removal services throughout Logan, Utah and Cache Valley.',
      specialties: [
        'Cache Valley residential services',
        'USU student moving assistance',
        'Rural property cleanouts',
        'University area apartment clearing',
      ],
      isActive: true,
      seo: {
        title: 'Junk Removal Logan UT | Free Space Junk Removal & Cleaning',
        description:
          'Professional junk removal in Logan, Utah and Cache Valley. Student-friendly service, rural property expertise, transparent pricing, eco-friendly disposal.',
      },
      content: {
        hero: {
          title: 'JUNK REMOVAL LOGAN UT',
          subtitle: "Cache Valley's Trusted Junk Removal Experts",
          description:
            'Serving Logan and Cache Valley with professional junk removal services tailored to university communities, rural properties, and residential needs. Transparent pricing and eco-friendly disposal guaranteed.',
        },
      },
    },
    {
      id: 'brigham-city-utah',
      name: 'Brigham City',
      slug: 'brigham-city-utah',
      state: 'UT',
      county: 'Box Elder County',
      description:
        'Professional junk removal services throughout Brigham City and Box Elder County.',
      specialties: [
        'Box Elder County coverage',
        'Rural and agricultural property services',
        'Residential and commercial cleanouts',
        'Agricultural waste management',
      ],
      isActive: true,
      seo: {
        title: 'Junk Removal Brigham City UT | Free Space Junk Removal',
        description:
          'Professional junk removal in Brigham City and Box Elder County. Rural property expertise, agricultural waste handling, transparent pricing.',
      },
    },
    {
      id: 'hyrum-utah',
      name: 'Hyrum',
      slug: 'hyrum-utah',
      state: 'UT',
      county: 'Cache County',
      description:
        'Local junk removal services for Hyrum and surrounding Cache County communities.',
      specialties: [
        'Local Cache County expertise',
        'Small town personalized service',
        'Residential property focus',
        'Community-oriented disposal',
      ],
      isActive: true,
      seo: {
        title: 'Junk Removal Hyrum UT | Free Space Junk Removal & Cleaning',
        description:
          'Local junk removal service in Hyrum, Utah. Personalized service for Cache County residents, transparent pricing, eco-friendly disposal.',
      },
    },
    {
      id: 'north-ogden-utah',
      name: 'North Ogden',
      slug: 'north-ogden-utah',
      state: 'UT',
      county: 'Weber County',
      description: 'Professional junk removal services for North Ogden and Weber County residents.',
      specialties: [
        'North Weber County expertise',
        'Suburban and rural properties',
        'Family-focused service approach',
        'Mountain access properties',
      ],
      isActive: true,
    },
    {
      id: 'willard-utah',
      name: 'Willard',
      slug: 'willard-utah',
      state: 'UT',
      county: 'Box Elder County',
      description: 'Comprehensive junk removal for Willard and surrounding Box Elder County areas.',
      specialties: [
        'Small community service',
        'Rural property expertise',
        'Agricultural area coverage',
        'Personalized local service',
      ],
      isActive: true,
    },
    {
      id: 'plain-city-utah',
      name: 'Plain City',
      slug: 'plain-city-utah',
      state: 'UT',
      county: 'Weber County',
      description: 'Reliable junk removal services for Plain City and Weber County residents.',
      specialties: [
        'Rural Weber County service',
        'Agricultural property support',
        'Residential cleanouts',
        'Community-focused approach',
      ],
      isActive: true,
    },
    {
      id: 'west-haven-utah',
      name: 'West Haven',
      slug: 'west-haven-utah',
      state: 'UT',
      county: 'Weber County',
      description: 'Professional junk removal services throughout West Haven and Weber County.',
      specialties: [
        'Suburban community focus',
        'Family property services',
        'Weber County coverage',
        'Residential expertise',
      ],
      isActive: true,
    },
    {
      id: 'liberty-utah',
      name: 'Liberty',
      slug: 'liberty-utah',
      state: 'UT',
      county: 'Weber County',
      description:
        'Specialized junk removal for Liberty and surrounding Weber County mountain areas.',
      specialties: [
        'Mountain access properties',
        'Cabin and recreational cleanouts',
        'Rural property expertise',
        'Seasonal service support',
      ],
      isActive: true,
    },
  ],

  seo: {
    title: 'Free Space Junk Removal & Cleaning | Northern Utah Junk Removal',
    description:
      'Professional junk removal and cleaning services in Northern Utah. Transparent pricing, eco-friendly disposal, same-day service. Serving Ogden, Logan, Brigham City.',
    keywords: [
      'junk removal northern utah',
      'junk removal ogden',
      'junk removal logan',
      'junk removal brigham city',
      'junk removal weber county',
      'junk removal cache county',
      'appliance removal utah',
      'furniture removal utah',
      'same day junk removal',
      'eco friendly junk removal',
      'transparent junk removal pricing',
      'utah junk hauling',
      'garage cleaning utah',
      'estate cleanout utah',
      'construction debris removal',
    ],
  },

  testimonials: {
    data: [
      {
        name: 'Jennifer Martinez',
        initial: 'J',
        projectType: 'Garage Cleanout',
        review: `Free Space Junk Removal exceeded all expectations! Their online pricing was exactly what I paid - no surprises or hidden fees. The team arrived on time and transformed our cluttered garage in just a few hours. They even provided photos showing how our items were recycled and donated. Professional, reliable, and environmentally conscious. Highly recommend!`,
        rating: 5,
      },
      {
        name: 'Mike Thompson',
        initial: 'M',
        projectType: 'Estate Cleanout',
        review:
          "Dealing with my father's estate was overwhelming, but Free Space made the junk removal portion stress-free. They were respectful, thorough, and helped coordinate donations of usable items. The transparent pricing and detailed documentation was exactly what we needed. Outstanding service during a difficult time.",
        rating: 5,
      },
      {
        name: 'Sarah Chen',
        initial: 'S',
        projectType: 'Appliance Removal',
        review: `Called Free Space for same-day refrigerator removal and they delivered! Professional team, fair pricing, and they handled the refrigerant disposal properly. The before/after photos and recycling documentation was a nice touch. Will definitely use them again for future junk removal needs.`,
        rating: 5,
      },
    ],
    reviewsLink: 'https://www.google.com/search?q=Free+Space+Junk+Removal+reviews',
  },

  faq: [
    {
      question: 'How do I get pricing for my junk removal project?',
      answer:
        "Simply visit our website and upload photos of your items or space. You'll receive transparent, upfront pricing immediately - no waiting for estimates or on-site quotes. This is one of our key differentiators from other junk removal services.",
    },
    {
      question: 'Do you offer same-day junk removal service?',
      answer:
        'Yes! We offer same-day pickup throughout Northern Utah when you schedule before noon, subject to availability. This applies to all our service areas including Ogden, Logan, Brigham City, and surrounding communities.',
    },
    {
      question: 'What makes your service different from other junk removal companies?',
      answer:
        'We provide real, itemized pricing before arrival (beyond "starting at" quotes), guaranteed speed windows with payouts, business-class SLAs with documentation, and proof-of-impact reporting showing local recycling and donation outcomes.',
    },
    {
      question: 'What areas do you serve in Northern Utah?',
      answer:
        'We serve Ogden County, Weber County, Cache County, and Box Elder County, including cities like Ogden, Logan, Brigham City, Hyrum, North Ogden, and surrounding communities throughout Northern Utah.',
    },
    {
      question: 'How do you handle recycling and disposal?',
      answer:
        'We prioritize eco-friendly disposal with documented reuse and recycling. We partner with local charities and recycling centers, providing you with photos and reports showing exactly how your items were processed and their environmental impact.',
    },
    {
      question: 'Do you provide service for businesses and contractors?',
      answer:
        'Absolutely! We offer business-class services including before/after photos, certificates of insurance, net payment terms, and flexible scheduling designed specifically for property managers and contractors.',
    },
    {
      question: 'What types of items do you remove?',
      answer:
        'We handle furniture, appliances, electronics, construction debris, yard waste, and most household items. We provide specialized services for appliances requiring proper refrigerant handling and offer scrap metal hauling with competitive recycling value.',
    },
    {
      question: "Are there any items you won't remove?",
      answer:
        "We cannot remove hazardous materials, chemicals, paint, asbestos, or certain regulated waste. Contact us with specific questions about unusual items - we'll provide guidance on proper disposal alternatives.",
    },
  ],
}

export default businessConfig
