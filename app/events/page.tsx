import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getEvents } from "@/lib/data"
import { Calendar, MapPin } from "lucide-react"

export const metadata = {
  title: "Upcoming Events - FAST-LADS",
  description: "Discover our upcoming events and activities at FAST-LADS.",
}

export default async function EventsPage() {
  // Fetch upcoming events
  const upcomingEvents = await getEvents(false, false)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Header */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-neutral">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Events</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us for our upcoming events and activities
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Grid */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            {upcomingEvents.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden event-card">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={event.images[0] || "/placeholder.svg?height=300&width=500&text=Event"}
                        alt={event.title}
                        width={500}
                        height={300}
                        className="event-image object-cover w-full h-full"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{event.title}</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-1 h-4 w-4" />
                          <time dateTime={event.date}>
                            {new Date(event.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </time>
                        </div>
                        {event.location && (
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="mr-1 h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                        )}
                        <p className="mt-2">{event.description}</p>
                        <div className="pt-4">
                          <Link href={`/events/${event.id}`}>
                            <Button className="w-full bg-primary hover:bg-primary/90">View Details</Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No upcoming events at the moment. Check back soon!</p>
                <Link href="/past-events" className="mt-4 inline-block">
                  <Button variant="outline">View Past Events</Button>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Past Events Link */}
        <section className="w-full py-12 bg-neutral">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Looking for past events?</h2>
            <p className="text-muted-foreground mb-6">Check out our archive of previous events and activities.</p>
            <Link href="/past-events">
              <Button className="bg-accent hover:bg-accent/90">View Past Events</Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
