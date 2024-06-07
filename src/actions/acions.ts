"use server";

import { calculateExperiencePoints } from "@/helpers/calculateExperiencePoints";
import { calculateLevelUp } from "@/helpers/calculateLevelUp";
import { countTestScore } from "@/helpers/countTestScore";
import { determineTestCategory } from "@/helpers/determineTestCategory";
import { extractAnswerData } from "@/helpers/extractAnswerData";
import {
  fromErrorToFormState,
  toFormState,
} from "@/helpers/fromErrorToFormState";
import { parseAnswerRecord } from "@/helpers/parseAnswerRecords";
import { db } from "@/server/db/index";
import { tests } from "@/server/db/schema";
import { completedTests, userProgress } from "@/server/db/schema";
import { getCurrentUserProgress } from "@/server/queries";
import {
  answersSchema,
  createTestSchema,
  testFileSchema,
} from "@/server/schema";
import type { FormState } from "@/types/actionTypes";
import { UserProgress } from "@/types/dbTypes";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

// Function to create a single test object
export async function createTestAction(
  formState: FormState,
  formData: FormData,
) {
  // Check user authorization
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  try {
    // Extract answers from formData
    const answersData = extractAnswerData(formData);

    // Determine the chosen category
    const testCategory = determineTestCategory(formData);

    // Validate and destructure form data using Zod schema
    const { answers, category, question } = createTestSchema.parse({
      category: testCategory,
      question: formData.get("question"),
      answers: answersData,
    });

    // Additional validation for exactly one correct answer
    const correctAnswers = answersData.filter((answer) => answer.isCorrect);
    if (correctAnswers.length !== 1) {
      return toFormState("ERROR", "Please select exactly one correct answer.");
    }

    // Prepare data for database insertion
    const data = {
      question,
      answers,
    };

    // Insert test data into database
    await db
      .insert(tests)
      .values({ userId: user.userId, data, category: category.toLowerCase() });
  } catch (error) {
    return fromErrorToFormState(error);
  }

  return toFormState("SUCCESS", "Test Created");
}

// Function to upload tests from a file
export async function uploadTestsFromFile(
  FormState: FormState,
  formData: FormData,
) {
  // Check user authorization
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  // Get the uploaded file
  const file = formData.get("file") as File;
  if (!file) throw new Error("Please select file!");

  try {
    // Read the file content chunk by chunk
    const fileReader = file.stream().getReader();
    const testsDataU8: Uint8Array[] = [];

    while (true) {
      const { done, value } = await fileReader.read();
      if (done) break;
      testsDataU8.push(value as Uint8Array);
    }

    // Reconstruct the file content from chunks
    const testsBinary = Buffer.concat(testsDataU8);
    const fileContent = testsBinary.toString("utf8"); // Decode Buffer as UTF-8 string

    if (!fileContent)
      return toFormState("ERROR", "Please select file for upload!");

    // Parse the JSON content from the file
    const parsedData = JSON.parse(fileContent); // Parse JSON to JavaScript

    // Validate the parsed JSON data using Zod schema
    const validationResult = await testFileSchema.safeParseAsync(parsedData);

    if (!validationResult.success) {
      console.error("Validation Errors:", validationResult.error.issues);
      return toFormState(
        "ERROR",
        "Incorrect data format, please check documentation how to prepare your test data file",
      );
    }

    // Data is valid, proceed with processing
    const validatedData = validationResult.data;

    const insertPromises = validatedData.map(async (testData) => {
      await db.insert(tests).values({
        userId: user.userId,
        data: testData.data,
        category: testData.category,
      });
    });

    await Promise.all(insertPromises);
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error("Error parsing JSON:", error.message);
      return toFormState(
        "ERROR",
        "The content appears to be invalid JSON. Please ensure it's valid JSON data.",
      );
    } else {
      return fromErrorToFormState(error);
    }
  }
  return toFormState("SUCCESS", "File Uploaded");
}

export async function submitTestAction(
  formState: FormState,
  formData: FormData,
) {
  // Check user authorization
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  const answers: Record<string, string>[] = [];

  formData.forEach((value, key) => {
    if (key.slice(0, 6) === "answer") {
      answers.push({ [key]: value.toString() });
    }
  });

  try {
    // Validate the parsed JSON data using Zod schema
    const validationResult = answersSchema.safeParse(answers);

    if (!validationResult.success) {
      return toFormState("ERROR", "Please answer question");
    }

    // Processing test results to get score
    const { correct } = countTestScore(validationResult?.data);

    // Parses an array of question-answer records and transforms it into an array of formatted
    // answers containing all question IDs and values for future database storage.
    const testResult = parseAnswerRecord(validationResult?.data);

    // Completed test object
    const completedTest = {
      userId: user.userId,
      score: correct,
      testResult,
    };

    // getting current user progress
    const currentUserProgress = (await getCurrentUserProgress(user.userId)) as
      | UserProgress
      | undefined;

    if (!currentUserProgress) {
      throw new Error("User progress not found");
    }

    // Destructuring userProgress object
    const { totalCompletedTests, lastTestId, userExperience, userLevel } =
      currentUserProgress;
    // calculate exerience that user gained for current test
    const gainedExp = calculateExperiencePoints(correct, userLevel.level);
    // re-calculate total user exp
    const recalculatedExp = userLevel.currentExp + gainedExp;

    const calculatedUserLevel = calculateLevelUp(userLevel, recalculatedExp);
    const updatedUserProgress = {
      ...currentUserProgress,
      userLevel: calculatedUserLevel,
      totalCompletedTests: [...totalCompletedTests, completedTest],
      userExperience: userExperience + recalculatedExp,
      updatedAt: new Date(),
    };

    const result = await db.transaction(async (tx) => {
      await tx.insert(completedTests).values(completedTest);
      await tx
        .update(userProgress)
        .set(updatedUserProgress)
        .where(eq(userProgress.userId, user.userId));
    });

    console.log(result);
  } catch (error) {
    return fromErrorToFormState(error);
  }

  toFormState("SUCCESS", "Test Successfully Submitted!");
  redirect("/dashboard/learn/test-result");
}
