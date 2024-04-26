"use client";

import { LETTERS } from "@/constants/optionsLetters";
import TestDataInterface from "@/types/testData";
import { useState } from "react";

export default function QuestionCard(props: {
  data: TestDataInterface;
  length: number;
}) {
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const { answers, number, question } = props.data;

  const handleCorrectAnswer = () => {
    setShowCorrectAnswer(!showCorrectAnswer);
  };

  return (
    <div className="relative w-full rounded-lg border border-border/40 bg-zinc-900 px-4 py-8 text-white md:w-2/3 ">
      <p className="absolute right-2 top-1 text-sm text-muted-foreground">
        {number}/{props.length}
      </p>
      <h3 className="border-b border-border/40 px-4 pb-4 text-lg">
        {question}
      </h3>
      <ul className="flex flex-col gap-2 px-4 pt-6">
        {answers.map(({ option, isCorrect }, index) => (
          <li
            key={option}
            className="text-balance text-sm leading-relaxed text-muted-foreground"
          >
            {LETTERS[index]}){" "}
            <span
              className={`${showCorrectAnswer && (isCorrect ? "rounded-sm bg-zinc-600" : "opacity-25")} text-md px-2 text-zinc-200  transition-opacity`}
            >
              {" "}
              {option}
            </span>
          </li>
        ))}
        <div className="flex w-full justify-center self-center pt-4 md:w-1/2">
          <button
            onClick={handleCorrectAnswer}
            className="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 "
          >
            {showCorrectAnswer ? "Back" : "Correct anwser"}
          </button>
        </div>
      </ul>
    </div>
  );
}
