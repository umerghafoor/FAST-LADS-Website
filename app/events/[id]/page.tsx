import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, MapPin, Clock, ExternalLink } from "lucide-react"
import { getEventById } from "@/lib/data"
import { notFound } from "next/navigation"

export default async function EventDetailPage({ params }: { params: { id: string } }) {
  const event = await getEventById(params.id)

  if (!event) {
    notFound()
  }

  const eventDate = new Date(event.date)
  const isPastEvent = eventDate < new Date()

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <article className="container max-w-4xl px-4 py-12 mx-auto md:py-24">
          <div className="mb-8">
            <Link href={isPastEvent ? "/past-events" : "/events"}>
              <Button variant="ghost" className="pl-0 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to {isPastEvent ? "Past Events" : "Events"}
              </Button>
            </Link>
            <h1 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{event.title}</h1>

            <div className="flex flex-col md:flex-row gap-4 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <time dateTime={event.date}>
                  {eventDate.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              {event.location && (
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              )}

              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span>
                  {eventDate.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </span>
              </div>
            </div>
          </div>

          {/* Main event image */}
          <div className="mb-8 overflow-hidden rounded-lg aspect-video">
            <Image
              src={event.images[0] || "/placeholder.svg?height=600&width=1200&text=Event"}
              alt={event.title}
              width={1200}
              height={600}
              className="object-cover w-full"
            />
          </div>

          {/* Event description */}
          <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
            <p className="text-lg">{event.description}</p>
            {event.content && <div dangerouslySetInnerHTML={{ __html: event.content }} />}
          </div>

          {/* Event gallery */}
          {event.images.length > 1 && (
            <div className="my-12">
              <h2 className="text-2xl font-bold mb-6">Event Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {event.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={image || "/placeholder.svg?height=400&width=400&text=Event"}
                      alt={`${event.title} image ${index + 2}`}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Registration button for upcoming events */}
          {!isPastEvent && event.registrationLink && (
            <div className="mt-8">
              <Link href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                <Button className="w-full md:w-auto bg-secondary hover:bg-secondary/90">
                  Register for this Event <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          )}
        </article>
      </main>
    </div>
  )
}
