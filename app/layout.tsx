import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Srijan Mukherjee - Data Engineer & Guitarist",
  description:
    "Personal portfolio of Srijan Mukherjee - Data Engineer in Training, Student, and Semi-Professional Guitarist. Showcasing projects in AI/ML, data engineering, and music.",
  keywords:
    "Srijan Mukherjee, Data Engineer, Guitarist, Bengali Rock, Khobor Band, FastAPI, Python, AI, Machine Learning",
  authors: [{ name: "Srijan Mukherjee" }],
  openGraph: {
    title: "Srijan Mukherjee - Data Engineer & Guitarist",
    description: "Personal portfolio showcasing projects in data engineering, AI/ML, and music",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srijan Mukherjee - Data Engineer & Guitarist",
    description: "Personal portfolio showcasing projects in data engineering, AI/ML, and music",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/placeholder-logo.png" type="image/png" />
        {/* SEO Meta Tags */}
        <title>Srijan Mukherjee - Data Engineer & Guitarist</title>
        <meta name="description" content="Personal portfolio of Srijan Mukherjee - Data Engineer in Training, Student, and Semi-Professional Guitarist. Showcasing projects in AI/ML, data engineering, and music." />
        <meta property="og:title" content="Srijan Mukherjee - Data Engineer & Guitarist" />
        <meta property="og:description" content="Personal portfolio showcasing projects in data engineering, AI/ML, and music" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Srijan Mukherjee - Data Engineer & Guitarist" />
        <meta name="twitter:description" content="Personal portfolio showcasing projects in data engineering, AI/ML, and music" />
      </head>
      <body className="font-apple antialiased">{children}</body>
    </html>
  )
}
