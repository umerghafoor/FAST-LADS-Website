"use server"

import { revalidatePath } from "next/cache"
import { subscribeToNewsletter as addSubscription } from "@/lib/data"

export async function subscribeToNewsletter(formData: FormData) {
  try {
    const email = formData.get("email") as string

    // Validate email
    if (!email || !email.includes("@")) {
      return {
        success: false,
        message: "Please provide a valid email address",
      }
    }

    // On the server, we'll use the local data store directly
    // This will be overridden on the client if Firebase is enabled
    const result = await addSubscription(email)

    // Revalidate the home and blog pages to update any newsletter components
    revalidatePath("/")
    revalidatePath("/blog")

    return result
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return {
      success: false,
      message: "An error occurred while subscribing",
    }
  }
}
