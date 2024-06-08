import "server-only";
import { UserData } from "@/types/dbTypes";
import { users, userProgress } from "./db/schema";
import { db } from "@/server/db/index";
import { eq } from "drizzle-orm";

export async function insertUserToDb(userData: UserData): Promise<void> {
  /**
   * Inserts a new user record into the database.
   *
   * @param {UserData} userData - The user data object containing information about the new user.
   * @throws {Error} - Re-throws any errors encountered during database insertion,
   *                   providing a more informative message.
   */

  console.log(userData);
  try {
    await db.insert(users).values(userData);
  } catch (error) {
    console.error("Error inserting users:", error);
    // Ensure the error is actually an Error object before re-throwing
    if (error instanceof Error) {
      throw new Error(
        `An error occurred while inserting the user into the database: ${error.message}`,
      );
    } else {
      // Handle non-Error type errors
      console.error("Unexpected error type:", error);
      // DO IT LATER: throw a custom error or handle it differently here
    }
  }
}

export async function deleteUserFromDb(id: string): Promise<void> {
  /**
   * Deletes a user record from the database based on the provided ID.
   *
   * @param {string} id - The ID of the user to delete.
   * @throws {Error} - Re-throws any errors encountered during database deletion,
   *                   providing a more informative message.
   */
  try {
    console.log(id);
    await db.delete(users).where(eq(users.userId, id));
  } catch (error) {
    console.error("Error deleting user:", error);
    // Ensure the error is actually an Error object before re-throwing
    if (error instanceof Error) {
      throw new Error(
        `An error occurred while deleting the user from the database: ${error.message}`,
      );
    } else {
      // Handle non-Error type errors
      console.error("Unexpected error type:", error);
      // DO IT LATER: throw a custom error or handle it differently here
    }
  }
}

export async function initializeUserProgress(userId: string): Promise<void> {
  /**
   * Creates a new user progress record with initial values.
   *
   * @param {string} id - The ID of the user to initialize progress for.
   * @throws {Error} - Re-throws any errors encountered during user progress initialization,
   *                   providing a more informative message.
   */
  const initialUserProgress = {
    userId,
  };
  try {
    await db.insert(userProgress).values(initialUserProgress);
  } catch (error) {
    console.error("Error initializing user progress:", error);
    // Ensure the error is actually an Error object before re-throwing
    if (error instanceof Error) {
      throw new Error(
        `An error occurred while initializing user progress: ${error.message}`,
      );
    } else {
      // Handle non-Error type errors
      console.error("Unexpected error type:", error);
      // DO IT LATER: throw a custom error or handle it differently here
    }
  }
}
