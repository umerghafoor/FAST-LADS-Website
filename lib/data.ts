import dataStore from "./data-store"
import type { BlogPost, Event, TeamMember } from "@/types"

// Blog posts
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  return dataStore.getBlogPosts()
}

export const getBlogPostById = async (id: number): Promise<BlogPost | undefined> => {
  return dataStore.getBlogPostById(id)
}

// Events
export const getEvents = async (featured = false): Promise<Event[]> => {
  return dataStore.getEvents(featured)
}

export const getEventById = async (id: number): Promise<Event | undefined> => {
  return dataStore.getEventById(id)
}

// Team members
export const getTeamMembers = async (type: string | null = null): Promise<TeamMember[]> => {
  return dataStore.getTeamMembers(type)
}

// Slideshow images
export const getSlideshowImages = async (): Promise<string[]> => {
  return dataStore.getSlideshowImages()
}

// Newsletter subscription
export const subscribeToNewsletter = async (email: string): Promise<{ success: boolean; message: string }> => {
  return dataStore.subscribeToNewsletter(email)
}
