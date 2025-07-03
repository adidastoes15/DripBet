"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Image } from "@/components/ui/image"
import { ExternalLink } from "lucide-react"
import { siteConfig } from "@/config/site"

export default function SitesPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="space-y-8">
        <div>
          <div className="h-10 w-64 bg-zinc-800 rounded animate-pulse mb-2"></div>
          <div className="h-6 w-96 bg-zinc-800 rounded animate-pulse"></div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
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
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">All Gambling Sites</h1>
        <p className="text-gray-400">Browse our complete collection of sites offering free sweepcoins.</p>
      </div>

      {siteConfig.gamblingWebsites.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 text-center">
          <p className="text-gray-400">No gambling sites available at the moment. Please check back later.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.gamblingWebsites.map((site) => {
            const imageSrc = site.images && site.images.length > 0 ? site.images[0].src : site.image

            return (
              <div key={site.id} className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={imageSrc || "/placeholder.png"}
                    alt={site.name}
                    fill
                    className="object-cover"
                    fallbackSrc="/placeholder.png"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{site.name}</h2>
                  <p className="text-gray-400 mb-4">{site.description}</p>
                  <div className="text-green-500 font-bold mb-4">{site.dailyCoins} free sweepcoins daily</div>
                  <div className="flex gap-4">
                    <Link
                      href={`/sites/${site.id}`}
                      className="px-4 py-2 border border-green-500 text-green-500 rounded-md hover:bg-green-500/10"
                    >
                      Details
                    </Link>
                    <Link
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-400 inline-flex items-center"
                    >
                      Claim <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
