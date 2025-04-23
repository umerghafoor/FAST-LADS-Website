import Link from "next/link"
import { Instagram, Linkedin, Facebook, Twitter, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">FAST-LADS</h3>
            <p className="text-sm text-primary-foreground/80">Leaders Advancement and Development Society</p>
            <p className="text-sm text-primary-foreground/80">Inspiring The Change</p>
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="h-4 w-4" />
              <a href="mailto:ladsfastisb@gmail.com" className="hover:underline">
                ladsfastisb@gmail.com
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:underline">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="/past-events" className="hover:underline">
                  Past Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:underline">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="flex items-center gap-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-primary-foreground hover:text-secondary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-primary-foreground hover:text-secondary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-primary-foreground hover:text-secondary transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-primary-foreground hover:text-secondary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Follow us on social media for updates on events, workshops, and leadership opportunities.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} FAST-LADS. All rights reserved.</p>
          <p className="mt-1">NUCES FAST, Islamabad</p>
        </div>
      </div>
    </footer>
  )
}
