export interface NavItem {
  title: string
  href: string
}

export interface HowItWorksItem {
  iconName: string // Using string names instead of JSX
  title: string
  description: string
}

export interface SiteImage {
  src: string
  alt: string
  caption?: string
}

export interface GamblingSite {
  id: string
  name: string
  description: string
  fullDescription?: string
  image?: string
  images?: SiteImage[]
  url: string
  dailyCoins: string
  lastUpdated: string
  claimSteps: string[]
  bonusTips?: string[]
}

export interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  howItWorks: HowItWorksItem[]
  gamblingWebsites: GamblingSite[]
}
