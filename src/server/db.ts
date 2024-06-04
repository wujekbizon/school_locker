import { UserData } from "@/types/dbTypes";
import { users } from "./db/schema";
import { db } from "@/server/db/index";
import { eq } from "drizzle-orm";

export async function insertUserToDb(userData: UserData) {
  try {
    await db.insert(users).values(userData);
  } catch (error) {
    console.error("Error inserting users:", error);
  }
}

export async function deleteUserFromDb(id: string) {
  try {
    await db.delete(users).where(eq(users.userId, id));
  } catch (error) {
    console.log("Error deleting user: ", error);
  }
}
