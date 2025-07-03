"use client"

import { useState, useEffect } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { siteConfig } from "@/config/site"
import { ImageCarousel } from "@/components/image-carousel"

export default function SitePage({ params }: { params: { id: string } }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!params.id) {
    notFound()
  }

  const site = siteConfig.gamblingWebsites.find((site) => site.id === params.id)

  if (!site) {
    notFound()
  }

  const carouselImages = site.images
    ? site.images
    : site.image
      ? [{ src: site.image, alt: site.name }]
      : [{ src: "/placeholder.png", alt: site.name }]

  if (!mounted) {
    return (
      <div className="space-y-8">
        <div className="h-6 w-32 bg-zinc-800 rounded animate-pulse"></div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="aspect-video w-full bg-zinc-800 rounded-xl animate-pulse"></div>
          <div className="space-y-4">
            <div className="h-10 w-3/4 bg-zinc-800 rounded animate-pulse"></div>
            <div className="h-4 w-full bg-zinc-800 rounded animate-pulse"></div>
            <div className="h-4 w-full bg-zinc-800 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <Link href="/sites" className="text-green-500 hover:underline inline-flex items-center">
        ← Back to all sites
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <ImageCarousel images={carouselImages} />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{site.name}</h1>
          <p className="text-gray-400 mb-6">{site.fullDescription || site.description}</p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Claim Your Sweepcoins</h2>
            <div className="text-green-500 font-bold text-lg mb-4">{site.dailyCoins} free sweepcoins daily</div>
            <div className="text-sm text-gray-400 mb-6">Last updated: {site.lastUpdated}</div>
            <Link
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 bg-green-500 text-black text-center rounded-md font-medium hover:bg-green-400 inline-flex items-center justify-center"
            >
              Claim Now <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">How to Claim</h2>
          {site.claimSteps && site.claimSteps.length > 0 ? (
            <ol className="list-decimal pl-5 space-y-2">
              {site.claimSteps.map((step, index) => (
                <li key={index} className="text-gray-300">
                  {step}
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-gray-400">No claim steps available.</p>
          )}
        </div>

        {site.bonusTips && site.bonusTips.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Bonus Tips</h2>
            <ul className="list-disc pl-5 space-y-2">
              {site.bonusTips.map((tip, index) => (
                <li key={index} className="text-gray-300">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
