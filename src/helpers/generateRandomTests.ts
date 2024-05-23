import { TestsData } from "@/types/testData";

export function generateRandomTests(
  testArray: TestsData[],
  numOfQuestions: number,
) {
  // Handle empty test array
  if (!testArray.length) {
    return []; // Or throw an error, display a message, etc.
  }

  // Limit numOfQuestions to available tests
  numOfQuestions = Math.min(numOfQuestions, testArray.length);

  let selectedTests = [] as TestsData[];

  while (selectedTests.length < numOfQuestions) {
    const randomIndex = Math.floor(Math.random() * testArray.length);
    const randomQuestion = testArray[randomIndex];
    if (randomQuestion && !selectedTests.includes(randomQuestion)) {
      selectedTests.push(randomQuestion);
    }
  }
  return selectedTests;
}
