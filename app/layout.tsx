import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Palace Woodwork - Premium Custom Woodworking Services",
  description:
    "Professional woodworking services specializing in custom furniture, kitchen cabinets, and commercial projects. Serving clients locally and internationally with exceptional craftsmanship.",
  keywords: "woodworking, custom furniture, kitchen cabinets, commercial woodwork, handcrafted furniture",
  authors: [{ name: "Palace Woodwork" }],
  openGraph: {
    title: "Palace Woodwork - Premium Custom Woodworking Services",
    description: "Professional woodworking services with exceptional craftsmanship",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
