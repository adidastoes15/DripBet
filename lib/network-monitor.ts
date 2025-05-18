import { logger } from "@/lib/logger"
import { performanceMonitor } from "@/lib/performance"

// Enhanced fetch with logging and performance tracking
export async function monitoredFetch(
  url: string,
  options?: RequestInit,
  context = "NetworkMonitor",
): Promise<Response> {
  const requestId = `fetch-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`

  // Log the request
  logger.debug(`Fetch request started: ${options?.method || "GET"} ${url}`, context, {
    requestId,
    url,
    method: options?.method || "GET",
    headers: options?.headers,
    // Don't log potentially sensitive body data
  })

  // Start performance monitoring
  performanceMonitor.startMeasure(requestId, "network", {
    url,
    method: options?.method || "GET",
  })

  try {
    const response = await fetch(url, options)

    // Clone the response to read it twice
    const clonedResponse = response.clone()

    // Try to parse the response as JSON for logging
    let responseData: any
    try {
      if (response.headers.get("content-type")?.includes("application/json")) {
        responseData = await clonedResponse.json()
      } else {
        responseData = await clonedResponse.text()
        // If text is too long, truncate it
        if (responseData.length > 500) {
          responseData = responseData.substring(0, 500) + "... [truncated]"
        }
      }
    } catch (error) {
      responseData = "[Could not parse response]"
    }

    // End performance monitoring
    performanceMonitor.endMeasure(requestId, "network", {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
      size: response.headers.get("content-length"),
    })

    // Log the response
    if (response.ok) {
      logger.debug(`Fetch request completed: ${response.status} ${response.statusText}`, context, {
        requestId,
        url,
        status: response.status,
        headers: Object.fromEntries(response.headers.entries()),
        data: responseData,
      })
    } else {
      logger.warn(`Fetch request failed: ${response.status} ${response.statusText}`, context, {
        requestId,
        url,
        status: response.status,
        headers: Object.fromEntries(response.headers.entries()),
        data: responseData,
      })
    }

    return response
  } catch (error) {
    // End performance monitoring with error
    performanceMonitor.endMeasure(requestId, "network", { error })

    // Log the error
    logger.error(
      `Fetch request error: ${error instanceof Error ? error.message : "Unknown error"}`,
      context,
      {
        requestId,
        url,
        method: options?.method || "GET",
      },
      error instanceof Error ? error : new Error(String(error)),
    )

    throw error
  }
}
