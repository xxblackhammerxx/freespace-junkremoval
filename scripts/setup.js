#!/usr/bin/env node

/**
 * Business Setup & Configuration Script
 *
 * This script provides a setup workflow for configuring a business website:
 * 1. Prompts for Google Sheets URL and fetches data (saves as JSON)
 * 2. Processes brand colors and updates global.css automatically
 * 3. Generates AI images for services, heroes, and team members
 *
 * Requirements:
 *   - Google Sheets API credentials in .env file (if using Google Sheets)
 *   - Google Cloud Vertex AI credentials in .env file (if using AI image generation)
 *
 * Usage:
 *   node setup.js                    - Full setup workflow (prompts for Google Sheets URL)
 *   node setup.js --colors          - Process brand colors only
 *   node setup.js --manual-colors   - Manual brand colors input (requires prompts)
 *   node setup.js --images          - Generate AI images for business
 *   node setup.js --full            - Complete setup: data + colors + images
 */

import readline from 'readline'
import fs from 'fs'
import path from 'path'
import { google } from 'googleapis'
import dotenv from 'dotenv'
import { generatePrimaryColors, generateaccentColors, isValidHex } from './colorgen.js'
import BusinessImageGenerator from './business-image-generator.js'

// Load environment variables
dotenv.config()

// Create readline interface (kept for compatibility with manual colors mode)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Promisify readline question (kept for compatibility with manual colors mode)
const question = (prompt) => {
  return new Promise((resolve) => {
    rl.question(prompt, resolve)
  })
}

/**
 * Converts "What is Needed" text to camelCase key
 * @param {string} text - The text to convert
 * @returns {string} - The camelCase version
 */
function toCamelCase(text) {
  return text
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, '') // Remove special characters
    .replace(/\s+(.)/g, (match, char) => char.toUpperCase()) // Convert to camelCase
    .replace(/\s/g, '') // Remove remaining spaces
}

/**
 * Transforms sheet data from row-based structure to flat key-value pairs
 * @param {Object} sheetData - The original sheet data with rows
 * @returns {Object} - Transformed data with flat key-value structure
 */
function transformSheetData(sheetData) {
  const transformedData = {}

  Object.entries(sheetData).forEach(([sheetName, sheet]) => {
    if (sheet.rows && Array.isArray(sheet.rows)) {
      const flatData = {}

      sheet.rows.forEach((row) => {
        // Look for the "What is Needed" and "Input" columns
        const whatIsNeeded = row['What is Needed'] || row['What is needed'] || row['what is needed']
        const input = row['Input'] || row['input']

        if (whatIsNeeded && whatIsNeeded.trim()) {
          const camelCaseKey = toCamelCase(whatIsNeeded.trim())
          flatData[camelCaseKey] = input || ''
        }
      })

      transformedData[sheetName] = flatData
    }
  })

  return transformedData
}

// Function to save sheet data to file
function saveSheetDataToFile(sheetData, filename = null) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
  const defaultFilename = `business-data.json`
  const actualFilename = filename || defaultFilename
  const filePath = path.join(process.cwd(), 'data', actualFilename)

  // Create data directory if it doesn't exist
  const dataDir = path.dirname(filePath)
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }

  // Transform the sheet data to flat key-value structure
  const transformedSheets = transformSheetData(sheetData)

  // Add metadata to the sheet data
  const exportData = {
    exportedAt: new Date().toISOString(),
    source: 'Google Sheets via fetch script',
    sheets: transformedSheets,
  }

  fs.writeFileSync(filePath, JSON.stringify(exportData, null, 2))
  return filePath
}

/**
 * Processes brand colors from sheet data and updates global.css
 * @param {string} dataFilePath - Path to the JSON file with sheet data
 */
