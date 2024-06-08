import { calculateExperiencePoints } from "@/helpers/calculateExperiencePoints";
import { calculateLevelUp } from "@/helpers/calculateLevelUp";
import { getCurrentUserProgress } from "@/server/queries";
import type { CompletedTest, UserProgress } from "@/types/dbTypes";

export async function updateUserProgressAfterTest(
  userId: string,
  numberOfCorrectAnswers: number,
  completedTest: CompletedTest,
): Promise<UserProgress> {
  // getting current user progress
  const currentUserProgress = (await getCurrentUserProgress(userId)) as
    | UserProgress
    | undefined;

  if (!currentUserProgress) {
    throw new Error("User progress not found");
  }
  // Destructuring userProgress object
  const { totalCompletedTests, lastTestId, userExperience, userLevel } =
    currentUserProgress;

  // calculate exerience that user gained for current test
  const gainedExp = calculateExperiencePoints(
    numberOfCorrectAnswers,
    userLevel.level,
  );
  // re-calculate total user exp
  const recalculatedExp = userLevel.currentExp + gainedExp;

  const calculatedUserLevel = calculateLevelUp(userLevel, recalculatedExp);
  return {
    ...currentUserProgress,
    userLevel: calculatedUserLevel,
    totalCompletedTests: [...totalCompletedTests, completedTest],
    userExperience: userExperience + recalculatedExp,
    updatedAt: new Date(),
  };
}
