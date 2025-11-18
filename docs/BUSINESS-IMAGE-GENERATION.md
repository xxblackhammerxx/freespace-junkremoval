# Business AI Image Generation

Automatically generate professional images for your business website using AI! This feature integrates with your setup process to create:

- **Service Images** - Professional photos showcasing your services
- **Hero Images** - Banner images for different pages
- **Team Member Photos** - Professional headshots and team photos
- **Branding Images** - Company and office photos

## 🚀 **Quick Start**

### Generate All Business Images

```bash
# Through setup script
pnpm run setup:images

# Or directly
node scripts/business-image-generator.js --all
```

### Full Business Setup (Data + Colors + Images)

```bash
# Complete automated setup
pnpm run setup:full
```

### Generate Specific Image Types

```bash
# Service images only
pnpm run setup:images --services

# Hero/banner images only
pnpm run setup:images --heroes

# Team member photos only
pnpm run setup:images --team
```

## 📸 **What Gets Generated**

### Service Images (16:9 aspect ratio)

Based on your `businessConfig.services` array:

- `service-[slug].jpg` for each active service
- Professional work environment photos
- Industry-specific equipment and scenarios
- High-quality commercial photography style

Example generated images:

- `service-plumbing-repair.jpg`
- `service-kitchen-remodel.jpg`
- `service-emergency-service.jpg`

### Hero Images (Various aspect ratios)

- `hero-home.jpg` (21:9) - Main homepage banner
- `hero-about.jpg` (16:9) - About page header
- `hero-services.jpg` (16:9) - Services page banner
- `hero-contact.jpg` (16:9) - Contact page header

### Team Member Photos (3:4 portrait ratio)

- `team-owner.jpg` - Business owner/founder photo
- `team-lead.jpg` - Lead technician/manager
- `team-specialist.jpg` - Service specialist

## ⚙️ **Configuration**

The AI generates images based on your `business.config.ts` settings:

```typescript
// Key config values used for image generation:
business: {
  name: 'Your Business Name',           // Used in prompts
  mainService: 'Construction',          // Determines industry context
  mainRole: 'Contractor',              // Affects team member images
}
contact: {
  address: {
    serviceArea: 'Northern Utah'        // Geographic context
  }
}
services: [
  {
    name: 'Kitchen Remodeling',         // Specific service context
    shortDescription: '...',            // Included in prompts
    slug: 'kitchen-remodel'            // Used for filename
  }
]
```

## 🎨 **Customizing Image Generation**

### Modify Prompts

Edit `scripts/business-image-generator.js` to customize:

```javascript
createServicePrompt(service, businessConfig) {
  // Customize service image prompts
  return `Professional ${businessType} service: ${service.name}...`;
}

createHeroPrompt(type, businessConfig) {
  // Customize hero image prompts
  return `Professional business hero image...`;
}
```

### Output Location

Images are saved to: `/public/images/`

- Ready for immediate use in your website
- Proper web-optimized formats
- SEO-friendly filenames

## 📋 **Integration with Business Config**

After generation, update your config to use the new images:

```typescript
services: [
  {
    id: 'plumbing-repair',
    name: 'Plumbing Repair',
    image: '/images/service-plumbing-repair.jpg', // ← Generated image
    // ... other config
  },
]
```

## 🚦 **Usage Scenarios**

### New Business Setup

```bash
# Complete setup for new business
pnpm run setup:full
```

1. Imports business data from Google Sheets
2. Applies brand colors to CSS
3. Generates all professional images
4. Ready-to-launch website!

### Existing Business - Add Images

```bash
# Just generate images for existing setup
pnpm run setup:images
```

### Service Updates

```bash
# Regenerate only service images after config changes
node scripts/business-image-generator.js --services
```

### Quota Management

```bash
# Generate images in batches to manage API quotas
node scripts/business-image-generator.js --heroes    # First batch
# Wait for quota reset...
node scripts/business-image-generator.js --services  # Second batch
```

## 🔧 **Troubleshooting**

### Quota Limits

If you hit Vertex AI quota limits:

```bash
# Generate in smaller batches
pnpm run setup:images --services
# Wait 24 hours or request quota increase
pnpm run setup:images --heroes
```

### Missing Images

If some images fail to generate:

```bash
# Retry failed images
node scripts/business-image-generator.js --services
```

### Custom Business Config

```bash
# Use custom config file
node scripts/business-image-generator.js --config=./my-config.ts
```

## 🎯 **Best Practices**

1. **Run during setup** - Include in initial business setup workflow
2. **Batch generation** - Generate all images at once when possible
3. **Review and replace** - AI images are starting points; replace with real photos when available
4. **Backup originals** - Keep AI-generated images as backups
5. **Update config** - Make sure business.config.ts reflects your actual services

## 📊 **Output Summary**

After running, you'll get a summary like:

```
📊 Image Generation Summary:
==================================================
✅ Successfully generated: 8
❌ Failed: 2
📋 Total: 10

📁 Generated images saved to:
   /path/to/your/project/public/images
```

## 💡 **Next Steps**

1. **Review Generated Images** - Check `public/images/` folder
2. **Update Business Config** - Point image paths to generated files
3. **Replace with Real Photos** - When you have professional photos available
4. **Regenerate as Needed** - Update images when services change

This automated image generation saves hours of work finding stock photos and ensures all your images have a consistent, professional style that matches your business type and branding!
