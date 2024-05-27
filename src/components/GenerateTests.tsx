"use client";

import { TestsData } from "@/types/testData";
import TestCard from "./TestCard";
import { generateRandomTests } from "@/helpers/generateRandomTests";
import SubmitButton from "@/app/_components/SubmitButton";
import { useActionState } from "react";
import { EMPTY_FORM_STATE } from "@/constants/formState";
import { submitTestAction } from "@/actions/acions";
import { useGenerateTestStore } from "@/store/useGenerateTestStore";
import { useToastMessage } from "@/hooks/useToastMessage";

export default function GenerateTests(props: { tests: TestsData[] }) {
  const { numberTests } = useGenerateTestStore();
  const [formState, action] = useActionState(
    submitTestAction,
    EMPTY_FORM_STATE,
  );
  const noScriptFallback = useToastMessage(formState);

  if (!numberTests || !props.tests.length) {
    return; // TODO implement better no test component
  }

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
            formState={formState}
          />
        ))}
      </div>
      <div className="flex w-full rounded-lg border border-border/40 bg-zinc-950 p-4 md:w-1/3 md:p-6">
        <SubmitButton
          label="Submit Test"
          loading="Submitting..."
          disabled={formState?.status === "SUCCESS"}
        />
      </div>
      {noScriptFallback}
    </form>
  );
}
