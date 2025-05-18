"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"
import { logger } from "@/lib/logger"
import { Button } from "@/components/ui/button"

interface Props {
  children: ReactNode
  fallback?: ReactNode
  componentName?: string
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ errorInfo })

    // Log the error with component information
    logger.error(
      `Error caught by boundary: ${error.message}`,
      this.props.componentName || "ErrorBoundary",
      { errorInfo },
      error,
    )
  }

  private handleReset = (): void => {
    this.setState({ hasError: false, error: null, errorInfo: null })
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      // If a custom fallback is provided, use it
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Default error UI
      return (
        <div className="p-4 border border-red-500 rounded-md bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-200">
          <h2 className="text-lg font-bold mb-2">Something went wrong</h2>
          <details className="mb-4">
            <summary className="cursor-pointer text-sm">View error details</summary>
            <pre className="mt-2 p-2 bg-black/10 dark:bg-white/10 rounded text-xs overflow-auto">
              {this.state.error?.toString()}
              {this.state.errorInfo?.componentStack}
            </pre>
          </details>
          <Button onClick={this.handleReset} variant="outline" className="text-sm">
            Try Again
          </Button>
        </div>
      )
    }

    return this.props.children
  }
}
