"use server";

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
import {
  answersSchema,
  createTestSchema,
  testFileSchema,
} from "@/server/schema";
import type { FormState } from "@/types/actionTypes";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { updateUserProgressAfterTest } from "./updateUserProgressAfterTest";
import type { QuestionAnswer } from "@/types/dbTypes";

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

/**
 * Handles the entire test submission process, answer validation, score calculation,
 * user progress update, and redirection to the test results page.
 * Utilizes a drizzle database transaction to ensure data consistency during the update process.
 */
export async function submitTestAction(
  formState: FormState,
  formData: FormData,
) {
  // Check user authorization before allowing submission
  const { userId } = auth();
  if (!userId) throw new Error("Unauthorized");

  try {
    // Extract answer data from the submitted form data
    const answers: QuestionAnswer[] = [];
    formData.forEach((value, key) => {
      if (key.slice(0, 6) === "answer") {
        answers.push({ [key]: value.toString() });
      }
    });
    // Validate the parsed JSON data using Zod schema
    const { success, data, error } = answersSchema.safeParse(answers);

    if (!success) {
      console.log(`Validation error: ${error.issues}`);
      return toFormState("ERROR", "Please answer question");
    }
    // Processing test results to get score
    const { correct } = countTestScore(data);
    // Parses an array of question-answer records and transforms it into an array of formatted
    // answers containing all question IDs and values for future database storage.
    const testResult = parseAnswerRecord(data);

    //Create a completed test object
    const completedTest = { userId, score: correct, testResult };
    // Update user progress after completing the test
    const updatedUserProgress = await updateUserProgressAfterTest(
      userId,
      correct,
      completedTest,
    );

    // // Persist data using a database transaction
    await db.transaction(async (tx) => {
      await tx.insert(completedTests).values(completedTest);
      await tx
        .update(userProgress)
        .set(updatedUserProgress)
        .where(eq(userProgress.userId, userId));
    });
  } catch (error) {
    return fromErrorToFormState(error);
  }
  // Update form state and redirect on success and redirect user to result page
  toFormState("SUCCESS", "Test Successfully Submitted!");
  redirect("/tests-result");
}
