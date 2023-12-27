import type { Metadata } from 'next'

import './globals.css'
import '../styles/base.scss'

import { roboto, inter } from '../styles/fonts'

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
      <body className={`${inter.variable} ${roboto.variable}`}>{children}</body>
    </html>
  )
}
