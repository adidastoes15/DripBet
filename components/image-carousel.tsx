"use client"

import { useState, useEffect } from "react"
import { Image } from "@/components/ui/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageCarouselProps {
  images: {
    src: string
    alt: string
    caption?: string
  }[]
  className?: string
}

export function ImageCarousel({ images = [], className = "" }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (currentIndex >= images.length && images.length > 0) {
      setCurrentIndex(0)
    }
  }, [images, currentIndex])

  if (!mounted) {
    return (
      <div className={`relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-800 animate-pulse ${className}`}>
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-zinc-500">Loading...</span>
        </div>
      </div>
    )
  }

  if (!images || images.length === 0) {
    return (
      <div className={`relative aspect-video w-full overflow-hidden rounded-xl ${className}`}>
        <div className="flex h-full w-full items-center justify-center bg-zinc-900">
          <p className="text-gray-400">No images available</p>
        </div>
      </div>
    )
  }

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1
    const newIndex = isLastImage ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  if (images.length <= 1) {
    return (
      <div className={`relative aspect-video w-full overflow-hidden rounded-xl ${className}`}>
        {images.length === 1 && (
          <div className="relative h-full w-full">
            <Image
              src={images[0].src || "/placeholder.png"}
              alt={images[0].alt || "Image"}
              fill
              className="object-cover"
              fallbackSrc="/placeholder.png"
              priority
            />
            {images[0].caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-center text-sm text-white">
                {images[0].caption}
              </div>
            )}
          </div>
        )}
      </div>
    )
  }

  const safeIndex = Math.max(0, Math.min(currentIndex, images.length - 1))

  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-xl ${className}`}>
      <div className="relative h-full w-full">
        <Image
          src={images[safeIndex].src || "/placeholder.png"}
          alt={images[safeIndex].alt || "Image"}
          fill
          className="object-cover"
          fallbackSrc="/placeholder.png"
        />
        {images[safeIndex].caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-center text-sm text-white">
            {images[safeIndex].caption}
          </div>
        )}
      </div>

      <div className="absolute left-2 top-1/2 -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-black/50 text-white hover:bg-black/70"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>
      </div>

      <div className="absolute right-2 top-1/2 -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-black/50 text-white hover:bg-black/70"
          onClick={goToNext}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 transform gap-1">
        {images.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`h-2 w-2 rounded-full ${safeIndex === slideIndex ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
