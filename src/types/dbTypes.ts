import { PgUUID } from "drizzle-orm/pg-core";

export interface UserData {
  userId: string;
  imageUrl: string;
  createdAt?: Date;
  updatedAt: Date;
}

export interface UserProgress {
  id: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date | null;
  userLevel: { level: number; neededExp: number; currentExp: number };
  userExperience: number;
  totalCreatedTests: {}[];
  totalCompletedTests: {}[];
  lastTestId: string | null;
  badges: string[];
}

export interface UserLevel {
  level: number;
  currentExp: number;
  neededExp: number;
}

export type QuestionAnswer = Record<string, string>;
export type FormattedAnswer = { questionId: string; answer: boolean };

export interface CompletedTest {
  completedAt?: Date;
  id?: string;
  userId: string;
  score: number;
  testResult: FormattedAnswer[];
}

export type ExtendedCompletedTest = Omit<CompletedTest, "testResult"> & {
  testResult: unknown;
};
