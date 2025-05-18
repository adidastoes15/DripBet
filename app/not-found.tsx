"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { logger } from "@/lib/logger"

export default function NotFound() {
  logger.warn("Not Found page rendered", "NotFound", {
    url: typeof window !== "undefined" ? window.location.pathname : "server-side",
  })

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-full max-w-md p-6 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
        <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-400 mb-8">The page you are looking for does not exist.</p>
        <Link href="/">
          <Button
            className="bg-green-500 text-black hover:bg-green-400"
            onClick={() => logger.info('User clicked "Return Home" from 404 page', "NotFound")}
          >
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
