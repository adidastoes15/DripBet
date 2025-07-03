"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Image } from "@/components/ui/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { siteConfig } from "@/config/site"

export default function FeaturedSites() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Get the first 3 sites as featured
  const featuredSites = siteConfig.gamblingWebsites.slice(0, 3)

  if (!mounted) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden animate-pulse">
            <div className="h-48 w-full bg-zinc-800"></div>
            <div className="p-6">
              <div className="h-6 w-3/4 bg-zinc-800 rounded mb-2"></div>
              <div className="h-4 w-full bg-zinc-800 rounded mb-4"></div>
              <div className="h-4 w-1/2 bg-zinc-800 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {featuredSites.length === 0 ? (
        <div className="col-span-full text-center p-8 bg-zinc-900 border border-zinc-800 rounded-lg">
          <p className="text-gray-400">No featured sites available at the moment.</p>
        </div>
      ) : (
        featuredSites.map((site) => {
          const imageSrc = site.images && site.images.length > 0 ? site.images[0].src : site.image

          return (
            <Card key={site.id} className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={imageSrc || "/placeholder.png"}
                    alt={site.name}
                    fill
                    className="object-cover"
                    fallbackSrc="/placeholder.png"
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
                  <Button
                    variant="outline"
                    className="w-full border-green-500 text-green-500 hover:bg-green-500/10 bg-transparent"
                  >
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
