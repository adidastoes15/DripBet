"use client"

import { useState } from "react"
import Link from "next/link"
import { Image } from "@/components/ui/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { siteConfig } from "@/config/site"
import { useDebug } from "@/hooks/use-debug"
import { logger } from "@/lib/logger"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const debug = useDebug("Navbar", { isOpen })

  const handleToggleMenu = () => {
    debug.logEvent("toggleMenu", { currentState: isOpen, newState: !isOpen })
    setIsOpen(!isOpen)
  }

  const handleNavigation = (item: { title: string; href: string }) => {
    debug.logEvent("navigation", { to: item.href, title: item.title })
    setIsOpen(false)
  }

  // Log any image loading errors
  const handleImageError = (error: any) => {
    logger.error("Failed to load logo image", "Navbar", { error })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => debug.logEvent("logoClick")}>
          <div className="relative h-8 w-8">
            <Image
              src="/images/dripbet-logo.png"
              alt="BetDrip Logo"
              width={32}
              height={32}
              className="object-contain"
              fallbackSrc="/placeholder.png"
              onError={handleImageError}
            />
          </div>
          <span className="text-xl font-bold">BetDrip</span>
        </Link>
        <nav className="ml-auto hidden gap-6 md:flex">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-green-500"
              onClick={() => debug.logEvent("desktopNavClick", { item })}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <Sheet open={isOpen} onOpenChange={handleToggleMenu}>
          <SheetTrigger asChild className="ml-auto md:hidden">
            <Button variant="ghost" size="icon" onClick={() => debug.logEvent("menuButtonClick")}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black border-zinc-800">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => handleNavigation({ title: "Home", href: "/" })}
              >
                <div className="relative h-8 w-8">
                  <Image
                    src="/images/dripbet-logo.png"
                    alt="BetDrip Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                    fallbackSrc="/placeholder.png"
                    onError={handleImageError}
                  />
                </div>
                <span className="text-xl font-bold">BetDrip</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={handleToggleMenu}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="mt-8 flex flex-col gap-4">
              {siteConfig.mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium transition-colors hover:text-green-500"
                  onClick={() => handleNavigation(item)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
