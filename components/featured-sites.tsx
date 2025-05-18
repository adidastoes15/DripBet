"use client"

import Link from "next/link"
import { Image } from "@/components/ui/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { siteConfig } from "@/config/site"
import { logger } from "@/lib/logger"
import { ErrorBoundary } from "@/components/error-boundary"

export default function FeaturedSites() {
  logger.debug("Rendering FeaturedSites component", "FeaturedSites", {
    sitesCount: siteConfig.gamblingWebsites.length,
    featuredCount: Math.min(siteConfig.gamblingWebsites.length, 3),
  })

  // Get the first 3 sites as featured
  const featuredSites = siteConfig.gamblingWebsites.slice(0, 3)

  // Log if we don't have enough sites
  if (featuredSites.length === 0) {
    logger.warn("No featured sites available", "FeaturedSites")
  } else if (featuredSites.length < 3) {
    logger.info(`Only ${featuredSites.length} featured sites available`, "FeaturedSites")
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {featuredSites.map((site) => {
        // Get the image source - either the first image from the array or the main image
        const imageSrc = site.images && site.images.length > 0 ? site.images[0].src : site.image || "/placeholder.png"

        logger.debug(`Rendering featured site: ${site.id}`, "FeaturedSites", {
          site: {
            id: site.id,
            name: site.name,
            imageSrc,
          },
        })

        return (
          <ErrorBoundary
            key={site.id}
            componentName={`FeaturedSite-${site.id}`}
            fallback={
              <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
                <CardContent className="p-6">
                  <p className="text-red-400">Failed to render site: {site.name}</p>
                </CardContent>
              </Card>
            }
          >
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
                    onError={() =>
                      logger.warn(`Failed to load image for ${site.name}`, "FeaturedSites", {
                        siteId: site.id,
                        imageSrc,
                      })
                    }
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
                <Link
                  href={`/sites/${site.id}`}
                  className="flex-1"
                  onClick={() => logger.debug(`Clicked details for ${site.name}`, "FeaturedSites", { siteId: site.id })}
                >
                  <Button variant="outline" className="w-full border-green-500 text-green-500 hover:bg-green-500/10">
                    Details
                  </Button>
                </Link>
                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  onClick={() =>
                    logger.debug(`Clicked claim for ${site.name}`, "FeaturedSites", { siteId: site.id, url: site.url })
                  }
                >
                  <Button className="w-full bg-green-500 text-black hover:bg-green-400">
                    Claim
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </ErrorBoundary>
        )
      })}
    </div>
  )
}
