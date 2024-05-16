"use client";
import { useActionState } from "react";
import { uploadTestsFromFile } from "@/actions/acions";
import { EMPTY_FORM_STATE } from "@/constants/formState";
import UploadSVG from "@/components/icons/Upload";
import { Input } from "./ui/input";
import FieldError from "@/app/_components/FieldError";
import SubmitButton from "@/app/_components/SubmitButton";
import { useFormReset } from "@/hooks/useFormReset";
import { useToastMessage } from "@/hooks/useToastMessage";

export default function UploadTestForm() {
  const [formState, action] = useActionState(
    uploadTestsFromFile,
    EMPTY_FORM_STATE,
  );
  const formRef = useFormReset(formState);
  const noScriptFallback = useToastMessage(formState);

  return (
    <form action={action} className="flex w-full sm:w-1/3" ref={formRef}>
      <div className="grid w-full items-center gap-1.5">
        <label htmlFor="fileUpload" className="cursor-pointer">
          <div className="flex items-center gap-2 ">
            <UploadSVG />
            <p className="text-xs text-muted-foreground">
              Upload your tests file
            </p>
          </div>
        </label>
        <Input type="file" id="fileUpload" name="file" className="h-10 p-1" />
        <FieldError formState={formState} name="file" />
        <SubmitButton label="Upload File" loading="Uploading..." />
      </div>
      {noScriptFallback}
    </form>
  );
}