async function processBrandColors(dataFilePath = null) {
  console.log('🎨 Processing brand colors...\n')

  try {
    // Find the data file
    let filePath = dataFilePath
    if (!filePath) {
      const dataDir = path.join(process.cwd(), 'data')

      if (!fs.existsSync(dataDir)) {
        console.log('❌ No data directory found.')
        console.log('💡 Using default colors...')
        const primaryColor = '#2dcc53'
        const accentColor = '#1e90ff'
        await updateGlobalCSSWithColors(primaryColor, accentColor)
        console.log(`✅ Applied default colors: Primary: ${primaryColor}, Accent: ${accentColor}`)
        return
      }

      const files = fs.readdirSync(dataDir).filter((file) => file.endsWith('.json'))

      if (files.length === 0) {
        console.log('❌ No JSON data files found in data directory.')
        console.log('� Using default colors...')
        const primaryColor = '#2dcc53'
        const accentColor = '#1e90ff'
        await updateGlobalCSSWithColors(primaryColor, accentColor)
        console.log(`✅ Applied default colors: Primary: ${primaryColor}, Accent: ${accentColor}`)
        return
      }

      // Use the most recent file automatically
      const sortedFiles = files
        .map((file) => ({
          name: file,
          path: path.join(dataDir, file),
          mtime: fs.statSync(path.join(dataDir, file)).mtime,
        }))
        .sort((a, b) => b.mtime - a.mtime)

      filePath = sortedFiles[0].path
      console.log(`📁 Using most recent data file: ${sortedFiles[0].name}`)
    }

    // Read and parse the data file
    const rawData = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(rawData)

    if (!data.sheets) {
      console.log('❌ Invalid data format: No sheets found in the data file.')
      return
    }

    // Find brand colors in the sheet data
    const brandColors = extractBrandColors(data.sheets)

    if (!brandColors || brandColors.length === 0) {
      console.log('❌ No brand colors found in the sheet data.')
      console.log(
        '💡 Make sure your sheet has a "Brand Colors" column with comma-separated hex colors.',
      )
      // Use default colors
      console.log('🎨 Using default colors...')
      const primaryColor = '#2dcc53'
      const accentColor = '#1e90ff'
      await updateGlobalCSSWithColors(primaryColor, accentColor)
      console.log(`✅ Applied default colors: Primary: ${primaryColor}, Accent: ${accentColor}`)
      return
    }

    console.log(`✅ Found ${brandColors.length} brand colors:`)
    brandColors.forEach((color, index) => {
      console.log(`   ${index + 1}. ${color}`)
    })

    // Use first color as primary, second as accent (if available)
    const primaryColor = brandColors[0]
    const accentColor = brandColors[1] || brandColors[0] // Use primary as accent if only one color

    console.log(`\n🎨 Applying colors:`)
    console.log(`   Primary: ${primaryColor}`)
    console.log(`   Accent: ${accentColor}`)

    // Update global.css with the new colors
    await updateGlobalCSSWithColors(primaryColor, accentColor)

    console.log('\n✅ Brand colors successfully applied to global.css!')
  } catch (error) {
    console.error('❌ Error processing brand colors:', error.message)
    console.log('🎨 Using default colors as fallback...')
    const primaryColor = '#2dcc53'
    const accentColor = '#1e90ff'
    await updateGlobalCSSWithColors(primaryColor, accentColor)
    console.log(`✅ Applied default colors: Primary: ${primaryColor}, Accent: ${accentColor}`)
  }
}

/**
 * Extracts brand colors from sheet data
 * @param {Object} sheets - The sheets object from the data file
 * @returns {string[]} Array of hex color strings
 */
function extractBrandColors(sheets) {
  const brandColors = []

  // Look through all sheets for brand colors in the flat structure
  Object.values(sheets).forEach((sheet) => {
    // Look for brand colors in the flat structure
    const brandColorKey = Object.keys(sheet).find(
      (key) => key.toLowerCase().includes('brand') && key.toLowerCase().includes('color'),
    )

    if (brandColorKey && sheet[brandColorKey]) {
      const colorValue = sheet[brandColorKey].trim()

      if (colorValue) {
        // Split by comma and clean up each color
        const colors = colorValue
          .split(',')
          .map((color) => {
            let cleanColor = color.trim()

            // Add # if not present
            if (!cleanColor.startsWith('#')) {
              cleanColor = '#' + cleanColor
            }

            // Validate hex color
            if (isValidHex(cleanColor)) {
              return cleanColor
            } else {
              console.log(`⚠️  Invalid color format: ${color.trim()}`)
              return null
            }
          })
          .filter(Boolean)

        brandColors.push(...colors)
      }
    }
  })

  // Remove duplicates and return
  return [...new Set(brandColors)]
} /**
 * Updates the global.css file with new brand colors
 * @param {string} primaryHex - Primary color hex value
 * @param {string} accentHex - Accent color hex value
 */
