import { MetadataRoute } from 'next'
import { getBusinessConfig } from '@/utils/businessHelpers'

export default function robots(): MetadataRoute.Robots {
  const config = getBusinessConfig()

  // Use business config URL first, then environment variables, then fallback
  const baseUrl =
    config.website.url ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
