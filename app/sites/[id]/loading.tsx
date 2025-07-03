export default function SiteLoading() {
  return (
    <div className="space-y-8">
      <div className="h-6 w-32 bg-zinc-800 rounded-md animate-pulse"></div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="aspect-video w-full bg-zinc-800 rounded-xl animate-pulse"></div>
        <div>
          <div className="h-10 w-3/4 bg-zinc-800 rounded-md animate-pulse mb-4"></div>
          <div className="h-4 w-full bg-zinc-800 rounded-md animate-pulse mb-2"></div>
          <div className="h-4 w-full bg-zinc-800 rounded-md animate-pulse mb-2"></div>
          <div className="h-4 w-5/6 bg-zinc-800 rounded-md animate-pulse mb-6"></div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-8">
            <div className="h-7 w-1/2 bg-zinc-800 rounded-md animate-pulse mb-4"></div>
            <div className="h-6 w-1/3 bg-zinc-800 rounded-md animate-pulse mb-4"></div>
            <div className="h-4 w-1/4 bg-zinc-800 rounded-md animate-pulse mb-6"></div>
            <div className="h-12 w-full bg-zinc-800 rounded-md animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <div className="h-8 w-1/3 bg-zinc-800 rounded-md animate-pulse mb-4"></div>
          <div className="space-y-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-4 w-full bg-zinc-800 rounded-md animate-pulse"></div>
            ))}
          </div>
        </div>

        <div>
          <div className="h-8 w-1/3 bg-zinc-800 rounded-md animate-pulse mb-4"></div>
          <div className="space-y-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-4 w-full bg-zinc-800 rounded-md animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