async function updateGlobalCSSWithColors(primaryHex, accentHex) {
  const globalCSSPath = path.join(process.cwd(), 'src', 'app', '(frontend)', 'global.css')

  if (!fs.existsSync(globalCSSPath)) {
    console.log('❌ global.css file not found at expected location.')
    return
  }

  // Read current CSS content
  const currentCSS = fs.readFileSync(globalCSSPath, 'utf8')

  // Generate new color variables
  const primaryColors = generatePrimaryColors(primaryHex)
  const accentColors = generateaccentColors(accentHex)

  // Find the @theme block and replace the color variables
  const themeRegex = /@theme\s*{([\s\S]*?)}/

  if (!themeRegex.test(currentCSS)) {
    console.log('❌ Could not find @theme block in global.css')
    return
  }

  // Build the new theme block content
  const newThemeContent = `@theme {
  /* Primary Colors */
${primaryColors
  .split('\n')
  .map((line) => (line ? `  ${line}` : ''))
  .join('\n')}
  
  /* Accent Colors */
${accentColors
  .split('\n')
  .map((line) => (line ? `  ${line}` : ''))
  .join('\n')}

  --color-brand-dark: #1c1c1c;
  --color-brand-light: #f2f2f2;
}`

  // Replace the theme block
  const newCSS = currentCSS.replace(themeRegex, newThemeContent)

  // Write back to file
  fs.writeFileSync(globalCSSPath, newCSS)
  console.log('✅ Updated global.css with new color variables')
}

