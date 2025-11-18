#!/usr/bin/env node

/**
 * Test Data Transformation
 * This script demonstrates how the new data transformation works
 */

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

// Sample data matching your current structure
const sampleSheetData = {
  Sheet1: {
    headers: ['Business Category', 'What is Needed', 'Input'],
    rows: [
      {
        'Business Category': 'Business Info',
        'What is Needed': 'Business Name',
        Input: "Pantry's Plumbing Services ",
      },
      {
        'Business Category': 'Business Info',
        'What is Needed': 'Website URL',
        Input:
          "Pantry's Plumbing Services - don't have one yet need one https://porkbun.com/checkout/search?prb=bd3ddf36f3&q=pantrysplumbing.com&tlds=&idnLanguage=&search=search&csrf_pb=de1c9af18a663a2c4d074574f6bbc546",
      },
      {
        'Business Category': 'Business Info',
        'What is Needed': 'Business Contact Email',
        Input: 'pantrysplumbing@gmail.com',
      },
      {
        'Business Category': 'Branding',
        'What is Needed': 'Brand Colors',
        Input: '#C56532, #4F5D35',
      },
      {
        'Business Category': 'Branding',
        'What is Needed': 'Typography',
        Input: 'Poppins',
      },
    ],
  },
}

console.log('🧪 Testing Data Transformation\n')

console.log('📊 Original Data Structure:')
console.log('===========================')
console.log(JSON.stringify(sampleSheetData, null, 2))

console.log('\n🔄 Transformed Data Structure:')
console.log('==============================')
const transformedData = transformSheetData(sampleSheetData)
console.log(JSON.stringify(transformedData, null, 2))

console.log('\n✅ Transformation Examples:')
console.log('===========================')
console.log('"Business Name" → "businessName"')
console.log('"Website URL" → "websiteUrl"')
console.log('"Business Contact Email" → "businessContactEmail"')
console.log('"Brand Colors" → "brandColors"')

console.log('\n🎯 Sample Access Patterns:')
console.log('===========================')
const sheet = transformedData.Sheet1
console.log('Business Name:', sheet.businessName)
console.log('Email:', sheet.businessContactEmail)
console.log('Brand Colors:', sheet.brandColors)
console.log('Typography:', sheet.typography)
