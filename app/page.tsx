import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Free Daily Sweepcoins</h1>
        <p className="text-xl text-gray-400 mb-6">
          Your ultimate resource for collecting free sweepcoins from the top online gambling websites.
        </p>
        <Link
          href="/sites"
          className="inline-block bg-green-500 text-black px-6 py-3 rounded-md font-medium hover:bg-green-400"
        >
          Browse All Sites
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Featured Sites</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Stake.US</h3>
            <p className="text-gray-400 mb-4">America's Social Casino with over 200 industry favorite games.</p>
            <div className="text-green-500 font-bold mb-4">25,000 free sweepcoins daily</div>
            <div className="flex gap-4">
              <Link
                href="/sites/stake-us"
                className="px-4 py-2 border border-green-500 text-green-500 rounded-md hover:bg-green-500/10"
              >
                Details
              </Link>
              <Link
                href="https://stake.us"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-400"
              >
                Claim
              </Link>
            </div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Chumba Casino</h3>
            <p className="text-gray-400 mb-4">Popular social casino with slots, blackjack, and more.</p>
            <div className="text-green-500 font-bold mb-4">2,000 free sweepcoins daily</div>
            <div className="flex gap-4">
              <Link
                href="/sites/chumba-casino"
                className="px-4 py-2 border border-green-500 text-green-500 rounded-md hover:bg-green-500/10"
              >
                Details
              </Link>
              <Link
                href="https://example.com/chumba"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-400"
              >
                Claim
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
