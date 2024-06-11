import "./globals.css"

import type { Metadata } from "next"

import { codecProNews } from "@/config/fonts"

export const metadata: Metadata = {
  title: "CNA - Dia dos Namorados",
  description:
    "Promoção para o dia dos namorados da escola de idiomas CNA de Catalão",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${codecProNews.className}`}>{children}</body>
    </html>
  )
}
