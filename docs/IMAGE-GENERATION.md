# AI Image Generation ✨

This project includes a powerful AI image generation script that uses Google's Vertex AI (Imagen 3.0) to create high-quality images from text prompts.

## ✅ Status: WORKING!

The image generation system is **fully functional** and ready to use! Images are saved to the `generated-images/` directory.

## Prerequisites

1. **Google Cloud Project**: Make sure you have a Google Cloud project with Vertex AI API enabled
2. **Service Account**: You need a service account with appropriate permissions for Vertex AI
3. **Environment Variables**: Configure the following in your `.env` file:
   ```
   GOOGLE_PROJECT_ID=your-project-id
   GOOGLE_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
   GOOGLE_LOCATION=us-central1
   ```

## Usage

### Command Line

```bash
# Basic usage
pnpm run ai:image "A majestic mountain landscape at sunset"

# With custom options
pnpm run ai:image "Modern minimalist logo" --aspect-ratio=1:1 --guidance=10

# High resolution image
pnpm run ai:image "Cyberpunk cityscape" --aspect-ratio=16:9 --seed=42

# Multiple images at once
pnpm run ai:image "landscape 1" "landscape 2" "portrait 3"

# 🆕 WITH LOGO/REFERENCE IMAGE
pnpm run ai:image "Professional service worker wearing branded uniform" --reference=./public/images/logo.png

# Marketing materials with your logo
pnpm run ai:image "Professional marketing banner design" --reference=./logo.jpg --aspect-ratio=16:9

# Product mockups with branding
pnpm run ai:image "Coffee mug with company logo" --reference=./brand/logo.png --edit-mode=PRODUCT_IMAGE
```

### Available Options

- `--aspect-ratio=1:1`: Aspect ratio (1:1, 16:9, 9:16, 4:3, etc.)
- `--seed=12345`: Random seed for reproducible results
- `--reference=path`: 🆕 **Path to reference image (logo, brand asset, etc.)**
- `--edit-mode=PRODUCT_IMAGE`: Edit mode for reference images (PRODUCT_IMAGE, OUTPAINTING, INPAINTING)
- `--safety=BLOCK_MEDIUM_AND_ABOVE`: Safety filter level
- `--person-gen=DONT_ALLOW`: Person generation settings
- `--output=path`: Custom output file path

### Programmatic Usage

You can also import and use the image generator in your own code:

```javascript
import { VertexAIImageGenerator } from './scripts/generate-images.js'

const generator = new VertexAIImageGenerator()

// Generate a single image
const result = await generator.generateImage('A beautiful sunset', {
  aspectRatio: '16:9',
  seed: 12345,
})

console.log('Image saved to:', result.path)

// 🆕 Generate image with logo/reference
const brandedResult = await generator.generateImageWithReference(
  'Professional service worker in branded uniform',
  {
    referenceImage: './public/images/logo.png',
    aspectRatio: '3:4',
    editMode: 'PRODUCT_IMAGE',
  },
)

console.log('Branded image saved to:', brandedResult.path)

// Generate multiple images
const prompts = ['landscape 1', 'portrait 2', 'abstract 3']
const results = await generator.generateMultipleImages(prompts)
```

## 🆕 Logo & Brand Integration

### Two Approaches for Logo Integration

**1. Descriptive Text Prompts (Currently Working)**
Instead of uploading logo files, describe where and how you want logos to appear:

```bash
# Service worker with logo
pnpm run ai:image "Professional service worker wearing navy uniform with company logo embroidered on left chest, standing confidently"

# Branded merchandise
pnpm run ai:image "White coffee mug with circular company logo printed on side, professional product photography"

# Marketing materials
pnpm run ai:image "Business card design with space for rectangular company logo in top-left corner, modern professional layout"

# Delivery vehicle
pnpm run ai:image "White delivery van with large company logo and branding on side panel, professional commercial vehicle"
```

**2. Reference Image Upload (Future Enhancement)**
The script includes infrastructure for uploading actual logo files, but this feature requires higher-tier Vertex AI access:

```bash
# Future functionality (requires quota increase)
pnpm run ai:image "service worker with this logo on uniform" --reference=./logo.png
```

### Logo Description Tips

**Be Specific About Placement:**

- "logo on left chest", "embroidered badge on uniform"
- "company branding on side panel", "logo in top-right corner"
- "circular logo on hard hat", "rectangular logo on back of shirt"

**Describe Logo Characteristics:**

- "circular company logo", "rectangular business badge"
- "embroidered logo", "printed branding", "vinyl decal"
- "metallic logo", "colorful company emblem"

**Include Brand Context:**

- "corporate navy and gold colors"
- "professional business attire"
- "industrial safety equipment with branding"

## Output

- Images are saved to the `generated-images/` directory by default
- Files are named based on the prompt and timestamp
- The script outputs the file path, seed used, and other metadata

## Tips

1. **Use descriptive prompts**: Be specific about style, lighting, composition, etc.
2. **Experiment with guidance**: Lower values (1-5) for more creative freedom, higher (10-20) for strict adherence to prompt
3. **Save seeds**: Use the same seed to reproduce images with slight prompt variations
4. **Aspect ratios**: Use appropriate ratios for your use case (1:1 for social media, 16:9 for banners, etc.)

## Troubleshooting

- **Authentication errors**: Verify your Google Cloud credentials are correct
- **API not enabled**: Make sure Vertex AI API is enabled in your Google Cloud Console
- **Quota limits**: Check your API quotas if you're generating many images
- **Network issues**: Ensure stable internet connection for API calls

## Examples

```bash
# Logo generation
pnpm run generate:images "Minimalist tech company logo, clean geometric design" --aspect-ratio=1:1 --guidance=12

# Marketing banner
pnpm run generate:images "Professional business team collaboration, modern office setting" --aspect-ratio=16:9 --guidance=8

# Social media post
pnpm run generate:images "Inspirational quote background, soft pastel colors" --aspect-ratio=1:1 --guidance=6

# Product mockup
pnpm run generate:images "Premium coffee packaging design, elegant and sophisticated" --guidance=10
```
