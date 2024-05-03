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
import {
  CATEGORY_OPTIONS,
  NUMBER_OF_ANSWERS,
} from "@/constants/categoryOptions";
import Select from "./Select";

export default function CreateTestForm() {
  const [answersNumber, setAnswersNumber] = useState(3);
  const [formState, action] = useFormState(createTest, EMPTY_FORM_STATE);
  const formRef = useFormReset(formState);

  const noScriptFallback = useToastMessage(formState);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 px-0 py-14 sm:px-4">
      <div className="flex w-full flex-col justify-between sm:flex-row">
        <h2 className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text p-2  text-center text-2xl text-transparent  md:text-3xl">
          Create Test Page:
        </h2>
        <div className="flex flex-col">
          <label
            className="pb-1 text-sm text-muted-foreground"
            htmlFor="select"
          >
            How many answers?
          </label>
          <select
            id="select"
            className="h-8 rounded border border-border/60 bg-zinc-950 px-2"
            value={answersNumber}
            onChange={(e) => {
              const parseNumber = parseInt(e.target.value);
              if (!isNaN(parseNumber)) {
                setAnswersNumber(parseNumber);
              }
            }}
          >
            {NUMBER_OF_ANSWERS.map((item) => (
              <option key={item.title} value={item.value}>
                {item.title}
              </option>
            ))}
          </select>
          <button>Upload from file</button>
        </div>
      </div>

      <form
        className="flex w-full flex-col p-0 sm:p-4 lg:w-2/3"
        action={action}
        ref={formRef}
      >
        <div className="flex flex-col">
          <Select options={CATEGORY_OPTIONS} label="Test Category: " />
          <FieldError formState={formState} name="category" />
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
