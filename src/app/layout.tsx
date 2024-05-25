import type { Metadata } from 'next'

import './globals.css'
import 'styles/base.scss'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { roboto, inter } from 'styles/fonts'

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
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
