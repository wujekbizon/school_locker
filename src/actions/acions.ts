"use server";

import {
  fromErrorToFormState,
  toFormState,
} from "@/helpers/fromErrorToFormState";
import { db } from "@/server/db";
import { tests } from "@/server/db/schema";
import { createTestSchema, testFileSchema } from "@/server/schema";
import { FormState } from "@/types/actionTypes";
import { auth } from "@clerk/nextjs/server";

// Function to create a single test object
export async function createTest(FormState: FormState, formData: FormData) {
  // Check user authorization
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  try {
    // Extract answers from the form data
    const formDataAnswers = [];
    for (let i = 1; i <= 3; i++) {
      const option = formData.get(`option${i}`);
      const isChecked = formData.has(`checkbox${i}`);
      formDataAnswers.push({ option, isCorrect: isChecked });
    }

    // Validate and destructure form data using Zod schema
    const { answers, category, question } = createTestSchema.parse({
      category: formData.get("category"),
      question: formData.get("question"),
      answers: formDataAnswers,
    });

    // Additional validation for exactly one correct answer
    const correctAnswers = formDataAnswers.filter((answer) => answer.isCorrect);
    if (correctAnswers.length !== 1) {
      return toFormState("ERROR", "Please select exactly one correct answer.");
    }

    // Prepare data for database insertion
    const data = {
      question,
      answers,
    };

    // Insert test data into database
    await db.insert(tests).values({ userId: user.userId, data, category });
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
  if (!file) return toFormState("ERROR", "Please select file!");

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

    // Parse the JSON content from the file
    const parsedData = JSON.parse(fileContent); // Parse JSON to JavaScript

    // Validate the parsed JSON data using Zod schema
    const validationResult = testFileSchema.safeParse(parsedData);

    if (!validationResult.success) {
      console.error("Validation Errors:", validationResult.error.issues);
      return toFormState("ERROR", "Validation Error");
    }
    // Data is valid, proceed with processing
    console.log("Data validated successfully!");
  } catch (error) {
    return fromErrorToFormState(error);
  }

  return toFormState("SUCCESS", "File Uploaded");
}
