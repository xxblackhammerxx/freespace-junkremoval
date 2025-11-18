#!/usr/bin/env node

// Demo script to show what images would be generated
// (Useful when quota limits prevent actual generation)

import path from 'path'

async function showImageGenerationPlan() {
  console.log('🎨 Business AI Image Generation Plan\n')

  // Simulate loading business config
  const businessConfig = {
    business: {
      name: 'Your Business Name',
      mainService: 'Construction',
      mainRole: 'Contractor',
    },
    contact: {
      address: {
        serviceArea: 'Northern Utah',
      },
    },
    services: [
      {
        id: 'service-one',
        name: 'Service One',
        slug: 'service-one',
        shortDescription: 'Description of your first service offering',
        isActive: true,
      },
      {
        id: 'service-two',
        name: 'Service Two',
        slug: 'service-two',
        shortDescription: 'Description of your second service offering',
        isActive: true,
      },
      {
        id: 'service-three',
        name: 'Service Three',
        slug: 'service-three',
        shortDescription: 'Description of your third service offering',
        isActive: true,
      },
    ],
  }

  console.log('📋 IMAGES TO BE GENERATED:\n')
  console.log('='.repeat(60))

  console.log('\n🔧 SERVICE IMAGES (16:9):')
  businessConfig.services.forEach((service) => {
    if (service.isActive) {
      console.log(`📸 service-${service.slug}.jpg`)
      console.log(
        `   Prompt: "Professional ${businessConfig.business.mainService} service: ${service.name}. ${service.shortDescription}. High-quality commercial photography showing professional work environment, modern equipment, skilled technicians working on ${businessConfig.business.mainService} projects in ${businessConfig.contact.address.serviceArea}."`,
      )
      console.log('')
    }
  })

  console.log('\n🏆 HERO IMAGES (Various):')
  const heroImages = [
    {
      file: 'hero-home.jpg (21:9)',
      prompt: `Professional ${businessConfig.business.mainService} business hero image for ${businessConfig.business.name}. Modern service vehicles, professional team, quality equipment, ${businessConfig.contact.address.serviceArea} location. High-quality commercial photography, professional lighting, wide angle, inspiring and trustworthy atmosphere.`,
    },
    {
      file: 'hero-about.jpg (16:9)',
      prompt: `Professional business owner and team from ${businessConfig.business.name} ${businessConfig.business.mainService} company. Experienced professionals in work attire, confident poses, modern facility background, ${businessConfig.contact.address.serviceArea}. Professional corporate photography, warm lighting, approachable yet professional.`,
    },
    {
      file: 'hero-services.jpg (16:9)',
      prompt: `Professional ${businessConfig.business.mainService} services overview showing various aspects of quality workmanship. Modern tools, skilled technicians, satisfied customers, clean work environments. Commercial photography showcasing expertise and reliability.`,
    },
    {
      file: 'hero-contact.jpg (16:9)',
      prompt: `Professional ${businessConfig.business.mainService} business office and service area in ${businessConfig.contact.address.serviceArea}. Modern facilities, professional reception area, service vehicles, welcoming environment. High-quality architectural and commercial photography.`,
    },
  ]

  heroImages.forEach((hero) => {
    console.log(`📸 ${hero.file}`)
    console.log(`   Prompt: "${hero.prompt}"`)
    console.log('')
  })

  console.log('\n👥 TEAM MEMBER IMAGES (3:4):')
  const teamImages = [
    {
      file: 'team-owner.jpg',
      prompt: `Professional business owner of ${businessConfig.business.mainService} company. Confident leader in professional attire, office or job site background, experienced and trustworthy appearance. High-quality corporate headshot, professional lighting.`,
    },
    {
      file: 'team-lead.jpg',
      prompt: `Professional lead ${businessConfig.business.mainService} technician. Experienced worker in branded uniform, tool belt, confident pose at work site. Professional commercial photography, skilled craftsperson, reliable appearance.`,
    },
    {
      file: 'team-specialist.jpg',
      prompt: `Professional ${businessConfig.business.mainService} service specialist. Skilled technician with modern equipment, branded work attire, professional work environment. Commercial photography showcasing expertise and professionalism.`,
    },
  ]

  teamImages.forEach((member) => {
    console.log(`📸 ${member.file}`)
    console.log(`   Prompt: "${member.prompt}"`)
    console.log('')
  })

  console.log('='.repeat(60))
  console.log('\n📊 SUMMARY:')
  console.log(`📁 Output directory: public/images/`)
  console.log(`🔢 Total images: ${businessConfig.services.length + 4 + 3}`)
  console.log(`   • ${businessConfig.services.length} service images`)
  console.log('   • 4 hero/banner images')
  console.log('   • 3 team member images')

  console.log('\n🚀 TO GENERATE THESE IMAGES:')
  console.log('   pnpm run setup:images          # Generate all images')
  console.log('   pnpm run setup:full            # Full setup including images')
  console.log('')
  console.log('📝 Note: Actual generation requires Vertex AI quota.')
  console.log('     Each image takes ~10-30 seconds and uses API quota.')
  console.log('     Plan accordingly and consider generating in batches.')
}

showImageGenerationPlan()
