"use client";

import { useFormState } from "react-dom";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { createTest } from "@/actions/acions";
import { EMPTY_FORM_STATE } from "@/constants/formState";

export default function CreateTestForm(props: { optionsNumber: number }) {
  const [formState, action] = useFormState(createTest, EMPTY_FORM_STATE);

  // create empty options array based on options number
  const options = Array.from({ length: props.optionsNumber }, (_, i) => ({
    id: `option${i + 1}`,
    label: `Option ${i + 1}`,
    value: "", // Initial empty value for input
    isChecked: false, // Initial unchecked state for checkbox
  }));

  return (
    <form className="flex w-full flex-col gap-8 md:w-1/2" action={action}>
      <div className="">
        <div className="flex flex-col">
          <label htmlFor="number" className="text-sm text-muted-foreground">
            Test Number:
          </label>
          <input
            min={1}
            name="number"
            type="number"
            id="number"
            className="inline-flex h-8 w-28 items-center justify-start whitespace-nowrap rounded-md border border-input bg-zinc-950 px-4 py-2 text-sm font-normal text-muted-foreground shadow-none transition-colors hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="question" className="text-sm text-muted-foreground">
          Question:
        </label>
        <Textarea className="resize-none" id="question" name="question" />
      </div>
      <div className="flex flex-col items-center gap-4">
        {options.map((option) => (
          <div
            key={option.id}
            className="flex w-full items-center justify-between gap-4"
          >
            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor={option.label}
                className="text-sm text-muted-foreground"
              >
                {option.label}
              </label>
              <Input id={option.label} type="text" name={option.label} />
            </div>
            <div className="flex h-16 w-24 flex-col items-center justify-end gap-1">
              <label
                htmlFor="checkbox3"
                className="text-sm text-muted-foreground"
              >
                Is correct?
              </label>
              <Checkbox id="checkbox3" />
            </div>
          </div>
        ))}
      </div>
      <button className="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ">
        Create Test
      </button>
    </form>
  );
}
