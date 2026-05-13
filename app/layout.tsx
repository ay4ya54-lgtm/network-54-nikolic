import type React from "react"
import "@/app/globals.css"
import { Orbitron, Share_Tech_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: "--font-orbitron"
})

const shareTechMono = Share_Tech_Mono({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-share-tech"
})

export const metadata = {
  title: "W54 // Night City DataNet Archive",
  description: "Acesso Público Da Net - Arquivo de dados de Night City 2045",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${orbitron.variable} ${shareTechMono.variable} font-sans bg-[#0a0a0f] scanline`}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
