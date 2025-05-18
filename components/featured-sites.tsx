import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { siteConfig } from "@/config/site"

export default function FeaturedSites() {
  // Get the first 3 sites as featured
  const featuredSites = siteConfig.gamblingWebsites.slice(0, 3)

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {featuredSites.map((site) => {
        // Get the image source - either the first image from the array or the main image
        const imageSrc =
          site.images && site.images.length > 0
            ? site.images[0].src
            : site.image || "/placeholder.png?height=400&width=600"

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
      })}
    </div>
  )
}
