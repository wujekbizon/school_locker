"use server";

import {
  fromErrorToFormState,
  toFormState,
} from "@/helpers/fromErrorToFormState";
import { db } from "@/server/db";
import { tests } from "@/server/db/schema";
import { FormState } from "@/types/actionTypes";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";

export async function createTest(FormState: FormState, formData: FormData) {
  const createTestSchema = z.object({
    number: z.string().min(1, { message: "Test number field cannot be empty" }),
    question: z
      .string()
      .min(1, { message: "Question field cannot be empty" })
      .max(350, { message: "The length cannot be longer than 350 characters" }),
    answers: z.array(
      z.object({
        option: z
          .string()
          .min(1, { message: "Answer field cannot be empty" })
          .max(350, {
            message: "The answer cannot be longer than 350 characters",
          }),
        isCorrect: z.boolean(),
      }),
    ),
  });

  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  try {
    const formDataAnswers = [];
    for (let i = 1; i <= 3; i++) {
      const option = formData.get(`option${i}`);
      const isChecked = formData.has(`checkbox${i}`);
      formDataAnswers.push({ option, isCorrect: isChecked });
    }

    const parseResult = createTestSchema.parse({
      number: formData.get("number"),
      question: formData.get("question"),
      answers: formDataAnswers,
    });

    // Additional validation for exactly one correct answer
    const correctAnswers = formDataAnswers.filter((answer) => answer.isCorrect);

    if (correctAnswers.length !== 1) {
      return toFormState("ERROR", "Please select exactly one correct answer.");
    }

    await db
      .insert(tests)
      .values({ userId: user.userId, data: parseResult, category: "test" });
  } catch (error) {
    return fromErrorToFormState(error);
  }

  return toFormState("SUCCESS", "Test Created");
}
