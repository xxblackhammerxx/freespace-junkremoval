# Dynamic Services and Service Areas

This project uses a dynamic page generation system for services and service areas. Instead of creating individual page files for each service or location, all pages are generated from configuration data at build time.

## Overview

The system automatically generates pages for:

- **Service Areas**: `/service-areas/[slug]` (e.g., `/service-areas/bountiful-ut`)
- **Services**: `/services/[slug]` (e.g., `/services/kitchen-demolition`)

All configuration is managed through `/src/config/business.config.ts`, making it easy to add new locations or services without creating new files.

## Adding New Service Areas

### Basic Service Area

To add a new service area, add an entry to the `serviceAreas` array in `/src/config/business.config.ts`:

```typescript
{
  id: 'your-city',
  name: 'Your City',
  slug: 'your-city-ut',
  state: 'UT',
  county: 'Your County', // Optional
  description: 'Professional services for Your City and surrounding areas.',
  specialties: [
    'Residential projects',
    'Commercial work',
    'Emergency services',
  ],
  image: '/images/your-city-hero.jpg', // Optional
  isActive: true,
  seo: {
    title: 'Professional Services - Your City UT | Business Name',
    description: 'Expert services in Your City, Utah. Trusted contractors with local expertise.',
  }
}
```

This will automatically generate a page at `/service-areas/your-city-ut` with:

- Hero section with city-specific messaging
- Service cards based on specialties
- Default FAQ section
- SEO metadata

### Custom Service Area Content

For better SEO and local relevance, you can add completely custom content:

```typescript
{
  id: 'your-city',
  name: 'Your City',
  slug: 'your-city-ut',
  // ... basic fields above ...
  content: {
    hero: {
      title: 'PROFESSIONAL SERVICES - YOUR CITY UT',
      subtitle: 'Local Expertise in Your City, Utah',
      description: 'Custom description highlighting local knowledge and expertise.',
      backgroundImage: '/images/your-city-hero.jpg'
    },
    sections: {
      mainContent: {
        title: 'YOUR CITY\'S PREMIER SERVICE PROVIDER',
        content: [
          'First paragraph about your local presence and expertise...',
          'Second paragraph about specific local knowledge...',
        ],
        highlights: [
          {
            title: 'Local Expertise',
            description: 'Deep knowledge of Your City\'s unique requirements'
          },
          {
            title: 'Licensed & Insured',
            description: 'Fully licensed for work in Your County'
          }
        ]
      },
      localServices: {
        title: 'SERVICES THROUGHOUT YOUR CITY',
        subtitle: 'Comprehensive services for Your City residents and businesses.',
        services: [
          {
            title: 'Residential Services Your City',
            description: 'Home services tailored for Your City neighborhoods.',
            href: '/services/residential',
            backgroundImage: '/images/residential-hero.jpg'
          },
          // Add more local service variations...
        ]
      },
      neighborhoods: {
        title: 'SERVING ALL YOUR CITY AREAS',
        areas: [
          {
            title: 'DOWNTOWN YOUR CITY',
            description: 'Specialized services for historic downtown area.'
          },
          {
            title: 'YOUR CITY SUBURBS',
            description: 'Family-friendly service approach for residential areas.'
          }
        ]
      },
      whyChooseUs: {
        title: 'Why Your City Residents Choose Us',
        content: [
          {
            title: 'Local Knowledge',
            description: 'We understand Your City\'s specific requirements, codes, and conditions.'
          },
          {
            title: 'Community Focus',
            description: 'Committed to serving the Your City community with integrity.'
          }
        ]
      },
      faq: {
        title: 'YOUR CITY SERVICE FAQ',
        subtitle: 'Common questions about services in Your City, Utah',
        items: [
          {
            question: 'Do you serve all areas of Your City?',
            answer: 'Yes, we provide services throughout all of Your City and surrounding areas.'
          },
          {
            question: 'Are you familiar with Your City building codes?',
            answer: 'Absolutely. Our team is well-versed in all Your County and Your City regulations.'
          }
        ]
      }
    }
  }
}
```

## Adding New Services

### Basic Service

Add an entry to the `services` array in `/src/config/business.config.ts`:

```typescript
{
  id: 'your-service',
  name: 'Your Service Name',
  slug: 'your-service',
  shortDescription: 'Brief description for service cards and listings.',
  longDescription: 'Detailed description of the service offering.',
  features: [
    'Feature or benefit 1',
    'Feature or benefit 2',
    'Feature or benefit 3',
  ],
  image: '/images/your-service.jpg',
  category: 'your-category', // e.g., 'demolition', 'renovation', 'cleanup'
  buttonText: 'Learn More About Your Service', // Optional
  isActive: true,
  seo: {
    title: 'Your Service Name | Professional Service Provider',
    description: 'Expert your service description with local expertise.',
  }
}
```

This creates a page at `/services/your-service` with:

- Hero section with service details
- Feature list from the `features` array
- Default FAQ section
- SEO metadata

### Custom Service Content

For comprehensive service pages with better SEO:

