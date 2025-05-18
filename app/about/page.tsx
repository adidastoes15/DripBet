import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">About BetDrip</h1>
        <p className="text-gray-400">Your trusted resource for free daily sweepcoins.</p>
      </div>

      <div className="space-y-4">
        <p className="text-gray-300">
          BetDrip was founded with a simple mission: to help online gamblers maximize their gaming experience by
          providing a comprehensive resource for collecting free daily sweepcoins from various online gambling
          platforms.
        </p>
        <p className="text-gray-300">
          Our team of gambling enthusiasts constantly researches and verifies the latest offers, ensuring that our users
          have access to accurate, up-to-date information about free sweepcoins opportunities across the web.
        </p>
        <p className="text-gray-300">
          We believe in responsible gambling and providing value to our community. That&apos;s why all the information
          on BetDrip is completely free to access, with no hidden fees or subscriptions required.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Our Values</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-gray-300">
            <strong className="text-green-500">Accuracy:</strong> We verify all sweepcoins offers before listing them.
          </li>
          <li className="text-gray-300">
            <strong className="text-green-500">Transparency:</strong> We clearly disclose how to claim each offer.
          </li>
          <li className="text-gray-300">
            <strong className="text-green-500">Community:</strong> We value user feedback to improve our service.
          </li>
          <li className="text-gray-300">
            <strong className="text-green-500">Responsibility:</strong> We promote responsible gambling practices.
          </li>
        </ul>
      </div>

      <div>
        <Link
          href="/sites"
          className="inline-block bg-green-500 text-black px-6 py-3 rounded-md font-medium hover:bg-green-400"
        >
          Explore Sites
        </Link>
      </div>
    </div>
  )
}
