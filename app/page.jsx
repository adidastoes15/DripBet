import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Free Daily Sweepcoins</h1>
        <p className="text-xl text-gray-400 mb-6 max-w-2xl mx-auto">
          Your ultimate resource for collecting free sweepcoins from the top online gambling websites.
        </p>
        <Link href="/sites" className="btn btn-primary">
          Browse All Sites
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Sites</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <h3 className="text-xl font-bold mb-2">Stake.US</h3>
            <p className="text-gray-400 mb-4">America&apos;s Social Casino with over 200 industry favorite games.</p>
            <div className="text-green-500 font-bold mb-4">25,000 free sweepcoins daily</div>
            <div className="flex gap-4">
              <Link href="/sites/stake-us" className="btn btn-outline">
                Details
              </Link>
              <Link href="https://stake.us" className="btn btn-primary">
                Claim
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
