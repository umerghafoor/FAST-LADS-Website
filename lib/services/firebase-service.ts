import { db } from "../firebase"
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
  type DocumentData,
} from "firebase/firestore"
import type { BlogPost, Event, TeamMember, NewsletterSubscription } from "@/types"

// Generic function to get all documents from a collection
export async function getCollection<T>(collectionName: string): Promise<T[]> {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName))
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as T[]
  } catch (error) {
    console.error(`Error getting ${collectionName}:`, error)
    return []
  }
}

// Generic function to get a document by ID
export async function getDocumentById<T>(collectionName: string, id: string): Promise<T | null> {
  try {
    const docRef = doc(db, collectionName, id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      } as T
    } else {
      return null
    }
  } catch (error) {
    console.error(`Error getting ${collectionName} document:`, error)
    return null
  }
}

// Generic function to add a document
export async function addDocument<T>(collectionName: string, data: T): Promise<string | null> {
  try {
    const docRef = await addDoc(collection(db, collectionName), data)
    return docRef.id
  } catch (error) {
    console.error(`Error adding ${collectionName} document:`, error)
    return null
  }
}

// Generic function to update a document
export async function updateDocument<T>(collectionName: string, id: string, data: Partial<T>): Promise<boolean> {
  try {
    const docRef = doc(db, collectionName, id)
    await updateDoc(docRef, data as DocumentData)
    return true
  } catch (error) {
    console.error(`Error updating ${collectionName} document:`, error)
    return false
  }
}

// Generic function to delete a document
export async function deleteDocument(collectionName: string, id: string): Promise<boolean> {
  try {
    const docRef = doc(db, collectionName, id)
    await deleteDoc(docRef)
    return true
  } catch (error) {
    console.error(`Error deleting ${collectionName} document:`, error)
    return false
  }
}

// Blog post specific functions
export async function getBlogPosts(featured = false, limitCount = 0): Promise<BlogPost[]> {
  try {
    let q = collection(db, "blogPosts")

    if (featured) {
      q = query(q, where("featured", "==", true))
    }

    q = query(q, orderBy("publishedAt", "desc"))

    if (limitCount > 0) {
      q = query(q, limit(limitCount))
    }

    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      publishedAt: doc.data().publishedAt?.toDate().toISOString() || new Date().toISOString(),
    })) as BlogPost[]
  } catch (error) {
    console.error("Error getting blog posts:", error)
    return []
  }
}

// Event specific functions
export async function getEvents(featured = false, past = false, limitCount = 0): Promise<Event[]> {
  try {
    let q = collection(db, "events")
    const now = new Date()

    if (featured) {
      q = query(q, where("featured", "==", true))
    }

    if (past) {
      q = query(q, where("date", "<", now))
    } else {
      q = query(q, where("date", ">=", now))
    }

    q = query(q, orderBy("date", past ? "desc" : "asc"))

    if (limitCount > 0) {
      q = query(q, limit(limitCount))
    }

    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      date: doc.data().date?.toDate().toISOString() || new Date().toISOString(),
    })) as Event[]
  } catch (error) {
    console.error("Error getting events:", error)
    return []
  }
}

// Team member specific functions
export async function getTeamMembers(type: string | null = null): Promise<TeamMember[]> {
  try {
    let q = collection(db, "teamMembers")

    if (type) {
      q = query(q, where("type", "==", type))
    }

    q = query(q, orderBy("order", "asc"))

    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as TeamMember[]
  } catch (error) {
    console.error("Error getting team members:", error)
    return []
  }
}

// Newsletter subscription
export async function subscribeToNewsletter(email: string): Promise<{ success: boolean; message: string }> {
  try {
    // Check if email already exists
    const q = query(collection(db, "newsletterSubscriptions"), where("email", "==", email))
    const querySnapshot = await getDocs(q)

    if (!querySnapshot.empty) {
      const existingSubscription = querySnapshot.docs[0].data() as NewsletterSubscription
      const docId = querySnapshot.docs[0].id

      if (existingSubscription.subscribed) {
        return {
          success: true,
          message: "You are already subscribed to our newsletter",
        }
      } else {
        // Resubscribe
        await updateDoc(doc(db, "newsletterSubscriptions", docId), {
          subscribed: true,
          subscribedAt: Timestamp.now(),
        })

        return {
          success: true,
          message: "Welcome back! You've been resubscribed to our newsletter",
        }
      }
    }

    // Add new subscription
    await addDoc(collection(db, "newsletterSubscriptions"), {
      email,
      subscribed: true,
      subscribedAt: Timestamp.now(),
    })

    return {
      success: true,
      message: "Successfully subscribed to the newsletter",
    }
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return {
      success: false,
      message: "An error occurred while subscribing",
    }
  }
}
