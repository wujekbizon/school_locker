"use client";

import { useFormState } from "react-dom";
import { Textarea } from "./ui/textarea";
import { createTest } from "@/actions/acions";
import { EMPTY_FORM_STATE } from "@/constants/formState";
import FieldError from "@/app/_components/FieldError";
import SubmitButton from "@/app/_components/SubmitButton";
import { useFormReset } from "@/hooks/useFormReset";
import renderAnswers from "@/helpers/renderTestsAnswers";
import { useState } from "react";
import { useToastMessage } from "@/hooks/useToastMessage";

export default function CreateTestForm() {
  const [answersNumber, setAnswersNumber] = useState(3);
  const [formState, action] = useFormState(createTest, EMPTY_FORM_STATE);
  const formRef = useFormReset(formState);

  const noScriptFallback = useToastMessage(formState);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex flex-col">
        <label className="pb-1 text-sm text-muted-foreground" htmlFor="select">
          How many answers?
        </label>
        <select
          id="select"
          className="ob h-8 rounded border border-border/60 bg-zinc-950"
          value={answersNumber}
          onChange={(e) => {
            const parseNumber = parseInt(e.target.value);
            if (!isNaN(parseNumber)) {
              setAnswersNumber(parseNumber);
            }
          }}
        >
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
      </div>
      <form
        className="flex w-full flex-col md:w-1/2"
        action={action}
        ref={formRef}
      >
        <div className="flex flex-col">
          <label
            htmlFor="number"
            className="pb-1 text-sm text-muted-foreground"
          >
            Test Number:
          </label>
          <input
            min={1}
            name="number"
            type="number"
            id="number"
            className="inline-flex h-8 w-28 items-center justify-start whitespace-nowrap rounded-md border border-input bg-zinc-950 px-4 py-2 text-sm font-normal text-muted-foreground shadow-none transition-colors hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          />
          <FieldError formState={formState} name="number" />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="question"
            className="pb-1 text-sm text-muted-foreground"
          >
            Question:
          </label>
          <Textarea className="resize-none" id="question" name="question" />
          <FieldError formState={formState} name="question" />
        </div>
        <div className="flex flex-col items-center ">
          {/* using helper function to render answers */}
          {renderAnswers(formState, answersNumber)}
        </div>
        <FieldError formState={formState} name="checkbox" />
        <div className="flex w-1/2 self-center">
          <SubmitButton label="Create Test" loading="Creating..." />
        </div>
        {noScriptFallback}
      </form>
    </div>
  );
}