// Main function to fetch Google Sheets data
async function fetchSheetData() {
  console.log('📊 Project Setup - Google Sheets Data Fetcher\n')

  try {
    // Prompt for Google Sheets URL
    const sheetUrl = await question('Paste your Google Sheets URL (or press Enter to skip): ')

    if (!sheetUrl.trim()) {
      console.log('⏭️  Skipping Google Sheets data fetch.')
      console.log('You can run this script again later to fetch your Google Sheets data.')

      // Skip to color processing only
      await processBrandColors()
      return
    }

    console.log('✅ Google Sheets URL provided')

    // Check for Google Sheets credentials
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL
    const privateKey = process.env.GOOGLE_PRIVATE_KEY

    if (!clientEmail || !privateKey) {
      console.log('❌ Google Sheets credentials not found in .env file')
      console.log('\n🔧 Setup Instructions:')
      console.log('1. Create a Google Cloud Project at: https://console.cloud.google.com/')
      console.log('2. Enable the Google Sheets API')
      console.log('3. Create a Service Account and download the JSON key file')
      console.log('4. Add the following to your .env file:')
      console.log(
        '   GOOGLE_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com',
      )
      console.log(
        '   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----\\n"',
      )
      console.log('\n💡 After adding credentials, run the script again')

      // Continue with color processing only
      await processBrandColors()
      return
    }

    console.log(`✅ Found Google Sheets credentials for: ${clientEmail}`)
    console.log('📋 Make sure your Google Sheet is shared with this email address.')
    console.log('📋 Make sure the Google Sheets API is enabled in your Google Cloud Project.\n')

    console.log('📥 Fetching Google Sheets data...')

    const sheetData = await fetchGoogleSheetData(sheetUrl.trim())

    // Use default filename
    const sheetDataPath = saveSheetDataToFile(sheetData, null)

    console.log(`\n✅ SUCCESS!`)
    console.log(`📁 Google Sheets data saved to: ${sheetDataPath}`)
    console.log(`📋 Found ${Object.keys(sheetData).length} sheet(s):`)

    Object.keys(sheetData).forEach((sheetName) => {
      const sheet = sheetData[sheetName]
      console.log(`   - ${sheetName}: ${sheet.rows.length} rows`)
      if (sheet.headers.length > 0) {
        console.log(`     Headers: ${sheet.headers.join(', ')}`)
      }
    })

    console.log('\n🎉 Data fetch completed!')
    console.log('You can now use this JSON file to populate your site content.')

    // Automatically process brand colors
    console.log('\n🎨 Automatically processing brand colors...')
    await processBrandColors(sheetDataPath)

    console.log('\n🎉 Setup completed!')
  } catch (error) {
    console.error('❌ Error fetching Google Sheets data:', error.message)

    // Continue with color processing
    console.log('🔄 Continuing with remaining setup steps...')
    await processBrandColors()
  } finally {
    rl.close()
  }
}
// Google Sheets helper function
async function fetchGoogleSheetData(sheetUrl) {
  try {
    // Extract spreadsheet ID from URL
    const urlMatch = sheetUrl.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/)
    if (!urlMatch) {
      throw new Error('Invalid Google Sheets URL format')
    }

    const spreadsheetId = urlMatch[1]

    // Set up Google Sheets API credentials
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL
    const privateKey = process.env.GOOGLE_PRIVATE_KEY

    if (!clientEmail || !privateKey) {
      throw new Error('Google Sheets credentials not found in .env file')
    }

    console.log('🔑 Authenticating with Google Sheets API...')

    // Create JWT auth
    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    })

    // Test authentication
    try {
      await auth.authorize()
      console.log('✅ Authentication successful')
    } catch (authError) {
      throw new Error(
        `Authentication failed: ${authError.message}\n\nPossible solutions:\n1. Verify your service account credentials are correct\n2. Make sure the Google Sheets API is enabled in your Google Cloud Project\n3. Check that your private key is properly formatted (with \\n for line breaks)`,
      )
    }

    // Initialize Google Sheets API
    const sheets = google.sheets({ version: 'v4', auth })

    console.log('📊 Fetching spreadsheet metadata...')

    // Get spreadsheet metadata to find all sheets
    const metadataResponse = await sheets.spreadsheets.get({
      spreadsheetId,
    })

    const sheetNames = metadataResponse.data.sheets.map((sheet) => sheet.properties.title)
    console.log(`📋 Found ${sheetNames.length} sheet(s): ${sheetNames.join(', ')}`)

    // Fetch data from all sheets
    const sheetData = {}

    for (const sheetName of sheetNames) {
      try {
        console.log(`📥 Fetching data from sheet: ${sheetName}`)
        const response = await sheets.spreadsheets.values.get({
          spreadsheetId,
          range: sheetName,
        })

        const values = response.data.values || []
        if (values.length > 0) {
          // Convert to array of objects using first row as headers
          const headers = values[0]
          const rows = values.slice(1).map((row) => {
            const obj = {}
            headers.forEach((header, index) => {
              obj[header] = row[index] || ''
            })
            return obj
          })

          sheetData[sheetName] = {
            headers,
            rows,
            rawData: values,
          }
          console.log(`✅ ${sheetName}: ${rows.length} rows retrieved`)
        }
      } catch (error) {
        console.log(`⚠️  Could not access sheet "${sheetName}": ${error.message}`)
      }
    }

    return sheetData
  } catch (error) {
    throw new Error(`Failed to fetch Google Sheets data: ${error.message}`)
  }
}

/**
 * Manual brand colors update function
 * Allows users to manually input brand colors without needing sheet data
 */
async function manualBrandColorsUpdate() {
  console.log('🎨 Manual Brand Colors Update\n')

  try {
    const primaryColor = await question('Enter primary color (hex format, e.g., #2dcc53): ')

    if (!isValidHex(primaryColor.trim())) {
      console.log('❌ Invalid primary color format. Please use hex format like #2dcc53')
      return
    }

    const accentColor = await question(
      'Enter accent color (hex format, or press Enter to use primary): ',
    )

    const finalAccentColor = accentColor.trim()
      ? isValidHex(accentColor.trim())
        ? accentColor.trim()
        : primaryColor.trim()
      : primaryColor.trim()

    if (accentColor.trim() && !isValidHex(accentColor.trim())) {
      console.log('⚠️  Invalid accent color format, using primary color as accent')
    }

    console.log(`\n🎨 Applying colors:`)
    console.log(`   Primary: ${primaryColor.trim()}`)
    console.log(`   Accent: ${finalAccentColor}`)

    await updateGlobalCSSWithColors(primaryColor.trim(), finalAccentColor)

    console.log('\n✅ Brand colors successfully applied to global.css!')
  } catch (error) {
    console.error('❌ Error updating brand colors:', error.message)
  }
}

