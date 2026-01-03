import type { Metadata } from 'next'

import 'styles/base.scss'
import './globals.css'

import Analytics from 'components/Analytics'

import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { inter, roboto } from 'styles/fonts'

export const metadata: Metadata = {
  title: 'Jadson Santos',
  description:
    'Desenvolvedor Front-End apaixonado por criar experiências web excepcionais que sejam rápidas e responsivas.'
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