```typescript
{
  id: 'your-service',
  name: 'Your Service Name',
  slug: 'your-service',
  // ... basic fields above ...
  content: {
    hero: {
      title: 'PROFESSIONAL YOUR SERVICE NAME',
      subtitle: 'Expert Your Service Services',
      description: 'Detailed hero description highlighting expertise and benefits.',
      backgroundImage: '/images/your-service-hero.jpg'
    },
    sections: {
      mainContent: {
        title: 'EXPERT YOUR SERVICE SERVICES',
        content: [
          'Detailed explanation of your service process and expertise...',
          'Information about techniques, equipment, and approach...',
          'Benefits and value proposition...',
        ],
        benefits: [
          {
            title: 'Professional Equipment',
            description: 'State-of-the-art tools and machinery for optimal results'
          },
          {
            title: 'Licensed & Insured',
            description: 'Full licensing and comprehensive insurance coverage'
          }
        ]
      },
      processSteps: {
        title: 'OUR YOUR SERVICE PROCESS',
        steps: [
          {
            title: 'INITIAL ASSESSMENT',
            description: 'Thorough evaluation of project requirements and scope.'
          },
          {
            title: 'PLANNING & PREPARATION',
            description: 'Detailed planning and site preparation for optimal execution.'
          },
          {
            title: 'EXECUTION',
            description: 'Professional execution using proven techniques and safety protocols.'
          },
          {
            title: 'COMPLETION & CLEANUP',
            description: 'Final cleanup and quality inspection to ensure satisfaction.'
          }
        ]
      },
      serviceTypes: {
        title: 'YOUR SERVICE TYPES WE PROVIDE',
        types: [
          {
            title: 'RESIDENTIAL YOUR SERVICE',
            description: 'Specialized services for homes and residential properties.',
            features: [
              'Feature specific to residential work',
              'Another residential feature',
              'Additional residential benefit'
            ]
          },
          {
            title: 'COMMERCIAL YOUR SERVICE',
            description: 'Professional services for businesses and commercial properties.',
            features: [
              'Commercial-specific feature',
              'Business-focused benefit',
              'Commercial advantage'
            ]
          }
        ]
      },
      faq: {
        title: 'YOUR SERVICE FREQUENTLY ASKED QUESTIONS',
        subtitle: 'Common questions about your service answered by our experts.',
        items: [
          {
            question: 'How long does your service take?',
            answer: 'Timeline varies based on project scope. Most standard projects take 2-3 days.'
          },
          {
            question: 'What\'s included in your service?',
            answer: 'Our comprehensive service includes all listed features plus cleanup and disposal.'
          },
          {
            question: 'Do you handle permits?',
            answer: 'We obtain permits for our specific work. Other permits are the property owner\'s responsibility.'
          }
        ]
      }
    }
  }
}
```

## SEO Best Practices

### Service Areas

- Use location-specific titles and descriptions
- Include county/state information
- Mention local landmarks or characteristics
- Address local building codes or requirements
- Include neighborhood-specific information

### Services

- Use service-specific keywords naturally
- Include process and benefit information
- Address common customer concerns
- Mention equipment and techniques used
- Include safety and licensing information

## File Structure

The dynamic system uses these key files:

```
src/
├── config/
│   └── business.config.ts          # All service and service area configuration
├── app/(frontend)/
│   ├── services/
│   │   ├── [slug]/
│   │   │   └── page.tsx           # Dynamic service page template
│   │   └── page.tsx               # Services index page
│   └── service-areas/
│       ├── [slug]/
│       │   └── page.tsx           # Dynamic service area page template
│       └── page.tsx               # Service areas index page
└── utils/
    ├── businessHelpers.ts         # Helper functions for accessing config
    └── metadataHelpers.ts         # SEO metadata generation
```

## Development Workflow

1. **Add Configuration**: Update `business.config.ts` with new service or service area
2. **Test Locally**: Run `pnpm dev` and visit the new page URL
3. **Build**: Run `pnpm build` to generate static pages
4. **Deploy**: All pages are generated at build time for optimal performance

## Advanced Customization

### Custom Components

If you need page layouts beyond what the standard templates provide, you can:

1. Create custom components in `/src/components/`
2. Import and use them in the dynamic page templates
3. Control their display through the `content` configuration

### Conditional Content

Use the service/area configuration to conditionally display content:

```typescript
// In the page template
{service.category === 'demolition' && (
  <SpecialDemolitionSection />
)}

{serviceArea.county === 'Davis County' && (
  <DavisCountySpecificInfo />
)}
```

### Image Management

- Store service images in `/public/images/`
- Use descriptive filenames: `kitchen-demolition-hero.jpg`
- Optimize images for web before adding
- Include `alt` text in image configurations when possible

## Troubleshooting

### Page Not Generating

- Ensure `isActive: true` in the configuration
- Check that the slug doesn't contain special characters
- Verify the configuration syntax is valid TypeScript

### SEO Issues

- Always include custom `seo` fields for better metadata
- Use unique titles and descriptions for each page
- Include location and service keywords naturally

### Build Errors

- Validate all configuration objects have required fields
- Check for TypeScript errors in the configuration
- Ensure all referenced images exist in `/public/images/`

## Examples

See the existing configurations for `bountiful-ut` and `kitchen-demolition` in `business.config.ts` for complete examples of custom content implementation.
