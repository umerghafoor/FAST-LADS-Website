import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Users, Target, Lightbulb, Link2, Zap } from "lucide-react"
import { NewsletterForm } from "@/components/newsletter-form"
import { getEvents } from "@/lib/data"
import type { MissionItem } from "@/types"

const missionItems: MissionItem[] = [
  {
    title: "Inspire",
    description: "Motivate students to discover their leadership potential and pursue excellence.",
    icon: "Lightbulb",
  },
  {
    title: "Empower",
    description: "Provide tools, knowledge, and opportunities for personal and professional growth.",
    icon: "Zap",
  },
  {
    title: "Connect",
    description: "Build meaningful relationships between students, alumni, and industry professionals.",
    icon: "Link2",
  },
  {
    title: "Innovate",
    description: "Encourage creative thinking and novel approaches to leadership challenges.",
    icon: "Target",
  },
  {
    title: "Impact",
    description: "Create positive change within our university and the broader community.",
    icon: "Users",
  },
]

export default async function Home() {
  // Fetch featured events
  const featuredEvents = await getEvents(true, false, 3)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-neutral">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-secondary/10 px-3 py-1 text-sm text-secondary">
                  NUCES FAST Islamabad
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-heading">
                  Leaders Advancement and Development Society
                </h1>
                <h2 className="text-xl font-medium text-accent">Inspiring The Change</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Empowering students to become effective leaders through development programs, seminars, and hands-on
                  experiences.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#mission">
                    <Button className="w-full min-[400px]:w-auto bg-primary hover:bg-primary/90">
                      Our Mission <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/events">
                    <Button
                      variant="outline"
                      className="w-full min-[400px]:w-auto border-primary text-primary hover:bg-primary/10"
                    >
                      <Calendar className="mr-2 h-4 w-4" /> Upcoming Events
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto flex justify-center lg:justify-end">
                <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
                  <Image
                    src="/placeholder.svg?height=500&width=500&text=FAST-LADS"
                    alt="FAST-LADS"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section id="mission" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
                <p className="text-xl text-muted-foreground md:text-2xl/relaxed">
                  Building strong future leaders through knowledge, skills, and practical experiences.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {missionItems.map((item) => {
                const IconComponent =
                  item.icon === "Lightbulb"
                    ? Lightbulb
                    : item.icon === "Zap"
                      ? Zap
                      : item.icon === "Link2"
                        ? Link2
                        : item.icon === "Target"
                          ? Target
                          : Users

                return (
                  <div key={item.title} className="mission-item">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground pl-12">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Events Preview Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-neutral">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Events</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us for our latest activities and programs.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {featuredEvents.length > 0 ? (
                featuredEvents.map((event) => (
                  <div key={event.id} className="event-card">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={event.images[0] || "/placeholder.svg?height=300&width=500&text=Event"}
                        alt={event.title}
                        width={500}
                        height={300}
                        className="event-image object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <p className="mt-2 line-clamp-2">{event.description}</p>
                      <div className="mt-4">
                        <Link href={`/events/${event.id}`}>
                          <Button variant="outline" size="sm" className="w-full">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground">No upcoming events at the moment. Check back soon!</p>
                </div>
              )}
            </div>

            <div className="flex justify-center">
              <Link href="/events">
                <Button className="bg-accent hover:bg-accent/90">
                  View All Events <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Updated</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to our newsletter to receive updates on upcoming events and leadership opportunities.
                </p>
              </div>
              <NewsletterForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
