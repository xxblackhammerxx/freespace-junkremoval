# Service Business Template

This template has been converted from a specific demolition company website into a reusable template for any service-based business. The template uses file-based configuration to customize branding, content, and business details.

## Features

- **🎨 Dynamic Branding**: Customizable colors, fonts, and logos
- **📋 Service Management**: Configurable services with descriptions and images
- **🗺️ Service Area Management**: Customizable geographic coverage areas
- **📞 Contact Integration**: Dynamic contact information throughout the site
- **🌐 Dynamic SEO**: Robots.txt and sitemap.xml generated from configuration
- **📱 Responsive Design**: Mobile-first responsive design
- **⚡ Performance Optimized**: Built with Next.js 16 and Tailwind CSS
- **📝 Blog Ready**: PayloadCMS for blog content and form submissions
- **🔍 SEO Optimized**: Configurable meta tags and structured data
- **🚀 Dynamic Service Worker**: Auto-generated PWA features with smart caching

## Quick Start

### 1. Setup Your Business

Run the interactive setup script:

```bash
npm run setup
```

This will prompt you for:

- Business name and contact information
- Primary, secondary, and accent colors
- Tagline and mission statement
- Service area description

### 2. Replace Logo Files

Add your business logos to `public/images/`:

- `logo-main.svg` - Primary logo for headers
- `logo-horizontal.svg` - Wide version for specific layouts
- `logo-icon.svg` - Icon/favicon version
- `logo-white.svg` - White version for dark backgrounds

### 3. Configure Services

Edit `src/config/business.config.ts` to add your services:

```typescript
services: [
  {
    id: 'service-1',
    name: 'Your Service Name',
    slug: 'your-service-name',
    shortDescription: 'Brief description for cards and listings',
    longDescription: 'Detailed description for service pages',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    image: '/images/your-service-image.jpg',
    category: 'your-category',
    isActive: true,
  },
]
```

### 4. Configure Service Areas

Add your geographic coverage areas:

```typescript
serviceAreas: [
  {
    id: 'area-1',
    name: 'Your City',
    slug: 'your-city-state',
    state: 'ST',
    county: 'Your County',
    description: 'Service description for this area',
    specialties: ['Specialty 1', 'Specialty 2'],
    isActive: true,
  },
]
```

## Configuration

### Business Configuration

The main configuration file is `src/config/business.config.ts`. It contains:

#### Business Information

- Name, tagline, description
- Year established and experience
- Mission statement

#### Branding

- Logo file paths
- Color scheme (primary, secondary, accent, light)
- Font families (heading and body)

#### Website Configuration

- Website URL for SEO and sitemaps
- Domain name for robots.txt

#### Contact Information

- Phone number and email
- Address and service area

#### Services Array

- Service definitions with descriptions, images, and features
- SEO metadata for each service

#### Service Areas Array

- Geographic coverage areas
- Specialties for each area

### Color System

The template uses CSS custom properties that are automatically generated from your brand colors:

```css
--color-primary: #yourcolor --color-primary-50: /* auto-generated light variant */
  --color-primary-100: /* auto-generated variant */ /* ... full palette auto-generated */;
```

## File Structure

```
src/
├── config/
│   └── business.config.ts      # Main business configuration
├── utils/
│   ├── businessHelpers.ts     # Helper functions for config access
│   ├── colorGenerator.ts      # Color palette generation
│   └── cssGenerator.ts        # Dynamic CSS generation
├── components/
│   ├── Header.tsx             # Dynamic header with business branding
│   ├── Footer.tsx             # Dynamic footer with contact info
│   ├── ServiceCard.tsx        # Reusable service display component
│   └── ...                    # Other UI components
├── app/(frontend)/
│   ├── page.tsx               # Homepage using dynamic content
│   ├── services/              # Service pages (can be dynamic)
│   └── service-areas/         # Service area pages (can be dynamic)
└── collections/               # PayloadCMS collections for blog
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run setup` - Run business setup wizard
- `npm run generate:sw` - Generate dynamic service worker
- `npm run lint` - Run ESLint
- `npm run payload` - Access PayloadCMS admin

### Customization

#### Adding New Services

1. Add service object to `services` array in config
2. Create service page in `src/app/(frontend)/services/[slug]/page.tsx` (optional - can be dynamic)
3. Add service images to `public/images/`

#### Adding New Service Areas

1. Add area object to `serviceAreas` array in config
2. Create area page in `src/app/(frontend)/service-areas/[slug]/page.tsx` (optional - can be dynamic)

#### Customizing Components

All components use the business configuration. Update helper functions in `src/utils/businessHelpers.ts` to modify how data is accessed.

#### Styling

The template uses Tailwind CSS with custom color properties. Colors are automatically generated from your brand colors using the color generation utilities.

## Deployment

### Environment Variables

Required environment variables:

```bash
# Database
DATABASE_URI=your_postgres_connection_string

# PayloadCMS
PAYLOAD_SECRET=your_secret_key

# Email (optional)
RESEND_API_KEY=your_resend_key
RESEND_DEFAULT_FROM_ADDRESS=your_email
```

### Build Process

1. Configure your business settings
2. Replace logo files
3. Add service/area images
4. Set environment variables
5. Build and deploy

```bash
npm run build
npm run start
```

## PayloadCMS Integration

The template uses PayloadCMS only for:

- **Blog Posts**: Manage blog content through admin interface
- **Form Submissions**: Handle contact form submissions
- **Media**: Manage uploaded images and files

Business configuration stays in files for better portability and version control.

### Accessing Admin

Visit `/admin` after starting the server to access PayloadCMS admin interface.

## SEO & Analytics

### Dynamic SEO Files

The template automatically generates SEO files based on your configuration:

- **robots.txt**: Generated from `src/app/robots.ts` using your website URL
- **sitemap.xml**: Generated from `src/app/sitemap.ts` with all your services and areas

These files will automatically include your domain and all configured services/areas.

### SEO Configuration

Update the `seo` section in your business config:

```typescript
seo: {
  title: "Your Business | Professional Services",
  description: "Your business description for search engines",
  keywords: [
    "your service",
    "your location",
    "your industry"
  ]
}
```

### Analytics

Add your analytics tracking codes to `src/app/(frontend)/layout.tsx`.

## Performance Features

### Dynamic Service Worker

The template includes an intelligent service worker system that:

- **Auto-generates** based on your business configuration
- **Smart caching** of business logos and assets
- **Improves performance** through cache-first strategy
- **Offline support** for cached content
- **SEO benefits** from faster loading times

The service worker is automatically generated during:

- Development (`npm run dev`)
- Build process (`npm run build`)
- Setup wizard (`npm run setup`)

For more details, see [docs/SERVICE-WORKER.md](docs/SERVICE-WORKER.md).

## Support

For questions about using this template:

1. Check the configuration examples in `business.config.ts`
2. Review component implementations for customization patterns
3. Use the setup script for initial configuration

## Template Architecture

This template is designed to be:

- **Configurable**: All business-specific content in configuration files
- **Maintainable**: Clear separation between template and business logic
- **Portable**: No hardcoded business information in components
- **Extensible**: Easy to add new services, areas, and features
- **SEO-Friendly**: Configurable meta tags and structured data
