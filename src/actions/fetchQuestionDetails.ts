import { getQuestionById } from "@/server/queries";
import { FormattedAnswer } from "@/types/dbTypes";
import { TestsData } from "@/types/testData";

export async function fetchQuestionDetails(results: FormattedAnswer[]) {
  // Fetch question details in parallel for each formatted answer
  const questionDetailsPromises = results.map(async (result) => {
    const testData = (await getQuestionById(result.questionId)) as TestsData;
    const userCorrectAnswer = testData?.data.answers.find(
      (answer) => answer.isCorrect === result.answer,
    );

    if (!userCorrectAnswer) {
      return;
    }

    return { testData, userCorrectAnswer };
  });

  // Wait for all promises to resolve and return the details
  const resolvedDetails = await Promise.all(questionDetailsPromises);

  return resolvedDetails;
}
