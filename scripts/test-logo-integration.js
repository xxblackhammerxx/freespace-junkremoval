#!/usr/bin/env node

// Test script for logo-inspired image generation
import { VertexAIImageGenerator } from './generate-images.js'
import path from 'path'

async function testLogoInspiredGeneration() {
  console.log('🧪 Testing Logo-Inspired AI Image Generation...\n')

  try {
    const generator = new VertexAIImageGenerator()

    console.log('� Testing descriptive logo integration in prompts')
    console.log('⏱️  This may take 20-40 seconds...\n')

    // Test 1: Service worker with specific logo description
    const result1 = await generator.generateImage(
      'Professional service worker wearing a navy blue uniform with a company logo on the left chest, standing confidently in front of a modern office building, high-quality commercial photography, professional lighting',
      {
        aspectRatio: '3:4',
        seed: 12345,
      },
    )

    console.log('\n🔄 Generating second test image...\n')

    // Test 2: Marketing banner with logo space
    const result2 = await generator.generateImage(
      'Professional marketing banner design with space for company logo in top-left corner, modern business background, clean minimalist design, corporate colors',
      {
        aspectRatio: '16:9',
        seed: 67890,
      },
    )

    console.log('\n🎉 Tests successful!')
    console.log('✅ Logo-inspired images generated:')
    console.log(`   1. Service worker: ${result1.path}`)
    console.log(`   2. Marketing banner: ${result2.path}`)
    console.log('\n💡 Tips for Logo Integration:')
    console.log(
      '   • Describe where the logo should go: "logo on left chest", "company branding on uniform"',
    )
    console.log(
      '   • Specify logo style: "circular logo", "rectangular company badge", "embroidered logo"',
    )
    console.log(
      '   • Include brand colors: "company colors blue and white", "corporate navy and gold"',
    )
    console.log(
      '   • Describe the setting: "professional office", "construction site", "retail environment"',
    )
    console.log('\n🎨 Advanced Prompting Examples:')
    console.log(
      '   • "Construction worker with hard hat featuring company logo, safety vest with corporate branding"',
    )
    console.log(
      '   • "Delivery truck with large company logo on side panel, professional commercial vehicle"',
    )
    console.log(
      '   • "Business card design with space for logo and company information, professional layout"',
    )
  } catch (error) {
    console.error('\n❌ Test failed:', error.message)
    console.log('\n🔧 Troubleshooting:')
    console.log('1. Check your Google Cloud credentials are properly configured')
    console.log('2. Ensure Vertex AI API is enabled and you have quota available')
    console.log('3. Verify your network connection is stable')
    console.log('4. Try with simpler prompts first to test basic functionality')
  }
}

testLogoInspiredGeneration()
