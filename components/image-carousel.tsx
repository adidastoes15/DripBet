"use client"

import { useState, useEffect } from "react"
import { Image } from "@/components/ui/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { debugLog } from "@/lib/debug-utils"

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
    debugLog("ImageCarousel mounted", "ImageCarousel", { imagesCount: images.length })
  }, [images.length])

  // Reset index if images change
  useEffect(() => {
    if (currentIndex >= images.length) {
      setCurrentIndex(0)
      debugLog("Reset carousel index due to images change", "ImageCarousel")
    }
  }, [images, currentIndex])

  // Handle edge case where no images are provided
  if (!images || images.length === 0) {
    debugLog("No images provided to carousel", "ImageCarousel")
    return (
      <div className={`relative aspect-video w-full overflow-hidden rounded-xl ${className}`}>
        <div className="flex h-full w-full items-center justify-center bg-zinc-900">
          <p className="text-gray-400">No images available</p>
        </div>
      </div>
    )
  }

  const goToPrevious = () => {
    debugLog("Navigate to previous image", "ImageCarousel", { from: currentIndex })
    const isFirstImage = currentIndex === 0
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    debugLog("Navigate to next image", "ImageCarousel", { from: currentIndex })
    const isLastImage = currentIndex === images.length - 1
    const newIndex = isLastImage ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    debugLog("Navigate to specific slide", "ImageCarousel", { from: currentIndex, to: slideIndex })
    setCurrentIndex(slideIndex)
  }

  if (!mounted) {
    return null // Prevent hydration issues
  }

  // If there's only one image, don't render carousel controls
  if (images.length <= 1) {
    return (
      <div className={`relative aspect-video w-full overflow-hidden rounded-xl ${className}`}>
        {images.length === 1 && (
          <div className="relative h-full w-full">
            <Image
              src={images[0].src || "/placeholder.svg"}
              alt={images[0].alt || "Image"}
              width={800}
              height={450}
              className="object-cover w-full h-full"
              fallbackSrc="/placeholder.png"
              priority
              onImageError={() => debugLog("Failed to load single carousel image", "ImageCarousel")}
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

  // Ensure currentIndex is valid
  const safeIndex = Math.max(0, Math.min(currentIndex, images.length - 1))
  if (safeIndex !== currentIndex) {
    debugLog("Corrected invalid carousel index", "ImageCarousel", { from: currentIndex, to: safeIndex })
    setCurrentIndex(safeIndex)
  }

  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-xl ${className}`}>
      <div className="relative h-full w-full">
        <Image
          src={images[safeIndex].src || "/placeholder.svg"}
          alt={images[safeIndex].alt || "Image"}
          width={800}
          height={450}
          className="object-cover w-full h-full"
          fallbackSrc="/placeholder.png"
          onImageError={() => debugLog("Failed to load carousel image", "ImageCarousel", { index: safeIndex })}
        />
        {images[safeIndex].caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-center text-sm text-white">
            {images[safeIndex].caption}
          </div>
        )}
      </div>

      {/* Left Arrow */}
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

      {/* Right Arrow */}
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

      {/* Dots */}
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
