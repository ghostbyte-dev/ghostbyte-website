import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ghostbyte - Software Development Studio",
  description: "We build software that matters - Mobile apps, web applications, and custom software solutions",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="text-white" lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          {children}
      </body>
    </html>
  )
}