/**
 * AI Image Generation for Business Setup
 */
async function generateBusinessImages() {
  console.log('🎨 AI Image Generation for Business Setup\n')

  try {
    // Load business config
    const { businessConfig } = await import('../src/config/business.config.ts')

    const imageGenerator = new BusinessImageGenerator()
    const results = await imageGenerator.generateAllImages(businessConfig)

    if (results.summary.successful > 0) {
      console.log('\n🎉 AI image generation completed successfully!')
      console.log('\n💡 Next steps:')
      console.log('   1. Review generated images in public/images/')
      console.log('   2. Update business config image paths if needed')
      console.log('   3. Regenerate specific images if needed using:')
      console.log('      node scripts/business-image-generator.js --services')
    } else {
      console.log('\n⚠️  No images were generated successfully.')
      console.log('💡 This might be due to:')
      console.log('   • Vertex AI quota limits (try again later)')
      console.log('   • Missing Google Cloud credentials')
      console.log('   • API not enabled in Google Cloud Console')
    }
  } catch (error) {
    console.error('❌ Error generating business images:', error.message)
    console.log('\n🔧 Troubleshooting:')
    console.log('   • Ensure Google Cloud credentials are set in .env')
    console.log('   • Check Vertex AI API is enabled')
    console.log('   • Verify you have available quota')
    console.log('   • Try again later if quota was exceeded')
  }
}

/**
 * Full Business Setup (Data + Colors + Images)
 */
async function fullBusinessSetup() {
  console.log('🚀 Full Business Setup Starting...\n')

  try {
    console.log('📊 Step 1: Fetching business data...')
    await fetchSheetData()

    console.log('\n🎨 Step 2: Processing brand colors...')
    await processBrandColors()

    console.log('\n📸 Step 3: Generating AI images...')
    await generateBusinessImages()

    console.log('\n🎉 Full business setup completed!')
    console.log('\n📋 Summary completed:')
    console.log('   ✅ Business data imported')
    console.log('   ✅ Brand colors applied')
    console.log('   ✅ AI images generated')
  } catch (error) {
    console.error('❌ Error during full setup:', error.message)
  }
}

// Run the fetch function or brand colors processor based on command line arguments
const args = process.argv.slice(2)

if (args.includes('--help') || args.includes('-h')) {
  console.log(`
🚀 Business Setup & Configuration Script

Usage:
  node setup.js [options]

Options:
  --colors, -c         Process brand colors only
  --manual-colors, -m  Manual brand colors input (requires prompts)
  --images, -i         Generate AI images for business
  --full, -f           Complete setup: data + colors + images
  --help, -h           Show this help message

Default (no options):   Fetch Google Sheets data only

Examples:
  node setup.js                    # Fetch Google Sheets data
  node setup.js --colors          # Process brand colors
  node setup.js --images          # Generate AI images
  node setup.js --full            # Complete setup workflow
`)
} else if (args.includes('--colors') || args.includes('-c')) {
  // Run brand colors processor only
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  processBrandColors().finally(() => {
    rl.close()
  })
} else if (args.includes('--manual-colors') || args.includes('-m')) {
  // Run manual brand colors update
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  manualBrandColorsUpdate().finally(() => {
    rl.close()
  })
} else if (args.includes('--images') || args.includes('-i')) {
  // Generate AI images
  generateBusinessImages()
} else if (args.includes('--full') || args.includes('-f')) {
  // Full business setup
  fullBusinessSetup()
} else {
  // Run the main fetch function
  fetchSheetData()
}
