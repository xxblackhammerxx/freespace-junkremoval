#!/usr/bin/env node

/**
 * Sync Client Config to Gainz Blog Engine
 *
 * This script should be run from a client site project that has a business config.
 * It will analyze the business config and create/update the client in the gainz-blog-engine project.
 *
 * Usage:
 *   node sync-client-config.mjs --config ./path/to/businessConfig.ts --engine-url https://gainz-blog-engine.com
 *
 * Or set environment variables:
 *   GAINZ_ENGINE_URL=https://gainz-blog-engine.com
 *   GAINZ_ENGINE_EMAIL=admin@example.com
 *   GAINZ_ENGINE_PASSWORD=yourpassword
 */

import 'dotenv/config'
import { readFile, writeFile } from 'fs/promises'
import { resolve, extname } from 'path'

// Parse command line arguments
const args = process.argv.slice(2)
const getArg = (name) => {
  const index = args.indexOf(name)
  return index !== -1 ? args[index + 1] : null
}

const CONFIG_PATH = getArg('--config') || process.env.CONFIG_PATH
const ENGINE_URL = getArg('--engine-url') || process.env.GAINZ_ENGINE_URL || 'http://localhost:3000'
const ENGINE_EMAIL = getArg('--email') || process.env.GAINZ_ENGINE_EMAIL
const ENGINE_PASSWORD = getArg('--password') || process.env.GAINZ_ENGINE_PASSWORD
const API_TOKEN = getArg('--api-token') || process.env.GAINZ_API_TOKEN // API token for authentication
const CLIENT_ID = getArg('--client-id') || process.env.CLIENT_ID // Optional: if updating existing client
const DRY_RUN = args.includes('--dry-run')

if (!CONFIG_PATH) {
  console.error('❌ Error: Config path is required')
  console.error(
    'Usage: node sync-client-config.mjs --config ./path/to/businessConfig.ts --engine-url https://gainz-blog-engine.com',
  )
  process.exit(1)
}

/**
 * Load and parse the business config file
 */
async function loadBusinessConfig(configPath) {
  const absolutePath = resolve(configPath)
  const ext = extname(absolutePath)

  console.log(`📖 Loading business config from: ${absolutePath}`)

  if (ext === '.json') {
    const content = await readFile(absolutePath, 'utf-8')
    return JSON.parse(content)
  } else if (ext === '.ts' || ext === '.js' || ext === '.mjs') {
    // For TypeScript/JavaScript files, import them (requires tsx for .ts files)
    try {
      const configModule = await import(`file://${absolutePath}`)
      return configModule.businessConfig || configModule.config || configModule.default
    } catch (error) {
      if (ext === '.ts') {
        console.error(
          '\n❌ Failed to load TypeScript file. Make sure you run this script with tsx:',
        )
        console.error('   npx tsx scripts/sync-client-config.js')
        console.error('   OR: pnpm sync:config\n')
      }
      throw error
    }
  } else {
    throw new Error(`Unsupported config file format: ${ext}`)
  }
}

/**
 * Write the client ID back to the business config file
 */
