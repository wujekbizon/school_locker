"use client";

import { useActionState } from "react";
import { Textarea } from "./ui/textarea";
import { createTestAction } from "@/actions/acions";
import { EMPTY_FORM_STATE } from "@/constants/formState";
import type { Categories } from "@/types/categoriesType";
import FieldError from "@/app/_components/FieldError";
import SubmitButton from "@/app/_components/SubmitButton";
import { useToastMessage } from "@/hooks/useToastMessage";
import Label from "@/components/Label";
import Answers from "@/components/Answers";
import CategorySelection from "@/components/CategorySelection";

export default function CreateTestForm(props: { categories: Categories[] }) {
  const [formState, action] = useActionState(
    createTestAction,
    EMPTY_FORM_STATE,
  );
  const noScriptFallback = useToastMessage(formState);

  return (
    <form
      className="flex w-full flex-col rounded-lg border border-border/40 bg-zinc-950 px-4 py-6 lg:w-2/3"
      action={action}
    >
      <div className="flex w-full flex-col items-end sm:flex-row">
        <div className="flex w-full flex-col gap-1">
          <CategorySelection categories={props.categories} />
          <FieldError formState={formState} name="category" />
        </div>
      </div>
      <div className="flex flex-col">
        <Label htmlFor="question" label="Question:" />
        <Textarea id="question" name="question" />
        <FieldError formState={formState} name="question" />
      </div>
      <div className="flex flex-col items-center ">
        <Answers formState={formState} />
      </div>
      <FieldError formState={formState} name="checkbox" />
      <div className="flex w-full self-center md:w-1/3">
        <SubmitButton label="Create Test" loading="Creating..." />
      </div>
      {noScriptFallback}
    </form>
  );
}
