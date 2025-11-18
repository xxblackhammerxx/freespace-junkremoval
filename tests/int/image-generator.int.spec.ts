import { VertexAIImageGenerator } from '../../scripts/generate-images.js'
import { describe, it, expect } from 'vitest'

describe('VertexAI Image Generator', () => {
  it('should initialize with proper configuration', () => {
    expect(() => {
      const generator = new VertexAIImageGenerator()
      expect(generator.projectId).toBeDefined()
      expect(generator.location).toBeDefined()
    }).not.toThrow()
  })

  it('should have required environment variables', () => {
    expect(process.env.GOOGLE_PROJECT_ID).toBeDefined()
    expect(process.env.GOOGLE_CLIENT_EMAIL).toBeDefined()
    expect(process.env.GOOGLE_PRIVATE_KEY).toBeDefined()
  })
})
