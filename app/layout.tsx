import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BetDrip - Free Daily Sweepcoins",
  description: "Your resource for free daily sweepcoins from online gambling websites",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <header className="border-b border-zinc-800 py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold">BetDrip</h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="border-t border-zinc-800 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} BetDrip. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
