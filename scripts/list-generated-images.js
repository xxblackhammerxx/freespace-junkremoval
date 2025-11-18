#!/usr/bin/env node

import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function listGeneratedImages() {
  const imagesDir = path.join(__dirname, '../generated-images')

  try {
    const files = await fs.readdir(imagesDir)
    const imageFiles = files.filter(
      (file) => file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg'),
    )

    console.log('🖼️  Generated Images:')
    console.log('='.repeat(50))

    if (imageFiles.length === 0) {
      console.log('No images found. Generate some with:')
      console.log('pnpm run ai:image "your prompt here"')
      return
    }

    for (const file of imageFiles) {
      const filePath = path.join(imagesDir, file)
      const stats = await fs.stat(filePath)
      const sizeMB = (stats.size / 1024 / 1024).toFixed(2)
      const date = stats.mtime.toLocaleDateString()
      const time = stats.mtime.toLocaleTimeString()

      console.log(`📁 ${file}`)
      console.log(`   Size: ${sizeMB} MB`)
      console.log(`   Created: ${date} at ${time}`)
      console.log(`   Full path: ${filePath}`)
      console.log('')
    }

    console.log(`Total images: ${imageFiles.length}`)
    console.log('\n💡 To open an image:')
    console.log('macOS: open "generated-images/filename.png"')
    console.log('Linux: xdg-open "generated-images/filename.png"')
    console.log('Windows: start "generated-images/filename.png"')
  } catch (error) {
    console.error('Error listing images:', error.message)
  }
}

listGeneratedImages()
