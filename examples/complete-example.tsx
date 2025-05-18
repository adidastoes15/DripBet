// 1. Add your image to public/images/
// 2. Add your new site to the gamblingWebsites array in config/site.ts:

// Complete example of a site entry
const newSiteExample = {
  id: "lucky-dreams",
  name: "Lucky Dreams Casino",
  description: "Exciting new casino with massive welcome bonus.",
  fullDescription:
    "Lucky Dreams Casino offers an immersive gaming experience with hundreds of slots and table games. New players can enjoy a generous welcome package and daily free sweepcoins.",
  image: "/images/lucky-dreams.jpg", // Your custom image
  url: "https://luckydreams.com/ref/your-affiliate-id", // Your affiliate link
  dailyCoins: "12,500",
  lastUpdated: "May 10, 2025",
  claimSteps: [
    "Register a new account using our link",
    "Verify your email address",
    "Log in daily to claim your free sweepcoins",
    "Complete daily missions for bonus rewards",
  ],
  bonusTips: [
    "Join their VIP program for increased daily rewards",
    "Follow them on social media for exclusive bonus codes",
    "Participate in their weekly tournaments",
  ],
}
