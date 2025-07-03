"use client"

import { useState } from "react"
import NextImage, { type ImageProps as NextImageProps } from "next/image"

interface ImageProps extends Omit<NextImageProps, "onError" | "onLoad"> {
  fallbackSrc?: string
}

export function Image({ fallbackSrc = "/placeholder.png", alt, ...props }: ImageProps) {
  const [imgSrc, setImgSrc] = useState(props.src)
  const [isError, setIsError] = useState(false)

  const handleError = () => {
    if (!isError) {
      setIsError(true)
      setImgSrc(fallbackSrc)
    }
  }

  // If error occurred and we're using fallback, show a simple div
  if (isError && imgSrc === fallbackSrc) {
    return (
      <div
        className={`flex items-center justify-center bg-zinc-800 text-zinc-500 ${props.className || ""}`}
        style={{
          width: typeof props.width === "number" ? `${props.width}px` : "100%",
          height: typeof props.height === "number" ? `${props.height}px` : "auto",
        }}
      >
        <span className="text-sm">{alt || "Image"}</span>
      </div>
    )
  }

  return <NextImage {...props} src={imgSrc} alt={alt} onError={handleError} className={props.className} />
}
