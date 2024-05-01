import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { tests } from "./db/schema";
import { and, eq } from "drizzle-orm";

export async function getAllTests() {
  const tests = await db.query.tests.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return tests;
}

export async function getTestsByCategory(category: string) {
  const tests = await db.query.tests.findMany({
    where: (model, { eq }) => eq(model.category, category),
    orderBy: (model, { desc }) => desc(model.id),
  });

  return tests;
}

export async function getTestsByUser() {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const tests = await db.query.tests.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });

  return tests;
}

export async function deleteTest(id: number) {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  await db
    .delete(tests)
    .where(and(eq(tests.id, id), eq(tests.userId, user.userId)));
}
