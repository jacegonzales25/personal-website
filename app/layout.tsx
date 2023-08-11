import './styles/globals.css'
import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'

import { ThemeProvider } from "@/components/themes/Theme-Provider"

const playFair = Playfair_Display({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Jace.Dev',
  description: 'Personal Website of Jace Legua Gonzales',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className={playFair.className}>
        <head />
        <body>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
