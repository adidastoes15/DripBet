"use client"

import { useState, useEffect } from "react"
import { logger } from "@/lib/logger"
import { performanceMonitor } from "@/lib/performance"
import { Button } from "@/components/ui/button"
import { X, RotateCcw, Download, Bug } from "lucide-react"

export function DebugPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [logs, setLogs] = useState<any[]>([])
  const [activeTab, setActiveTab] = useState<"logs" | "performance">("logs")
  const [performanceData, setPerformanceData] = useState<any>({})

  useEffect(() => {
    // Update logs every second if panel is open
    if (isOpen) {
      const interval = setInterval(() => {
        setLogs(logger.getLogs())
        setPerformanceData(performanceMonitor.getEntries())
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [isOpen])

  const togglePanel = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      // Refresh data when opening
      setLogs(logger.getLogs())
      setPerformanceData(performanceMonitor.getEntries())
    }
  }

  const clearLogs = () => {
    logger.clearLogs()
    setLogs([])
  }

  const downloadLogs = () => {
    const logData = JSON.stringify(logs, null, 2)
    const blob = new Blob([logData], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `betdrip-logs-${new Date().toISOString()}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // Only show in development or when debug mode is enabled
  if (process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_DEBUG_MODE !== "true") {
    return null
  }

  return (
    <>
      {/* Debug toggle button */}
      <Button
        onClick={togglePanel}
        className="fixed bottom-4 right-4 z-50 rounded-full w-12 h-12 p-0 flex items-center justify-center"
        variant="outline"
      >
        <Bug size={20} />
      </Button>

      {/* Debug panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg w-full max-w-4xl max-h-[80vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-bold">Debug Panel</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={clearLogs}>
                  <RotateCcw size={16} className="mr-1" /> Clear
                </Button>
                <Button variant="outline" size="sm" onClick={downloadLogs}>
                  <Download size={16} className="mr-1" /> Download
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                  <X size={16} />
                </Button>
              </div>
            </div>

            <div className="flex border-b">
              <button
                className={`px-4 py-2 ${activeTab === "logs" ? "border-b-2 border-green-500 font-medium" : ""}`}
                onClick={() => setActiveTab("logs")}
              >
                Logs
              </button>
              <button
                className={`px-4 py-2 ${activeTab === "performance" ? "border-b-2 border-green-500 font-medium" : ""}`}
                onClick={() => setActiveTab("performance")}
              >
                Performance
              </button>
            </div>

            <div className="overflow-auto flex-1 p-4">
              {activeTab === "logs" && (
                <div className="space-y-2">
                  {logs.length === 0 ? (
                    <p className="text-gray-500 italic">No logs recorded yet.</p>
                  ) : (
                    logs.map((log, index) => (
                      <div
                        key={index}
                        className={`p-2 rounded text-sm font-mono ${
                          log.level === "error"
                            ? "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200"
                            : log.level === "warn"
                              ? "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200"
                              : log.level === "info"
                                ? "bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200"
                                : "bg-gray-100 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200"
                        }`}
                      >
                        <div className="flex items-start">
                          <span className="text-xs opacity-70 mr-2">
                            {new Date(log.timestamp).toLocaleTimeString()}
                          </span>
                          <span className="uppercase text-xs font-bold mr-2">{log.level}</span>
                          {log.component && <span className="text-xs mr-2">[{log.component}]</span>}
                          <span>{log.message}</span>
                        </div>
                        {log.data && (
                          <details className="mt-1">
                            <summary className="cursor-pointer text-xs">Data</summary>
                            <pre className="text-xs mt-1 p-1 bg-black/10 dark:bg-white/10 rounded overflow-auto">
                              {typeof log.data === "string" ? log.data : JSON.stringify(log.data, null, 2)}
                            </pre>
                          </details>
                        )}
                        {log.error && log.error.stack && (
                          <details className="mt-1">
                            <summary className="cursor-pointer text-xs">Stack trace</summary>
                            <pre className="text-xs mt-1 p-1 bg-black/10 dark:bg-white/10 rounded overflow-auto">
                              {log.error.stack}
                            </pre>
                          </details>
                        )}
                      </div>
                    ))
                  )}
                </div>
              )}

              {activeTab === "performance" && (
                <div className="space-y-2">
                  {Object.keys(performanceData).length === 0 ? (
                    <p className="text-gray-500 italic">No performance data recorded yet.</p>
                  ) : (
                    Object.entries(performanceData).map(([id, entry]: [string, any]) => (
                      <div key={id} className="p-2 rounded bg-gray-100 dark:bg-gray-800/50 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{id}</span>
                          {entry.duration !== undefined ? (
                            <span
                              className={`text-sm ${
                                entry.duration > 1000
                                  ? "text-red-500"
                                  : entry.duration > 500
                                    ? "text-yellow-500"
                                    : "text-green-500"
                              }`}
                            >
                              {entry.duration.toFixed(2)}ms
                            </span>
                          ) : (
                            <span className="text-sm text-yellow-500">In progress...</span>
                          )}
                        </div>
                        {entry.metadata && (
                          <details className="mt-1">
                            <summary className="cursor-pointer text-xs">Metadata</summary>
                            <pre className="text-xs mt-1 p-1 bg-black/10 dark:bg-white/10 rounded overflow-auto">
                              {JSON.stringify(entry.metadata, null, 2)}
                            </pre>
                          </details>
                        )}
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
