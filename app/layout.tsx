import type { Metadata } from 'next'
import { DM_Sans, Cormorant_Garamond } from 'next/font/google'

import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'AI Fake Removal — Get Fake AI Images Taken Down Fast',
  description: 'Someone posted fake AI images of you? We get them removed — from Instagram, TikTok, X, Reddit, Google, and 50+ platforms. Fast, discreet, confidential. Deepfake removal, AI-generated image takedowns, and search de-indexing for individuals, professionals, and public figures.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
