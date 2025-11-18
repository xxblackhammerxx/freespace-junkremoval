#!/usr/bin/env node

/**
 * Test Google Sheets Integration
 * This script tests the Google Sheets functionality separately
 */

import { google } from 'googleapis'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

// Load environment variables
dotenv.config()

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
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')

    if (!clientEmail || !privateKey) {
      throw new Error('Google Sheets credentials not found in .env file')
    }

    console.log('✓ Found credentials for:', clientEmail)

    // Create JWT auth
    const auth = new google.auth.JWT(clientEmail, null, privateKey, [
      'https://www.googleapis.com/auth/spreadsheets.readonly',
    ])

    console.log('✓ Created JWT authentication')

    // Initialize Google Sheets API
    const sheets = google.sheets({ version: 'v4', auth })

    console.log('✓ Initialized Google Sheets API')

    // Get spreadsheet metadata to find all sheets
    const metadataResponse = await sheets.spreadsheets.get({
      spreadsheetId,
    })

    console.log('✓ Retrieved spreadsheet metadata')

    const sheetNames = metadataResponse.data.sheets.map((sheet) => sheet.properties.title)
    console.log('📋 Found sheets:', sheetNames)

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

          console.log(`   ✓ ${sheetName}: ${headers.length} columns, ${rows.length} data rows`)
        } else {
          console.log(`   ⚠️  ${sheetName}: No data found`)
        }
      } catch (error) {
        console.log(`   ❌ Could not access sheet "${sheetName}": ${error.message}`)
      }
    }

    return sheetData
  } catch (error) {
    throw new Error(`Failed to fetch Google Sheets data: ${error.message}`)
  }
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
function saveSheetDataToFile(sheetData, businessName = 'Test Business') {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
  const filename = `google-sheets-data-${timestamp}.json`
  const filePath = path.join(process.cwd(), 'data', filename)

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
    businessName,
    source: 'Google Sheets via test script',
    sheets: transformedSheets,
  }

  fs.writeFileSync(filePath, JSON.stringify(exportData, null, 2))
  return filePath
}

// Main test function
async function testGoogleSheets() {
  console.log('🧪 Testing Google Sheets Integration\n')

  // Get Google Sheets URL from command line argument
  const sheetUrl = process.argv[2]

  if (!sheetUrl) {
    console.log('❌ Please provide a Google Sheets URL as an argument')
    console.log(
      'Usage: node scripts/test-sheets.js "https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID"',
    )
    process.exit(1)
  }

  try {
    console.log('📊 Testing with URL:', sheetUrl)
    console.log('🔐 Checking credentials...')

    if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
      console.log('❌ Missing Google Sheets credentials in .env file')
      console.log('Required variables:')
      console.log('- GOOGLE_CLIENT_EMAIL')
      console.log('- GOOGLE_PRIVATE_KEY')
      process.exit(1)
    }

    console.log('📥 Fetching Google Sheets data...')
    const sheetData = await fetchGoogleSheetData(sheetUrl.trim())

    console.log('💾 Saving data to file...')
    const filePath = saveSheetDataToFile(sheetData, 'Test Business')

    console.log('\n✅ SUCCESS!')
    console.log('============')
    console.log(`✓ Google Sheets data saved to: ${filePath}`)
    console.log(`✓ Found ${Object.keys(sheetData).length} sheet(s)`)

    Object.keys(sheetData).forEach((sheetName) => {
      const sheet = sheetData[sheetName]
      console.log(`   - ${sheetName}: ${sheet.rows.length} rows, ${sheet.headers.length} columns`)
      if (sheet.headers.length > 0) {
        console.log(`     Headers: ${sheet.headers.join(', ')}`)
      }
    })

    console.log('\n🎉 Google Sheets integration is working!')
  } catch (error) {
    console.log(`❌ Error: ${error.message}`)
    process.exit(1)
  }
}

// Run the test
testGoogleSheets()
