"use client";

import { useState, useActionState } from "react";
import { useFormReset } from "@/hooks/useFormReset";
import { submitAnswer } from "@/actions/acions";
import { TestsData } from "@/types/testData";
import SubmitButton from "@/app/_components/SubmitButton";
import Label from "./Label";
import { EMPTY_FORM_STATE } from "@/constants/formState";
import { LETTERS } from "@/constants/optionsLetters";
import FieldError from "@/app/_components/FieldError";
import { useToastMessage } from "@/hooks/useToastMessage";

export default function TestCard(props: {
  test: TestsData;
  questionNumber: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [formState, action] = useActionState(submitAnswer, EMPTY_FORM_STATE);
  const formRef = useFormReset(formState);

  const noScriptFallback = useToastMessage(formState);
  const {
    data: { answers, question },
  } = props.test;

  return (
    <form
      ref={formRef}
      action={action}
      className="relative flex w-full flex-col justify-center rounded-lg border border-border/40 bg-zinc-950 px-4 pb-4 pt-8 text-white"
    >
      <p className="absolute right-2 top-1 text-sm text-muted-foreground">
        {props.questionNumber}
      </p>
      <div className="w-full border-b border-border/40 p-2">
        <h2 className="text-lg font-semibold text-white ">{question}</h2>
      </div>
      <div className="flex w-full flex-col gap-4 py-4">
        {answers.map((answer, index) => {
          return (
            <div
              className={`flex w-full items-center gap-4 rounded-lg p-3 ${formState?.status === "UNSET" && "hover:bg-zinc-900"} ${formState?.status === "UNSET" && activeIndex === index && "bg-zinc-900"} ${formState?.status === "SUCCESS" && (answer.isCorrect ? "bg-amber-200/20" : "bg-black/50 opacity-20")}`}
              key={answer.option}
            >
              <span className="pr-4 text-sm text-muted-foreground">
                {LETTERS[index]})
              </span>
              <input
                className="before:content[''] border-blue-gray-200 before:bg-blue-gray-500 peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border text-gray-900 transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-8 before:w-8 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-black checked:bg-amber-300/70 checked:before:bg-amber-500 hover:before:opacity-5 disabled:pointer-events-none"
                type="radio"
                value={answer.isCorrect ? "true" : "false"}
                id={answer.option}
                disabled={formState?.status === "SUCCESS"}
                name="answer"
                onClick={() => setActiveIndex(index)}
              />
              <Label
                className="p-0 text-base text-gray-200"
                label={answer.option}
                htmlFor={answer.option}
              />
            </div>
          );
        })}
        <FieldError formState={formState} name="answer" />
      </div>
      <div className="flex w-1/4 self-end">
        <SubmitButton
          label="Save"
          loading="Saving..."
          disabled={formState?.status === "SUCCESS"}
        />
      </div>
      {noScriptFallback}
    </form>
  );
}
