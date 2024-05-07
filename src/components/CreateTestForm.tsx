"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import { Textarea } from "./ui/textarea";
import { createTest } from "@/actions/acions";
import { EMPTY_FORM_STATE } from "@/constants/formState";
import type { Categories } from "@/types/categoriesType";
import { NUMBER_OF_ANSWERS } from "@/constants/categoryOptions";
import FieldError from "@/app/_components/FieldError";
import SubmitButton from "@/app/_components/SubmitButton";
import { useFormReset } from "@/hooks/useFormReset";
import { useToastMessage } from "@/hooks/useToastMessage";
import renderAnswers from "@/helpers/renderTestsAnswers";
import Select from "./Select";
import Label from "./Label";
import { Input } from "./ui/input";

export default function CreateTestForm(props: { categories: Categories[] }) {
  const [answersNumber, setAnswersNumber] = useState(3);
  const [selectionMethod, setSelectionMethod] = useState(""); // Initial state
  const [formState, action] = useFormState(createTest, EMPTY_FORM_STATE);
  const formRef = useFormReset(formState);

  const noScriptFallback = useToastMessage(formState);

  const parseAnswerNumber = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const parseNumber = parseInt(e.target.value);
    if (!isNaN(parseNumber)) {
      setAnswersNumber(parseNumber);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectionMethod("newCategory");
    if (event.target.value === "") {
      setSelectionMethod("");
    }
  };

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectionMethod("existingCategory");
    if (event.target.value === "") {
      setSelectionMethod("");
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 px-0 py-14 sm:px-4">
      <form
        className="flex w-full flex-col p-0 sm:p-4 lg:w-2/3"
        action={action}
        ref={formRef}
      >
        <div className="flex flex-col">
          <div className="flex w-full flex-col items-end sm:flex-row">
            <div className="flex w-full flex-col gap-2">
              <Select
                categories={props.categories}
                label="Test Category: "
                onChange={handleDropdownChange}
                disabled={selectionMethod === "newCategory"}
              />
              <div className="flex w-full flex-col">
                <Label label="Add New Category" htmlFor="addCategory" />
                <Input
                  type="text"
                  id="addCategory"
                  name="newCategory"
                  className="h-10 p-1"
                  onChange={handleInputChange}
                  disabled={selectionMethod === "existingCategory"}
                />
              </div>
            </div>
            <div className="flex w-full flex-col justify-end sm:flex-row">
              <div className="flex flex-col">
                <Label htmlFor="select" label=" How many answers?" />
                <select
                  id="select"
                  className="h-10 rounded border border-border/60 bg-zinc-950 px-2"
                  value={answersNumber}
                  onChange={parseAnswerNumber}
                >
                  {NUMBER_OF_ANSWERS.map((item) => (
                    <option key={item.title} value={item.value}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <FieldError formState={formState} name="category" />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="question" label="Question:" />
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
