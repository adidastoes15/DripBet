import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <div className="flex flex-col gap-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About BetDrip</h1>
          <p className="text-gray-400 md:text-xl">Your trusted resource for free daily sweepcoins.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
          <div className="space-y-6">
            <p className="text-gray-300">
              BetDrip was founded with a simple mission: to help online gamblers maximize their gaming experience by
              providing a comprehensive resource for collecting free daily sweepcoins from various online gambling
              platforms.
            </p>
            <p className="text-gray-300">
              Our team of gambling enthusiasts constantly researches and verifies the latest offers, ensuring that our
              users have access to accurate, up-to-date information about free sweepcoins opportunities across the web.
            </p>
            <p className="text-gray-300">
              We believe in responsible gambling and providing value to our community. That's why all the information on
              BetDrip is completely free to access, with no hidden fees or subscriptions required.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Values</h2>
              <ul className="space-y-2 pl-5">
                <li className="list-disc pl-2 text-gray-300">
                  <strong className="text-green-500">Accuracy:</strong> We verify all sweepcoins offers before listing
                  them.
                </li>
                <li className="list-disc pl-2 text-gray-300">
                  <strong className="text-green-500">Transparency:</strong> We clearly disclose how to claim each offer.
                </li>
                <li className="list-disc pl-2 text-gray-300">
                  <strong className="text-green-500">Community:</strong> We value user feedback to improve our service.
                </li>
                <li className="list-disc pl-2 text-gray-300">
                  <strong className="text-green-500">Responsibility:</strong> We promote responsible gambling practices.
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <Link href="/sites">
                <Button className="bg-green-500 text-black hover:bg-green-400">
                  Explore Sites
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image src="/images/dripbet-logo.png" alt="BetDrip Logo" fill className="object-contain" />
            </div>
            <div className="rounded-xl bg-zinc-900 p-6">
              <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
              <p className="mb-4 text-gray-300">
                Have questions, suggestions, or want to report an issue with a listed offer? We'd love to hear from you.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="w-full border-green-500 text-green-500 hover:bg-green-500/10">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
