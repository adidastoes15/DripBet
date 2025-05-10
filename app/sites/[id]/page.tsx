import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/config/site"
import { ArrowLeft, ExternalLink, Clock, Gift, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface SitePageProps {
  params: {
    id: string
  }
}

export default function SitePage({ params }: SitePageProps) {
  const site = siteConfig.gamblingWebsites.find((site) => site.id === params.id)

  if (!site) {
    notFound()
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <div className="flex flex-col gap-8">
        <Link href="/sites" className="flex items-center text-green-500 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all sites
        </Link>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="flex flex-col gap-6">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image src={site.image || "/placeholder.svg"} alt={site.name} fill className="object-cover" />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter">{site.name}</h1>
              <p className="text-gray-400">{site.fullDescription || site.description}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">How to Claim</h2>
              <ol className="space-y-4 pl-5">
                {site.claimSteps.map((step, index) => (
                  <li key={index} className="list-decimal pl-2 text-gray-300">
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {site.bonusTips && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Bonus Tips</h2>
                <ul className="space-y-2 pl-5">
                  {site.bonusTips.map((tip, index) => (
                    <li key={index} className="list-disc pl-2 text-gray-300">
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Claim Your Sweepcoins</CardTitle>
                <CardDescription>Get your free daily sweepcoins now</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-green-500" />
                  <span className="text-lg">
                    <strong className="text-green-500">{site.dailyCoins}</strong> free sweepcoins
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-green-500" />
                  <span>Resets every 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-green-500" />
                  <span>Last updated: {site.lastUpdated}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={site.url} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full bg-green-500 text-black hover:bg-green-400">
                    Claim Now
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Similar Sites</CardTitle>
                <CardDescription>Check out these other options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {siteConfig.gamblingWebsites
                  .filter((s) => s.id !== site.id)
                  .slice(0, 3)
                  .map((similarSite) => (
                    <Link key={similarSite.id} href={`/sites/${similarSite.id}`}>
                      <div className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-zinc-800">
                        <div className="relative h-12 w-12 overflow-hidden rounded">
                          <Image
                            src={similarSite.image || "/placeholder.svg"}
                            alt={similarSite.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">{similarSite.name}</h3>
                          <p className="text-sm text-gray-400">{similarSite.dailyCoins} coins daily</p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
