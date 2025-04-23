import Image from "next/image"
import { getTeamMembers } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About Us - FAST-LADS",
  description: "Learn about FAST-LADS, our mission, and the team behind our leadership development society.",
}

export default async function AboutPage() {
  // Fetch team members
  const founders = await getTeamMembers("founder")
  const currentMembers = await getTeamMembers("current")

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Introduction Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-neutral">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About FAST-LADS</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Leaders Advancement and Development Society at NUCES FAST
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-8 py-12">
              <div className="aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=600&width=1200&text=FAST-LADS+Team"
                  alt="FAST-LADS Team"
                  width={1200}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Our Story</h2>
                <p className="text-muted-foreground">
                  FAST-LADS (Leaders Advancement and Development Society) was founded with a vision to create a platform
                  where students could develop essential leadership skills and grow both personally and professionally.
                  What started as a small group of passionate individuals has now grown into a vibrant community
                  dedicated to nurturing future leaders.
                </p>
                <p className="text-muted-foreground">
                  Through workshops, seminars, and hands-on experiences, we provide students with the tools and
                  knowledge they need to become effective leaders in their chosen fields. Our focus on practical skills,
                  combined with theoretical knowledge, ensures that our members are well-prepared for the challenges of
                  the real world.
                </p>
                <p className="text-muted-foreground">
                  Based at NUCES FAST Islamabad, we strive to create a positive impact within our university and beyond,
                  fostering a culture of leadership, innovation, and community service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-center">Our Mission</h2>
                <div className="grid gap-6 mt-8">
                  <div className="mission-item">
                    <h3 className="text-xl font-bold text-primary">Inspire</h3>
                    <p className="text-muted-foreground">
                      Motivate students to discover their leadership potential and pursue excellence in all their
                      endeavors.
                    </p>
                  </div>
                  <div className="mission-item">
                    <h3 className="text-xl font-bold text-secondary">Empower</h3>
                    <p className="text-muted-foreground">
                      Provide tools, knowledge, and opportunities for personal and professional growth.
                    </p>
                  </div>
                  <div className="mission-item">
                    <h3 className="text-xl font-bold text-accent">Connect</h3>
                    <p className="text-muted-foreground">
                      Build meaningful relationships between students, alumni, and industry professionals.
                    </p>
                  </div>
                  <div className="mission-item">
                    <h3 className="text-xl font-bold text-primary">Innovate</h3>
                    <p className="text-muted-foreground">
                      Encourage creative thinking and novel approaches to leadership challenges.
                    </p>
                  </div>
                  <div className="mission-item">
                    <h3 className="text-xl font-bold text-secondary">Impact</h3>
                    <p className="text-muted-foreground">
                      Create positive change within our university and the broader community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-neutral">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Founders</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The visionaries who started it all
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {founders.map((founder) => (
                <Card key={founder.id} className="bg-background/50 backdrop-blur-sm border-primary/10">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-primary">
                        <Image
                          src={founder.image || "/placeholder.svg"}
                          alt={founder.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-2 text-center">
                        <h3 className="text-xl font-bold">{founder.name}</h3>
                        <p className="text-sm text-primary">{founder.position}</p>
                        <p className="text-sm text-muted-foreground">{founder.bio}</p>

                        {founder.socialLinks && (
                          <div className="flex justify-center space-x-3 pt-2">
                            {founder.socialLinks.linkedin && (
                              <Link
                                href={founder.socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary"
                              >
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                              </Link>
                            )}
                            {founder.socialLinks.twitter && (
                              <Link
                                href={founder.socialLinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary"
                              >
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                              </Link>
                            )}
                            {founder.socialLinks.email && (
                              <Link
                                href={`mailto:${founder.socialLinks.email}`}
                                className="text-muted-foreground hover:text-primary"
                              >
                                <Mail className="h-5 w-5" />
                                <span className="sr-only">Email</span>
                              </Link>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Current EC Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Current Executive Council
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the team leading FAST-LADS today
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3 lg:grid-cols-4">
              {currentMembers.map((member) => (
                <div key={member.id} className="flex flex-col items-center space-y-3">
                  <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-accent">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="space-y-1 text-center">
                    <h3 className="font-medium">{member.name}</h3>
                    <p className="text-sm text-accent">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-neutral">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions or want to collaborate? Reach out to us!
                </p>
              </div>
              <div className="mx-auto max-w-md space-y-4 py-8">
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:ladsfastisb@gmail.com" className="text-primary hover:underline">
                    ladsfastisb@gmail.com
                  </a>
                </div>
                <p className="text-muted-foreground">
                  NUCES FAST, Islamabad Campus
                  <br />
                  A.K. Brohi Road, H-11/4, Islamabad
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
