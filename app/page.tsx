import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { siteConfig } from "@/config/site"
import FeaturedSites from "@/components/featured-sites"

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Free Daily Sweepcoins</h1>
        <p className="text-xl text-gray-400 mb-6 max-w-2xl mx-auto">
          Your ultimate resource for collecting free sweepcoins from the top online gambling websites.
        </p>
        <Link
          href="/sites"
          className="inline-block bg-green-500 text-black px-6 py-3 rounded-md font-medium hover:bg-green-400"
        >
          Browse All Sites
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Sites</h2>
        <FeaturedSites />
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {siteConfig.howItWorks.map((item, index) => (
            <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4 text-green-500">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 bg-zinc-900 border border-zinc-800 rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Ready to Start Collecting?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Browse our complete collection of gambling sites and start claiming your free daily sweepcoins today.
          </p>
        </div>
        <div className="flex justify-center">
          <Link
            href="/sites"
            className="inline-flex items-center bg-green-500 text-black px-6 py-3 rounded-md font-medium hover:bg-green-400"
          >
            View All Sites <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
