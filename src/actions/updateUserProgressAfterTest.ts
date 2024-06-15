import { calculateExperiencePoints } from "@/helpers/calculateExperiencePoints";
import { calculateLevelUp } from "@/helpers/calculateLevelUp";
import { getCurrentUserProgress } from "@/server/queries";
import type { CompletedTest, UserProgress } from "@/types/dbTypes";

/**
 * Updates a user's progress after they complete a test.
 *
 * This function takes the user's ID, the number of correct answers they got on the test,
 * and the completed test object as input. It then retrieves the user's current progress data,
 * calculates the experience points gained from the test, updates the user's experience and level
 * if necessary, and finally returns a new UserProgress object with the updated information.
 *
 * @param {string} userId The ID of the user who completed the test.
 * @param {number} numberOfCorrectAnswers The number of correct answers the user got on the test.
 * @param {CompletedTest} completedTest The completed test object containing details about the test.
 * @returns {Promise<UserProgress>} A promise that resolves to a new UserProgress object with the updated information.
 */

export async function updateUserProgressAfterTest(
  userId: string,
  numberOfCorrectAnswers: number,
  completedTest: CompletedTest,
): Promise<UserProgress> {
  // Get the current user's progress data from db
  const currentUserProgress = (await getCurrentUserProgress(userId)) as
    | UserProgress
    | undefined;

  if (!currentUserProgress) {
    throw new Error("User progress not found");
  }

  // Destructure relevant properties from the progress data
  const { totalCompletedTests, userExperience, userLevel } =
    currentUserProgress;

  // Calculate the experience points gained for this test
  const gainedExp = calculateExperiencePoints(
    numberOfCorrectAnswers,
    userLevel.level,
  );

  // Recalculate the user's total experience points
  const recalculatedExp = userLevel.currentExp + gainedExp;

  // Check if the user leveled up based on the new experience points
  const calculatedUserLevel = calculateLevelUp(userLevel, recalculatedExp);

  // Create a new UserProgress object with updated values
  return {
    ...currentUserProgress,
    userLevel: calculatedUserLevel,
    totalCompletedTests: [...totalCompletedTests, completedTest],
    userExperience: userExperience + recalculatedExp,
    updatedAt: new Date(),
  };
}
