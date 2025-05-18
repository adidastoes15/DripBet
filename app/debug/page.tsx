"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { debugLog, safeStringify } from "@/lib/debug-utils"

export default function DebugPage() {
  const [logs, setLogs] = useState<any[]>([])
  const [systemInfo, setSystemInfo] = useState<any>({})
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    debugLog("Debug page mounted", "DebugPage")

    // Collect system information
    const info = {
      userAgent: window.navigator.userAgent,
      language: window.navigator.language,
      cookiesEnabled: window.navigator.cookieEnabled,
      screenSize: {
        width: window.screen.width,
        height: window.screen.height,
      },
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      timestamp: new Date().toISOString(),
      url: window.location.href,
      nextPublicVars: {
        staticExport: process.env.NEXT_PUBLIC_STATIC_EXPORT,
        debugMode: process.env.NEXT_PUBLIC_DEBUG_MODE,
      },
    }

    setSystemInfo(info)
    debugLog("Collected system information", "DebugPage", info)

    // Add a test log entry
    debugLog("This is a test debug log", "DebugPage", { test: true })
  }, [])

  const triggerTestError = () => {
    try {
      // @ts-ignore - Intentional error for testing
      const obj = null
      obj.nonExistentMethod()
    } catch (error) {
      debugLog("Test error triggered", "DebugPage", { error })
      alert("Test error triggered. Check the console for details.")
    }
  }

  const checkImages = () => {
    debugLog("Checking images", "DebugPage")
    const images = document.querySelectorAll("img")
    const results = Array.from(images).map((img) => ({
      src: img.src,
      loaded: img.complete && img.naturalHeight !== 0,
      dimensions: {
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        displayWidth: img.width,
        displayHeight: img.height,
      },
    }))

    debugLog("Image check results", "DebugPage", { results })
    alert(
      `Checked ${results.length} images. ${results.filter((r) => r.loaded).length} loaded successfully. See console for details.`,
    )
  }

  if (!mounted) {
    return null
  }

  if (process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_DEBUG_MODE !== "true") {
    return (
      <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Debug Mode Disabled</h1>
        <p className="text-gray-400 mb-6">Debug mode is not enabled in production.</p>
        <Link href="/">
          <Button className="bg-green-500 text-black hover:bg-green-400">Return Home</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Debug Page</h1>
        <Link href="/">
          <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
            Return Home
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">System Information</h2>
          <pre className="bg-black/30 p-4 rounded-md overflow-auto text-xs">{safeStringify(systemInfo)}</pre>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Debug Tools</h2>
          <div className="space-y-4">
            <Button onClick={triggerTestError} className="w-full bg-red-500 text-white hover:bg-red-600">
              Trigger Test Error
            </Button>
            <Button onClick={checkImages} className="w-full bg-blue-500 text-white hover:bg-blue-600">
              Check Images
            </Button>
            <Button
              onClick={() => {
                debugLog("Manual log triggered", "DebugPage", { timestamp: new Date().toISOString() })
                alert("Log entry added. Check the console.")
              }}
              className="w-full bg-green-500 text-black hover:bg-green-400"
            >
              Add Log Entry
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Environment Variables</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-black/30 p-4 rounded-md">
            <h3 className="font-bold mb-2">NEXT_PUBLIC_STATIC_EXPORT</h3>
            <p className="font-mono">{process.env.NEXT_PUBLIC_STATIC_EXPORT || "Not set"}</p>
          </div>
          <div className="bg-black/30 p-4 rounded-md">
            <h3 className="font-bold mb-2">NEXT_PUBLIC_DEBUG_MODE</h3>
            <p className="font-mono">{process.env.NEXT_PUBLIC_DEBUG_MODE || "Not set"}</p>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Troubleshooting Tips</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-gray-300">Check the browser console for detailed logs and errors</li>
          <li className="text-gray-300">Verify that all environment variables are set correctly</li>
          <li className="text-gray-300">Ensure all images are properly loaded and sized</li>
          <li className="text-gray-300">Test different screen sizes to verify responsive design</li>
          <li className="text-gray-300">Clear browser cache if you're seeing outdated content</li>
        </ul>
      </div>
    </div>
  )
}
