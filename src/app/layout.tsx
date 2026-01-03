import type { Metadata } from 'next'

import 'styles/base.scss'
import './globals.css'

import Analytics from 'components/Analytics'

import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { profile } from 'config/profile'
import { inter, roboto } from 'styles/fonts'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://jadsonsantos.dev.br'

const title = `${profile.name} - ${profile.role}`
const description = profile.description.hero

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Desenvolvedor Front-End',
    'React',
    'Next.js',
    'TypeScript',
    'VTEX',
    'Portfolio',
    'Web Developer'
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: profile.name,
    title,
    description,
    images: [
      {
        url: `${siteUrl}/favicon.png`,
        alt: title
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${siteUrl}/favicon.png`]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${roboto.variable}`}>
        <Analytics />
        {children}
        <VercelAnalytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
