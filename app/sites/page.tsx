import Link from "next/link"
import { siteConfig } from "@/config/site"

export default function SitesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">All Gambling Sites</h1>
        <p className="text-gray-400">Browse our complete collection of sites offering free sweepcoins.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {siteConfig.gamblingWebsites.map((site) => (
          <div key={site.id} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
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
                className="px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-400"
              >
                Claim
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
