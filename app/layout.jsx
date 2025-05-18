import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>BetDrip</title>
        <meta name="description" content="Your resource for free daily sweepcoins from online gambling websites" />
      </head>
      <body className="min-h-screen flex flex-col">
        <header className="border-b border-zinc-800 py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold">BetDrip</h1>
          </div>
        </header>
        <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
        <footer className="border-t border-zinc-800 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} BetDrip. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
