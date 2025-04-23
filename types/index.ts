export interface BlogPost {
  id: string | number
  title: string
  slug?: string
  date?: string
  publishedAt?: string
  excerpt: string
  content?: string
  image: string
  author?: string
  featured?: boolean
}

export interface Event {
  id: string | number
  title: string
  date: string
  description: string
  content?: string
  images: string[]
  location?: string
  semester?: string
  featured?: boolean
  registrationLink?: string
}

export interface TeamMember {
  id: string | number
  name: string
  position: string
  image: string
  bio: string
  type: "founder" | "current" | "past"
  socialLinks?: {
    linkedin?: string
    twitter?: string
    email?: string
  }
  order: number
}

export interface NewsletterSubscription {
  email: string
  subscribed: boolean
  subscribedAt: Date
}

export interface MissionItem {
  title: string
  description: string
  icon: string
}
