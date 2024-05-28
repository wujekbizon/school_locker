import { generateRandomTests } from "@/helpers/generateRandomTests";
import type { TestsData } from "@/types/testData";
import { useState, useEffect } from "react";

/**
 * Custom hook to generate and manage an array of tests based on provided data.
 *
 * @param {TestsData[]} tests - An array of available test data objects.
 * @param {number | null} numberTests - The desired number of tests to generate, or null if no tests needed.
 * @returns {TestsData[]} - An array of generated test objects.
 */

export function useGeneratedTest(
  tests: TestsData[],
  numberTests: number | null,
) {
  // State variable to store generated tests
  const [randomTestsArray, setRandomTestsArray] = useState<TestsData[]>([]);

  useEffect(() => {
    // Skip generation if numberTests is null
    if (!numberTests) {
      return;
    }
    console.log("numberTests changed");
    // Generate tests using provided data and number
    const generatedTests = generateRandomTests(tests, numberTests);
    setRandomTestsArray(generatedTests); // Update state with generated tests
  }, [numberTests, tests]); // Re-run on changes to numberTests or tests

  // Return the generated tests array for consumption by components
  return randomTestsArray;
}
