import dataStore from "./data-store"
import type { BlogPost, Event, TeamMember } from "@/types"

// Helper to determine if we should use Firebase or local data
const shouldUseFirebase =
  typeof window !== "undefined" &&
  process.env.NEXT_PUBLIC_USE_FIREBASE === "true" &&
  process.env.NEXT_PUBLIC_FIREBASE_API_KEY !== undefined

// Blog posts
export const getBlogPosts = async (featured = false, limitCount = 0): Promise<BlogPost[]> => {
  // Always use local data for initial server-side rendering
  if (typeof window === "undefined") {
    const posts = dataStore.getBlogPosts()
    let filteredPosts = featured ? posts.filter((post) => post.featured) : posts
    if (limitCount > 0) {
      filteredPosts = filteredPosts.slice(0, limitCount)
    }
    return filteredPosts
  }

  // Use Firebase on client-side if enabled
  if (shouldUseFirebase) {
    // Dynamically import Firebase client to avoid SSR issues
    const firebaseClient = await import("./services/firebase-client")
    return firebaseClient.getBlogPosts(featured, limitCount)
  }

  // Fallback to local data
  const posts = dataStore.getBlogPosts()
  let filteredPosts = featured ? posts.filter((post) => post.featured) : posts
  if (limitCount > 0) {
    filteredPosts = filteredPosts.slice(0, limitCount)
  }
  return filteredPosts
}

export const getBlogPostById = async (id: string | number): Promise<BlogPost | undefined> => {
  // Always use local data for initial server-side rendering
  if (typeof window === "undefined") {
    const numId = typeof id === "string" ? Number.parseInt(id, 10) : id
    return dataStore.getBlogPostById(numId)
  }

  // Use Firebase on client-side if enabled
  if (shouldUseFirebase) {
    const stringId = typeof id === "number" ? id.toString() : id
    // Dynamically import Firebase client to avoid SSR issues
    const firebaseClient = await import("./services/firebase-client")
    const post = await firebaseClient.getDocumentById<BlogPost>("blogPosts", stringId)
    return post || undefined
  }

  // Fallback to local data
  const numId = typeof id === "string" ? Number.parseInt(id, 10) : id
  return dataStore.getBlogPostById(numId)
}

// Events
export const getEvents = async (featured = false, past = false, limitCount = 0): Promise<Event[]> => {
  // Always use local data for initial server-side rendering
  if (typeof window === "undefined") {
    return getLocalEvents(featured, past, limitCount)
  }

  // Use Firebase on client-side if enabled
  if (shouldUseFirebase) {
    // Dynamically import Firebase client to avoid SSR issues
    const firebaseClient = await import("./services/firebase-client")
    return firebaseClient.getEvents(featured, past, limitCount)
  }

  // Fallback to local data
  return getLocalEvents(featured, past, limitCount)
}

// Helper function to get events from local data store
const getLocalEvents = (featured = false, past = false, limitCount = 0): Event[] => {
  const events = dataStore.getEvents()
  const now = new Date()

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date)
    const isPast = eventDate < now

    if (past) {
      return isPast && (featured ? event.featured : true)
    } else {
      return !isPast && (featured ? event.featured : true)
    }
  })

  // Sort by date
  filteredEvents.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return past ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime()
  })

  if (limitCount > 0) {
    filteredEvents = filteredEvents.slice(0, limitCount)
  }

  return filteredEvents
}

export const getEventById = async (id: string | number): Promise<Event | undefined> => {
  // Always use local data for initial server-side rendering
  if (typeof window === "undefined") {
    const numId = typeof id === "string" ? Number.parseInt(id, 10) : id
    return dataStore.getEventById(numId)
  }

  // Use Firebase on client-side if enabled
  if (shouldUseFirebase) {
    const stringId = typeof id === "number" ? id.toString() : id
    // Dynamically import Firebase client to avoid SSR issues
    const firebaseClient = await import("./services/firebase-client")
    const event = await firebaseClient.getDocumentById<Event>("events", stringId)
    return event || undefined
  }

  // Fallback to local data
  const numId = typeof id === "string" ? Number.parseInt(id, 10) : id
  return dataStore.getEventById(numId)
}

// Team members
export const getTeamMembers = async (type: string | null = null): Promise<TeamMember[]> => {
  // Always use local data for initial server-side rendering
  if (typeof window === "undefined") {
    return dataStore.getTeamMembers(type)
  }

  // Use Firebase on client-side if enabled
  if (shouldUseFirebase) {
    // Dynamically import Firebase client to avoid SSR issues
    const firebaseClient = await import("./services/firebase-client")
    return firebaseClient.getTeamMembers(type)
  }

  // Fallback to local data
  return dataStore.getTeamMembers(type)
}

// Slideshow images
export const getSlideshowImages = async (): Promise<string[]> => {
  // Always use local data for slideshow images
  return dataStore.getSlideshowImages()
}

// Newsletter subscription
export const subscribeToNewsletter = async (email: string): Promise<{ success: boolean; message: string }> => {
  // Use Firebase on client-side if enabled
  if (shouldUseFirebase) {
    // Dynamically import Firebase client to avoid SSR issues
    const firebaseClient = await import("./services/firebase-client")
    return firebaseClient.subscribeToNewsletter(email)
  }

  // Fallback to local data
  return dataStore.subscribeToNewsletter(email)
}
