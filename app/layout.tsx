import type React from "react"
import "@/app/globals.css"
import { Orbitron, Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: "--font-orbitron"
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata = {
  title: "W54 — Enciclopédia da Família Nikolic",
  description: "A enciclopédia livre e colaborativa sobre a família Nikolic em Night City. Informações sobre Chidi Nikolic, Eleanor Moreau e seus familiares.",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${orbitron.variable} ${inter.variable} font-sans bg-[#0a0a0f] scanline`}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
