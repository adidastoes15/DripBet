"use client"

import { useEffect, useRef } from "react"
import { logger } from "@/lib/logger"
import { performanceMonitor } from "@/lib/performance"

interface DebugOptions {
  trackRenders?: boolean
  trackProps?: boolean
  trackPerformance?: boolean
  logLevel?: "debug" | "info"
}

export function useDebug(componentName: string, props?: Record<string, any>, options: DebugOptions = {}) {
  const { trackRenders = true, trackProps = true, trackPerformance = true, logLevel = "debug" } = options

  const renderCount = useRef(0)
  const prevProps = useRef<Record<string, any> | null>(null)
  const mountTime = useRef(Date.now())

  useEffect(() => {
    renderCount.current++

    if (trackRenders) {
      logger[logLevel](`Component rendered (${renderCount.current})`, componentName, {
        renderCount: renderCount.current,
      })
    }

    if (trackProps && props) {
      // Check what props changed
      if (prevProps.current) {
        const changedProps: Record<string, { from: any; to: any }> = {}
        let hasChanges = false

        Object.keys(props).forEach((key) => {
          if (prevProps.current && props[key] !== prevProps.current[key]) {
            changedProps[key] = {
              from: prevProps.current[key],
              to: props[key],
            }
            hasChanges = true
          }
        })

        if (hasChanges) {
          logger[logLevel]("Props changed", componentName, { changedProps })
        }
      }

      prevProps.current = { ...props }
    }

    // Start measuring render performance
    if (trackPerformance) {
      performanceMonitor.startMeasure(`render-${renderCount.current}`, componentName, { props })

      // Use requestAnimationFrame to measure when the render is complete
      requestAnimationFrame(() => {
        performanceMonitor.endMeasure(`render-${renderCount.current}`, componentName)
      })
    }

    // Component mount logging
    if (renderCount.current === 1) {
      logger[logLevel]("Component mounted", componentName, { mountTime: mountTime.current })

      // Return cleanup function for unmount
      return () => {
        const unmountTime = Date.now()
        const lifetime = unmountTime - mountTime.current
        logger[logLevel]("Component unmounted", componentName, {
          mountTime: mountTime.current,
          unmountTime,
          lifetime: `${lifetime}ms`,
          renderCount: renderCount.current,
        })
      }
    }
  })

  return {
    renderCount: renderCount.current,
    logEvent: (eventName: string, data?: any) => {
      logger[logLevel](`Event: ${eventName}`, componentName, data)
    },
    logError: (error: Error, context?: any) => {
      logger.error(`Error in ${componentName}`, componentName, context, error)
    },
    measurePerformance: (name: string, fn: () => any, metadata?: any) => {
      performanceMonitor.startMeasure(name, componentName, metadata)
      const result = fn()
      performanceMonitor.endMeasure(name, componentName)
      return result
    },
    measureAsync: async (name: string, fn: () => Promise<any>, metadata?: any) => {
      performanceMonitor.startMeasure(name, componentName, metadata)
      try {
        const result = await fn()
        performanceMonitor.endMeasure(name, componentName)
        return result
      } catch (error) {
        performanceMonitor.endMeasure(name, componentName, { error })
        throw error
      }
    },
  }
}
