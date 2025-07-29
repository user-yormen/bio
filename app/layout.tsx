import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "R. T. O. Nmai - Senior Software Engineer",
  description:
    "Senior Software Engineer with almost a decade of experience in backend and full-stack development, SDK engineering, and product leadership. Founder of Tsutseh PropTech platform.",
  keywords:
    "Senior Software Engineer, Full-stack Developer, Java, Spring Boot, Flutter, PropTech, Team Leadership, Ghana",
  authors: [{ name: "R. T. O. Nmai" }],
  openGraph: {
    title: "R. T. O. Nmai - Senior Software Engineer",
    description:
      "Senior Software Engineer with almost a decade of experience in backend and full-stack development, SDK engineering, and product leadership.",
    type: "website",
  },
  generator: 'R. T. O. Nmai',
  applicationName: "R. T. O. Nmai Portfolio",
  creator: "R. T. O. Nmai",
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
