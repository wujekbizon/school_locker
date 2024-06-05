// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  jsonb,
  integer,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */

export const createTable = pgTableCreator((name) => `school_locker_${name}`);

export const users = createTable("users", {
  id: serial("id").primaryKey(),
  userId: varchar("userId", { length: 256 }).notNull(), // Store Clerk-provided user ID
  imageUrl: varchar("imageUrl").default(""), // User's profile picture URL (optional)
  motto: varchar("motto").default(""), // User's motto or quote (optional)
  personality: varchar("personality").default(""),
  educationalPath: jsonb("educationalPath").default([]),
  createdAt: timestamp("createdAt"),
  updatedAt: timestamp("updatedAt"),
});

export const tests = createTable(
  "test",
  {
    id: serial("id").primaryKey(),
    userId: varchar("userId", { length: 256 }).notNull(), // Store Clerk-provided user ID
    category: varchar("category", { length: 256 }).notNull(), // Test category (English, Law, etc.)
    data: jsonb("data").notNull(), // Stores TestDataInterface in JSON format
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
  (table) => ({
    userIdIndex: index("tests_user_id_idx").on(table.userId), // Index on userId
  }),
);

export const userProgress = createTable(
  "user_progress",
  {
    id: serial("id").primaryKey(),
    userId: varchar("userId", { length: 256 }).notNull(), // Store Clerk-provided user ID
    userLevel: jsonb("level")
      .notNull()
      .default('{"level": 1, "currentExp": 0, "neededExp": 100}'), // Level object with level, current experience, and needed experience
    userExperience: integer("totalExperience").default(0).notNull(), // Total accumulated experience points
    totalCreatedTests: jsonb("totalCreatedTests").default([]), // Json that holds all tests created by user
    totalCompletedTests: jsonb("totalCompletedTests").default([]), // Json that holds all tests completed by user
    lastTestId: integer("lastTestId").references(() => completedTests.id),
    badges: jsonb("badges").default([]), // Array of earned badge IDs (e.g., [1, 2])
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
  (table) => ({
    userIdIndex: index("user_progress_user_id_idx").on(table.userId), // Index on userId
  }),
);

export const completedTests = createTable(
  "completed_tests",
  {
    id: serial("id").primaryKey(),
    userId: varchar("userId", { length: 256 }).notNull(),
    testResult: jsonb("testResult").default([]),
    score: integer("score").notNull(), // User's score on the test
    completedAt: timestamp("completedAt")
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`), // Timestamp of test completion
  },
  (table) => ({
    userIdIndex: index("completed_tests_user_id_idx").on(table.userId), // Index on userId
  }),
);
