"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { siteConfig } from "@/config/site"
import { notFound } from "next/navigation"
import { ImageCarousel } from "@/components/image-carousel"
import { ErrorBoundary } from "@/components/error-boundary"
import { logger } from "@/lib/logger"

export default function SitePage({ params }: { params: { id: string } }) {
  logger.info(`Rendering site detail page for ID: ${params.id}`, "SitePage", { params })

  const site = siteConfig.gamblingWebsites.find((site) => site.id === params.id)

  if (!site) {
    logger.error(`Site not found with ID: ${params.id}`, "SitePage", {
      availableSites: siteConfig.gamblingWebsites.map((s) => s.id),
    })
    notFound()
  }

  // Log site details for debugging
  logger.debug(`Found site: ${site.name}`, "SitePage", {
    site: {
      id: site.id,
      name: site.name,
      hasImages: Boolean(site.images && site.images.length),
      hasMainImage: Boolean(site.image),
      claimStepsCount: site.claimSteps.length,
      hasBonusTips: Boolean(site.bonusTips && site.bonusTips.length),
    },
  })

  // Prepare images for the carousel
  const carouselImages = site.images
    ? site.images
    : site.image
      ? [{ src: site.image, alt: site.name }]
      : [{ src: "/placeholder.png", alt: site.name }]

  return (
    <div className="space-y-8">
      <Link
        href="/sites"
        className="text-green-500 hover:underline inline-flex items-center"
        onClick={() => logger.debug("Back to sites clicked", "SitePage")}
      >
        ← Back to all sites
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        <ErrorBoundary componentName="SiteCarousel">
          <div>
            <ImageCarousel images={carouselImages} />
          </div>
        </ErrorBoundary>

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
              onClick={() =>
                logger.info(`Claim button clicked for ${site.name}`, "SitePage", { siteId: site.id, url: site.url })
              }
            >
              Claim Now <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <ErrorBoundary componentName="SiteInstructions">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">How to Claim</h2>
            <ol className="list-decimal pl-5 space-y-2">
              {site.claimSteps.map((step, index) => (
                <li key={index} className="text-gray-300">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {site.bonusTips && (
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
      </ErrorBoundary>
    </div>
  )
}
