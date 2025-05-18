import Link from "next/link"

const sites = [
  {
    id: "stake-us",
    name: "Stake.US",
    description: "America's Social Casino with over 200 industry favorite games.",
    dailyCoins: "25,000",
    url: "https://stake.us",
  },
  {
    id: "chumba-casino",
    name: "Chumba Casino",
    description: "Popular social casino with slots, blackjack, and more.",
    dailyCoins: "2,000",
    url: "https://example.com/chumba",
  },
]

export default function SitesPage() {
  return (
    <div>
      <h1>All Gambling Sites</h1>
      <p>Browse our complete collection of sites offering free sweepcoins.</p>

      <div>
        {sites.map((site) => (
          <div key={site.id}>
            <h2>{site.name}</h2>
            <p>{site.description}</p>
            <div>{site.dailyCoins} free sweepcoins daily</div>
            <div>
              <Link href={`/sites/${site.id}`}>Details</Link>
              <Link href={site.url}>Claim</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
