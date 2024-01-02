import type { Metadata } from 'next'

import './globals.css'
import '../styles/base.scss'

// import Analytics from 'components/Analytics'

import { roboto, inter } from '../styles/fonts'

import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'Jadson Santos',
  description: 'Front End Developer'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
