"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
      <p className="text-gray-400 mb-8">We apologize for the inconvenience.</p>
      <div className="flex gap-4">
        <button onClick={reset} className="px-6 py-3 bg-green-500 text-black rounded-md font-medium hover:bg-green-400">
          Try again
        </button>
        <Link
          href="/"
          className="px-6 py-3 border border-green-500 text-green-500 rounded-md font-medium hover:bg-green-500/10"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
