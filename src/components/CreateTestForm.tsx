"use client";

import { useEffect } from "react";
import { useActionState } from "react";
import { Textarea } from "./ui/textarea";
import { createTest } from "@/actions/acions";
import { EMPTY_FORM_STATE } from "@/constants/formState";
import type { Categories } from "@/types/categoriesType";
import FieldError from "@/app/_components/FieldError";
import SubmitButton from "@/app/_components/SubmitButton";
import { useFormReset } from "@/hooks/useFormReset";
import { useToastMessage } from "@/hooks/useToastMessage";
import Select from "./Select";
import Label from "./Label";
import { Input } from "./ui/input";
import Answers from "@/components/Answers";
import { useTestFormState } from "@/store/useTestFormStore";
import AnswersSelect from "./AnswersSelect";

export default function CreateTestForm(props: { categories: Categories[] }) {
  const { selectionMethod, setSelectionMethod } = useTestFormState();
  const [formState, action] = useActionState(createTest, EMPTY_FORM_STATE);
  const formRef = useFormReset(formState);

  const noScriptFallback = useToastMessage(formState);

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

  useEffect(() => {
    setSelectionMethod(
      formState.status === "SUCCESS" ? "" : "existingCategory",
    );
    return () => setSelectionMethod("");
  }, [formState.status, setSelectionMethod]);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 px-0 pb-10 sm:px-4 lg:w-3/4">
      <form
        className="flex w-full flex-col  lg:w-2/3"
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
              <FieldError formState={formState} name="category" />
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
              <FieldError formState={formState} name="category" />
            </div>
            <div className="flex w-full flex-col justify-end pb-6 sm:flex-row">
              <AnswersSelect />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <Label htmlFor="question" label="Question:" />
          <Textarea className="resize-none" id="question" name="question" />
          <FieldError formState={formState} name="question" />
        </div>
        <div className="flex flex-col items-center ">
          <Answers formState={formState} />
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
