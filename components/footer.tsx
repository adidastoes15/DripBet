import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="container px-4 py-8 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                <Image
                  src="/images/dripbet-logo.png"
                  alt="BetDrip Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">BetDrip</span>
            </Link>
            <p className="text-sm text-gray-400">
              Your trusted resource for free daily sweepcoins from online gambling websites.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">Navigation</h3>
            <ul className="space-y-2">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-green-500">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-sm hover:text-green-500">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:text-green-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-sm hover:text-green-500">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm hover:text-green-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-green-500">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-green-500">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-green-500">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-800 pt-8 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} BetDrip. All rights reserved.</p>
          <p className="mt-2 text-xs text-gray-500">
            BetDrip is not affiliated with any of the gambling websites listed. We do not guarantee the accuracy of
            information provided. Please gamble responsibly.
          </p>
        </div>
      </div>
    </footer>
  )
}
