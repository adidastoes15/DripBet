"use client"

import { useState } from "react"
import Image from "next/image"
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

  // Handle edge case where no images are provided
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

  // If there's only one image, don't render carousel controls
  if (images.length <= 1) {
    return (
      <div className={`relative aspect-video w-full overflow-hidden rounded-xl ${className}`}>
        {images.length === 1 && (
          <div className="relative h-full w-full">
            <Image
              src={images[0].src || "/placeholder.png?height=400&width=600"}
              alt={images[0].alt || "Image"}
              width={800}
              height={450}
              className="object-cover w-full h-full"
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

  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-xl ${className}`}>
      <div className="relative h-full w-full">
        <Image
          src={images[currentIndex].src || "/placeholder.png?height=400&width=600"}
          alt={images[currentIndex].alt || "Image"}
          width={800}
          height={450}
          className="object-cover w-full h-full"
        />
        {images[currentIndex].caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-center text-sm text-white">
            {images[currentIndex].caption}
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
            className={`h-2 w-2 rounded-full ${currentIndex === slideIndex ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
