"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { debugLog } from "@/lib/debug-utils"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error when it occurs
    debugLog(`Error caught: ${error.message}`, "ErrorPage", {
      name: error.name,
      message: error.message,
      stack: error.stack,
      digest: error.digest,
    })

    // Log to console for easier debugging
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-full max-w-md p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-red-500">Something went wrong</h1>
        <p className="text-gray-400 mb-6">We apologize for the inconvenience.</p>

        {process.env.NEXT_PUBLIC_DEBUG_MODE === "true" && (
          <div className="mb-6">
            <details className="text-sm">
              <summary className="cursor-pointer mb-2 text-gray-300">Technical details (for developers)</summary>
              <div className="p-3 bg-black/30 rounded-md overflow-auto">
                <p className="font-mono text-xs text-red-400 mb-2">{error.message}</p>
                {error.digest && <p className="font-mono text-xs text-gray-400 mb-2">Error ID: {error.digest}</p>}
                {error.stack && (
                  <pre className="font-mono text-xs text-gray-400 whitespace-pre-wrap">{error.stack}</pre>
                )}
              </div>
            </details>
          </div>
        )}

        <div className="flex gap-4">
          <Button
            onClick={() => {
              debugLog("Reset button clicked", "ErrorPage")
              reset()
            }}
            className="bg-green-500 text-black hover:bg-green-400"
          >
            Try again
          </Button>
          <Link href="/">
            <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
