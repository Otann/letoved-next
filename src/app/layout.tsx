import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from "./providers";
import { SessionProvider } from "next-auth/react";
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Letoved Next',
  description: 'History platform built on Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* <SessionProvider> */}
          <Providers>{children}</Providers>
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
