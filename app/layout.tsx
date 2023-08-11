import './styles/globals.css'
import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'

import { ThemeProvider } from "@/components/Theme-Provider"

const inter = Playfair_Display({  })

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
    <html lang="en">
      <body>
        {children}
        
      </body>
    </html>
  )
}
