"use client"

import { useState } from "react"
import NextImage, { type ImageProps as NextImageProps } from "next/image"
import { debugLog } from "@/lib/debug-utils"

interface ImageProps extends Omit<NextImageProps, "onError"> {
  fallbackSrc?: string
  onImageError?: (error: Error) => void
}

export function Image({ fallbackSrc = "/placeholder.png", alt, onImageError, ...props }: ImageProps) {
  const [src, setSrc] = useState<string | any>(props.src)
  const [error, setError] = useState(false)

  const handleError = (e: any) => {
    const errorMessage = `Failed to load image: ${typeof props.src === "string" ? props.src : "object source"}`
    debugLog(errorMessage, "Image", { alt, src: props.src })

    setError(true)
    setSrc(fallbackSrc)

    if (onImageError) {
      onImageError(new Error(errorMessage))
    }
  }

  return <NextImage {...props} src={error ? fallbackSrc : src} alt={alt} onError={handleError} />
}
