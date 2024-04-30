"use server";

import {
  fromErrorToFormState,
  toFormState,
} from "@/helpers/fromErrorToFormState";
import { FormState } from "@/types/actionTypes";
import { z } from "zod";
import { revalidatePath } from "next/cache";

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

    console.log(parseResult);

    // Additional validation for exactly one correct answer
    const correctAnswers = formDataAnswers.filter((answer) => answer.isCorrect);

    if (correctAnswers.length !== 1) {
      throw new Error("Please select exactly one correct answer.");
    }
  } catch (error) {
    return fromErrorToFormState(error);
  }

  revalidatePath("/dashboard/tests");
  return toFormState("SUCCESS", "Test Created");
}
