import { logger } from "@/lib/logger"

interface PerformanceEntry {
  name: string
  startTime: number
  endTime?: number
  duration?: number
  metadata?: Record<string, any>
}

class PerformanceMonitor {
  private static instance: PerformanceMonitor
  private entries: Record<string, PerformanceEntry> = {}
  private thresholds: Record<string, number> = {
    default: 1000, // 1 second default threshold
    navigation: 500,
    rendering: 100,
    dataFetching: 2000,
  }

  private constructor() {
    // Initialize
    logger.debug("Performance monitor initialized", "PerformanceMonitor")
  }

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor()
    }
    return PerformanceMonitor.instance
  }

  public startMeasure(name: string, category = "default", metadata?: Record<string, any>): void {
    const id = `${category}:${name}`
    this.entries[id] = {
      name,
      startTime: performance.now(),
      metadata,
    }
    logger.debug(`Started measuring: ${id}`, "PerformanceMonitor", metadata)
  }

  public endMeasure(name: string, category = "default", additionalMetadata?: Record<string, any>): void {
    const id = `${category}:${name}`
    const entry = this.entries[id]

    if (!entry) {
      logger.warn(`Attempted to end measurement that wasn't started: ${id}`, "PerformanceMonitor")
      return
    }

    const endTime = performance.now()
    const duration = endTime - entry.startTime

    this.entries[id] = {
      ...entry,
      endTime,
      duration,
      metadata: {
        ...entry.metadata,
        ...additionalMetadata,
      },
    }

    // Log performance data
    const threshold = this.thresholds[category] || this.thresholds.default

    if (duration > threshold) {
      logger.warn(
        `Performance threshold exceeded for ${id}: ${duration.toFixed(2)}ms (threshold: ${threshold}ms)`,
        "PerformanceMonitor",
        this.entries[id],
      )
    } else {
      logger.debug(`Completed measurement for ${id}: ${duration.toFixed(2)}ms`, "PerformanceMonitor", this.entries[id])
    }
  }

  public getEntries(): Record<string, PerformanceEntry> {
    return { ...this.entries }
  }

  public clearEntries(): void {
    this.entries = {}
    logger.debug("Performance entries cleared", "PerformanceMonitor")
  }

  public setThreshold(category: string, threshold: number): void {
    this.thresholds[category] = threshold
    logger.debug(`Set performance threshold for ${category}: ${threshold}ms`, "PerformanceMonitor")
  }
}

export const performanceMonitor = PerformanceMonitor.getInstance()
