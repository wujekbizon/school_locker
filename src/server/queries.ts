import "server-only";
import { db } from "@/server/db/index";
import { auth } from "@clerk/nextjs/server";
import { tests } from "./db/schema";
import { and, eq } from "drizzle-orm";
import type { ExtendedTestsData } from "@/types/testData";
import { ExtendedCompletedTest } from "@/types/dbTypes";

/**
 * Fetches all test records from the database, ordered by ID in descending order.
 */
export async function getAllTests(): Promise<ExtendedTestsData[]> {
  const tests = await db.query.tests.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return tests;
}

// this getting all completed test , it might get handy when we do Score Board
export async function getAllCompletedTests(): Promise<ExtendedCompletedTest[]> {
  const completedTests = await db.query.completedTests.findMany({
    orderBy: (model, { desc }) => desc(model.userId),
  });
  return completedTests;
}

// get all tests by user
export async function getCompletedTestsByUser(
  userId: string,
): Promise<ExtendedCompletedTest[]> {
  const completedTests = await db.query.completedTests.findMany({
    where: (model, { eq }) => eq(model.userId, userId),
    orderBy: (model, { desc }) => desc(model.completedAt),
  });

  return completedTests;
}

export async function getCompletedTest(testId: string) {
  const completedTest = await db.query.completedTests.findFirst({
    where: (model, { eq }) => eq(model.id, testId),
  });

  return completedTest;
}

/**
 * Retrieves all test records from the database that belong to the specified category,
 * ordered by ID in descending order.
 */
export async function getTestsByCategory(category: string) {
  const tests = await db.query.tests.findMany({
    where: (model, { eq }) => eq(model.category, category),
    orderBy: (model, { desc }) => desc(model.id),
  });

  return tests;
}

export async function getQuestionById(testId: string) {
  const question = await db.query.tests.findFirst({
    where: (model, { eq }) => eq(model.id, testId),
  });

  return question;
}

/**
 * Counts the number of test records in the database that belong to the specified category.
 */
export async function countTestsByCategory(category: string) {
  const testsCount = await db.query.tests
    .findMany({
      where: (model, { eq }) => eq(model.category, category),
    })
    .then((tests) => tests.length);

  return testsCount;
}

/**
 * Fetches all test records for the currently authenticated user, ordered by ID in descending order.
 */
export async function getTestsByUser() {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const tests = await db.query.tests.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });

  return tests;
}

/**
 * Deletes a specific test record from the database, ensuring it belongs to the authenticated user.
 */
export async function deleteTest(id: string) {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  await db
    .delete(tests)
    .where(and(eq(tests.id, id), eq(tests.userId, user.userId)));
}

/**
 * Retrieves a list of unique categories present in the test table.
 */
export async function getCategories() {
  const categories = await db.select({ category: tests.category }).from(tests);
  return categories;
}

/**
 * Get user progress
 */
export async function getCurrentUserProgress(id: string) {
  const userProgress = await db.query.userProgress.findFirst({
    where: (model, { eq }) => eq(model.userId, id),
  });

  return userProgress;
}
