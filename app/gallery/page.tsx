"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getEvents, getSlideshowImages } from "@/lib/data"

export default function GalleryPage() {
  const [slideshowImages, setSlideshowImages] = useState<string[]>([])
  const [pastEvents, setPastEvents] = useState<any[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const images = await getSlideshowImages()
        const events = await getEvents(false, true) // Get past events

        setSlideshowImages(images)
        setPastEvents(events)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching gallery data:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slideshowImages.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideshowImages.length - 1 : prev - 1))
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading gallery...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Current Semester Slideshow */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Event Gallery</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Highlights from our events and activities
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="relative overflow-hidden rounded-xl">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={slideshowImages[currentSlide] || "/placeholder.svg"}
                    alt={`Slideshow image ${currentSlide + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Previous slide</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Next slide</span>
                </Button>
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
                  {slideshowImages.map((_, index) => (
                    <button
                      key={index}
                      className={`h-2 w-2 rounded-full ${currentSlide === index ? "bg-primary" : "bg-background/80"}`}
                      onClick={() => setCurrentSlide(index)}
                    >
                      <span className="sr-only">Go to slide {index + 1}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Past Events Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-neutral">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Past Events</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A look back at our previous semesters
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              {pastEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <div className="grid grid-cols-2 gap-2 p-2">
                    {event.images.map((img: string, index: number) => (
                      <div key={index} className="aspect-[4/3] overflow-hidden rounded-md">
                        <Image
                          src={img || "/placeholder.svg"}
                          alt={`${event.title} image ${index + 1}`}
                          width={400}
                          height={300}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                      <p>{event.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
