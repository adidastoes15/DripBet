import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-400 mb-8">The page you are looking for does not exist.</p>
      <Link href="/" className="px-6 py-3 bg-green-500 text-black rounded-md font-medium hover:bg-green-400">
        Return Home
      </Link>
    </div>
  )
}
