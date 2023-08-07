// Root Layout
import './styles/globals.css'
import type { Metadata } from 'next'
import Header from './layouts/headers'
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: 'Jace.dev',
  description: 'Personal Website of Jace L. Gonzales',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Header />
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        {children}
      </ThemeProvider>
      </body>
    </html>
  )
}