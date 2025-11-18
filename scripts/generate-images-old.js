#!/usr/bin/env node

import { PredictionServiceClient } from '@google-cloud/aiplatform'
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env') })

class VertexAIImageGenerator {
  constructor() {
    this.projectId = process.env.GOOGLE_PROJECT_ID
    this.location = process.env.GOOGLE_LOCATION || 'us-central1'

    if (!this.projectId) {
      throw new Error('GOOGLE_PROJECT_ID environment variable is required')
    }

    this.endpoint = `projects/${this.projectId}/locations/${this.location}/publishers/google/models/imagen-3.0-generate-001`
    this.client = null // Will be initialized when needed
  }

  async initializeClient() {
    if (!this.client) {
      const credentialsFile = await this.createTempCredentialsFile()
      this.client = new PredictionServiceClient({
        keyFile: credentialsFile,
      })
    }
    return this.client
  }

  async createTempCredentialsFile() {
    const credentials = {
      type: "service_account",
      project_id: this.projectId,
      private_key_id: "dummy", // This can be dummy for service account key
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: "dummy",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs"
    };

    // Write to a temporary file
    const tempPath = path.join(__dirname, '../.temp-gcloud-credentials.json');
    await fs.writeFile(tempPath, JSON.stringify(credentials, null, 2));
    return tempPath;
  }

  async generateImage(prompt, options = {}) {
    const {
      width = 1024,
      height = 1024,
      guidance = 7,
      seed = Math.floor(Math.random() * 1000000),
      outputPath = null,
      aspectRatio = '1:1',
    } = options

    console.log(`🎨 Generating image with prompt: "${prompt}"`)
    console.log(`📐 Dimensions: ${width}x${height} (aspect ratio: ${aspectRatio})`)

    try {
      // Initialize client if not already done
      await this.initializeClient();

      const instances = [
        {
          prompt: prompt,
          parameters: {
            sampleCount: 1,
            aspectRatio: aspectRatio,
            seed: seed,
            guidance: guidance,
          },
        },
      ]

      const request = {
        endpoint: this.endpoint,
        instances: instances,
      }

      console.log('🔄 Sending request to Vertex AI...')
      const [response] = await this.client.predict(request)

      if (!response.predictions || response.predictions.length === 0) {
        throw new Error('No images generated')
      }

      const prediction = response.predictions[0]

      if (!prediction.bytesBase64Encoded) {
        throw new Error('No image data received')
      }

      // Decode base64 image
      const imageBuffer = Buffer.from(prediction.bytesBase64Encoded, 'base64')

      // Determine output path
      let finalOutputPath = outputPath
      if (!finalOutputPath) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
        const sanitizedPrompt = prompt
          .toLowerCase()
          .replace(/[^a-z0-9\s]/g, '')
          .replace(/\s+/g, '-')
          .substring(0, 50)
        finalOutputPath = path.join(
          process.cwd(),
          'generated-images',
          `${sanitizedPrompt}-${timestamp}.png`,
        )
      }

      // Ensure output directory exists
      await fs.mkdir(path.dirname(finalOutputPath), { recursive: true })

      // Save image
      await fs.writeFile(finalOutputPath, imageBuffer)

      console.log(`✅ Image generated successfully!`)
      console.log(`📁 Saved to: ${finalOutputPath}`)
      console.log(`🎯 Seed used: ${seed} (use this seed to reproduce the image)`)

      // Clean up temp credentials file
      const tempCredentialsPath = path.join(__dirname, '../.temp-gcloud-credentials.json')
      try {
        await fs.unlink(tempCredentialsPath)
      } catch (error) {
        // Ignore cleanup errors
      }

      return {
        path: finalOutputPath,
        seed: seed,
        prompt: prompt,
        dimensions: { width, height },
        aspectRatio: aspectRatio,
      }
    } catch (error) {
      console.error('❌ Error generating image:', error.message)

      // Clean up temp credentials file on error
      const tempCredentialsPath = path.join(__dirname, '../.temp-gcloud-credentials.json')
      try {
        await fs.unlink(tempCredentialsPath)
      } catch (cleanupError) {
        // Ignore cleanup errors
      }

      throw error
    }
  }

  async generateMultipleImages(prompts, options = {}) {
    const results = []

    for (const prompt of prompts) {
      try {
        const result = await this.generateImage(prompt, options)
        results.push({ success: true, ...result })
      } catch (error) {
        console.error(`Failed to generate image for prompt: "${prompt}"`)
        results.push({ success: false, prompt, error: error.message })
      }
    }

    return results
  }
}

// Command line interface
async function main() {
  const args = process.argv.slice(2)

  if (args.length === 0) {
    console.log(`
🎨 Vertex AI Image Generator

Usage:
  node scripts/generate-images.js "your prompt here" [options]
  
Options:
  --width=1024          Image width (default: 1024)
  --height=1024         Image height (default: 1024)  
  --aspect-ratio=1:1    Aspect ratio (1:1, 16:9, 9:16, etc.)
  --guidance=7          Guidance scale (1-20, default: 7)
  --seed=12345          Random seed for reproducibility
  --output=path         Custom output path
  
Examples:
  node scripts/generate-images.js "A majestic lion in a sunset"
  node scripts/generate-images.js "Modern minimalist logo" --aspect-ratio=1:1 --guidance=10
  node scripts/generate-images.js "Cyberpunk cityscape" --width=1920 --height=1080 --seed=42
  
Multiple prompts (use quotes):
  node scripts/generate-images.js "prompt 1" "prompt 2" "prompt 3"
`)
    return
  }

  try {
    const generator = new VertexAIImageGenerator()

    // Parse options
    const options = {}
    const prompts = []

    for (const arg of args) {
      if (arg.startsWith('--')) {
        const [key, value] = arg.slice(2).split('=')
        switch (key) {
          case 'width':
            options.width = parseInt(value)
            break
          case 'height':
            options.height = parseInt(value)
            break
          case 'aspect-ratio':
            options.aspectRatio = value
            break
          case 'guidance':
            options.guidance = parseFloat(value)
            break
          case 'seed':
            options.seed = parseInt(value)
            break
          case 'output':
            options.outputPath = value
            break
          default:
            console.warn(`Unknown option: --${key}`)
        }
      } else {
        prompts.push(arg)
      }
    }

    if (prompts.length === 0) {
      console.error('❌ No prompts provided')
      return
    }

    if (prompts.length === 1) {
      await generator.generateImage(prompts[0], options)
    } else {
      console.log(`🚀 Generating ${prompts.length} images...`)
      const results = await generator.generateMultipleImages(prompts, options)

      console.log('\n📊 Summary:')
      const successful = results.filter((r) => r.success).length
      const failed = results.length - successful
      console.log(`✅ Successful: ${successful}`)
      console.log(`❌ Failed: ${failed}`)
    }
  } catch (error) {
    console.error('❌ Fatal error:', error.message)
    process.exit(1)
  }
}

// Export the class for use in other modules
export { VertexAIImageGenerator }

// Run CLI if this file is executed directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch(console.error)
}
