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
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `school-locker_${name}`);

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
  (example) => ({
    nameIndex: index("name_idx").on(example.userId),
  }),
);
