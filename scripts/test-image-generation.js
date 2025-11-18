#!/usr/bin/env node

// Example script to test image generation
// Run with: node scripts/test-image-generation.js

import { VertexAIImageGenerator } from './generate-images.js'

async function testImageGeneration() {
  console.log('🧪 Testing Vertex AI Image Generation...\n')

  try {
    const generator = new VertexAIImageGenerator()

    // Test prompt - something simple and fast
    const testPrompt = 'A simple geometric shape, minimalist design, single color'

    console.log('📝 Test prompt:', testPrompt)
    console.log('⏱️  This may take 10-30 seconds...\n')

    const result = await generator.generateImage(testPrompt, {
      guidance: 5, // Lower guidance for faster generation
      aspectRatio: '1:1',
    })

    console.log('\n🎉 Test successful!')
    console.log('✅ Image generated and saved to:', result.path)
    console.log('🔢 Seed used:', result.seed)
    console.log('\n💡 You can now run the main script with:')
    console.log('   pnpm run ai:image "your prompt here"')
    console.log('   pnpm run generate:images "your prompt here"')
  } catch (error) {
    console.error('\n❌ Test failed:', error.message)
    console.log('\n🔧 Troubleshooting:')
    console.log('1. Make sure GOOGLE_PROJECT_ID is set in .env')
    console.log('2. Verify GOOGLE_CLIENT_EMAIL is correct')
    console.log('3. Check that GOOGLE_PRIVATE_KEY is properly formatted')
    console.log('4. Ensure Vertex AI API is enabled in your Google Cloud Console')
    console.log('5. Verify your service account has Vertex AI permissions')
  }
}

testImageGeneration()
