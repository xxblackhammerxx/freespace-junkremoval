import { League_Spartan, Open_Sans } from 'next/font/google'
import Script from 'next/script'
import React from 'react'
import './global.css'
import { businessConfig } from '@/config/business.config'

const leagueSpartan = League_Spartan({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Free Space Junk Removal & Cleaning | Northern Utah Junk Removal',
    template: '%s | Free Space Junk Removal & Cleaning',
  },
  description:
    'Professional junk removal and cleaning services throughout Northern Utah. Transparent pricing, eco-friendly disposal, same-day service. Serving Ogden, Logan, Brigham City, and Cache Valley.',
  keywords:
    'junk removal utah, junk removal ogden, junk removal logan, junk removal brigham city, appliance removal utah, furniture removal utah, same day junk removal, eco friendly junk removal, northern utah junk hauling, garage cleaning utah, construction debris removal',
  authors: [{ name: 'Free Space Junk Removal & Cleaning' }],
  creator: 'Free Space Junk Removal & Cleaning',
  publisher: 'Free Space Junk Removal & Cleaning',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://freespace-junkremoval.com',
    siteName: 'Free Space Junk Removal & Cleaning',
    title: 'Free Space Junk Removal & Cleaning | Northern Utah Junk Removal',
    description:
      'Professional junk removal and cleaning services throughout Northern Utah. Transparent pricing, eco-friendly disposal, same-day service available.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Free Space Junk Removal & Cleaning Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Space Junk Removal & Cleaning | Northern Utah Junk Removal',
    description:
      'Professional junk removal and cleaning services throughout Northern Utah. Transparent pricing, eco-friendly disposal, same-day service available.',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const { analytics } = businessConfig
  const gtmEnabled = analytics?.googleTagManager?.enabled && analytics?.googleTagManager?.id

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        {gtmEnabled && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${analytics.googleTagManager!.id}');
            `,
            }}
          />
        )}
        <link rel="icon" href="/images/logo-icon.svg" sizes="any" type="image/svg+xml" />
      </head>
      <body className={`${openSans.variable} ${leagueSpartan.variable}`}>
        {/* Google Tag Manager (noscript) */}
        {gtmEnabled && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${analytics.googleTagManager!.id}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <main>{children}</main>
      </body>
    </html>
  )
}
