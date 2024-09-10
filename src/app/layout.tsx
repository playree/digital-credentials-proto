import '@/styles/globals.css'
import type { Metadata } from 'next'

import { Noto_Sans_JP, Roboto_Mono } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { Providers } from './providers'

const NotoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
})

const RobotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja' className={`${NotoSansJp.variable} ${RobotoMono.variable}`}>
      <body className={twMerge('font-noto min-h-screen bg-background antialiased')}>
        <Providers>
          <div className='relative flex h-screen flex-col'>{children}</div>
        </Providers>
      </body>
    </html>
  )
}
