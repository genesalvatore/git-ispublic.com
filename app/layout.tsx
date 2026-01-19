import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Git is Public | Radical Transparency & Open Source Truth',
  description: 'Sunlight is the best disinfectant. Every change visible. Every author accountable. Transparency is strength. Git is public.',
  keywords: ['git is public', 'radical transparency', 'open source', 'public repositories', 'transparent history', 'accountability'],
  authors: [{ name: 'The Salvatore Family' }],
  publisher: 'Git is Public',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://git-ispublic.com',
    title: 'Git is Public | Radical Transparency & Open Source Truth',
    description: 'Sunlight is the best disinfectant. Every change visible. Every author accountable. Transparency is strength. Git is public.',
    siteName: 'Git is Public',
    images: [
      {
        url: '/og-public.png',
        width: 1200,
        height: 630,
        alt: 'Git is Public - Radical Transparency & Open Source Truth',
      },
    ],
  },
  alternates: {
    canonical: 'https://git-ispublic.com',
  },
  metadataBase: new URL('https://git-ispublic.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-git-is-life.png" type="image/png" />
        <script defer data-domain="git-ispublic.com" src="https://plausible.io/js/script.js"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
