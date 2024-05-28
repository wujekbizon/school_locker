"use client";

import { TestsData } from "@/types/testData";
import TestCard from "./TestCard";
import SubmitButton from "@/app/_components/SubmitButton";
import { useActionState } from "react";
import { EMPTY_FORM_STATE } from "@/constants/formState";
import { submitTestAction } from "@/actions/acions";
import { useGenerateTestStore } from "@/store/useGenerateTestStore";
import { useToastMessage } from "@/hooks/useToastMessage";
import ResetTestButton from "./ResetTestButton";
import { useGeneratedTest } from "@/hooks/useGeneratedTest";

export default function GenerateTests(props: { tests: TestsData[] }) {
  const { numberTests, isTest } = useGenerateTestStore();
  const [formState, action] = useActionState(
    submitTestAction,
    EMPTY_FORM_STATE,
  );
  const noScriptFallback = useToastMessage(formState);
  const randomTest = useGeneratedTest(props.tests, numberTests);

  return (
    <form
      action={action}
      className="flex w-full flex-col items-center justify-center gap-4"
    >
      {numberTests && (
        <div className="grid w-full grid-cols-1 gap-4 pb-24 lg:grid-cols-2 xl:w-5/6">
          {randomTest.map((item, index) => (
            <TestCard
              key={item.id}
              test={item}
              questionNumber={`${index + 1}/${randomTest.length}`}
              formState={formState}
            />
          ))}
        </div>
      )}
      {isTest && (
        <div className="left-[calc(50% - 512 / 2 )] fixed bottom-0 flex w-full  justify-center gap-4 rounded-lg border border-border/40 bg-zinc-950 p-2 md:w-128 md:p-4">
          <SubmitButton
            label="Submit Test"
            loading="Submitting..."
            disabled={formState?.status === "SUCCESS"}
          />
          <ResetTestButton />
        </div>
      )}
      {noScriptFallback}
    </form>
  );
}
