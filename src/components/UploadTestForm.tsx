"use client";
import { useActionState } from "react";
import { uploadTestsFromFile } from "@/actions/acions";
import { EMPTY_FORM_STATE } from "@/constants/formState";
import UploadSVG from "@/components/icons/Upload";
import { Input } from "./ui/input";
import FieldError from "@/app/_components/FieldError";
import SubmitButton from "@/app/_components/SubmitButton";
import { useToastMessage } from "@/hooks/useToastMessage";

export default function UploadTestForm() {
  const [formState, action] = useActionState(
    uploadTestsFromFile,
    EMPTY_FORM_STATE,
  );
  const noScriptFallback = useToastMessage(formState);

  return (
    <form
      action={action}
      className="flex w-full flex-col gap-2 rounded-lg border border-border/40 bg-zinc-950 px-4 py-8 lg:w-2/3"
    >
      <label
        htmlFor="fileUpload"
        className="flex h-36 w-full cursor-pointer flex-col items-center justify-center rounded-lg border  border-border/40 bg-neutral-900 hover:bg-neutral-800"
      >
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <UploadSVG />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">JSON</p>
        </div>
        <Input type="file" id="fileUpload" name="file" className="hidden" />
      </label>

      <FieldError formState={formState} name="file" />
      <div className="flex w-full self-center md:w-1/3">
        <SubmitButton label="Upload File" loading="Uploading..." />
      </div>
      {noScriptFallback}
    </form>
  );
}
