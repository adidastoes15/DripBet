import type { SiteConfig } from "@/types/site"

// Define the site configuration
export const siteConfig: SiteConfig = {
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
      iconName: "Search", // Use string names instead of JSX
      title: "Find a Site",
      description: "Browse our collection of online gambling sites offering free sweepcoins.",
    },
    {
      iconName: "ArrowRight", // Use string names instead of JSX
      title: "Follow Instructions",
      description: "Click through to the site and follow our simple instructions to claim your coins.",
    },
    {
      iconName: "Gift", // Use string names instead of JSX
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
      image: "/placeholder.png", // Using local placeholder instead of external URL
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
   {
      id: "CrownCoins Casino",
      name: "CrownCoins Casino",
      description: "Popular social casino with slots, blackjack, and more.",
      fullDescription:
        "CrownCoins Casino is a free-to-play, sweepstakes‐style social casino launched in 2023 by Sunflower Limited, offering a massive collection of Vegas-style slots—including progressive jackpots, mini-games, and exclusive releases—without risking real money  ￼ ￼. Players earn and use two virtual currencies (Crown Coins for play and Sweeps Coins redeemable for cash), enjoy daily login and welcome bonuses, and operate under U.S. sweepstakes law for a legally compliant, no-purchase-necessary experience.",
      image: "/images/sites/CrownCoins.png",
      url: "https://crowncoinscasino.com/?utm_campaign=2aced4e1-ed89-4166-9e58-2eeba329bd8b&utm_source=friends",
      dailyCoins: "$1",
      lastUpdated: "May 5, 2025",
      claimSteps: [
        "Create a free account on CrownCoins",
        "Verify your email address",
        "Log in daily to claim your free $1 sweepcoins",
        "Optional: Follow CrownCoins on social media for additional bonus opportunities",
      ],
      bonusTips: [
        "Check their Facebook page everyday for bonus code opportunities",
        "Participate in their weekly tournaments for additional coin rewards",
        "Refer friends to earn sweepcoins for each referral",
      ],
    },
  ],
}
