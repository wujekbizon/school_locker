"use client";

import { useFormState } from "react-dom";
import { uploadTestsFromFile } from "@/actions/acions";
import { EMPTY_FORM_STATE } from "@/constants/formState";
import UploadSVG from "@/components/icons/Upload";
import { Input } from "./ui/input";
import FieldError from "@/app/_components/FieldError";

export default function UploadTestForm() {
  const [formState, action] = useFormState(
    uploadTestsFromFile,
    EMPTY_FORM_STATE,
  );

  return (
    <form action={action} className="flex items-center gap-8">
      <div className="grid w-full items-center gap-1.5">
        <label htmlFor="fileUpload" className="cursor-pointer">
          <div className="flex items-center gap-2 ">
            <UploadSVG />
            <p className="text-xs text-muted-foreground">
              Upload your tests file
            </p>
          </div>
        </label>
        <Input type="file" id="fileUpload" name="file" className="h-8 p-1" />
        <FieldError formState={formState} name="file" />
        <button className="inline-flex h-8 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-amber-500/80  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          Add Tests
        </button>
      </div>
    </form>
  );
}
