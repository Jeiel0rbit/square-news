import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Square News - Bot de Notícias para Discord",
  description:
    "O bot de notícias mais avançado para Discord. Mantenha sua comunidade sempre informada sobre tecnologia.",
  keywords: "discord bot, notícias, tecnologia, square news",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
