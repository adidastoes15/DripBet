"use client"

import NextImage, { type ImageProps as NextImageProps } from "next/image"
import { useState } from "react"

interface ImageProps extends NextImageProps {
  fallbackSrc?: string
}

export function Image({ fallbackSrc = "/placeholder.png", alt, ...props }: ImageProps) {
  const [src, setSrc] = useState(props.src)
  const [error, setError] = useState(false)

  return (
    <NextImage
      {...props}
      src={error ? fallbackSrc : src}
      alt={alt}
      onError={() => {
        setError(true)
        setSrc(fallbackSrc)
      }}
    />
  )
}
