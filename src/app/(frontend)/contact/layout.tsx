import { getContactMetadata } from '@/utils/metadataHelpers'

export const metadata = getContactMetadata()

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
