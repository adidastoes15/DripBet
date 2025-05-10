import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

export default function SitesPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <div className="flex flex-col gap-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">All Gambling Sites</h1>
          <p className="text-gray-400 md:text-xl">Browse our complete collection of sites offering free sweepcoins.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.gamblingWebsites.map((site) => (
            <Card key={site.id} className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image src={site.image || "/placeholder.svg"} alt={site.name} fill className="object-cover" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2 text-xl">{site.name}</CardTitle>
                <CardDescription className="text-gray-400 mb-4">{site.description}</CardDescription>
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
          ))}
        </div>
      </div>
    </div>
  )
}
