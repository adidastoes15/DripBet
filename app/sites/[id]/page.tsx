import Link from "next/link"
import { siteConfig } from "@/config/site"
import { notFound } from "next/navigation"

export default function SitePage({ params }: { params: { id: string } }) {
  const site = siteConfig.gamblingWebsites.find((site) => site.id === params.id)

  if (!site) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <Link href="/sites" className="text-green-500 hover:underline">
        ← Back to all sites
      </Link>

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
            className="block w-full py-3 bg-green-500 text-black text-center rounded-md font-medium hover:bg-green-400"
          >
            Claim Now
          </Link>
        </div>

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
      </div>
    </div>
  )
}
