/**
 * Debug utility functions for troubleshooting
 */

// Log with timestamp and source information
export function debugLog(message: string, source: string, data?: any): void {
  if (process.env.NEXT_PUBLIC_DEBUG_MODE === "true") {
    const timestamp = new Date().toISOString()
    console.log(`[${timestamp}] [${source}] ${message}`)
    if (data) {
      console.log(JSON.stringify(data, null, 2))
    }
  }
}

// Check if we're running on the client or server
export function isClient(): boolean {
  return typeof window !== "undefined"
}

// Check if we're in development mode
export function isDev(): boolean {
  return process.env.NODE_ENV === "development"
}

// Safely stringify objects (handles circular references)
export function safeStringify(obj: any): string {
  try {
    return JSON.stringify(
      obj,
      (key, value) => {
        if (value instanceof Error) {
          return {
            name: value.name,
            message: value.message,
            stack: value.stack,
          }
        }
        return value
      },
      2,
    )
  } catch (error) {
    return `[Circular or Non-Serializable Object]: ${Object.keys(obj).join(", ")}`
  }
}

// Add this to the window for debugging in the browser console
if (isClient() && isDev()) {
  ;(window as any).__DEBUG__ = {
    log: debugLog,
    stringify: safeStringify,
  }
}
