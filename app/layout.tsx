import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
