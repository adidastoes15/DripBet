type LogLevel = "debug" | "info" | "warn" | "error"

interface LogEntry {
  timestamp: string
  level: LogLevel
  message: string
  component?: string
  data?: any
  error?: Error
}

class Logger {
  private static instance: Logger
  private logs: LogEntry[] = []
  private maxLogs = 100
  private isProduction: boolean = process.env.NODE_ENV === "production"
  private debugMode: boolean = process.env.NEXT_PUBLIC_DEBUG_MODE === "true"

  private constructor() {
    // Initialize logger
    this.log("debug", "Logger initialized", "Logger")
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }

  public log(level: LogLevel, message: string, component?: string, data?: any, error?: Error): void {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      component,
      data,
      error,
    }

    // Add to in-memory logs
    this.logs.push(entry)
    if (this.logs.length > this.maxLogs) {
      this.logs.shift()
    }

    // Always log errors, but only log other levels if in development or debug mode is on
    if (level === "error" || !this.isProduction || this.debugMode) {
      this.outputToConsole(entry)
    }

    // In production, you might want to send errors to a monitoring service
    if (level === "error" && this.isProduction) {
      this.sendToMonitoringService(entry)
    }
  }

  private outputToConsole(entry: LogEntry): void {
    const prefix = `[${entry.timestamp}] [${entry.level.toUpperCase()}]${entry.component ? ` [${entry.component}]` : ""}`

    switch (entry.level) {
      case "debug":
        console.debug(prefix, entry.message, entry.data || "")
        break
      case "info":
        console.info(prefix, entry.message, entry.data || "")
        break
      case "warn":
        console.warn(prefix, entry.message, entry.data || "")
        break
      case "error":
        console.error(prefix, entry.message, entry.data || "")
        if (entry.error && entry.error.stack) {
          console.error(entry.error.stack)
        }
        break
    }
  }

  private sendToMonitoringService(entry: LogEntry): void {
    // This would be implemented to send logs to a service like Sentry, LogRocket, etc.
    // For now, we'll just log that we would send it
    console.info(`[MONITORING] Would send error to monitoring service: ${entry.message}`)
  }

  public getLogs(): LogEntry[] {
    return [...this.logs]
  }

  public clearLogs(): void {
    this.logs = []
    this.log("info", "Logs cleared", "Logger")
  }

  // Convenience methods
  public debug(message: string, component?: string, data?: any): void {
    this.log("debug", message, component, data)
  }

  public info(message: string, component?: string, data?: any): void {
    this.log("info", message, component, data)
  }

  public warn(message: string, component?: string, data?: any): void {
    this.log("warn", message, component, data)
  }

  public error(message: string, component?: string, data?: any, error?: Error): void {
    this.log("error", message, component, data, error)
  }
}

// Export a singleton instance
export const logger = Logger.getInstance()

// Helper function to safely stringify objects for logging
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
