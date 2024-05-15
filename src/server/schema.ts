import { z } from "zod";

export const createTestSchema = z.object({
  category: z.string().min(1, { message: "Please select a category" }),
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

export const testFileSchema = z.array(
  z.object({
    data: z.object({
      question: z
        .string()
        .min(1, { message: "Question field cannot be empty" })
        .max(350, {
          message: "The length cannot be longer than 350 characters",
        }),
      answers: z
        .array(
          z.object({
            option: z
              .string()
              .min(1, { message: "Answer field cannot be empty" })
              .max(350, {
                message: "The answer cannot be longer than 350 characters",
              }),
            isCorrect: z.boolean(),
          }),
        )
        .min(2, { message: "Minimum of 2 answer options required" })
        .max(4, { message: "Maximum of 4 answer options allowed" }),
    }),
    category: z.string().min(1, { message: "Category field is required" }),
  }),
);

export const answerSchema = z
  .string()
  .min(1, { message: "Please select an answer" });
