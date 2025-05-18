import { Search, Gift, ArrowRight } from "lucide-react"

export const siteConfig = {
  name: "BetDrip",
  description: "Your resource for free daily sweepcoins from online gambling websites",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Sites",
      href: "/sites",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  howItWorks: [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Find a Site",
      description: "Browse our collection of online gambling sites offering free sweepcoins.",
    },
    {
      icon: <ArrowRight className="h-6 w-6" />,
      title: "Follow Instructions",
      description: "Click through to the site and follow our simple instructions to claim your coins.",
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Claim Daily",
      description: "Return daily to claim more free sweepcoins and maximize your gaming experience.",
    },
  ],
  gamblingWebsites: [
    {
      id: "stake-us",
      name: "Stake.US",
      description: "America's Social Casino with over 200 industry favorite games.",
      fullDescription:
        "Stake.US is a premier social casino tailor-made to provide the ultimate social, safe and free gaming experience. With a wide variety of over 200 industry favorite games by the most reputable providers, you won't find better action anywhere else.",
      image: "/images/stake-us.png",
      url: "https://stake.us",
      dailyCoins: "25,000",
      lastUpdated: "May 10, 2025",
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
      fullDescription:
        "Chumba Casino is one of the most popular social casinos available to US players. They offer a wide variety of slots, table games, and jackpot opportunities.",
      image: "/placeholder.png",
      url: "https://example.com/chumba",
      dailyCoins: "2,000",
      lastUpdated: "May 5, 2025",
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
  ],
}
