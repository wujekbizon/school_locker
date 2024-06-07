import { z } from "zod";

/**
 * Schema for validating the data required to create a new test.
 */
export const createTestSchema = z.object({
  category: z.string().min(1, { message: "Please select a category" }),
  question: z
    .string()
    .min(1, { message: "Question field cannot be empty" })
    .max(550, { message: "The length cannot be longer than 550 characters" }),
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

/**
 * Schema for validating test data imported from a file.
 */
export const testFileSchema = z.array(
  z.object({
    data: z.object({
      question: z
        .string()
        .min(1, { message: "Question field cannot be empty" })
        .max(650, {
          message: "The length cannot be longer than 650 characters",
        }),
      answers: z
        .array(
          z.object({
            option: z
              .string()
              .min(1, { message: "Answer field cannot be empty" })
              .max(500, {
                message: "The answer cannot be longer than 500 characters",
              }),
            isCorrect: z.boolean(),
          }),
        )
        .min(2, { message: "Minimum of 2 answer options required" })
        .max(5, { message: "Maximum of 5 answer options allowed" }),
    }),
    category: z.string().min(1, { message: "Category field is required" }),
  }),
);

/**
 * Schema for validating a user's answers to a test.
 * Requires at least one answer and validates the format of each answer.
 */
export const answersSchema = z
  .array(z.record(z.string().min(1, { message: "Please answer a question" })))
  .nonempty({ message: "Please answer all questions" })
  .length(15 || 35 || 50, { message: "Please answer all questions" });
