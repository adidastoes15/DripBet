import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ErrorBoundary } from "@/components/error-boundary"
import { DebugPanel } from "@/components/debug-panel"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BetDrip - Free Daily Sweepcoins",
  description: "Your resource for free daily sweepcoins from online gambling websites",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        <ErrorBoundary componentName="Navbar">
          <Navbar />
        </ErrorBoundary>
        <main className="flex-1 container mx-auto px-4 py-8">
          <ErrorBoundary componentName="MainContent">{children}</ErrorBoundary>
        </main>
        <ErrorBoundary componentName="Footer">
          <Footer />
        </ErrorBoundary>

        {/* Debug Panel - only visible in development or when debug mode is enabled */}
        <DebugPanel />
      </body>
    </html>
  )
}
