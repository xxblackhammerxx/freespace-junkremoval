#!/usr/bin/env node

import { VertexAI } from '@google-cloud/vertexai';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env') });

class VertexAIImageGenerator {
  constructor() {
    this.projectId = process.env.GOOGLE_PROJECT_ID;
    this.location = process.env.GOOGLE_LOCATION || 'us-central1';
    
    if (!this.projectId) {
      throw new Error('GOOGLE_PROJECT_ID environment variable is required');
    }

    // Set up authentication using environment variables
    if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
      const credentials = {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      };
      
      // Initialize VertexAI with explicit credentials
      this.vertexAI = new VertexAI({
        project: this.projectId, 
        location: this.location,
        googleAuthOptions: {
          credentials: credentials
        }
      });
    } else {
      // Use default credentials (Application Default Credentials)
      this.vertexAI = new VertexAI({
        project: this.projectId, 
        location: this.location
      });
    }
  }

  async generateImage(prompt, options = {}) {
    const {
      aspectRatio = "1:1",
      numberOfImages = 1,
      model = "imagen-3.0-generate-001",
      seed = Math.floor(Math.random() * 1000000),
      outputPath = null,
      safetyFilter = "BLOCK_MEDIUM_AND_ABOVE"
    } = options;

    console.log(`🎨 Generating image with prompt: "${prompt}"`);
    console.log(`📐 Aspect ratio: ${aspectRatio}`);
    console.log(`🎯 Model: ${model}`);
    console.log(`🎲 Seed: ${seed}`);

    try {
      // Get the generative model for image generation
      const generativeModel = this.vertexAI.getGenerativeModel({
        model: model
      });

      // Create the request using the proper format for image generation
      const request = {
        contents: [
          {
            role: 'user',
            parts: [
              {
                text: prompt
              }
            ]
          }
        ],
        generationConfig: {
          maxOutputTokens: 8192,
          temperature: 0.4,
          topP: 1,
          topK: 32
        }
      };

      console.log('🔄 Sending request to Vertex AI...');
      
      // Generate the content
      const result = await generativeModel.generateContent(request);
      const response = result.response;

      console.log('✅ Response received from Vertex AI');

      // Check if we have a proper response
      if (!response || !response.candidates || response.candidates.length === 0) {
        throw new Error('No response received from the model');
      }

      const candidate = response.candidates[0];
      console.log('📊 Candidate structure:', JSON.stringify(candidate, null, 2));

      // Note: The Vertex AI Node.js SDK might not directly support image generation
      // We may need to use the REST API or a different approach
      console.log('⚠️  The current Vertex AI Node.js SDK may not support direct image generation.');
      console.log('📝 Response content:', candidate.content?.parts?.[0]?.text || 'No text content');
      
      return {
        success: true,
        message: 'Image generation request sent, but image data extraction needs implementation',
        seed: seed,
        prompt: prompt,
        aspectRatio: aspectRatio,
        response: response
      };

    } catch (error) {
      console.error('❌ Error generating image:', error.message);
      if (error.details) {
        console.error('Error details:', error.details);
      }
      if (error.code) {
        console.error('Error code:', error.code);
      }
      
      throw error;
    }
  }

  async generateMultipleImages(prompts, options = {}) {
    const results = [];
    
    for (const prompt of prompts) {
      try {
        const result = await this.generateImage(prompt, options);
        results.push({ success: true, ...result });
      } catch (error) {
        console.error(`Failed to generate image for prompt: "${prompt}"`);
        results.push({ success: false, prompt, error: error.message });
      }
    }
    
    return results;
  }
}

// Command line interface
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log(`
🎨 Vertex AI Image Generator

Usage:
  node scripts/generate-images.js "your prompt here" [options]
  
Options:
  --aspect-ratio=1:1    Aspect ratio (1:1, 16:9, 9:16, etc.)
  --model=imagen-3.0-generate-001   Model to use
  --seed=12345          Random seed for reproducibility
  --output=path         Custom output path
  
Examples:
  node scripts/generate-images.js "A majestic lion in a sunset"
  node scripts/generate-images.js "Modern minimalist logo" --aspect-ratio=1:1
  node scripts/generate-images.js "Cyberpunk cityscape" --seed=42
  
Multiple prompts (use quotes):
  node scripts/generate-images.js "prompt 1" "prompt 2" "prompt 3"

Note: Currently in testing mode - working on image data extraction.
`);
    return;
  }

  try {
    const generator = new VertexAIImageGenerator();
    
    // Parse options
    const options = {};
    const prompts = [];
    
    for (const arg of args) {
      if (arg.startsWith('--')) {
        const [key, value] = arg.slice(2).split('=');
        switch (key) {
          case 'aspect-ratio':
            options.aspectRatio = value;
            break;
          case 'model':
            options.model = value;
            break;
          case 'seed':
            options.seed = parseInt(value);
            break;
          case 'output':
            options.outputPath = value;
            break;
          default:
            console.warn(`Unknown option: --${key}`);
        }
      } else {
        prompts.push(arg);
      }
    }
    
    if (prompts.length === 0) {
      console.error('❌ No prompts provided');
      return;
    }
    
    if (prompts.length === 1) {
      await generator.generateImage(prompts[0], options);
    } else {
      console.log(`🚀 Generating ${prompts.length} images...`);
      const results = await generator.generateMultipleImages(prompts, options);
      
      console.log('\n📊 Summary:');
      const successful = results.filter(r => r.success).length;
      const failed = results.length - successful;
      console.log(`✅ Successful: ${successful}`);
      console.log(`❌ Failed: ${failed}`);
    }
    
  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    console.error('📝 Make sure your Google Cloud credentials are properly configured.');
    console.error('🔧 Check that Vertex AI API is enabled and your service account has proper permissions.');
    process.exit(1);
  }
}

// Export the class for use in other modules
export { VertexAIImageGenerator };

// Run CLI if this file is executed directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch(console.error);
}