"use client";

import { TestsData } from "@/types/testData";
import TestCard from "./TestCard";
import { generateRandomTests } from "@/helpers/generateRandomTests";
import SubmitButton from "@/app/_components/SubmitButton";
import { useActionState } from "react";
import { EMPTY_FORM_STATE } from "@/constants/formState";
import { submitTestAction } from "@/actions/acions";
import { useGenerateTestStore } from "@/store/useGenerateTestStore";

export default function GenerateTests(props: { tests: TestsData[] }) {
  const { numberTests, setIsTest, setNumberTests } = useGenerateTestStore();
  const [formState, action] = useActionState(
    submitTestAction,
    EMPTY_FORM_STATE,
  );

  if (!numberTests || !props.tests.length) {
    return <p>No test</p>; // TODO implement better no test component
  }

  const resetTest = () => {
    setNumberTests(null);
    setIsTest(false);
  };

  const randomTests = generateRandomTests(props.tests, numberTests);

  return (
    <form
      action={action}
      className="flex w-full flex-col items-center justify-center gap-4"
    >
      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:w-5/6">
        {randomTests.map((item, index) => (
          <TestCard
            key={item.id}
            test={item}
            questionNumber={`${index + 1}/${randomTests.length}`}
          />
        ))}
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-6 rounded-lg border border-border/40 bg-zinc-950 p-4 md:w-5/6 md:flex-row md:p-6">
        <button
          onClick={resetTest}
          className="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md border border-border/40 bg-neutral-900 px-4 py-2 text-base font-medium text-secondary-foreground shadow transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Reset
        </button>
        <SubmitButton
          label="Submit Test"
          loading="Submitting..."
          disabled={formState?.status === "SUCCESS"}
        />
      </div>
    </form>
  );
}
