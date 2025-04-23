"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
    {
      href: "/events",
      label: "Events",
      active: pathname === "/events",
    },
    {
      href: "/past-events",
      label: "Past Events",
      active: pathname === "/past-events",
    },
    {
      href: "/gallery",
      label: "Gallery",
      active: pathname === "/gallery",
    },
    {
      href: "/blog",
      label: "Blog",
      active: pathname === "/blog",
    },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10 items-center">
          <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.svg?height=40&width=40&text=LADS"
                alt="FAST-LADS Logo"
                width={24}
                height={24}
                className="object-cover"
              />
            <div className="flex flex-col">
              <span className="inline-block font-bold text-lg leading-tight">FAST-LADS</span>
              <span className="text-xs text-muted-foreground leading-tight">NUCES FAST</span>
            </div>
          </Link>
          <nav className="hidden md:flex gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  route.active ? "text-primary" : "text-muted-foreground",
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="flex items-center space-x-1">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="pr-0">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full bg-primary">
                    <Image
                      src="/placeholder.svg?height=32&width=32&text=LADS"
                      alt="FAST-LADS Logo"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-base leading-tight">FAST-LADS</span>
                    <span className="text-xs text-muted-foreground leading-tight">NUCES FAST</span>
                  </div>
                </div>
                <nav className="flex flex-col gap-4">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        "block px-2 py-1 text-lg font-medium transition-colors hover:text-primary",
                        route.active ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
