import Image from "next/image"
import { getTeamMembers } from "@/lib/data"

export default async function AboutPage() {
  // Fetch team members
  const founders = await getTeamMembers("founder")
  const currentMembers = await getTeamMembers("current")

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Introduction Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About FAST-LADS</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our journey of building leaders for tomorrow
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-8 py-12">
              <div className="aspect-video overflow-hidden rounded-xl">
                <div className="flex items-center justify-center w-full h-full bg-muted">
                  <p className="text-muted-foreground">Video introduction will be placed here</p>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Story</h2>
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
              </div>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
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
                <div key={founder.id} className="flex flex-col items-center space-y-4">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full">
                    <Image src={founder.image || "/placeholder.svg"} alt={founder.name} fill className="object-cover" />
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">{founder.name}</h3>
                    <p className="text-sm text-muted-foreground">{founder.position}</p>
                    <p className="text-sm">{founder.bio}</p>
                  </div>
                </div>
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
                  <div className="relative h-32 w-32 overflow-hidden rounded-full">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="space-y-1 text-center">
                    <h3 className="font-medium">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Teams Section (Placeholder) */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Past Teams</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A tribute to those who contributed to our journey
                </p>
              </div>
              <div className="w-full max-w-3xl py-12">
                <div className="rounded-lg border bg-card p-8 text-center shadow-sm">
                  <p className="text-muted-foreground">
                    This section will be updated with information about past teams and their contributions to FAST-LADS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
