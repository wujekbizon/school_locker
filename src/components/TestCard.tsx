"use client";

import { submitAnswer } from "@/actions/acions";
import SubmitButton from "@/app/_components/SubmitButton";
import { EMPTY_FORM_STATE } from "@/constants/formState";
import { LETTERS } from "@/constants/optionsLetters";
import { useFormReset } from "@/hooks/useFormReset";
import { AvailableOption, TestsData } from "@/types/testData";
import { useState, useActionState } from "react";

export default function TestCard(props: {
  test: TestsData;
  questionNumber: string;
}) {
  const [selectedAnswer, setSelectedAnswer] = useState<{
    answer: boolean;
  } | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const [formState, action] = useActionState(submitAnswer, EMPTY_FORM_STATE);
  const formRef = useFormReset(formState);

  const handleSelectOption = (answer: AvailableOption, index: number) => {
    setActiveIndex(index);

    if (answer.isCorrect) {
      setSelectedAnswer({ answer: true });
    } else {
      setSelectedAnswer({ answer: false });
    }
  };

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
      <div className="flex w-full cursor-pointer flex-col gap-4 py-4">
        {answers.map((answer, index) => {
          return (
            <div
              className={`flex w-full items-center gap-4 rounded-lg p-3 ${!submitted && "hover:bg-zinc-900"} ${!submitted && activeIndex === index && "bg-zinc-900"} ${submitted && (answer.isCorrect ? "bg-green-400/60" : "bg-red-400/30")}`}
              key={answer.option}
              onClick={() => !submitted && handleSelectOption(answer, index)}
            >
              <div className="flex w-5 items-center justify-start">
                <div
                  className={`flex h-4 w-4 items-center justify-center rounded-full border border-border/40 bg-zinc-950 ${activeIndex === index ? "border-gray-400" : ""}`}
                >
                  {activeIndex === index && (
                    <div className="h-1 w-1 rounded-full bg-amber-400" />
                  )}
                </div>
                <input
                  type="radio"
                  // className={submitted ? "text-zinc-950" : "text-white"}
                  key={answer.option}
                />
              </div>
              {LETTERS[index]}) <span>{answer.option}</span>
            </div>
          );
        })}
      </div>
      <div className="flex w-1/4 self-end pt-2">
        <SubmitButton label="Save" loading="Saving..." />
      </div>
    </form>
  );
}
