export interface BlogPost {
  id: number
  title: string
  date: string
  excerpt: string
  image: string
  content?: string
  author?: string
}

export interface Event {
  id: number
  title: string
  date: string
  description: string
  images: string[]
  semester: string
  featured: boolean
}

export interface TeamMember {
  id: number
  name: string
  position: string
  image: string
  bio: string
  type: "founder" | "current" | "past"
  order: number
}

export interface NewsletterSubscription {
  email: string
  subscribed: boolean
  subscribedAt: Date
}
