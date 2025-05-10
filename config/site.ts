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
      id: "chumba-casino",
      name: "Chumba Casino",
      description: "Popular social casino with slots, blackjack, and more.",
      fullDescription:
        "Chumba Casino is one of the most popular social casinos available to US players. They offer a wide variety of slots, table games, and jackpot opportunities. Their sweepcoins system allows players to enjoy casino-style games without direct gambling.",
      image: "/placeholder.svg?height=400&width=600",
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
    {
      id: "luckyland-slots",
      name: "LuckyLand Slots",
      description: "Exciting slot games with daily free sweepcoins.",
      fullDescription:
        "LuckyLand Slots offers an exciting collection of slot games with generous daily sweepcoins bonuses. Their platform is known for frequent promotions and a user-friendly interface that makes claiming and using your free coins simple and enjoyable.",
      image: "/placeholder.svg?height=400&width=600",
      url: "https://example.com/luckyland",
      dailyCoins: "7,500",
      lastUpdated: "May 7, 2025",
      claimSteps: [
        "Sign up for a free LuckyLand Slots account",
        "Complete the brief tutorial to receive your welcome bonus",
        "Return daily to claim your 7,500 free sweepcoins",
        "Check your email for additional promotional offers",
      ],
      bonusTips: [
        "Play during their 'Happy Hour' events for 2x sweepcoins rewards",
        "Complete their daily challenges for bonus coins",
        "Join their VIP program for increased daily rewards",
      ],
    },
    {
      id: "funzpoints",
      name: "Funzpoints",
      description: "Legal sweepstakes casino with premium games and jackpots.",
      fullDescription:
        "Funzpoints is a legal sweepstakes casino available in most US states. They offer both standard and premium games, with regular jackpots and generous daily login bonuses. Their unique wheel spin feature gives players additional opportunities to win free sweepcoins.",
      image: "/placeholder.svg?height=400&width=600",
      url: "https://example.com/funzpoints",
      dailyCoins: "1,000",
      lastUpdated: "May 3, 2025",
      claimSteps: [
        "Register for a free Funzpoints account",
        "Verify your account via email",
        "Log in daily to claim your 1,000 free sweepcoins",
        "Spin their bonus wheel every 3 hours for additional coins",
      ],
      bonusTips: [
        "Set a reminder to spin their bonus wheel every 3 hours for maximum rewards",
        "Play their free games to earn additional premium points",
        "Watch for special holiday promotions with increased rewards",
      ],
    },
    {
      id: "pulsz",
      name: "Pulsz",
      description: "Modern social casino with over 300 games to play.",
      fullDescription:
        "Pulsz is a modern social casino featuring over 300 games from top providers. They offer one of the most generous daily login bonuses in the industry, along with frequent promotions and a rewarding VIP program for regular players.",
      image: "/placeholder.svg?height=400&width=600",
      url: "https://example.com/pulsz",
      dailyCoins: "5,000",
      lastUpdated: "May 8, 2025",
      claimSteps: [
        "Create your free Pulsz account",
        "Complete account verification",
        "Claim your welcome bonus of 5,000 sweepcoins",
        "Return daily for additional free coins",
      ],
      bonusTips: [
        "Follow their social media accounts for exclusive bonus codes",
        "Participate in their weekend tournaments for bonus rewards",
        "Check their promotions page daily for limited-time offers",
      ],
    },
    {
      id: "fortune-coins",
      name: "Fortune Coins",
      description: "New sweepstakes casino with generous welcome bonus.",
      fullDescription:
        "Fortune Coins is a newer entry to the sweepstakes casino market, but they've quickly gained popularity due to their extremely generous welcome bonus and daily free coins offers. Their platform features a growing selection of slots and table games.",
      image: "/placeholder.svg?height=400&width=600",
      url: "https://example.com/fortune-coins",
      dailyCoins: "10,000",
      lastUpdated: "May 9, 2025",
      claimSteps: [
        "Sign up for Fortune Coins using your email",
        "Verify your account",
        "Claim your massive welcome bonus",
        "Log in daily for 10,000 free sweepcoins",
      ],
      bonusTips: [
        "Complete their daily missions for additional coin rewards",
        "Participate in their hourly draws for bonus opportunities",
        "Join their loyalty program for increased daily rewards",
      ],
    },
    {
      id: "wow-vegas",
      name: "WOW Vegas",
      description: "Vegas-style games with daily free sweepcoins.",
      fullDescription:
        "WOW Vegas brings the excitement of Las Vegas to your screen with their impressive selection of slots and table games. They offer one of the most competitive daily login bonuses in the industry, along with frequent promotions and special events.",
      image: "/placeholder.svg?height=400&width=600",
      url: "https://example.com/wow-vegas",
      dailyCoins: "8,500",
      lastUpdated: "May 6, 2025",
      claimSteps: [
        "Create a WOW Vegas account",
        "Complete the registration process",
        "Claim your welcome package",
        "Return daily for 8,500 free sweepcoins",
      ],
      bonusTips: [
        "Play their featured game of the week for bonus rewards",
        "Participate in their weekend tournaments",
        "Check your email for exclusive promotional offers",
      ],
    },
  ],
}
