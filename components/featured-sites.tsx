"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Image } from "@/components/ui/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { siteConfig } from "@/config/site"
import { debugLog } from "@/lib/debug-utils"

export default function FeaturedSites() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    debugLog("FeaturedSites component mounted", "FeaturedSites", {
      sitesCount: siteConfig.gamblingWebsites.length,
    })
  }, [])

  // Get the first 3 sites as featured
  const featuredSites = siteConfig.gamblingWebsites.slice(0, 3)

  // Log if we don't have enough sites
  if (featuredSites.length === 0) {
    debugLog("No featured sites available", "FeaturedSites")
  }

  if (!mounted) {
    return null // Prevent hydration issues
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {featuredSites.length === 0 ? (
        <div className="col-span-full text-center p-8 bg-zinc-900 border border-zinc-800 rounded-lg">
          <p className="text-gray-400">No featured sites available at the moment.</p>
        </div>
      ) : (
        featuredSites.map((site) => {
          // Get the image source - either the first image from the array or the main image
          const imageSrc = site.images && site.images.length > 0 ? site.images[0].src : site.image || "/placeholder.png"

          debugLog(`Rendering featured site: ${site.id}`, "FeaturedSites")

          return (
            <Card key={site.id} className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={imageSrc || "/placeholder.svg"}
                    alt={site.name}
                    width={400}
                    height={240}
                    className="object-cover w-full h-full"
                    fallbackSrc="/placeholder.png"
                    onImageError={() => debugLog(`Failed to load image for ${site.name}`, "FeaturedSites")}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">{site.name}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{site.description}</p>
                <div className="flex items-center gap-2 text-green-500">
                  <span className="font-bold">{site.dailyCoins}</span>
                  <span>free sweepcoins daily</span>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 p-6 pt-0">
                <Link href={`/sites/${site.id}`} className="flex-1">
                  <Button variant="outline" className="w-full border-green-500 text-green-500 hover:bg-green-500/10">
                    Details
                  </Button>
                </Link>
                <Link href={site.url} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full bg-green-500 text-black hover:bg-green-400">
                    Claim
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          )
        })
      )}
    </div>
  )
}
