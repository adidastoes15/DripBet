export default function SitesLoading() {
  return (
    <div className="space-y-8">
      <div>
        <div className="h-10 w-64 bg-zinc-800 rounded-md animate-pulse mb-2"></div>
        <div className="h-6 w-full max-w-2xl bg-zinc-800 rounded-md animate-pulse"></div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
            <div className="h-48 w-full bg-zinc-800 animate-pulse"></div>
            <div className="p-6">
              <div className="h-7 w-3/4 bg-zinc-800 rounded-md animate-pulse mb-2"></div>
              <div className="h-4 w-full bg-zinc-800 rounded-md animate-pulse mb-2"></div>
              <div className="h-4 w-5/6 bg-zinc-800 rounded-md animate-pulse mb-4"></div>
              <div className="h-6 w-1/3 bg-zinc-800 rounded-md animate-pulse mb-4"></div>
              <div className="flex gap-4">
                <div className="h-10 w-full bg-zinc-800 rounded-md animate-pulse"></div>
                <div className="h-10 w-full bg-zinc-800 rounded-md animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
