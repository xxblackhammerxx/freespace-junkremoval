import { getBusinessConfig } from '@/utils/businessHelpers'
import Link from 'next/link'

export function ServicesLinks() {
  const config = getBusinessConfig()

  return (
    <ul className="space-y-2">
      {config.services.map((service) => (
        <li key={service.slug}>
          <Link
            href={`/services/${service.slug}`}
            className="text-gray-300 hover:text-accent transition-colors"
          >
            {service.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
