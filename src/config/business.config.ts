// Business Configuration - Generated from Google Sheets data
// Free Space Junk Removal & Cleaning - Professional Junk Removal Services

import { BusinessConfig } from './types'

export const businessConfig: BusinessConfig = {
  clientId: '6',
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
          { label: 'Single Item Pickup Junk Removal', href: '/services/single-item-pickup', type: 'link' },
          { label: 'Large Load Junk Removal', href: '/services/large-load-junk-removal', type: 'link' },
          { label: 'Small Load Junk Removal', href: '/services/small-load-junk-removal', type: 'link' },
          { label: 'Estate & Room Cleanouts', href: '/services/estate-room-cleanouts', type: 'link' },
          { label: 'Land Cleanout', href: '/services/land-cleanout', type: 'link' },
          { label: 'Appliance Removal', href: '/services/appliance-removal', type: 'link' },
          { label: 'Garage Cleanout', href: '/services/garage-cleanout', type: 'link' },
          { label: 'Construction Cleanup', href: '/services/construction-cleanup', type: 'link' },
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
            { label: 'Single Item Pickup Junk Removal', href: '/services/single-item-pickup' },
            { label: 'Large Load Junk Removal', href: '/services/large-load-junk-removal' },
            { label: 'Appliance Removal', href: '/services/appliance-removal' },
            { label: 'Garage Cleanout', href: '/services/garage-cleanout' },
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
      name: 'Single Item Pickup Junk Removal',
      slug: 'single-item-pickup',
      shortDescription:
        'Fast and affordable single item pickup junk removal throughout Davis County and Northern Utah. Professional furniture removal, appliance disposal, and bulky item hauling with transparent pricing and same-day service.',
      longDescription:
        "Our single item pickup junk removal service eliminates the hassle of bulky item disposal for Davis County homeowners and businesses. Whether you need furniture removal, appliance pickup, or exercise equipment hauling, we provide transparent upfront pricing and same-day single item pickup service across Northern Utah. Every single item removal includes professional handling, eco-friendly disposal, and satisfaction guarantee.",
      features: [
        'Transparent single item pickup pricing online',
        'Same-day single item removal available',
        'Eco-friendly single item disposal and recycling',
        'Professional single item pickup documentation',
        'No hidden fees for single item removal',
        'Licensed and insured single item hauling',
      ],
      image: '/images/single-item-pickup.jpg',
      category: 'junk removal',
      buttonText: 'Schedule Single Item Pickup',
      isActive: true,
      seo: {
        title: 'Single Item Pickup Junk Removal Davis County Utah | Free Space Junk Removal',
        description:
          'Professional single item pickup junk removal in Davis County, Ogden, Logan, Brigham City. Transparent pricing, same-day single item removal, eco-friendly disposal. Get your free single item pickup quote today.',
      },
      content: {
        hero: {
          title: 'SINGLE ITEM PICKUP JUNK REMOVAL - DAVIS COUNTY',
          subtitle: 'Fast, Affordable, and Transparent Single Item Removal',
          description:
            'Need bulky item removal today? Our single item pickup junk removal service offers transparent online pricing, same-day availability, and environmentally responsible disposal throughout Davis County, Weber County, Cache County, and Box Elder County. Professional single item hauling with satisfaction guarantee.',
          backgroundImage: '/images/single-item-pickup.jpg',
        },
        sections: {
          mainContent: {
            title: 'Single Item Pickup Junk Removal - Davis County',
            content: [
              'Free Space Junk Removal & Cleaning specializes in professional single item pickup junk removal across Davis County and Northern Utah. Our single item removal service eliminates the frustration of bulky item disposal with transparent pricing, same-day availability, and eco-friendly handling that Davis County residents trust.',
              'Unlike traditional junk removal companies that require on-site estimates for single item pickup, we provide transparent single item removal pricing online before we arrive at your location. Our single item pickup service covers everything from furniture removal and appliance disposal to exercise equipment hauling and electronics recycling.',
              'Each single item pickup includes comprehensive photo documentation, proper disposal or recycling coordination, and detailed impact reporting. We serve Davis County homeowners, property managers, and businesses throughout Ogden, Logan, Brigham City, Hyrum, and surrounding Northern Utah communities with reliable same-day and next-day single item removal options.',
              'Our single item pickup junk removal service prioritizes environmental responsibility, ensuring every removed item is properly recycled, donated, or disposed of according to Utah environmental standards. Davis County residents receive detailed documentation showing exactly how their single item pickup contributed to local recycling and donation efforts.',
              'Professional single item removal requires specialized equipment, proper handling techniques, and environmental knowledge that our licensed team provides with every pickup. From basement furniture removal to attic appliance extraction, we handle single item pickup challenges that Davis County properties present with expertise and care.',
              'The single item pickup process includes arrival time coordination, safe removal from any floor or location, cleanup of the removal area, and responsible disposal with photo verification. Our single item removal service maintains the highest standards for Davis County customers, ensuring complete satisfaction with every pickup.',
            ],
            benefits: [
              {
                title: 'Transparent Single Item Pickup Pricing',
                description:
                  "Know exactly what you'll pay for single item removal before we arrive. No surprise fees or inflated on-site quotes for your Davis County pickup.",
              },
              {
                title: 'Same-Day Single Item Removal',
                description:
                  'Need single item pickup today? We offer same-day removal for bulky items throughout Davis County and Northern Utah.',
              },
              {
                title: 'Eco-Friendly Single Item Disposal',
                description:
                  'We prioritize recycling and donation for every single item pickup, keeping usable items out of Davis County landfills whenever possible.',
              },
              {
                title: 'Professional Single Item Documentation',
                description:
                  'Before and after photos plus disposal/recycling verification provided for every single item pickup and removal.',
              },
              {
                title: 'Single Item Removal Guarantee',
                description:
                  "Our single item pickup work is guaranteed. If you're not satisfied with your removal service, we'll make it right or refund your money.",
              },
              {
                title: 'Davis County Impact Reporting',
                description:
                  'See exactly how your single item pickup contributed to local Davis County recycling and donation efforts with detailed reporting.',
              },
              {
                title: 'Davis County Transparent Pricing',
                description:
                  'Our single item pickup pricing is straightforward and transparent for Davis County residents. Small items ($45-75), medium items ($85-125), large items ($135-185), oversized items (custom quote). Get exact pricing online with photos.',
              },
            ],
          },
          processSteps: {
            title: 'OUR SINGLE ITEM PICKUP JUNK REMOVAL PROCESS',
            steps: [
              {
                title: 'Get Instant Single Item Quote Online',
                description:
                  'Upload photos of your item for single item pickup and receive transparent pricing immediately - no waiting for estimates or on-site quotes for your Davis County removal.',
              },
              {
                title: 'Schedule Single Item Pickup Time',
                description:
                  'Choose from same-day or next-day single item removal windows that work with your Davis County schedule and availability.',
              },
              {
                title: 'Professional Single Item Removal',
                description:
                  'Our insured team arrives on time for single item pickup, handles your item safely, and cleans up the removal area completely.',
              },
              {
                title: 'Responsible Single Item Disposal',
                description:
                  'Your item is recycled, donated, or properly disposed of with photo verification provided for your Davis County single item pickup.',
              },
            ],
          },
          serviceTypes: {
            title: 'SINGLE ITEM PICKUP JUNK REMOVAL SERVICES WE PROVIDE',
            types: [
              {
                title: 'Furniture Single Item Pickup',
                description: 'Professional removal of couches, chairs, tables, dressers, beds, and all household furniture requiring single item pickup service',
                features: [
                  'Safe furniture removal from any floor',
                  'Furniture donation coordination when possible',
                  'No damage to walls or floors during pickup',
                  'Specialty furniture handling expertise',
                ],
              },
              {
                title: 'Appliance Single Item Pickup',
                description:
                  'Expert removal of refrigerators, washers, dryers, dishwashers, and other large appliances requiring specialized single item handling',
                features: [
                  'Proper refrigerant handling and disposal',
                  'Metal recycling for appliance components',
                  'EPA-compliant appliance disposal',
                  'Safe appliance disconnection service',
                ],
              },
              {
                title: 'Exercise Equipment Single Item Removal',
                description: 'Specialized pickup of treadmills, weight benches, ellipticals, home gym equipment, and fitness machines',
                features: [
                  'Heavy equipment single item specialists',
                  'Equipment disassembly if needed',
                  'Metal and plastic parts recycling',
                  'Multi-piece equipment coordination',
                ],
              },
              {
                title: 'Electronics Single Item Disposal',
                description: 'Certified removal of TVs, computers, printers, and electronic equipment requiring proper e-waste handling',
                features: [
                  'Certified e-waste disposal processes',
                  'Data security measures for devices',
                  'Electronic component recycling',
                  'Environmental compliance assurance',
                ],
              },
            ],
          },
          faq: {
            title: 'SINGLE ITEM PICKUP JUNK REMOVAL FAQ',
            subtitle: 'Common questions about our Davis County single item removal service',
            items: [
              {
                question: 'How do I get pricing for my single item pickup in Davis County?',
                answer:
                  "Simply visit our website and upload photos of your item for single item removal. You'll receive transparent pricing immediately - no waiting for estimates or on-site quotes for your Davis County single item pickup.",
              },
              {
                question: 'Do you offer same-day single item pickup in Davis County?',
                answer:
                  'Yes! We offer same-day single item removal throughout Davis County and Northern Utah when you schedule your pickup before noon, subject to availability.',
              },
              {
                question: "What if my item doesn't fit in your single item pickup truck?",
                answer:
                  "We bring the right equipment for every single item removal job. If it's truly oversized for standard pickup, we'll recommend our trailer service and adjust pricing accordingly for your Davis County removal.",
              },
              {
                question: 'Do you remove single items from upper floors in Davis County?',
                answer:
                  'Absolutely. Our team safely removes single items from any floor, including basements and attics throughout Davis County, with proper equipment and techniques for complex single item pickup situations.',
              },
              {
                question: 'What happens to my item after single item pickup?',
                answer:
                  "We prioritize donation and recycling for every single item removal. You'll receive photo documentation showing how your Davis County pickup item was responsibly processed and disposed of.",
              },
              {
                question: "Are there any items you won't handle for single item pickup?",
                answer:
                  'We handle most household single item removals. Hazardous materials, chemicals, and certain regulated electronics require special handling - contact us for specific questions about your Davis County single item pickup needs.',
              },
              {
                question: 'How much does single item pickup cost in Davis County?',
                answer:
                  'Single item pickup pricing ranges from $45-185 depending on size, weight, and access difficulty. Most Davis County single item removals cost $85-125. Get exact pricing online with photos of your item.',
              },
              {
                question: 'Do you provide single item pickup documentation?',
                answer:
                  'Yes! Every single item removal includes before/after photos, disposal verification, and environmental impact reporting showing how your Davis County pickup contributed to recycling and donation efforts.',
              },
            ],
          },
        },
      },
    },
    {
      id: 'large-load-junk-removal',
      name: 'Large Load Junk Removal',
      slug: 'large-load-junk-removal',
      shortDescription:
        'Professional large load junk removal service for medium-sized cleanouts throughout Northern Utah. Transparent pricing, same-day service, and eco-friendly disposal guaranteed for your large load junk removal needs.',
      longDescription:
        'Free Space Junk Removal & Cleaning specializes in large load junk removal services perfect for medium-sized cleanout projects. Our large load service handles 6-8 cubic yards of junk removal with transparent upfront pricing, same-day availability, and comprehensive recycling programs throughout Northern Utah.',
      features: [
        'Professional large load junk removal team',
        'Transparent large load pricing online',
        'Same-day large load service available', 
        'Eco-friendly large load disposal and recycling',
        'Large load capacity 6-8 cubic yards',
        'Licensed and insured large load specialists',
      ],
      image: '/images/large-load-junk.jpeg',
      category: 'junk removal',
      buttonText: 'Schedule Large Load Removal',
      isActive: true,
      seo: {
        title: 'Large Load Junk Removal Northern Utah | Free Space Junk Removal',
        description:
          'Professional large load junk removal in Northern Utah. Transparent pricing, same-day service, eco-friendly disposal. Large load junk removal experts serving Ogden, Logan, Brigham City.',
      },
      content: {
        hero: {
          title: 'LARGE LOAD JUNK REMOVAL - NORTHERN UTAH',
          subtitle: 'Professional Medium-Sized Junk Removal Service',
          description:
            'Need large load junk removal today? Free Space Junk Removal & Cleaning provides transparent large load pricing, same-day service, and eco-friendly disposal for your medium-sized cleanout projects throughout Northern Utah. Professional large load junk removal with satisfaction guarantee.',
          backgroundImage: '/images/large-load-junk.jpeg',
        },
        sections: {
          mainContent: {
            title: 'Large Load Junk Removal - Northern Utah',
            content: [
              'Free Space Junk Removal & Cleaning is Northern Utah\'s trusted large load junk removal specialist, providing transparent pricing and professional service for medium-sized cleanout projects. Our large load junk removal service handles 6-8 cubic yards of materials - perfect for room cleanouts, garage organization, basement clearing, and small renovation debris removal.',
              'Unlike national junk removal companies that provide vague "starting at" estimates for large load service, we offer transparent large load junk removal pricing online before we arrive. Our large load service eliminates the frustration of surprise fees and inflated on-site quotes that plague the junk removal industry.',
              'Each large load junk removal project includes comprehensive photo documentation, professional loading with proper equipment, responsible sorting for maximum recycling potential, and detailed impact reporting showing how your large load contributed to Northern Utah recycling and donation efforts.',
              'Our large load junk removal team arrives with fully equipped trucks and the expertise to handle everything from furniture and appliances to construction debris and household clutter. We serve homeowners, property managers, and businesses throughout Ogden, Logan, Brigham City, and surrounding Northern Utah communities with reliable large load service.',
              'The large load junk removal process prioritizes environmental responsibility, ensuring every item in your large load is properly recycled, donated, or disposed of according to Utah environmental standards. Northern Utah residents receive detailed documentation showing exactly how their large load pickup contributed to local sustainability efforts.',
              'Professional large load junk removal requires specialized equipment, proper handling techniques, and environmental knowledge that our licensed team provides with every service call. From multi-room cleanouts to garage organization projects, we handle large load challenges that Northern Utah properties present with expertise and care.',
              'Large load junk removal pricing includes all labor, transportation, sorting, and responsible disposal - no hidden fees or surprise charges. Our transparent large load service maintains the highest standards for Northern Utah customers, ensuring complete satisfaction with every project.',
              'Whether you\'re tackling a basement cleanout, garage organization, estate clearing, or small renovation project, our large load junk removal service provides the perfect solution for medium-sized junk removal needs throughout Weber County, Cache County, Ogden County, and Box Elder County.',
            ],
            benefits: [
              {
                title: 'Transparent Large Load Pricing',
                description:
                  "Know exactly what your large load junk removal will cost before we arrive. No surprise fees or inflated on-site quotes for your Northern Utah large load service.",
              },
              {
                title: 'Same-Day Large Load Service',
                description:
                  'Need large load junk removal today? We offer same-day large load service throughout Northern Utah when you schedule before noon.',
              },
              {
                title: 'Eco-Friendly Large Load Disposal',
                description:
                  'We prioritize recycling and donation for every large load pickup, keeping usable items out of Northern Utah landfills whenever possible.',
              },
              {
                title: 'Professional Large Load Documentation',
                description:
                  'Before and after photos plus disposal/recycling verification provided for every large load junk removal project.',
              },
              {
                title: 'Large Load Service Guarantee',
                description:
                  "Our large load junk removal work is guaranteed. If you're not satisfied with your large load service, we'll make it right or refund your money.",
              },
              {
                title: 'Northern Utah Impact Reporting',
                description:
                  'See exactly how your large load pickup contributed to local Northern Utah recycling and donation efforts with detailed impact reporting.',
              },
            ],
          },
          processSteps: {
            title: 'OUR LARGE LOAD JUNK REMOVAL PROCESS',
            steps: [
              {
                title: 'Get Transparent Large Load Quote',
                description:
                  'Upload photos of your large load junk removal project and receive transparent pricing immediately - no waiting for estimates or on-site quotes for your Northern Utah service.',
              },
              {
                title: 'Schedule Large Load Pickup',
                description:
                  'Choose from same-day or next-day large load junk removal windows that work with your Northern Utah schedule and project timeline.',
              },
              {
                title: 'Professional Large Load Removal',
                description:
                  'Our insured team arrives on time for large load pickup with proper equipment, handles your items safely, and cleans up the area completely.',
              },
              {
                title: 'Responsible Large Load Disposal',
                description:
                  'Your large load is sorted, recycled, donated, or properly disposed of with photo verification and environmental impact reporting provided.',
              },
            ],
          },
          serviceTypes: {
            title: 'LARGE LOAD JUNK REMOVAL SERVICES WE PROVIDE',
            types: [
              {
                title: 'Room Cleanout Large Load Service',
                description: 'Complete room cleaning and junk removal including furniture, personal items, and accumulated clutter requiring large load capacity',
                features: [
                  'Multi-room large load cleanouts',
                  'Furniture and appliance removal',
                  'Personal item sorting and donation',
                  'Complete room transformation service',
                ],
              },
              {
                title: 'Garage Organization Large Load Removal',
                description:
                  'Comprehensive garage cleanout and organization service with large load junk removal for accumulated items, storage cleanup, and space reclamation',
                features: [
                  'Complete garage large load cleanout',
                  'Storage area organization support',
                  'Hazardous material identification',
                  'Before/after documentation included',
                ],
              },
              {
                title: 'Basement Large Load Cleanout',
                description: 'Specialized basement junk removal service handling large loads of stored items, old furniture, and accumulated household goods',
                features: [
                  'Safe basement large load removal',
                  'Moisture damage assessment',
                  'Heavy item extraction expertise',
                  'Mold and debris identification',
                ],
              },
              {
                title: 'Renovation Debris Large Load Service',
                description: 'Construction and renovation waste removal with large load capacity for demo debris, old fixtures, and remodeling materials',
                features: [
                  'Construction debris large load removal',
                  'Fixture and cabinet disposal',
                  'Flooring and drywall waste handling',
                  'Contractor coordination available',
                ],
              },
            ],
          },
          faq: {
            title: 'LARGE LOAD JUNK REMOVAL FAQ',
            subtitle: 'Common questions about our Northern Utah large load junk removal service',
            items: [
              {
                question: 'How much does large load junk removal cost in Northern Utah?',
                answer:
                  "Large load junk removal pricing ranges from $285-385 depending on materials, weight, and access difficulty. Most Northern Utah large load projects cost $325-345. Get exact large load pricing online with photos of your project.",
              },
              {
                question: 'What size is considered a large load junk removal?',
                answer:
                  'Large load junk removal handles 6-8 cubic yards of materials - equivalent to 2-3 pickup truck loads. Perfect for room cleanouts, garage organization, or basement clearing projects throughout Northern Utah.',
              },
              {
                question: 'Do you offer same-day large load junk removal in Northern Utah?',
                answer:
                  'Yes! We offer same-day large load junk removal throughout Northern Utah when you schedule your service before noon, subject to availability in your specific area.',
              },
              {
                question: 'What items are included in large load junk removal service?',
                answer:
                  'Large load service includes furniture, appliances, electronics, household items, yard debris, and small construction materials. We handle most items except hazardous materials and liquids.',
              },
              {
                question: 'How do you handle recycling for large load junk removal?',
                answer:
                  "We prioritize recycling and donation for every large load pickup. You'll receive photo documentation showing how your Northern Utah large load items were responsibly processed and their environmental impact.",
              },
              {
                question: 'Can you provide large load junk removal from upper floors?',
                answer:
                  'Absolutely. Our large load team safely removes items from any floor, including basements and attics throughout Northern Utah, with proper equipment for complex access situations.',
              },
              {
                question: 'Do you provide large load junk removal documentation?',
                answer:
                  'Yes! Every large load removal includes before/after photos, disposal verification, and environmental impact reporting showing how your Northern Utah pickup contributed to local recycling efforts.',
              },
              {
                question: 'What areas do you serve for large load junk removal?',
                answer:
                  'We provide large load junk removal throughout Northern Utah including Ogden, Logan, Brigham City, Hyrum, North Ogden, and surrounding Weber County, Cache County, and Box Elder County communities.',
              },
            ],
          },
        },
      },
    },
    {
      id: 'small-load-junk-removal',
      name: 'Small Load Junk Removal',
      slug: 'small-load-junk-removal',
      shortDescription:
        'Affordable small load junk removal perfect for minor cleanouts and decluttering projects throughout Northern Utah. Professional small load service with transparent pricing and eco-friendly disposal.',
      longDescription:
        'Free Space Junk Removal & Cleaning provides economical small load junk removal services ideal for closet organization, small decluttering projects, and minor household cleanouts. Our small load service offers professional junk removal for smaller volumes with the same quality and environmental responsibility as larger projects.',
      features: [
        'Economical small load junk removal pricing',
        'Professional small load handling and disposal',
        'Transparent small load pricing upfront',
        'Perfect for small load decluttering projects',
        'Eco-friendly small load sorting and recycling',
        'Same-day small load service available',
      ],
      image: '/images/small-cleanup.jpg',
      category: 'junk removal',
      buttonText: 'Schedule Small Load Pickup',
      isActive: true,
      seo: {
        title: 'Small Load Junk Removal Northern Utah | Free Space Junk Removal',
        description:
          'Affordable small load junk removal in Northern Utah. Perfect for decluttering, closet cleanouts, small projects. Transparent pricing, same-day service available.',
      },
      content: {
        hero: {
          title: 'SMALL LOAD JUNK REMOVAL - NORTHERN UTAH',
          subtitle: 'Affordable and Professional Small-Scale Junk Removal',
          description:
            'Need small load junk removal for your decluttering project? Free Space Junk Removal & Cleaning provides affordable small load service with transparent pricing, same-day availability, and eco-friendly disposal for minor cleanout projects throughout Northern Utah.',
          backgroundImage: '/images/small-cleanup.jpg',
        },
        sections: {
          mainContent: {
            title: 'Small Load Junk Removal - Northern Utah',
            content: [
              'Free Space Junk Removal & Cleaning specializes in affordable small load junk removal throughout Northern Utah, providing professional service for minor cleanout and decluttering projects. Our small load junk removal service handles 1-3 cubic yards of materials - perfect for closet organization, small room cleanouts, and accumulated household item removal.',
              'Unlike large junk removal companies that impose minimum fees making small load service unaffordable, we offer economical small load junk removal pricing specifically designed for Northern Utah residents tackling smaller decluttering projects. Our transparent small load pricing eliminates the frustration of being overcharged for minor cleanout needs.',
              'Each small load junk removal project receives the same professional attention as larger jobs, including photo documentation, careful sorting for recycling potential, responsible disposal, and environmental impact reporting. Our small load service maintains high standards regardless of project size.',
              'Our small load junk removal team understands that smaller projects often require the same level of care and professionalism as major cleanouts. We serve homeowners throughout Ogden, Logan, Brigham City, and surrounding Northern Utah communities with reliable small load service tailored to residential needs.',
              'The small load junk removal process prioritizes efficiency and environmental responsibility, ensuring every item in your small load is properly evaluated for recycling, donation, or responsible disposal. Northern Utah residents receive detailed documentation showing how their small load pickup contributed to local sustainability efforts.',
              'Professional small load junk removal requires attention to detail and customer service excellence that our licensed team provides with every service call. From closet cleanouts to garage corner clearing, we handle small load challenges with the same expertise and care as larger projects.',
              'Small load junk removal pricing includes all labor, transportation, sorting, and responsible disposal with no minimum fees or surprise charges. Our transparent small load service makes professional junk removal accessible for minor projects throughout Weber County, Cache County, and Box Elder County.',
              'Whether you\'re organizing a single room, clearing out a closet, removing accumulated items, or tackling a small decluttering project, our small load junk removal service provides an economical solution for homeowners who need professional service without the expense of larger capacity options.',
            ],
            benefits: [
              {
                title: 'Affordable Small Load Pricing',
                description:
                  "Economical small load junk removal pricing designed for minor projects. No minimum fees or inflated charges for your Northern Utah small load service.",
              },
              {
                title: 'Same-Day Small Load Service',
                description:
                  'Need small load junk removal today? We offer same-day small load service throughout Northern Utah for urgent decluttering needs.',
              },
              {
                title: 'Professional Small Load Handling',
                description:
                  'Your small load receives the same careful attention as larger projects, with professional handling and responsible disposal practices.',
              },
              {
                title: 'Eco-Friendly Small Load Disposal',
                description:
                  'We prioritize recycling and donation for every small load pickup, ensuring even minor cleanouts contribute to environmental sustainability.',
              },
              {
                title: 'Small Load Documentation',
                description:
                  'Before and after photos plus recycling verification provided for every small load junk removal project, regardless of size.',
              },
              {
                title: 'Northern Utah Small Load Impact',
                description:
                  'See how your small load pickup contributed to local Northern Utah recycling and donation efforts with detailed reporting.',
              },
            ],
          },
          processSteps: {
            title: 'OUR SMALL LOAD JUNK REMOVAL PROCESS',
            steps: [
              {
                title: 'Get Small Load Quote Online',
                description:
                  'Upload photos of your small load junk removal project and receive transparent, affordable pricing immediately - no minimum fees or inflated quotes for small projects.',
              },
              {
                title: 'Schedule Small Load Service',
                description:
                  'Choose convenient small load pickup times including same-day service throughout Northern Utah. Flexible scheduling for your decluttering timeline.',
              },
              {
                title: 'Professional Small Load Pickup',
                description:
                  'Our team arrives on time for small load removal with appropriate equipment, handles items carefully, and maintains professionalism regardless of project size.',
              },
              {
                title: 'Responsible Small Load Disposal',
                description:
                  'Your small load is sorted, recycled, donated, or properly disposed of with photo verification and environmental impact documentation provided.',
              },
            ],
          },
          serviceTypes: {
            title: 'SMALL LOAD JUNK REMOVAL SERVICES WE PROVIDE',
            types: [
              {
                title: 'Closet Organization Small Load Service',
                description: 'Professional closet cleanout and organization with small load junk removal for clothing, accessories, and storage items',
                features: [
                  'Complete closet small load cleanout',
                  'Clothing donation coordination',
                  'Storage optimization support',
                  'Seasonal item organization',
                ],
              },
              {
                title: 'Small Room Decluttering Service',
                description:
                  'Targeted room-by-room small load junk removal for bedrooms, offices, and living spaces requiring minor decluttering',
                features: [
                  'Single room small load focus',
                  'Furniture and decor removal',
                  'Personal item sorting',
                  'Space reclamation service',
                ],
              },
              {
                title: 'Accumulated Items Small Load Removal',
                description: 'Regular maintenance small load service for accumulated household items, expired goods, and clutter buildup',
                features: [
                  'Household clutter small load pickup',
                  'Expired item identification',
                  'Regular maintenance scheduling',
                  'Preventive decluttering service',
                ],
              },
              {
                title: 'Moving Preparation Small Load Service',
                description: 'Pre-move decluttering with small load junk removal for items you don\'t want to pack or transport to your new location',
                features: [
                  'Pre-move small load decluttering',
                  'Packing preparation support',
                  'Unwanted item identification',
                  'Moving cost reduction service',
                ],
              },
            ],
          },
          faq: {
            title: 'SMALL LOAD JUNK REMOVAL FAQ',
            subtitle: 'Common questions about our Northern Utah small load junk removal service',
            items: [
              {
                question: 'How much does small load junk removal cost in Northern Utah?',
                answer:
                  "Small load junk removal pricing ranges from $125-185 depending on materials and access. Most Northern Utah small load projects cost $145-165. Get exact small load pricing online with no minimum fees.",
              },
              {
                question: 'What size is considered a small load junk removal?',
                answer:
                  'Small load junk removal handles 1-3 cubic yards of materials - equivalent to a pickup truck bed or large SUV. Perfect for closet cleanouts, small room decluttering, or minor household projects.',
              },
              {
                question: 'Is there a minimum charge for small load junk removal?',
                answer:
                  'No! Unlike other companies, we don\'t impose minimum fees for small load service. Our small load junk removal pricing is designed specifically for smaller projects throughout Northern Utah.',
              },
              {
                question: 'Do you offer same-day small load junk removal?',
                answer:
                  'Yes! We offer same-day small load junk removal throughout Northern Utah when you schedule before noon, perfect for urgent decluttering needs.',
              },
              {
                question: 'What items are included in small load junk removal service?',
                answer:
                  'Small load service includes household items, clothing, small furniture pieces, electronics, books, and personal belongings. We handle most common household decluttering items.',
              },
              {
                question: 'How do you handle donations for small load pickups?',
                answer:
                  "We prioritize donation for usable items in every small load pickup. You'll receive documentation showing how your Northern Utah small load contributed to local charity organizations.",
              },
              {
                question: 'Can I schedule regular small load junk removal service?',
                answer:
                  'Absolutely! Many Northern Utah residents schedule monthly or quarterly small load service for ongoing decluttering and home organization maintenance.',
              },
              {
                question: 'Do you provide small load junk removal for apartments?',
                answer:
                  'Yes! Our small load service is perfect for apartment living throughout Northern Utah. We coordinate with property management and handle access requirements professionally.',
              },
            ],
          },
        },
      },
    },
    {
      id: 'estate-room-cleanouts',
      name: 'Estate & Room Cleanouts',
      slug: 'estate-room-cleanouts',
      shortDescription:
        'Professional estate cleanout and room cleanout services throughout Northern Utah. Sensitive estate clearing with transparent pricing, donation coordination, and compassionate service for families.',
      longDescription:
        'Free Space Junk Removal & Cleaning provides comprehensive estate cleanout and room cleanout services with sensitivity and professionalism. Our estate cleanout specialists handle everything from complete property clearing to individual room organization with transparent pricing and extensive donation coordination.',
      features: [
        'Compassionate estate cleanout specialists',
        'Complete room cleanout services',
        'Extensive donation coordination for estate items',
        'Transparent estate cleanout pricing',
        'Same-day estate cleanout availability',
        'Professional estate sorting and documentation',
      ],
      image: '/images/estate-cleanout.jpeg',
      category: 'junk removal',
      buttonText: 'Schedule Estate Cleanout',
      isActive: true,
      seo: {
        title: 'Estate Cleanout Northern Utah | Free Space Junk Removal',
        description:
          'Professional estate cleanout and room cleanout services in Northern Utah. Compassionate estate clearing, donation coordination, transparent pricing. Serving families throughout the region.',
      },
      content: {
        hero: {
          title: 'ESTATE & ROOM CLEANOUTS - NORTHERN UTAH',
          subtitle: 'Compassionate Estate Clearing and Room Organization',
          description:
            'Facing an estate cleanout or major room clearing project? Free Space Junk Removal & Cleaning provides sensitive, professional estate cleanout services with transparent pricing, extensive donation coordination, and compassionate support for families throughout Northern Utah.',
          backgroundImage: '/images/estate-cleanout.jpeg',
        },
        sections: {
          mainContent: {
            title: 'Estate & Room Cleanouts - Northern Utah',
            content: [
              'Free Space Junk Removal & Cleaning understands that estate cleanouts and major room clearing projects often occur during emotionally challenging times. Our compassionate estate cleanout specialists provide professional, respectful service for families throughout Northern Utah, handling everything from complete property clearing to individual room organization with sensitivity and care.',
              'Unlike impersonal junk removal companies that treat estate cleanouts as routine jobs, we recognize the emotional significance of estate clearing and provide personalized service that honors your family\'s needs. Our estate cleanout team works closely with families to identify valuable items, coordinate donations, and ensure important belongings receive proper attention.',
              'Each estate cleanout project includes comprehensive documentation, careful sorting for maximum donation potential, respectful handling of personal belongings, and detailed reporting on how estate items contributed to local charities and organizations. Our room cleanout services apply the same level of care and professionalism to individual spaces.',
              'Our estate cleanout specialists serve families throughout Ogden, Logan, Brigham City, and surrounding Northern Utah communities with reliable, compassionate service. We understand the challenges families face during estate clearing and provide flexible scheduling, transparent pricing, and extensive support throughout the process.',
              'The estate cleanout process prioritizes dignity and respect while maintaining environmental responsibility. Every item in your estate clearance is carefully evaluated for donation potential, recycling opportunities, or proper disposal according to Utah environmental standards. Families receive detailed documentation showing how their estate cleanout contributed to local community organizations.',
              'Professional estate cleanout requires emotional sensitivity, organizational expertise, and logistical coordination that our experienced team provides with every project. From multi-generational family homes to individual room clearing, we handle estate challenges with the understanding and professionalism that difficult situations require.',
              'Estate cleanout pricing includes all labor, transportation, sorting, donation coordination, and responsible disposal with transparent costs provided upfront. Our comprehensive estate clearing service ensures families can focus on what matters most while we handle the physical aspects of property clearing with dignity and care.',
              'Whether you\'re dealing with a complete estate clearing, downsizing project, room organization challenge, or family home transition, our estate cleanout service provides the compassionate support and professional expertise that Northern Utah families trust during difficult times.',
            ],
            benefits: [
              {
                title: 'Compassionate Estate Clearing',
                description:
                  "Our estate cleanout team provides sensitive, respectful service during emotionally challenging times, treating your family's belongings with dignity and care.",
              },
              {
                title: 'Extensive Donation Coordination',
                description:
                  'We coordinate with local charities and organizations to ensure valuable estate items find new homes, maximizing the positive impact of your estate cleanout.',
              },
              {
                title: 'Transparent Estate Pricing',
                description:
                  'Know exactly what your estate cleanout will cost upfront with no hidden fees or surprise charges during an already stressful time.',
              },
              {
                title: 'Professional Estate Documentation',
                description:
                  'Comprehensive before/after photos, donation receipts, and disposal verification provided for every estate cleanout project.',
              },
              {
                title: 'Flexible Estate Scheduling',
                description:
                  'We work around your family\'s timeline and needs, offering flexible scheduling for estate cleanouts throughout Northern Utah.',
              },
              {
                title: 'Local Estate Impact Reporting',
                description:
                  'See exactly how your estate cleanout contributed to Northern Utah charities and recycling efforts with detailed community impact reporting.',
              },
            ],
          },
          processSteps: {
            title: 'OUR ESTATE & ROOM CLEANOUT PROCESS',
            steps: [
              {
                title: 'Compassionate Estate Consultation',
                description:
                  'We meet with your family to understand your estate cleanout needs, identify valuable items, and develop a sensitive clearing plan that respects your wishes.',
              },
              {
                title: 'Professional Estate Sorting',
                description:
                  'Our team carefully sorts estate items, identifying donations, valuables, and disposal items while maintaining dignity and respect throughout the process.',
              },
              {
                title: 'Coordinated Estate Clearing',
                description:
                  'We execute the estate cleanout plan with professional efficiency while allowing time for family decisions and final item reviews.',
              },
              {
                title: 'Complete Estate Documentation',
                description:
                  'You receive comprehensive documentation including donation receipts, disposal verification, and community impact reporting for your estate cleanout.',
              },
            ],
          },
          serviceTypes: {
            title: 'ESTATE & ROOM CLEANOUT SERVICES WE PROVIDE',
            types: [
              {
                title: 'Complete Estate Cleanouts',
                description: 'Full property clearing for estate settlements, including all personal belongings, furniture, and household items with family coordination',
                features: [
                  'Whole house estate clearing',
                  'Personal belonging evaluation',
                  'Family heirloom identification',
                  'Estate sale coordination support',
                ],
              },
              {
                title: 'Room-by-Room Estate Clearing',
                description:
                  'Targeted room clearing for estates requiring selective cleanout, allowing families to preserve important areas while clearing others',
                features: [
                  'Selective room estate clearing',
                  'Phased cleanout scheduling',
                  'Important area preservation',
                  'Gradual family adjustment support',
                ],
              },
              {
                title: 'Downsizing Room Cleanouts',
                description: 'Senior living transition support with room cleanouts for families moving elderly parents to smaller living arrangements',
                features: [
                  'Senior transition room clearing',
                  'Downsizing consultation',
                  'Memory preservation support',
                  'Assisted living preparation',
                ],
              },
              {
                title: 'Family Home Room Organization',
                description: 'Major room cleanouts for growing families needing space reclamation, organization, and clutter clearing in occupied homes',
                features: [
                  'Living space room clearing',
                  'Family organization support',
                  'Child-safe sorting processes',
                  'Home functionality improvement',
                ],
              },
            ],
          },
          faq: {
            title: 'ESTATE & ROOM CLEANOUTS FAQ',
            subtitle: 'Common questions about our Northern Utah estate and room cleanout services',
            items: [
              {
                question: 'How much do estate cleanouts cost in Northern Utah?',
                answer:
                  "Estate cleanout pricing varies based on property size and contents, typically ranging from $485-1,285. We provide transparent upfront pricing with no hidden fees during this difficult time.",
              },
              {
                question: 'How long does an estate cleanout take?',
                answer:
                  'Estate cleanouts typically take 1-3 days depending on property size and family needs. We work at a pace that allows for family decisions and proper item evaluation.',
              },
              {
                question: 'Do you help identify valuable items during estate cleanouts?',
                answer:
                  'Yes! Our estate cleanout team is trained to identify potentially valuable items and will set them aside for family evaluation. We recommend professional appraisals for significant items.',
              },
              {
                question: 'How do you handle donation coordination for estates?',
                answer:
                  'We work with multiple local charities and organizations to ensure estate items find appropriate new homes. You receive donation receipts for tax purposes and impact reporting.',
              },
              {
                question: 'Can families be present during estate cleanouts?',
                answer:
                  'Absolutely. Many families prefer to be present during estate clearing, and we accommodate family schedules and emotional needs throughout the process.',
              },
              {
                question: 'Do you provide estate cleanout services for out-of-state families?',
                answer:
                  'Yes! We regularly help out-of-state families with Northern Utah estate cleanouts, providing detailed documentation and remote coordination as needed.',
              },
              {
                question: 'What happens to personal documents found during estate cleanouts?',
                answer:
                  'All personal documents, photos, and important papers are carefully set aside for family review. We never dispose of potentially important personal items without family approval.',
              },
              {
                question: 'Do you offer room cleanout services for occupied homes?',
                answer:
                  'Yes! Our room cleanout services work around occupied homes, focusing on specific areas while maintaining household routines and family privacy.',
              },
            ],
          },
        },
      },
    },
    {
      id: 'land-cleanout',
      name: 'Land Cleanout',
      slug: 'land-cleanout',
      shortDescription:
        'Professional land cleanout services for large-scale property clearing throughout Northern Utah. Comprehensive land clearing, debris removal, and environmental cleanup with transparent pricing.',
      longDescription:
        'Free Space Junk Removal & Cleaning provides comprehensive land cleanout services for large-scale property clearing projects. Our land cleanout specialists handle everything from overgrown property cleanup to construction debris removal with professional equipment and environmental responsibility.',
      features: [
        'Large-scale land cleanout capability',
        'Professional land clearing equipment',
        'Environmental land cleanup compliance',
        'Transparent land cleanout pricing',
        'Same-day land cleanout availability',
        'Comprehensive land debris handling',
      ],
      image: '/images/land-cleanout.jpeg',
      category: 'junk removal',
      buttonText: 'Schedule Land Cleanout',
      isActive: true,
      seo: {
        title: 'Land Cleanout Northern Utah | Free Space Junk Removal',
        description:
          'Professional land cleanout services in Northern Utah. Large-scale property clearing, debris removal, environmental cleanup. Transparent pricing, professional equipment.',
      },
      content: {
        hero: {
          title: 'LAND CLEANOUT - NORTHERN UTAH',
          subtitle: 'Professional Large-Scale Property Clearing Services',
          description:
            'Facing a major land cleanout project? Free Space Junk Removal & Cleaning provides comprehensive land cleanout services with professional equipment, transparent pricing, and environmental compliance for large-scale property clearing throughout Northern Utah.',
          backgroundImage: '/images/land-cleanout.jpeg',
        },
        sections: {
          mainContent: {
            title: 'Land Cleanout - Northern Utah',
            content: [
              'Free Space Junk Removal & Cleaning specializes in comprehensive land cleanout services throughout Northern Utah, providing professional solutions for large-scale property clearing projects. Our land cleanout specialists handle everything from overgrown residential lots to commercial property cleanup with the equipment, expertise, and environmental compliance that major clearing projects require.',
              'Unlike general junk removal companies that lack the capacity for major land cleanout projects, we provide dedicated land clearing services with trailer-load capacity, specialized equipment, and professional crews trained in large-scale debris removal. Our land cleanout service eliminates the complexity of coordinating multiple contractors for your property clearing needs.',
              'Each land cleanout project includes comprehensive planning, professional debris removal, environmental compliance verification, responsible disposal coordination, and detailed documentation. Our land clearing process ensures your property meets local regulations while maximizing recycling and donation opportunities for salvageable materials.',
              'Our land cleanout team serves property owners, developers, and contractors throughout Ogden, Logan, Brigham City, and surrounding Northern Utah communities with reliable, efficient service. We understand the urgency often associated with land clearing projects and provide flexible scheduling including weekend and emergency land cleanout services.',
              'The land cleanout process prioritizes safety and environmental responsibility, ensuring all debris removal complies with Utah environmental regulations and local ordinances. Property owners receive detailed documentation showing how their land cleanout project contributed to local recycling efforts and responsible waste management practices.',
              'Professional land cleanout requires specialized equipment, proper disposal knowledge, and regulatory compliance that our licensed team provides with every project. From residential lot clearing to commercial property cleanup, we handle land challenges throughout Northern Utah with the expertise and professionalism that large-scale projects demand.',
              'Land cleanout pricing includes all equipment, labor, transportation, sorting, and compliant disposal with transparent costs provided upfront. Our comprehensive land clearing service ensures property owners can move forward with development plans while we handle the complex logistics of debris removal and environmental compliance.',
              'Whether you\'re preparing land for development, cleaning inherited property, removing storm debris, or tackling years of accumulated materials, our land cleanout service provides the professional capacity and environmental expertise that Northern Utah property clearing projects require.',
            ],
            benefits: [
              {
                title: 'Professional Land Clearing Equipment',
                description:
                  "Our land cleanout service includes specialized equipment and trailers capable of handling large-scale debris removal that standard junk services can't accommodate.",
              },
              {
                title: 'Environmental Compliance Assurance',
                description:
                  'We ensure your land cleanout project meets all Utah environmental regulations and local ordinances, protecting you from potential compliance issues.',
              },
              {
                title: 'Transparent Land Cleanout Pricing',
                description:
                  'Know exactly what your land clearing project will cost upfront with comprehensive pricing that includes all equipment, labor, and disposal fees.',
              },
              {
                title: 'Comprehensive Land Documentation',
                description:
                  'Before/after photos, compliance verification, disposal documentation, and environmental impact reporting provided for every land cleanout project.',
              },
              {
                title: 'Emergency Land Cleanout Service',
                description:
                  'We provide urgent land clearing services for storm cleanup, property emergencies, and time-sensitive development projects throughout Northern Utah.',
              },
              {
                title: 'Recycling Maximization for Land Debris',
                description:
                  'Our land cleanout process identifies recyclable materials and coordinates with scrap dealers and recyclers to minimize landfill impact from large clearing projects.',
              },
            ],
          },
          processSteps: {
            title: 'OUR LAND CLEANOUT PROCESS',
            steps: [
              {
                title: 'Land Cleanout Assessment',
                description:
                  'We conduct a comprehensive site evaluation to assess debris volume, access requirements, environmental considerations, and develop an efficient land clearing plan.',
              },
              {
                title: 'Equipment and Crew Coordination',
                description:
                  'Our team arrives with appropriate trailers, equipment, and crew size to handle your specific land cleanout requirements efficiently and safely.',
              },
              {
                title: 'Professional Land Clearing Execution',
                description:
                  'We execute the land cleanout plan with systematic debris removal, environmental compliance measures, and ongoing coordination with property stakeholders.',
              },
              {
                title: 'Complete Land Cleanup Documentation',
                description:
                  'You receive comprehensive documentation including compliance verification, disposal receipts, recycling reports, and before/after project photography.',
              },
            ],
          },
          serviceTypes: {
            title: 'LAND CLEANOUT SERVICES WE PROVIDE',
            types: [
              {
                title: 'Residential Land Cleanouts',
                description: 'Complete residential property clearing including overgrown lots, accumulated debris, and preparation for landscaping or construction',
                features: [
                  'Overgrown lot land clearing',
                  'Accumulated debris removal',
                  'Landscaping preparation service',
                  'Property value enhancement',
                ],
              },
              {
                title: 'Commercial Land Clearing',
                description:
                  'Large-scale commercial property cleanup for development projects, business relocations, and industrial site preparation',
                features: [
                  'Development site land clearing',
                  'Industrial debris removal',
                  'Commercial property preparation',
                  'Business relocation cleanup',
                ],
              },
              {
                title: 'Construction Site Land Cleanout',
                description: 'Pre and post-construction land clearing including site preparation, debris removal, and final cleanup for building projects',
                features: [
                  'Pre-construction land clearing',
                  'Construction debris removal',
                  'Site preparation services',
                  'Final cleanup coordination',
                ],
              },
              {
                title: 'Storm Damage Land Cleanup',
                description: 'Emergency land cleanout services for storm debris, fallen trees, and weather-related property damage throughout Northern Utah',
                features: [
                  'Storm debris land clearing',
                  'Emergency cleanup services',
                  'Tree and vegetation removal',
                  'Weather damage restoration',
                ],
              },
            ],
          },
          faq: {
            title: 'LAND CLEANOUT FAQ',
            subtitle: 'Common questions about our Northern Utah land cleanout services',
            items: [
              {
                question: 'How much does land cleanout cost in Northern Utah?',
                answer:
                  "Land cleanout pricing varies significantly based on debris volume, access difficulty, and disposal requirements, typically ranging from $485-2,500+. We provide detailed estimates after site assessment.",
              },
              {
                question: 'What size land cleanout projects can you handle?',
                answer:
                  'We handle land cleanout projects of all sizes from small residential lots to large commercial properties. Our trailer-load capacity and equipment fleet can accommodate major clearing projects.',
              },
              {
                question: 'Do you handle hazardous materials in land cleanouts?',
                answer:
                  'We identify hazardous materials during land cleanouts and coordinate with certified disposal specialists. We cannot directly handle hazardous waste but will guide you through proper disposal processes.',
              },
              {
                question: 'How long do land cleanout projects typically take?',
                answer:
                  'Land cleanout duration depends on project scope, typically ranging from 1-5 days. We provide realistic timelines during initial assessment and work efficiently to minimize project duration.',
              },
              {
                question: 'Do you provide emergency land cleanout services?',
                answer:
                  'Yes! We offer emergency land cleanout services for storm damage, property emergencies, and urgent development deadlines throughout Northern Utah.',
              },
              {
                question: 'What permits are required for land cleanout projects?',
                answer:
                  'Permit requirements vary by location and project scope. We help identify necessary permits and can coordinate with local authorities for compliance verification.',
              },
              {
                question: 'Do you recycle materials from land cleanout projects?',
                answer:
                  'Absolutely! We maximize recycling for metal, concrete, wood, and other materials from land clearing projects, providing detailed recycling documentation and environmental impact reporting.',
              },
              {
                question: 'Can you coordinate with contractors for land cleanout timing?',
                answer:
                  'Yes! We regularly coordinate with contractors, developers, and project managers to ensure land cleanout timing aligns with construction schedules and development timelines.',
              },
            ],
          },
        },
      },
    },
    {
      id: 'appliance-removal',
      name: 'Appliance Removal',
      slug: 'appliance-removal',
      shortDescription:
        'Professional appliance removal and disposal throughout Northern Utah. EPA-compliant refrigerant handling, safe appliance removal, and responsible appliance disposal for all household appliances.',
      longDescription:
        'Free Space Junk Removal & Cleaning provides specialized appliance removal services with proper EPA-compliant handling of refrigerants, metals, and electronic components. Our appliance removal specialists safely remove and responsibly dispose of all types of household appliances throughout Northern Utah.',
      features: [
        'EPA-compliant appliance refrigerant handling',
        'Professional appliance removal from any location',
        'Certified appliance metal recycling',
        'Electronic appliance component disposal',
        'Same-day appliance removal service',
        'Transparent appliance removal pricing',
      ],
      image: '/images/appliance-removal.jpg',
      category: 'specialty',
      buttonText: 'Schedule Appliance Removal',
      isActive: true,
      seo: {
        title: 'Appliance Removal Northern Utah | Free Space Junk Removal',
        description:
          'Professional appliance removal in Northern Utah. EPA-compliant refrigerator, washer, dryer removal. Same-day appliance disposal service in Ogden, Logan, Brigham City.',
      },
      content: {
        hero: {
          title: 'APPLIANCE REMOVAL - NORTHERN UTAH',
          subtitle: 'EPA-Compliant Professional Appliance Disposal',
          description:
            'Need old appliances removed safely? Free Space Junk Removal & Cleaning provides professional appliance removal with EPA-compliant refrigerant handling, certified recycling, and same-day service throughout Northern Utah. Safe appliance disposal guaranteed.',
          backgroundImage: '/images/appliance-removal.jpg',
        },
        sections: {
          mainContent: {
            title: 'Appliance Removal - Northern Utah',
            content: [
              'Free Space Junk Removal & Cleaning specializes in professional appliance removal throughout Northern Utah, providing EPA-compliant disposal services for all types of household appliances. Our certified appliance removal team handles everything from refrigerator disposal to washer and dryer removal with the environmental compliance and safety protocols that appliance disposal requires.',
              'Unlike general junk removal companies that lack proper appliance disposal certifications, our appliance removal service includes EPA-compliant refrigerant recovery, certified metal recycling, and proper electronic component handling. We ensure your appliance removal project meets all federal and Utah environmental regulations while maximizing recycling potential.',
              'Each appliance removal project includes proper disconnection procedures, safe extraction from any location, certified refrigerant recovery when applicable, comprehensive recycling coordination, and detailed documentation of environmental compliance. Our appliance disposal process prioritizes safety and regulatory adherence throughout Northern Utah.',
              'Our appliance removal team serves homeowners, property managers, and businesses throughout Ogden, Logan, Brigham City, and surrounding Northern Utah communities with reliable, compliant service. We understand the urgency often associated with appliance replacement and provide same-day appliance removal when old units need immediate disposal.',
              'The appliance removal process prioritizes environmental responsibility and safety, ensuring proper handling of refrigerants, oils, and electronic components according to EPA regulations and Utah environmental standards. Northern Utah customers receive detailed documentation showing how their appliance disposal contributed to certified recycling programs and environmental protection efforts.',
              'Professional appliance removal requires specialized equipment, proper certification, and environmental knowledge that our licensed team provides with every service call. From kitchen appliance removal to laundry equipment disposal, we handle appliance challenges throughout Northern Utah with the expertise and compliance that responsible disposal demands.',
              'Appliance removal pricing includes all disconnection, labor, transportation, refrigerant recovery, and certified recycling with transparent costs provided upfront. Our comprehensive appliance disposal service ensures customers can upgrade their appliances while we handle the complex logistics of environmentally compliant removal.',
              'Whether you\'re upgrading kitchen appliances, replacing laundry equipment, clearing rental properties, or handling appliance disposal for renovations, our appliance removal service provides the professional expertise and environmental compliance that Northern Utah appliance disposal projects require.',
            ],
            benefits: [
              {
                title: 'EPA-Compliant Appliance Disposal',
                description:
                  "Our appliance removal service meets all EPA regulations for refrigerant recovery, ensuring your appliance disposal is environmentally compliant and legally proper.",
              },
              {
                title: 'Certified Appliance Recycling',
                description:
                  'We coordinate with certified recycling facilities to maximize metal recovery and electronic component recycling from your appliance removal project.',
              },
              {
                title: 'Same-Day Appliance Removal',
                description:
                  'Need appliances removed today? We offer same-day appliance removal throughout Northern Utah for urgent replacement and disposal needs.',
              },
              {
                title: 'Safe Appliance Extraction',
                description:
                  'Our team safely removes appliances from any location including basements, upper floors, and tight spaces without property damage.',
              },
              {
                title: 'Transparent Appliance Pricing',
                description:
                  'Know exactly what your appliance removal will cost upfront with no hidden fees for refrigerant recovery, recycling, or disposal compliance.',
              },
              {
                title: 'Environmental Documentation',
                description:
                  'Receive comprehensive documentation including EPA compliance certificates, recycling receipts, and environmental impact reporting for your appliance disposal.',
              },
            ],
          },
          processSteps: {
            title: 'OUR APPLIANCE REMOVAL PROCESS',
            steps: [
              {
                title: 'Appliance Assessment and Scheduling',
                description:
                  'We evaluate your appliance removal needs, identify any special handling requirements, and schedule convenient removal times throughout Northern Utah.',
              },
              {
                title: 'Professional Appliance Disconnection',
                description:
                  'Our certified team safely disconnects appliances, recovers refrigerants when required, and prepares units for safe removal from your property.',
              },
              {
                title: 'Safe Appliance Extraction',
                description:
                  'We carefully remove appliances from any location using proper equipment and techniques, protecting your property throughout the removal process.',
              },
              {
                title: 'Certified Appliance Disposal',
                description:
                  'Your appliances are transported to certified recycling facilities with full EPA compliance documentation and environmental impact reporting provided.',
              },
            ],
          },
          serviceTypes: {
            title: 'APPLIANCE REMOVAL SERVICES WE PROVIDE',
            types: [
              {
                title: 'Refrigerator and Freezer Removal',
                description: 'EPA-compliant removal and disposal of refrigerators and freezers with proper refrigerant recovery and certified recycling',
                features: [
                  'EPA-certified refrigerant recovery',
                  'Safe refrigerator extraction',
                  'Freezer disposal compliance',
                  'Metal recycling maximization',
                ],
              },
              {
                title: 'Washer and Dryer Removal',
                description:
                  'Professional laundry appliance removal including washers, dryers, and laundry room equipment with proper disconnection and disposal',
                features: [
                  'Washer disconnection and removal',
                  'Dryer extraction and disposal',
                  'Laundry room equipment clearing',
                  'Metal component recycling',
                ],
              },
              {
                title: 'Kitchen Appliance Removal',
                description: 'Complete kitchen appliance disposal including dishwashers, stoves, ovens, and small appliance removal',
                features: [
                  'Dishwasher removal and disposal',
                  'Stove and oven extraction',
                  'Built-in appliance removal',
                  'Small appliance collection',
                ],
              },
              {
                title: 'HVAC and Water Heater Removal',
                description: 'Specialized removal of HVAC equipment, water heaters, and climate control appliances with proper handling protocols',
                features: [
                  'Water heater removal and disposal',
                  'HVAC equipment extraction',
                  'Climate control appliance handling',
                  'Specialized equipment recycling',
                ],
              },
            ],
          },
          faq: {
            title: 'APPLIANCE REMOVAL FAQ',
            subtitle: 'Common questions about our Northern Utah appliance removal services',
            items: [
              {
                question: 'How much does appliance removal cost in Northern Utah?',
                answer:
                  "Appliance removal pricing ranges from $75-185 per appliance depending on type, size, and access difficulty. Most Northern Utah appliance removals cost $95-145 with transparent pricing provided upfront.",
              },
              {
                question: 'Do you handle refrigerator disposal properly?',
                answer:
                  'Yes! We provide EPA-compliant refrigerator removal with certified refrigerant recovery, ensuring your refrigerator disposal meets all environmental regulations.',
              },
              {
                question: 'Can you remove appliances from basements or upper floors?',
                answer:
                  'Absolutely! Our appliance removal team safely extracts appliances from any location including basements, second floors, and tight spaces throughout Northern Utah.',
              },
              {
                question: 'Do you offer same-day appliance removal?',
                answer:
                  'Yes! We provide same-day appliance removal throughout Northern Utah when you schedule before noon, perfect for urgent appliance replacement needs.',
              },
              {
                question: 'What appliances do you remove?',
                answer:
                  'We remove all household appliances including refrigerators, washers, dryers, dishwashers, stoves, ovens, water heaters, and HVAC equipment with proper disposal methods.',
              },
              {
                question: 'How do you handle appliance recycling?',
                answer:
                  'We coordinate with certified recycling facilities to maximize metal recovery and proper component disposal, providing documentation of recycling and environmental compliance.',
              },
              {
                question: 'Do you disconnect appliances before removal?',
                answer:
                  'Yes! Our certified team handles all disconnection procedures including water, gas, and electrical connections safely before appliance removal.',
              },
              {
                question: 'What documentation do you provide for appliance disposal?',
                answer:
                  'We provide EPA compliance certificates, recycling receipts, disposal documentation, and environmental impact reports for every appliance removal project.',
              },
            ],
          },
        },
      },
    },
    {
      id: 'garage-cleanout',
      name: 'Garage Cleanout',
      slug: 'garage-cleanout',
      shortDescription:
        'Professional garage cleanout services throughout Northern Utah. Complete garage organization, junk removal, and space transformation with transparent pricing and eco-friendly disposal.',
      longDescription:
        'Free Space Junk Removal & Cleaning provides comprehensive garage cleanout services that transform cluttered garages into organized, functional spaces. Our garage cleanout specialists handle everything from accumulated storage items to complete garage organization with professional expertise and environmental responsibility.',
      features: [
        'Complete garage cleanout and organization',
        'Professional garage junk removal',
        'Transparent garage cleanout pricing',
        'Same-day garage cleanout service',
        'Eco-friendly garage disposal methods',
        'Before/after garage documentation',
      ],
      image: '/images/garage-cleaning.jpeg',
      category: 'cleaning',
      buttonText: 'Schedule Garage Cleanout',
      isActive: true,
      seo: {
        title: 'Garage Cleanout Northern Utah | Free Space Junk Removal',
        description:
          'Professional garage cleanout services in Northern Utah. Complete garage organization, junk removal, space transformation. Transparent pricing, same-day service available.',
      },
      content: {
        hero: {
          title: 'GARAGE CLEANOUT - NORTHERN UTAH',
          subtitle: 'Transform Your Garage Into Functional Space',
          description:
            'Ready to reclaim your garage? Free Space Junk Removal & Cleaning provides comprehensive garage cleanout services with transparent pricing, professional organization support, and eco-friendly disposal throughout Northern Utah. Transform your cluttered garage into a functional space today.',
          backgroundImage: '/images/garage-cleaning.jpeg',
        },
        sections: {
          mainContent: {
            title: 'Garage Cleanout - Northern Utah',
            content: [
              'Free Space Junk Removal & Cleaning specializes in comprehensive garage cleanout services throughout Northern Utah, transforming cluttered garages into organized, functional spaces that homeowners can actually use. Our garage cleanout specialists understand that garages often become catch-all storage areas, accumulating years of household items, seasonal decorations, sporting equipment, and forgotten belongings.',
              'Unlike basic junk removal companies that simply haul everything away, our garage cleanout service includes professional organization support, donation coordination for usable items, and systematic sorting that helps you reclaim valuable garage space. We work with homeowners to identify items worth keeping, organizing, donating, or disposing of responsibly.',
              'Each garage cleanout project includes comprehensive planning, careful item sorting, professional removal of unwanted materials, organization consultation for remaining items, and detailed documentation of the transformation process. Our garage cleaning approach ensures maximum space utilization while maintaining accessibility to items you choose to keep.',
              'Our garage cleanout team serves homeowners throughout Ogden, Logan, Brigham City, and surrounding Northern Utah communities with flexible scheduling that accommodates busy family lives. We understand that garage organization can be overwhelming, which is why we provide supportive, non-judgmental service that makes the process manageable and even enjoyable.',
              'The garage cleanout process prioritizes safety and environmental responsibility, ensuring proper disposal of hazardous materials often found in garages, recycling of metals and plastics, and donation of usable items to local charities. Northern Utah homeowners receive detailed documentation showing how their garage cleanout contributed to community sustainability efforts.',
              'Professional garage cleanout requires organizational expertise, proper handling of potentially hazardous materials, and environmental knowledge that our trained team provides with every project. From basic decluttering to complete garage transformation, we handle garage challenges with the systematic approach that creates lasting results.',
              'Garage cleanout pricing includes all labor, transportation, sorting, donation coordination, and responsible disposal with transparent costs provided upfront. Our comprehensive garage organization service ensures homeowners can enjoy their newly functional space without worrying about hidden fees or surprise charges.',
              'Whether your garage has become a storage unit, workshop overflow, seasonal decoration warehouse, or general catch-all space, our garage cleanout service provides the professional expertise and organizational support that transforms cluttered garages into valuable, functional areas throughout Northern Utah homes.',
            ],
            benefits: [
              {
                title: 'Complete Garage Transformation',
                description:
                  "Our garage cleanout service goes beyond simple junk removal, providing organization consultation and systematic sorting that transforms your garage into functional space.",
              },
              {
                title: 'Professional Organization Support',
                description:
                  'We help identify the best organization systems for your garage space, ensuring long-term functionality and accessibility for items you choose to keep.',
              },
              {
                title: 'Hazardous Material Handling',
                description:
                  'Our garage cleanout team safely identifies and handles automotive fluids, paints, and other hazardous materials commonly found in garages.',
              },
              {
                title: 'Donation Maximization',
                description:
                  'We coordinate donations for sporting equipment, tools, seasonal items, and other garage contents, keeping usable items out of landfills.',
              },
              {
                title: 'Same-Day Garage Service',
                description:
                  'Need your garage cleaned out today? We offer same-day garage cleanout service throughout Northern Utah for urgent organization needs.',
              },
              {
                title: 'Transparent Garage Pricing',
                description:
                  'Know exactly what your garage cleanout will cost upfront with no hidden fees for additional sorting, organization, or disposal requirements.',
              },
            ],
          },
          processSteps: {
            title: 'OUR GARAGE CLEANOUT PROCESS',
            steps: [
              {
                title: 'Garage Assessment and Planning',
                description:
                  'We evaluate your garage space, discuss your organization goals, and develop a systematic cleanout plan that maximizes functionality and storage efficiency.',
              },
              {
                title: 'Systematic Garage Sorting',
                description:
                  'Our team works with you to sort garage contents into keep, donate, recycle, and dispose categories, providing organization guidance throughout the process.',
              },
              {
                title: 'Professional Garage Cleanout',
                description:
                  'We remove unwanted items, coordinate donations, handle hazardous materials properly, and prepare your garage space for improved organization.',
              },
              {
                title: 'Organization and Documentation',
                description:
                  'We provide organization suggestions for remaining items and deliver comprehensive documentation including before/after photos and donation receipts.',
              },
            ],
          },
          serviceTypes: {
            title: 'GARAGE CLEANOUT SERVICES WE PROVIDE',
            types: [
              {
                title: 'Complete Garage Overhaul',
                description: 'Full garage cleanout and organization service including removal of all unwanted items and systematic reorganization of remaining belongings',
                features: [
                  'Complete garage emptying and cleaning',
                  'Professional organization consultation',
                  'Storage solution recommendations',
                  'Long-term maintenance planning',
                ],
              },
              {
                title: 'Seasonal Garage Organization',
                description:
                  'Targeted garage cleanout focusing on seasonal item organization, holiday decoration storage, and sporting equipment management',
                features: [
                  'Seasonal item sorting and storage',
                  'Holiday decoration organization',
                  'Sporting equipment management',
                  'Climate-controlled storage guidance',
                ],
              },
              {
                title: 'Workshop Garage Cleanout',
                description: 'Specialized garage cleaning for home workshops including tool organization, material sorting, and workspace optimization',
                features: [
                  'Workshop tool organization',
                  'Material and supply sorting',
                  'Workspace efficiency improvement',
                  'Safety compliance enhancement',
                ],
              },
              {
                title: 'Moving Garage Preparation',
                description: 'Pre-move garage cleanout service including decluttering, donation coordination, and packing preparation for relocation',
                features: [
                  'Pre-move garage decluttering',
                  'Moving cost reduction through disposal',
                  'Packing preparation support',
                  'New home organization planning',
                ],
              },
            ],
          },
          faq: {
            title: 'GARAGE CLEANOUT FAQ',
            subtitle: 'Common questions about our Northern Utah garage cleanout services',
            items: [
              {
                question: 'How much does garage cleanout cost in Northern Utah?',
                answer:
                  "Garage cleanout pricing typically ranges from $285-585 depending on garage size, contents, and organization level needed. Most Northern Utah garage projects cost $385-485 with transparent pricing provided upfront.",
              },
              {
                question: 'How long does a garage cleanout take?',
                answer:
                  'Garage cleanouts typically take 4-8 hours depending on contents and organization goals. We work efficiently while allowing time for decision-making and organization planning.',
              },
              {
                question: 'Do you help organize items we want to keep?',
                answer:
                  'Yes! Our garage cleanout service includes organization consultation and suggestions for optimal storage of items you choose to keep, ensuring long-term functionality.',
              },
              {
                question: 'How do you handle hazardous materials in garages?',
                answer:
                  'We safely identify automotive fluids, paints, chemicals, and other hazardous garage materials, coordinating proper disposal through certified facilities at no additional charge.',
              },
              {
                question: 'Can you help donate usable garage items?',
                answer:
                  'Absolutely! We coordinate donations for tools, sporting equipment, seasonal items, and other usable garage contents, providing donation receipts for tax purposes.',
              },
              {
                question: 'Do you provide garage cleanout for attached garages?',
                answer:
                  'Yes! We provide garage cleanout services for attached, detached, and basement garages throughout Northern Utah, adapting our approach to each space type.',
              },
              {
                question: 'What happens to automotive fluids during garage cleanouts?',
                answer:
                  'We handle automotive fluids, oils, and chemicals according to Utah environmental regulations, coordinating proper disposal through certified facilities with full documentation.',
              },
              {
                question: 'Can I schedule regular garage maintenance cleanouts?',
                answer:
                  'Yes! Many Northern Utah homeowners schedule quarterly or semi-annual garage cleanout maintenance to prevent re-accumulation and maintain organization systems.',
              },
            ],
          },
        },
      },
    },
    {
      id: 'construction-cleanup',
      name: 'Construction Cleanup and Junk Removal',
      slug: 'construction-cleanup',
      shortDescription:
        'Professional construction cleanup and debris removal throughout Northern Utah. Comprehensive job site cleanup, renovation waste disposal, and demolition debris removal for contractors and homeowners.',
      longDescription:
        'Free Space Junk Removal & Cleaning provides comprehensive construction cleanup services handling all types of construction debris, renovation waste, and demolition materials. Our construction cleanup specialists serve contractors, property managers, and homeowners throughout Northern Utah with reliable scheduling and professional disposal.',
      features: [
        'Complete construction debris removal',
        'Professional job site cleanup services',
        'Contractor-friendly construction cleanup scheduling',
        'Proper construction waste disposal and recycling',
        'Commercial construction cleanup invoicing',
        'Same-day construction cleanup service',
      ],
      image: '/images/construction-cleanup.jpeg',
      category: 'construction',
      buttonText: 'Schedule Construction Cleanup',
      isActive: true,
      seo: {
        title: 'Construction Cleanup Northern Utah | Free Space Junk Removal',
        description:
          'Professional construction cleanup and debris removal in Northern Utah. Job site cleanup, renovation waste, demolition materials. Contractor services in Ogden, Logan, Brigham City.',
      },
      content: {
        hero: {
          title: 'CONSTRUCTION CLEANUP - NORTHERN UTAH',
          subtitle: 'Professional Job Site and Renovation Debris Removal',
          description:
            'Need construction cleanup services? Free Space Junk Removal & Cleaning provides comprehensive construction debris removal, job site cleanup, and renovation waste disposal throughout Northern Utah. Professional construction cleanup with contractor-friendly scheduling.',
          backgroundImage: '/images/construction-cleanup.jpeg',
        },
        sections: {
          mainContent: {
            title: 'Construction Cleanup - Northern Utah',
            content: [
              'Free Space Junk Removal & Cleaning specializes in professional construction cleanup services throughout Northern Utah, providing comprehensive debris removal solutions for contractors, property managers, and homeowners tackling renovation projects. Our construction cleanup specialists handle everything from demolition debris to renovation waste with the expertise and reliability that construction timelines demand.',
              'Unlike general junk removal companies that lack construction industry knowledge, our construction cleanup service includes contractor-friendly scheduling, commercial invoicing, progress cleanup coordination, and specialized handling of construction materials. We understand construction project needs and provide flexible service that keeps your projects on schedule.',
              'Each construction cleanup project includes systematic debris removal, proper material sorting for recycling potential, compliant disposal of construction waste, coordination with project timelines, and detailed documentation for project records. Our construction debris removal process ensures job sites remain clean, safe, and compliant throughout Northern Utah.',
              'Our construction cleanup team serves contractors, developers, and homeowners throughout Ogden, Logan, Brigham City, and surrounding Northern Utah communities with reliable, professional service. We understand the critical importance of maintaining clean, safe job sites and provide responsive construction cleanup that adapts to changing project schedules.',
              'The construction cleanup process prioritizes safety and environmental responsibility, ensuring proper disposal of construction materials, recycling of metals and concrete, and compliant handling of renovation waste according to Utah environmental regulations. Contractors receive detailed documentation supporting their project compliance and environmental stewardship efforts.',
              'Professional construction cleanup requires industry knowledge, proper equipment, and regulatory compliance that our experienced team provides with every service call. From small renovation cleanups to major demolition debris removal, we handle construction challenges throughout Northern Utah with the expertise and professionalism that demanding projects require.',
              'Construction cleanup pricing includes all labor, equipment, transportation, sorting, and compliant disposal with transparent costs and contractor-friendly payment terms. Our comprehensive construction debris removal service ensures projects stay on budget while we handle the complex logistics of waste management and disposal compliance.',
              'Whether you\'re managing residential renovations, commercial construction projects, demolition jobs, or ongoing construction sites, our construction cleanup service provides the professional expertise and reliable scheduling that Northern Utah construction projects require for successful completion.',
            ],
            benefits: [
              {
                title: 'Contractor-Friendly Scheduling',
                description:
                  "Our construction cleanup service adapts to construction timelines with flexible scheduling, same-day response, and coordination with project milestones throughout Northern Utah.",
              },
              {
                title: 'Commercial Construction Invoicing',
                description:
                  'We provide professional invoicing, net payment terms, and business-class documentation designed specifically for contractors and commercial construction projects.',
              },
              {
                title: 'Comprehensive Debris Handling',
                description:
                  'Our construction cleanup service handles all types of construction debris including demolition waste, renovation materials, and job site cleanup throughout Northern Utah.',
              },
              {
                title: 'Safety-First Construction Cleanup',
                description:
                  'We maintain OSHA-compliant safety standards during construction cleanup, protecting workers and property while ensuring efficient debris removal.',
              },
              {
                title: 'Environmental Construction Compliance',
                description:
                  'Our construction debris removal meets all Utah environmental regulations with proper disposal documentation and compliance certificates for project records.',
              },
              {
                title: 'Progress Cleanup Coordination',
                description:
                  'We coordinate ongoing construction cleanup throughout project phases, ensuring job sites remain clean, safe, and inspection-ready.',
              },
            ],
          },
          processSteps: {
            title: 'OUR CONSTRUCTION CLEANUP PROCESS',
            steps: [
              {
                title: 'Construction Project Assessment',
                description:
                  'We evaluate your construction cleanup needs, coordinate with project schedules, and develop efficient debris removal plans that support construction timelines.',
              },
              {
                title: 'Systematic Construction Debris Removal',
                description:
                  'Our team executes construction cleanup with proper safety protocols, efficient debris handling, and coordination with ongoing construction activities.',
              },
              {
                title: 'Professional Job Site Management',
                description:
                  'We maintain clean, organized job sites through systematic construction cleanup, ensuring safety compliance and project efficiency throughout Northern Utah.',
              },
              {
                title: 'Complete Construction Documentation',
                description:
                  'You receive comprehensive project documentation including disposal receipts, compliance certificates, and environmental impact reporting for construction records.',
              },
            ],
          },
          serviceTypes: {
            title: 'CONSTRUCTION CLEANUP SERVICES WE PROVIDE',
            types: [
              {
                title: 'Demolition Debris Removal',
                description: 'Complete demolition cleanup including concrete, drywall, flooring, and structural debris removal with proper disposal and recycling',
                features: [
                  'Concrete and masonry debris removal',
                  'Drywall and insulation cleanup',
                  'Flooring and carpet removal',
                  'Structural demolition cleanup',
                ],
              },
              {
                title: 'Renovation Waste Cleanup',
                description:
                  'Comprehensive renovation cleanup including fixture removal, material disposal, and ongoing job site maintenance throughout project phases',
                features: [
                  'Fixture and cabinet removal',
                  'Renovation material disposal',
                  'Progress cleanup coordination',
                  'Final cleanup services',
                ],
              },
              {
                title: 'New Construction Job Site Cleanup',
                description: 'Ongoing construction cleanup for new builds including material waste removal, packaging disposal, and job site organization',
                features: [
                  'Construction material waste removal',
                  'Packaging and debris cleanup',
                  'Job site organization support',
                  'Phase-completion cleanup',
                ],
              },
              {
                title: 'Commercial Construction Cleanup',
                description: 'Large-scale commercial construction cleanup including industrial debris removal and business-class project coordination',
                features: [
                  'Industrial construction debris removal',
                  'Commercial project coordination',
                  'Business-class documentation',
                  'Multi-phase cleanup scheduling',
                ],
              },
            ],
          },
          faq: {
            title: 'CONSTRUCTION CLEANUP FAQ',
            subtitle: 'Common questions about our Northern Utah construction cleanup services',
            items: [
              {
                question: 'How much does construction cleanup cost in Northern Utah?',
                answer:
                  "Construction cleanup pricing varies based on debris volume and project scope, typically ranging from $285-1,500+ depending on project size. We provide detailed estimates and contractor-friendly pricing.",
              },
              {
                question: 'Do you provide ongoing construction cleanup throughout projects?',
                answer:
                  'Yes! We coordinate ongoing construction cleanup throughout project phases, ensuring job sites remain clean, safe, and compliant with regular scheduled cleanups.',
              },
              {
                question: 'Can you handle large-scale demolition debris?',
                answer:
                  'Absolutely! Our construction cleanup service includes specialized equipment and trailers capable of handling large-scale demolition debris throughout Northern Utah.',
              },
              {
                question: 'Do you work with contractors and provide commercial invoicing?',
                answer:
                  'Yes! We provide contractor-friendly services including commercial invoicing, net payment terms, certificates of insurance, and business-class documentation.',
              },
              {
                question: 'What types of construction debris do you handle?',
                answer:
                  'We handle all construction debris including concrete, drywall, wood, metal, flooring, fixtures, insulation, and renovation waste with proper disposal methods.',
              },
              {
                question: 'Do you provide same-day construction cleanup?',
                answer:
                  'Yes! We offer same-day construction cleanup throughout Northern Utah for urgent project needs, inspection preparations, and schedule changes.',
              },
              {
                question: 'How do you ensure construction site safety during cleanup?',
                answer:
                  'We maintain OSHA-compliant safety standards, coordinate with site safety protocols, and ensure our construction cleanup activities don\'t interfere with ongoing work.',
              },
              {
                question: 'Do you recycle construction materials?',
                answer:
                  'Absolutely! We maximize recycling for concrete, metal, wood, and other construction materials, providing documentation of recycling efforts and environmental compliance.',
              },
            ],
          },
        },
      },
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
          backgroundImage: '/images/north-utah-ogden-mountain.jpeg',
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
                backgroundImage: '/images/single-item-pickup.jpg',
              },
              {
                title: 'Commercial Cleanouts',
                description: 'Office moves, retail space clearing, warehouse cleanouts',
                href: '/services/commercial-junk-removal',
                backgroundImage: '/images/truck-load.jpg',
              },
              {
                title: 'Construction Debris',
                description: 'Renovation waste, demolition cleanup, contractor support',
                href: '/services/construction-debris',
                backgroundImage: '/images/trailer-load.jpg',
              },
              {
                title: 'Estate Cleanouts',
                description: 'Sensitive estate clearing with donation coordination',
                href: '/services/estate-cleanouts',
                backgroundImage: '/images/half-trailer.jpg',
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
          backgroundImage: '/images/north-utah-ogden-mountain.jpeg',
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
      content: {
        hero: {
          backgroundImage: '/images/north-utah-ogden-mountain.jpeg',
        },
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
      content: {
        hero: {
          backgroundImage: '/images/north-utah-ogden-mountain.jpeg',
        },
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
      content: {
        hero: {
          backgroundImage: '/images/north-utah-ogden-mountain.jpeg',
        },
      },
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
      content: {
        hero: {
          backgroundImage: '/images/north-utah-ogden-mountain.jpeg',
        },
      },
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
      content: {
        hero: {
          backgroundImage: '/images/north-utah-ogden-mountain.jpeg',
        },
      },
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
      content: {
        hero: {
          backgroundImage: '/images/north-utah-ogden-mountain.jpeg',
        },
      },
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
      content: {
        hero: {
          backgroundImage: '/images/north-utah-ogden-mountain.jpeg',
        },
      },
    },
  ],

  seo: {
    title: 'Junk Removal Near Me | #1 Northern Utah Junk Removal Service',
    description:
      'Professional junk removal near me in Northern Utah. Same-day junk hauling, transparent pricing, eco-friendly disposal. Serving Ogden, Logan, Brigham City areas with 5-star rated junk removal services.',
    keywords: [
      'junk removal near me',
      'junk removal northern utah',
      'junk hauling near me',
      'same day junk removal',
      'junk removal services near me',
      'furniture removal near me',
      'appliance removal near me',
      'junk removal ogden',
      'junk removal logan',
      'junk removal brigham city',
      'junk removal weber county',
      'junk removal cache county',
      'local junk removal',
      'residential junk removal',
      'commercial junk removal',
      'eco friendly junk removal',
      'transparent junk removal pricing',
      'utah junk hauling',
      'garage cleaning utah',
      'estate cleanout utah',
      'construction debris removal',
      'trash removal near me',
      'debris removal near me',
      'cleanout services near me',
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
