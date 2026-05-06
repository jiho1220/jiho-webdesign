import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import 'pretendard/dist/web/static/pretendard-dynamic-subset.css'
import CustomCursor from '@/components/CustomCursor'
import SmoothScroll from '@/components/SmoothScroll'
import GSAPReveal from '@/components/GSAPReveal'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Jiho Park | UX/UI Designer',
  description: '박지호 UX/UI 디자이너 포트폴리오',
  openGraph: {
    title: 'Jiho Park | UX/UI Designer',
    description: '박지호 UX/UI 디자이너 포트폴리오',
    url: 'https://parkjiho-portfolio.vercel.app',
    siteName: 'Jiho Park Portfolio',
    images: [
      {
        url: 'https://parkjiho-portfolio.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jiho Park | UX/UI Designer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jiho Park | UX/UI Designer',
    description: '박지호 UX/UI 디자이너 포트폴리오',
    images: ['https://parkjiho-portfolio.vercel.app/og-image.png'],
  },
}

const GA_ID = 'G-DS5HM1TDYC'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${inter.variable} ${jetbrainsMono.variable}`} style={{ background: 'var(--void)' }}>
      <head>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
      </head>
      <body style={{ background: 'var(--void)', color: 'var(--text)', minHeight: '100vh' }}>
        <CustomCursor />
        <div className="noise-overlay" aria-hidden />
        <div className="app-layer">
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </div>
        <GSAPReveal />
      </body>
    </html>
  )
}
