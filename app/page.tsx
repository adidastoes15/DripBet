import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/config/site"
import FeaturedSites from "@/components/featured-sites"

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-8">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Free Daily Sweepcoins
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl">
                  Your ultimate resource for collecting free sweepcoins from the top online gambling websites.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/sites">
                  <Button className="bg-green-500 text-black hover:bg-green-400">
                    Browse All Sites
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-[350px]">
                <Image src="/images/dripbet-logo.png" alt="BetDrip Logo" fill className="object-contain" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sites Section */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter">Featured Sites</h2>
            <p className="text-gray-400">Check out these popular sites offering free sweepcoins today.</p>
          </div>
          <FeaturedSites />
          <div className="flex justify-center">
            <Link href="/sites">
              <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
                View All Sites
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter">How It Works</h2>
            <p className="text-gray-400">Getting your free sweepcoins is easy with BetDrip.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.howItWorks.map((step, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
