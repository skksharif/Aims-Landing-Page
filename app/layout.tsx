import type React from "react"
import type { Metadata } from "next"
import { Poppins, Open_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "AIMS Hospitals - Expert Pediatric & Neonatal Care",
  description:
    "Anurag Institute of Medical Sciences for Child Health - Providing expert pediatric and neonatal care in Vijayawada & Tenali.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${openSans.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'