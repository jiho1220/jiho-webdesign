import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
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
  title: 'Park Jiho | UX/UI Designer',
  description: '박지호 UX/UI 디자이너 포트폴리오',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${inter.variable} ${jetbrainsMono.variable}`} style={{ background: 'var(--void)' }}>
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