async function writeClientIdToConfig(configPath, clientId) {
  const absolutePath = resolve(configPath)
  const ext = extname(absolutePath)

  console.log(`💾 Writing client ID to config file: ${absolutePath}`)

  if (ext === '.json') {
    // For JSON files, parse and update the object
    const content = await readFile(absolutePath, 'utf-8')
    const config = JSON.parse(content)
    config.clientId = clientId
    await writeFile(absolutePath, JSON.stringify(config, null, 2), 'utf-8')
    console.log('✅ Client ID written to JSON config')
  } else if (ext === '.ts' || ext === '.js' || ext === '.mjs') {
    // For TypeScript/JavaScript files, we need to update the source code
    let content = await readFile(absolutePath, 'utf-8')

    // Check if clientId already exists in the file
    const clientIdRegex = /clientId:\s*['"][\w-]*['"]/

    if (clientIdRegex.test(content)) {
      // Update existing clientId
      content = content.replace(clientIdRegex, `clientId: '${clientId}'`)
      console.log('✅ Updated existing client ID in config')
    } else {
      // Add clientId as the first property in the businessConfig object
      // Look for the opening of the businessConfig object
      const configObjectRegex = /(export const businessConfig:\s*BusinessConfig\s*=\s*\{)/

      if (configObjectRegex.test(content)) {
        content = content.replace(configObjectRegex, `$1\n  clientId: '${clientId}',`)
        console.log('✅ Added client ID to config')
      } else {
        console.warn(
          '⚠️  Could not find businessConfig object structure. Please add clientId manually.',
        )
        return
      }
    }

    await writeFile(absolutePath, content, 'utf-8')
  } else {
    throw new Error(`Unsupported config file format for writing: ${ext}`)
  }
}

/**
 * Transform BusinessConfig to Client data for gainz-blog-engine
 */
function transformBusinessConfigToClient(businessConfig) {
  const { business, website, services, serviceAreas, branding } = businessConfig

  // Extract products/services for internal linking
  const products =
    services?.map((service) => ({
      title: service.title || service.name,
      url:
        service.url ||
        service.href ||
        service.link ||
        `/${service.slug || service.title?.toLowerCase().replace(/\s+/g, '-')}`,
      description: service.description || service.shortDescription,
      keywords: service.keywords?.join(', ') || service.tags?.join(', ') || '',
    })) || []

  // Build internal links from service areas and important pages
  const internalLinks = []

  // Add service pages
  if (services) {
    services.forEach((service) => {
      const url = service.url || service.href || service.link
      if (url) internalLinks.push(url)
    })
  }

  // Add service area pages
  if (serviceAreas) {
    serviceAreas.forEach((area) => {
      const url = area.url || area.href
      if (url) internalLinks.push(url)
    })
  }

  // Add common important pages
  const commonPages = [`${website.url}/about`, `${website.url}/contact`, `${website.url}/services`]
  internalLinks.push(...commonPages)

  // Build client data
  const clientData = {
    clientName: business.name,
    siteUrl: `${website.url}`,
    authType: 'basic', // Default to basic auth
    credentials: {
      email: process.env.DEFAULT_EMAIL || '',
      password: process.env.DEFAULT_PASSWORD || '',
    },
    collections: {
      posts: 'blog-posts', // Default collection name
      media: 'media',
    },
    fieldMappings: {
      title: 'title',
      content: 'content',
      slug: 'slug',
      status: 'status',
      publishedAt: 'publishedDate',
      excerpt: 'excerpt',
      faq: 'faq',
      seoTitle: 'seo.title',
      seoDescription: 'seo.description',
      seoKeywords: 'seo.keywords',
    },
    products: products.filter((p) => p.url), // Only include products with URLs
    internalLinks: internalLinks.join(', '),
    brandColor: branding?.colors?.primary || '#3b82f6',
    isActive: true,
  }

  return clientData
}

/**
 * Authenticate with the gainz-blog-engine
 * Now supports both email/password and API token authentication
 */
async function authenticate(engineUrl, email, password, apiToken) {
  // If API token is provided, use it directly
  if (apiToken) {
    console.log('🔐 Using API token for authentication...')
    return apiToken
  }

  // Fall back to email/password authentication
  if (!email || !password) {
    console.warn(
      '⚠️  No authentication credentials provided. Attempting unauthenticated request...',
    )
    return null
  }

  console.log('🔐 Authenticating with email/password...')

  const response = await fetch(`${engineUrl}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Authentication failed: ${error}`)
  }

  const data = await response.json()
  console.log('✅ Authentication successful')

  return data.token || null
}

/**
 * Check if client already exists
 */
async function findExistingClient(engineUrl, clientName, token) {
  console.log(`🔍 Checking if client "${clientName}" already exists...`)

  const headers = {
    'Content-Type': 'application/json',
  }
  if (token) headers['Authorization'] = `Bearer ${token}`

  const response = await fetch(`${engineUrl}/api/clients`, {
    method: 'GET',
    headers,
  })

  if (!response.ok) {
    console.warn('⚠️  Could not fetch existing clients')
    return null
  }

  const data = await response.json()
  const existingClient = data.clients?.find((c) => c.name === clientName)

  if (existingClient) {
    console.log(`✅ Found existing client with ID: ${existingClient.id}`)
    return existingClient.id
  }

  console.log('ℹ️  No existing client found, will create new one')
  return null
}

/**
 * Create or update client in gainz-blog-engine
 */
async function syncClient(engineUrl, clientData, token, clientId) {
  const isUpdate = !!clientId
  const method = isUpdate ? 'PATCH' : 'POST'
  const action = isUpdate ? 'Updating' : 'Creating'

  console.log(`${isUpdate ? '🔄' : '✨'} ${action} client: ${clientData.clientName}`)

  const headers = {
    'Content-Type': 'application/json',
  }
  if (token) headers['Authorization'] = `Bearer ${token}`

  const body = isUpdate ? { id: clientId, ...clientData } : clientData

  const response = await fetch(`${engineUrl}/api/clients`, {
    method,
    headers,
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Failed to ${isUpdate ? 'update' : 'create'} client: ${error}`)
  }

  const result = await response.json()
  console.log(`✅ Client ${isUpdate ? 'updated' : 'created'} successfully!`)

  return result.client
}

/**
 * Main function
 */
async function main() {
  try {
    console.log('🚀 Starting client config sync...\n')

    // Load business config
    const businessConfig = await loadBusinessConfig(CONFIG_PATH)
    console.log(`✅ Loaded config for: ${businessConfig.business.name}\n`)

    // Transform to client data
    const clientData = transformBusinessConfigToClient(businessConfig)

    if (DRY_RUN) {
      console.log('🔍 DRY RUN - Would sync the following data:\n')
      console.log(JSON.stringify(clientData, null, 2))
      console.log('\n✅ Dry run complete. No changes made.')
      return
    }

    // Authenticate
    const token = await authenticate(ENGINE_URL, ENGINE_EMAIL, ENGINE_PASSWORD, API_TOKEN)
    console.log('')

    // Check if client exists (unless client ID is provided)
    let finalClientId = CLIENT_ID
    if (!finalClientId) {
      finalClientId = await findExistingClient(ENGINE_URL, clientData.clientName, token)
    }
    console.log('')

    // Sync client
    const result = await syncClient(ENGINE_URL, clientData, token, finalClientId)

    console.log('\n✅ Sync complete!')
    console.log(`Client ID: ${result.id}`)
    console.log(`Client Name: ${result.clientName}`)
    console.log(`Site URL: ${result.siteUrl}`)

    // Write client ID back to config file
    console.log('')
    await writeClientIdToConfig(CONFIG_PATH, result.id)
  } catch (error) {
    console.error('\n❌ Error:', error.message)
    process.exit(1)
  }
}

main()
