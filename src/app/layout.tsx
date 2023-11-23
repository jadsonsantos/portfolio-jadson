import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import './globals.css'
import '../styles/base.scss'

const font = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin']
})

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
      <body className={font.className}>{children}</body>
    </html>
  )
}
