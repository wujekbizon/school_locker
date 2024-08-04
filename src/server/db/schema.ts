import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  jsonb,
  integer,
  uuid,
  pgEnum,
  text,
} from "drizzle-orm/pg-core";

/**
 * Creates a table name with the provided prefix and a custom suffix.
 *
 * @param {string} name - The custom suffix to be appended to the table name.
 * @returns {string} - The generated table name.
 *
 * @example
 * const lockerTable = createTable((name) => `school_locker_${name}`);
 * // lockerTable would be "school_locker_[your_custom_suffix]"
 *
 **/
export const createTable = pgTableCreator((name) => `school_locker_${name}`);

/**
 * Defines the "users" table schema in the database.
 *
 * This table stores information about users of the application.
 */
export const users = createTable(
  "users",
  {
    id: uuid("id").primaryKey().defaultRandom(), // Unique identifier for the user record (auto-incrementing).
    userId: varchar("userId", { length: 256 }).notNull().unique(), // Unique identifier provided by Clerk for the user.
    imageUrl: varchar("imageUrl").default(""), // User's profile picture URL (optional)
    motto: varchar("motto").default(""), // User's motto or quote (optional)
    personality: varchar("personality").default(""), // User's personality description (optional).
    educationalPath: jsonb("educationalPath").default([]), // User's education path information stored as JSON data.
    createdAt: timestamp("createdAt").default(sql`CURRENT_TIMESTAMP`), // Timestamp of the user record creation.
    updatedAt: timestamp("updatedAt").notNull(), // Timestamp of the last user record update.
  },
  (table) => ({
    /**
     * Index on the "userId" column for faster lookups by user ID.
     */
    userIdIndex: index("usersUserId").on(table.userId),
  }),
);

/**
 * Defines the "tests" table schema in the database.
 *
 * This table stores information about tests created by users.
 */
export const tests = createTable("tests", {
  id: uuid("id").primaryKey().defaultRandom(), // Unique identifier for the test record (auto-incrementing).
  userId: varchar("userId", { length: 256 }).notNull(), // Unique identifier provided by Clerk for the user who created the test.
  category: varchar("category", { length: 256 }).notNull(), // Test category (English, Law, etc.)
  data: jsonb("data").notNull(), // Test data object stored in JSON format, likely referencing a specific data structure.
  createdAt: timestamp("createdAt") // Timestamp of the test record creation (defaults to current timestamp).
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt"), // Timestamp of the last test record update.
});

/**
 * Defines the "user_progress" table schema in the database.
 *
 * This table stores information about user progress within the application.
 */
export const userProgress = createTable("user_progress", {
  id: uuid("id").primaryKey().defaultRandom(), // Unique identifier for the user progress record (auto-incrementing).
  userId: varchar("userId", { length: 256 })
    .notNull()
    .references(() => users.userId, { onDelete: "cascade" }), // Unique identifier provided by Clerk for the user.
  /**
   * User's level information stored in JSON format.
   * Contains properties like "level", "currentExp", and "neededExp".
   * (Default value: {"level": 1, "currentExp": 0, "neededExp": 100})
   */
  userLevel: jsonb("level")
    .notNull()
    .default('{"level": 1, "currentExp": 0, "neededExp": 100}'),
  // NOTE: totalExperience column name can be renamed to userExperience on next db wipe
  userExperience: integer("totalExperience").default(0).notNull(), // Total accumulated experience points
  totalCreatedTests: jsonb("totalCreatedTests").default([]), // Json that holds all tests created by user
  totalCompletedTests: jsonb("totalCompletedTests").default([]), // Json that holds all tests completed by user
  lastTestId: uuid("lastTestId").references(() => completedTests.id),
  badges: jsonb("badges").default([]), // Array of earned badge IDs (e.g., [1, 2])
  createdAt: timestamp("createdAt")
    .default(sql`CURRENT_TIMESTAMP`) // Timestamp of the test record creation (defaults to current timestamp).
    .notNull(),
  updatedAt: timestamp("updatedAt"), // Timestamp of the last test record update.
});

/**
 * Defines the "completed_tests" table schema in the database.
 *
 * This table stores information about tests completed by users.
 */
export const completedTests = createTable("completed_tests", {
  id: uuid("id").primaryKey().defaultRandom(), // Unique identifier for the completed test record (auto-incrementing).
  userId: varchar("userId", { length: 256 })
    .notNull()
    .references(() => users.userId, { onDelete: "cascade" }), // Unique identifier provided by Clerk for the user who completed the test.
  testResult: jsonb("testResult").default([]), // User's test results stored in JSON format
  score: integer("score").notNull(), // User's score achieved on the completed test.
  completedAt: timestamp("completedAt") // Timestamp of the test completion (defaults to current timestamp).
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

/**
 * Defines the "assignments" table schema in the database.
 *
 * This table stores information about assignments created by user.
 */

// create enum for status
const statusEnum = pgEnum("status", ["Pending", "Progress", "Completed"]);

export const assignments = createTable(
  "assignments ",
  {
    id: uuid("id").primaryKey().defaultRandom(), // Unique identifier for the test record (auto-incrementing).
    userId: varchar("userId", { length: 256 }).notNull(), // Unique identifier provided by Clerk for the user who created the test.
    imageUrl: varchar("imageUrl").default(""), // Assingment image
    title: varchar("title", { length: 256 }).notNull(),
    status: statusEnum("color"),
    description: text("description"),
    dueDate: timestamp("dueDate"),
    content: jsonb("content"), // Test data object stored in JSON format, likely referencing a specific data structure.
    submissionGuidelines: text("submissionGuidelines"), // Optional, it'd provide specific instructions or requirements for how students should submit their assignments.
    createdAt: timestamp("createdAt") // Timestamp of the test record creation (defaults to current timestamp).
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"), // Timestamp of the last test record update.
  },
  (table) => ({
    /**
     * Index on the "userId" column for faster lookups by user ID.
     */
    userIdIndex: index("usersUserId").on(table.userId),
  }),
);
