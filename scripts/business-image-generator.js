#!/usr/bin/env node

/**
 * AI Image Generation Module for Business Setup
 *
 * This module handles automatic generation of images for:
 * - Service images
 * - Hero images
 * - Team member photos
 * - Company branding images
 * - Service area images
 * - Gallery images
 */

import { VertexAIImageGenerator } from './generate-images.js'
import fs from 'fs'
import path from 'path'

export class BusinessImageGenerator {
  constructor() {
    this.generator = new VertexAIImageGenerator()
    this.outputDir = path.join(process.cwd(), 'public', 'images')
    this.generatedImages = []
  }

  async ensureOutputDirectory() {
    try {
      await fs.promises.mkdir(this.outputDir, { recursive: true })
    } catch (error) {
      console.error('Error creating output directory:', error.message)
    }
  }

  /**
   * Generate service images based on business config
   */
  async generateServiceImages(businessConfig) {
    console.log('🎨 Generating service images...\n')

    const serviceImages = []

    for (const service of businessConfig.services) {
      if (!service.isActive) continue

      try {
        console.log(`📸 Generating image for: ${service.name}`)

        const prompt = this.createServicePrompt(service, businessConfig)
        const outputPath = path.join(this.outputDir, `service-${service.slug}.jpg`)

        const result = await this.generator.generateImage(prompt, {
          aspectRatio: '16:9',
          outputPath: outputPath,
        })

        if (result.success) {
          serviceImages.push({
            service: service.name,
            slug: service.slug,
            path: result.path,
            publicPath: `/images/service-${service.slug}.jpg`,
          })
          console.log(`✅ Generated: ${service.name}`)
        }

        // Add delay to avoid rate limiting
        await this.delay(2000)
      } catch (error) {
        console.error(`❌ Failed to generate image for ${service.name}:`, error.message)
        serviceImages.push({
          service: service.name,
          slug: service.slug,
          error: error.message,
          fallback: true,
        })
      }
    }

    return serviceImages
  }

  /**
   * Generate hero images for different pages
   */
  async generateHeroImages(businessConfig) {
    console.log('\n🏆 Generating hero images...\n')

    const heroImages = []
    const heroConfigs = [
      {
        name: 'Home Hero',
        filename: 'hero-home.jpg',
        prompt: this.createHeroPrompt('main', businessConfig),
        aspectRatio: '21:9',
      },
      {
        name: 'About Hero',
        filename: 'hero-about.jpg',
        prompt: this.createHeroPrompt('about', businessConfig),
        aspectRatio: '16:9',
      },
      {
        name: 'Services Hero',
        filename: 'hero-services.jpg',
        prompt: this.createHeroPrompt('services', businessConfig),
        aspectRatio: '16:9',
      },
      {
        name: 'Contact Hero',
        filename: 'hero-contact.jpg',
        prompt: this.createHeroPrompt('contact', businessConfig),
        aspectRatio: '16:9',
      },
    ]

    for (const hero of heroConfigs) {
      try {
        console.log(`📸 Generating: ${hero.name}`)

        const outputPath = path.join(this.outputDir, hero.filename)

        const result = await this.generator.generateImage(hero.prompt, {
          aspectRatio: hero.aspectRatio,
          outputPath: outputPath,
        })

        if (result.success) {
          heroImages.push({
            name: hero.name,
            filename: hero.filename,
            path: result.path,
            publicPath: `/images/${hero.filename}`,
          })
          console.log(`✅ Generated: ${hero.name}`)
        }

        await this.delay(2000)
      } catch (error) {
        console.error(`❌ Failed to generate ${hero.name}:`, error.message)
        heroImages.push({
          name: hero.name,
          filename: hero.filename,
          error: error.message,
          fallback: true,
        })
      }
    }

    return heroImages
  }

  /**
   * Generate team member images
   */
  async generateTeamImages(businessConfig) {
    console.log('\n👥 Generating team member images...\n')

    const teamImages = []
    const teamConfigs = [
      {
        name: 'Owner/Founder',
        filename: 'team-owner.jpg',
        prompt: this.createTeamMemberPrompt('owner', businessConfig),
      },
      {
        name: 'Lead Technician',
        filename: 'team-lead.jpg',
        prompt: this.createTeamMemberPrompt('lead', businessConfig),
      },
      {
        name: 'Service Specialist',
        filename: 'team-specialist.jpg',
        prompt: this.createTeamMemberPrompt('specialist', businessConfig),
      },
    ]

    for (const member of teamConfigs) {
      try {
        console.log(`📸 Generating: ${member.name}`)

        const outputPath = path.join(this.outputDir, member.filename)

        const result = await this.generator.generateImage(member.prompt, {
          aspectRatio: '3:4',
          outputPath: outputPath,
        })

        if (result.success) {
          teamImages.push({
            name: member.name,
            filename: member.filename,
            path: result.path,
            publicPath: `/images/${member.filename}`,
          })
          console.log(`✅ Generated: ${member.name}`)
        }

        await this.delay(2000)
      } catch (error) {
        console.error(`❌ Failed to generate ${member.name}:`, error.message)
        teamImages.push({
          name: member.name,
          filename: member.filename,
          error: error.message,
          fallback: true,
        })
      }
    }

    return teamImages
  }

