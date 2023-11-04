import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { jaJP } from '@clerk/localizations'
import { ModalProvider } from '@/components/modal-provider'
import ToasterProvider from '@/components/toaster-provider'
import { CrispProvider } from '@/components/crisp-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Genius',
  description: 'AI Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
    localization={jaJP}
    >
      <html lang="ja">
        <body className={inter.className}>
          <ModalProvider />
          <ToasterProvider />
          <CrispProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
