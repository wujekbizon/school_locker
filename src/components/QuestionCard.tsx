"use client";

import { LETTERS } from "@/constants/optionsLetters";
import type { TestsData } from "@/types/testData";
import { useState } from "react";

export default function QuestionCard(props: {
  test: TestsData;
  questionNumber: string;
}) {
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const { answers, question } = props.test.data;

  const handleCorrectAnswer = () => {
    setShowCorrectAnswer(!showCorrectAnswer);
  };

  return (
    <div className="relative flex h-full min-h-80 w-full flex-col rounded-lg border border-border/40 bg-zinc-950 px-4 py-6 text-gray-200">
      <p className="absolute right-2 top-1 text-sm text-muted-foreground">
        {props.questionNumber}
      </p>
      <h3 className="border-b border-border/40 px-4 pb-2 text-base">
        {question}
      </h3>
      <ul className="flex h-full flex-col gap-2 px-4 pt-6">
        {answers.map(({ option, isCorrect }, index) => (
          <li
            key={option}
            className="text-balance text-sm leading-relaxed text-amber-300/40"
          >
            {LETTERS[index]}){" "}
            <span
              className={`${showCorrectAnswer && (isCorrect ? "rounded-sm bg-zinc-800 " : "opacity-25")} text-md px-2 text-muted-foreground  transition-opacity`}
            >
              {" "}
              {option}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex w-full self-center pt-4 md:w-1/2">
        <button
          onClick={handleCorrectAnswer}
          className="inline-flex h-8 w-full items-center justify-center whitespace-nowrap rounded-md bg-stone-300 px-4 py-2 text-base font-medium text-black shadow transition-colors hover:bg-amber-400/80  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          {showCorrectAnswer ? "Hide Answer" : "Reveal Answer"}
        </button>
      </div>
    </div>
  );
}
