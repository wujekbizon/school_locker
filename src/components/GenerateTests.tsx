"use client";

import { TestsData } from "@/types/testData";
import TestCard from "./TestCard";
import SubmitButton from "@/app/_components/SubmitButton";
import { useActionState, useEffect } from "react";
import { EMPTY_FORM_STATE } from "@/constants/formState";
import { submitTestAction } from "@/actions/acions";
import { useGenerateTestStore } from "@/store/useGenerateTestStore";
import { useToastMessage } from "@/hooks/useToastMessage";
import ResetTestButton from "./ResetTestButton";
import { useGeneratedTest } from "@/hooks/useGeneratedTest";
import SubjectTestsMenu from "./SubjectTestsMenu";
import FieldError from "@/app/_components/FieldError";

export default function GenerateTests(props: { tests: TestsData[] }) {
  const { numberTests, isTest, setNumberTests, setIsTest } =
    useGenerateTestStore();

  const [formState, action] = useActionState(
    submitTestAction,
    EMPTY_FORM_STATE,
  );

  useEffect(() => {
    if (formState.status === "SUCCESS") {
      setNumberTests(null);
      setIsTest(false);
    }
  }, [formState.status === "SUCCESS"]);

  const noScriptFallback = useToastMessage(formState);
  const randomTest = useGeneratedTest(props.tests, numberTests);

  return (
    <section className="flex  w-full flex-col items-center gap-8 px-4">
      {!isTest && <SubjectTestsMenu />}

      <form
        action={action}
        className="flex w-full flex-col items-center justify-center gap-4"
      >
        {numberTests && (
          <div className="grid w-full grid-cols-1 gap-4 pb-24 lg:grid-cols-2 xl:w-5/6">
            {randomTest.map((item, index) => (
              <div className="flex flex-col" key={item.id}>
                <TestCard
                  test={item}
                  questionNumber={`${index + 1}/${randomTest.length}`}
                  formState={formState}
                />
                <FieldError formState={formState} name={`answer-${item.id}`} />
              </div>
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
    </section>
  );
}
