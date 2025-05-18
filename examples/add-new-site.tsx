// Example of adding a new site to the gamblingWebsites array in config/site.ts

// Find the gamblingWebsites array and add your new site object:
gamblingWebsites: [
  // ... existing sites ...

  // Add your new site:
  {
    id: "stake-social",
    name: "Stake Social",
    description: "New social casino with high-value daily rewards.",
    fullDescription:
      "Stake Social is an exciting new platform offering some of the highest daily sweepcoins rewards in the industry. With a modern interface and dozens of games to choose from, players can enjoy a premium gaming experience without spending real money.",
    image: "/images/stake-social.jpg", // You'll need to add this image to your public/images folder
    url: "https://your-affiliate-link.com/stake-social", // Your affiliate link
    dailyCoins: "15,000",
    lastUpdated: "May 10, 2025",
    claimSteps: [
      "Create a free account on Stake Social",
      "Complete email verification",
      "Log in daily to claim your 15,000 free sweepcoins",
      "Complete the daily challenge for bonus coins",
    ],
    bonusTips: [
      "Join their Discord server for exclusive bonus codes",
      "Refer friends to earn 10,000 bonus coins per referral",
      "Participate in their weekend tournaments for massive rewards",
    ],
  },

  // You can continue adding more sites...
]
