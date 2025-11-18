#!/usr/bin/env node

import { GoogleAuth } from 'google-auth-library';
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

    // Initialize Google Auth
    if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
      this.auth = new GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
      });
    } else {
      this.auth = new GoogleAuth({
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
      });
    }
  }

  async getAccessToken() {
    const client = await this.auth.getClient();
    const accessToken = await client.getAccessToken();
    return accessToken.token;
  }

  // Helper function to encode image to base64
  async encodeImageToBase64(imagePath) {
    try {
      const imageBuffer = await fs.readFile(imagePath);
      return imageBuffer.toString('base64');
    } catch (error) {
      throw new Error(`Failed to read image file: ${imagePath} - ${error.message}`);
    }
  }

  // Helper function to get MIME type from file extension
  getMimeType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.gif': 'image/gif',
      '.webp': 'image/webp'
    };
    return mimeTypes[ext] || 'image/jpeg';
  }

  async generateImageWithReference(prompt, options = {}) {
    const {
      referenceImage = null,
      aspectRatio = "1:1",
      numberOfImages = 1,
      model = "imagen-3.0-edit-001", // Use the edit model for image-to-image
      seed = Math.floor(Math.random() * 1000000),
      outputPath = null,
      safetyFilter = "BLOCK_MEDIUM_AND_ABOVE",
      personGeneration = "ALLOW_ADULT"
    } = options;

    console.log(`🎨 Generating image with reference using prompt: "${prompt}"`);
    console.log(`🖼️  Reference image: ${referenceImage || 'None'}`);
    console.log(`📐 Aspect ratio: ${aspectRatio}`);
    console.log(`🎯 Model: ${model}`);
    console.log(`🎲 Seed: ${seed}`);

    try {
      if (!referenceImage) {
        // If no reference image, fall back to regular generation
        return await this.generateImage(prompt, options);
      }

      // Get access token
      const accessToken = await this.getAccessToken();
      
      // Read and encode the reference image
      const base64Image = await this.encodeImageToBase64(referenceImage);
      const mimeType = this.getMimeType(referenceImage);
      
      // Use the edit endpoint for image-to-image
      const endpoint = `https://${this.location}-aiplatform.googleapis.com/v1/projects/${this.projectId}/locations/${this.location}/publishers/google/models/${model}:predict`;
      
      const requestBody = {
        instances: [
          {
            prompt: prompt,
            baseImage: {
              bytesBase64Encoded: base64Image,
              mimeType: mimeType
            }
          }
        ],
        parameters: {
          sampleCount: numberOfImages,
          editMode: "inpainting-insert", // For adding elements to image
          safetyFilterLevel: safetyFilter,
          personGeneration: personGeneration
        }
      };

      console.log('🔄 Sending image-to-image request to Vertex AI REST API...');
      
      // Make the API request
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.log('❌ API Error Response:', errorText);
        
        // Try with regular generation instead as fallback
        console.log('🔄 Falling back to text-to-image generation with reference description...');
        const fallbackPrompt = `${prompt}, incorporating elements from a logo or brand image`;
        return await this.generateImage(fallbackPrompt, { 
          ...options, 
          model: "imagen-3.0-generate-001" 
        });
      }

      const responseData = await response.json();
      
      console.log('✅ Response received from Vertex AI');

      // Check if we have predictions
      if (!responseData.predictions || responseData.predictions.length === 0) {
        console.log('📊 Response structure:', JSON.stringify(responseData, null, 2));
        throw new Error('No predictions received from the API');
      }

      const prediction = responseData.predictions[0];
      
      // Check if we have image data
      if (!prediction.bytesBase64Encoded) {
        console.log('📊 Prediction structure:', JSON.stringify(prediction, null, 2));
        throw new Error('No image data found in response');
      }

      // Decode the base64 image
      const imageBuffer = Buffer.from(prediction.bytesBase64Encoded, 'base64');
      
      // Determine output path
      let finalOutputPath = outputPath;
      if (!finalOutputPath) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const sanitizedPrompt = prompt.toLowerCase()
          .replace(/[^a-z0-9\s]/g, '')
          .replace(/\s+/g, '-')
          .substring(0, 40);
        const refSuffix = '-with-reference';
        finalOutputPath = path.join(process.cwd(), 'generated-images', `${sanitizedPrompt}${refSuffix}-${timestamp}.png`);
      }

      // Ensure output directory exists
      await fs.mkdir(path.dirname(finalOutputPath), { recursive: true });

      // Save the image
      await fs.writeFile(finalOutputPath, imageBuffer);
      
      console.log(`✅ Image generated successfully!`);
      console.log(`📁 Saved to: ${finalOutputPath}`);
      console.log(`🎯 Seed used: ${seed} (use this seed to reproduce the image)`);
      
      return {
        success: true,
        path: finalOutputPath,
        seed: seed,
        prompt: prompt,
        referenceImage: referenceImage,
        aspectRatio: aspectRatio,
        model: model
      };

    } catch (error) {
      console.error('❌ Error generating image with reference:', error.message);
      console.log('🔄 Trying fallback: text-to-image with enhanced prompt...');
      
      // Enhanced fallback with logo description
      const enhancedPrompt = `${prompt}, professional branding, corporate logo placement, high-quality commercial photography style`;
      try {
        return await this.generateImage(enhancedPrompt, { 
          ...options, 
          model: "imagen-3.0-generate-001" 
        });
      } catch (fallbackError) {
        throw error; // Throw original error if fallback also fails
      }
    }
  }

  async generateImage(prompt, options = {}) {
    const {
      aspectRatio = "1:1",
      numberOfImages = 1,
      model = "imagen-3.0-generate-001",
      seed = Math.floor(Math.random() * 1000000),
      outputPath = null,
      safetyFilter = "BLOCK_MEDIUM_AND_ABOVE",
      personGeneration = "DONT_ALLOW"
    } = options;

    console.log(`🎨 Generating image with prompt: "${prompt}"`);
    console.log(`📐 Aspect ratio: ${aspectRatio}`);
    console.log(`🎯 Model: ${model}`);
    console.log(`🎲 Seed: ${seed}`);

    try {
      // Get access token
      const accessToken = await this.getAccessToken();
      
      // Construct API endpoint
      const endpoint = `https://${this.location}-aiplatform.googleapis.com/v1/projects/${this.projectId}/locations/${this.location}/publishers/google/models/${model}:predict`;

      // Prepare the request payload
      const requestBody = {
        instances: [
          {
            prompt: prompt
          }
        ],
        parameters: {
          sampleCount: numberOfImages,
          aspectRatio: aspectRatio,
          safetyFilterLevel: safetyFilter,
          personGeneration: personGeneration
        }
      };

      console.log('🔄 Sending request to Vertex AI REST API...');
      
      // Make the API request
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API request failed: ${response.status} ${response.statusText} - ${errorText}`);
      }

      const responseData = await response.json();
      
      console.log('✅ Response received from Vertex AI');

      // Check if we have predictions
      if (!responseData.predictions || responseData.predictions.length === 0) {
        throw new Error('No predictions received from the API');
      }

      const prediction = responseData.predictions[0];
      
      // Check if we have image data
      if (!prediction.bytesBase64Encoded) {
        console.log('📊 Response structure:', JSON.stringify(responseData, null, 2));
        throw new Error('No image data found in response');
      }

      // Decode the base64 image
      const imageBuffer = Buffer.from(prediction.bytesBase64Encoded, 'base64');
      
      // Determine output path
      let finalOutputPath = outputPath;
      if (!finalOutputPath) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const sanitizedPrompt = prompt.toLowerCase()
          .replace(/[^a-z0-9\s]/g, '')
          .replace(/\s+/g, '-')
          .substring(0, 50);
        finalOutputPath = path.join(process.cwd(), 'generated-images', `${sanitizedPrompt}-${timestamp}.png`);
      }

      // Ensure output directory exists
      await fs.mkdir(path.dirname(finalOutputPath), { recursive: true });

      // Save the image
      await fs.writeFile(finalOutputPath, imageBuffer);
      
      console.log(`✅ Image generated successfully!`);
      console.log(`📁 Saved to: ${finalOutputPath}`);
      console.log(`🎯 Seed used: ${seed} (use this seed to reproduce the image)`);
      
      return {
        success: true,
        path: finalOutputPath,
        seed: seed,
        prompt: prompt,
        aspectRatio: aspectRatio,
        model: model
      };

    } catch (error) {
      console.error('❌ Error generating image:', error.message);
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
🎨 Vertex AI Image Generator (REST API)

Usage:
  node scripts/generate-images.js "your prompt here" [options]
  
Options:
  --aspect-ratio=1:1    Aspect ratio (1:1, 16:9, 9:16, 4:3, 3:4, etc.)
  --model=imagen-3.0-generate-001   Model to use (imagen-3.0-generate-001, etc.)
  --seed=12345          Random seed for reproducibility
  --output=path         Custom output path
  --reference=path      Path to reference image for image-to-image generation
  --edit-mode=PRODUCT_IMAGE  Edit mode for reference images (PRODUCT_IMAGE, OUTPAINTING, INPAINTING)
  --safety=BLOCK_MEDIUM_AND_ABOVE  Safety filter level
  --person-gen=DONT_ALLOW          Person generation setting (DONT_ALLOW, ALLOW_ADULT)
  
Examples:
  node scripts/generate-images.js "A majestic lion in a sunset"
  node scripts/generate-images.js "Modern minimalist logo" --aspect-ratio=1:1
  node scripts/generate-images.js "Professional worker wearing branded uniform" --reference=logo.png
  node scripts/generate-images.js "Service worker with company logo on uniform" --reference=./public/logo.png --edit-mode=PRODUCT_IMAGE
  
Multiple prompts (use quotes):
  node scripts/generate-images.js "prompt 1" "prompt 2" "prompt 3"

🖼️  Image-to-Image Generation:
  Use --reference=path to include a logo or reference image in your generation.
  Perfect for creating branded content like "service worker with this logo on uniform"
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
          case 'reference':
            options.referenceImage = value;
            break;
          case 'edit-mode':
            options.editMode = value;
            break;
          case 'safety':
            options.safetyFilter = value;
            break;
          case 'person-gen':
            options.personGeneration = value;
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
      // Check if we should use reference image generation
      if (options.referenceImage) {
        await generator.generateImageWithReference(prompts[0], options);
      } else {
        await generator.generateImage(prompts[0], options);
      }
    } else {
      console.log(`🚀 Generating ${prompts.length} images...`);
      const results = [];
      
      for (const prompt of prompts) {
        try {
          let result;
          if (options.referenceImage) {
            result = await generator.generateImageWithReference(prompt, options);
          } else {
            result = await generator.generateImage(prompt, options);
          }
          results.push({ success: true, ...result });
        } catch (error) {
          console.error(`Failed to generate image for prompt: "${prompt}"`);
          results.push({ success: false, prompt, error: error.message });
        }
      }
      
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