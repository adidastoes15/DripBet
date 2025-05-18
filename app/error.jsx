"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h1>Something went wrong</h1>
      <p>We apologize for the inconvenience.</p>
      <div>
        <button onClick={reset}>Try again</button>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  )
}