  /**
   * Generate all business images
   */
  async generateAllImages(businessConfig) {
    await this.ensureOutputDirectory()

    console.log('🚀 Starting AI image generation for business setup...\n')
    console.log(`📂 Output directory: ${this.outputDir}\n`)

    const results = {
      services: [],
      heroes: [],
      team: [],
      summary: {
        total: 0,
        successful: 0,
        failed: 0,
        fallbacks: 0,
      },
    }

    try {
      // Generate service images
      results.services = await this.generateServiceImages(businessConfig)

      // Generate hero images
      results.heroes = await this.generateHeroImages(businessConfig)

      // Generate team images
      results.team = await this.generateTeamImages(businessConfig)

      // Calculate summary
      const allImages = [...results.services, ...results.heroes, ...results.team]
      results.summary.total = allImages.length
      results.summary.successful = allImages.filter((img) => !img.error && !img.fallback).length
      results.summary.failed = allImages.filter((img) => img.error && !img.fallback).length
      results.summary.fallbacks = allImages.filter((img) => img.fallback).length

      // Display summary
      console.log('\n📊 Image Generation Summary:')
      console.log('='.repeat(50))
      console.log(`✅ Successfully generated: ${results.summary.successful}`)
      console.log(`❌ Failed: ${results.summary.failed}`)
      console.log(`📋 Total: ${results.summary.total}`)

      if (results.summary.successful > 0) {
        console.log('\n📁 Generated images saved to:')
        console.log(`   ${this.outputDir}`)
      }

      if (results.summary.failed > 0) {
        console.log('\n⚠️  Failed images - you can generate these manually later:')
        const failedImages = allImages.filter((img) => img.error)
        failedImages.forEach((img) => {
          console.log(`   • ${img.name || img.service}: ${img.error}`)
        })
      }
    } catch (error) {
      console.error('\n❌ Error during image generation:', error.message)
    }

    return results
  }

  // Helper methods for creating prompts
  createServicePrompt(service, businessConfig) {
    const businessType = businessConfig.business.mainService || 'professional service'
    const serviceArea = businessConfig.contact.address.serviceArea || 'local area'

    return `Professional ${businessType} service: ${service.name}. ${service.shortDescription}. High-quality commercial photography showing professional work environment, modern equipment, skilled technicians working on ${businessType} projects in ${serviceArea}. Professional lighting, clean composition, commercial grade photography.`
  }

  createHeroPrompt(type, businessConfig) {
    const businessName = businessConfig.business.name
    const businessType = businessConfig.business.mainService
    const serviceArea = businessConfig.contact.address.serviceArea

    const prompts = {
      main: `Professional ${businessType} business hero image for ${businessName}. Modern service vehicles, professional team, quality equipment, ${serviceArea} location. High-quality commercial photography, professional lighting, wide angle, inspiring and trustworthy atmosphere.`,
      about: `Professional business owner and team from ${businessName} ${businessType} company. Experienced professionals in work attire, confident poses, modern facility background, ${serviceArea}. Professional corporate photography, warm lighting, approachable yet professional.`,
      services: `Professional ${businessType} services overview showing various aspects of quality workmanship. Modern tools, skilled technicians, satisfied customers, clean work environments. Commercial photography showcasing expertise and reliability.`,
      contact: `Professional ${businessType} business office and service area in ${serviceArea}. Modern facilities, professional reception area, service vehicles, welcoming environment. High-quality architectural and commercial photography.`,
    }

    return prompts[type] || prompts.main
  }

  createTeamMemberPrompt(role, businessConfig) {
    const businessType = businessConfig.business.mainService

    const prompts = {
      owner: `Professional business owner of ${businessType} company. Confident leader in professional attire, office or job site background, experienced and trustworthy appearance. High-quality corporate headshot, professional lighting.`,
      lead: `Professional lead ${businessType} technician. Experienced worker in branded uniform, tool belt, confident pose at work site. Professional commercial photography, skilled craftsperson, reliable appearance.`,
      specialist: `Professional ${businessType} service specialist. Skilled technician with modern equipment, branded work attire, professional work environment. Commercial photography showcasing expertise and professionalism.`,
    }

    return prompts[role] || prompts.owner
  }

  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
}

// CLI interface
async function main() {
  const args = process.argv.slice(2)

  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
🎨 Business AI Image Generator

Usage:
  node scripts/business-image-generator.js [options]

Options:
  --services       Generate service images only
  --heroes         Generate hero images only  
  --team           Generate team images only
  --all            Generate all images (default)
  --config=path    Path to business config file

Examples:
  node scripts/business-image-generator.js --all
  node scripts/business-image-generator.js --services
  node scripts/business-image-generator.js --config=./custom-config.js
`)
    return
  }

  try {
    // Load business config
    const configPath =
      args.find((arg) => arg.startsWith('--config='))?.split('=')[1] ||
      './src/config/business.config.ts'

    // For now, we'll use a simple approach to load the config
    // In a real implementation, you might want to properly parse the TypeScript
    const { businessConfig } = await import('../src/config/business.config.ts')

    const generator = new BusinessImageGenerator()

    if (args.includes('--services')) {
      await generator.generateServiceImages(businessConfig)
    } else if (args.includes('--heroes')) {
      await generator.generateHeroImages(businessConfig)
    } else if (args.includes('--team')) {
      await generator.generateTeamImages(businessConfig)
    } else {
      // Generate all images
      await generator.generateAllImages(businessConfig)
    }
  } catch (error) {
    console.error('❌ Error:', error.message)
    console.error(
      '💡 Make sure your business config is properly set up and Google Cloud credentials are configured.',
    )
  }
}

// Export for use in other modules
export default BusinessImageGenerator

// Run CLI if executed directly
if (process.argv[1] === new URL(import.meta.url).pathname) {
  main().catch(console.error)
}
