import Link from "next/link"

const sites = [
  {
    id: "stake-us",
    name: "Stake.US",
    description: "America's Social Casino with over 200 industry favorite games.",
    fullDescription:
      "Stake.US is a premier social casino tailor-made to provide the ultimate social, safe and free gaming experience.",
    dailyCoins: "25,000",
    lastUpdated: "May 10, 2025",
    url: "https://stake.us",
    claimSteps: [
      "Visit Stake.US through our referral link",
      "Click 'Register' to create a free account",
      "Complete the verification process",
      "Claim your welcome bonus of free sweepcoins",
      "Return daily to collect additional free coins",
    ],
    bonusTips: [
      "Use promo code 'BETDRIP' during registration for extra bonus coins",
      "Follow Stake.US on social media for exclusive promotions",
      "Participate in their daily races and challenges for additional rewards",
      "Refer friends to earn bonus sweepcoins for each referral",
    ],
  },
  {
    id: "chumba-casino",
    name: "Chumba Casino",
    description: "Popular social casino with slots, blackjack, and more.",
    fullDescription: "Chumba Casino is one of the most popular social casinos available to US players.",
    dailyCoins: "2,000",
    lastUpdated: "May 5, 2025",
    url: "https://example.com/chumba",
    claimSteps: [
      "Create a free account on Chumba Casino",
      "Verify your email address",
      "Log in daily to claim your free 2,000 sweepcoins",
      "Optional: Follow Chumba on social media for additional bonus opportunities",
    ],
    bonusTips: [
      "Check their Facebook page every Wednesday for bonus code opportunities",
      "Participate in their weekly tournaments for additional coin rewards",
      "Refer friends to earn up to 5,000 bonus sweepcoins per referral",
    ],
  },
]

export default function SitePage({ params }) {
  const site = sites.find((site) => site.id === params.id)

  if (!site) {
    return <div>Site not found</div>
  }

  return (
    <div>
      <Link href="/sites">Back to all sites</Link>

      <h1>{site.name}</h1>
      <p>{site.fullDescription || site.description}</p>

      <div>
        <h2>Claim Your Sweepcoins</h2>
        <div>{site.dailyCoins} free sweepcoins daily</div>
        <div>Last updated: {site.lastUpdated}</div>
        <Link href={site.url}>Claim Now</Link>
      </div>

      <div>
        <h2>How to Claim</h2>
        <ol>
          {site.claimSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      {site.bonusTips && (
        <div>
          <h2>Bonus Tips</h2>
          <ul>
            {site.bonusTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
