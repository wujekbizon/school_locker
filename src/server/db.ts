import { UserData } from "@/types/dbTypes";
import { users, userProgress } from "./db/schema";
import { db } from "@/server/db/index";
import { eq } from "drizzle-orm";

export async function insertUserToDb(userData: UserData) {
  try {
    await db.insert(users).values(userData);
  } catch (error) {
    console.error("Error inserting users:", error);
    throw new Error("Database Error!");
  }
}

export async function deleteUserFromDb(id: string) {
  try {
    await db.delete(users).where(eq(users.userId, id));
  } catch (error) {
    console.log("Error deleting user: ", error);
    throw new Error("Database Error!");
  }
}

export async function initializeUserProgress(id: string) {
  const initialUserProgress = {
    userId: id,
  };
  try {
    await db.insert(userProgress).values(initialUserProgress);
  } catch (error) {
    console.log("Error initializing user progress");
    throw new Error("Database Error!");
  }
}
