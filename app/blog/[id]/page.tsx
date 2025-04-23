import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { NewsletterForm } from "@/components/newsletter-form"
import { getBlogPostById } from "@/lib/data"
import { notFound } from "next/navigation"

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const postId = Number.parseInt(params.id)
  const post = await getBlogPostById(postId)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <article className="container max-w-4xl px-4 py-12 mx-auto md:py-24">
          <div className="mb-8">
            <Link href="/blog">
              <Button variant="ghost" className="pl-0 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
              </Button>
            </Link>
            <h1 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>
            <div className="flex items-center gap-4 mb-8 text-sm text-muted-foreground">
              <time dateTime="2023-04-15">{post.date}</time>
              <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
              <span>{post.author}</span>
            </div>
          </div>

          <div className="mb-8 overflow-hidden rounded-lg aspect-video">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={600}
              className="object-cover w-full"
            />
          </div>

          <div
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />

          <div className="p-8 mt-12 border rounded-lg bg-muted/50">
            <h3 className="mb-4 text-xl font-bold">Subscribe to Our Newsletter</h3>
            <p className="mb-4 text-muted-foreground">
              Enjoyed this article? Subscribe to get more leadership insights and updates on our events.
            </p>
            <NewsletterForm />
          </div>
        </article>
      </main>
    </div>
  )
}
