"use client";
import { Textarea } from "@/components/ui/textarea";
import Label from "@/components/Label";
import { useActionState } from "react";
import { EMPTY_FORM_STATE } from "@/constants/formState";
import { addUserMotto } from "@/actions/acions";
import SubmitButton from "@/app/_components/SubmitButton";

export default function UserMottoForm() {
  const [formState, action] = useActionState(addUserMotto, EMPTY_FORM_STATE);

  return (
    <form
      className="mt-6 flex w-full flex-col gap-4 rounded-xl bg-zinc-900 p-2.5"
      action=""
    >
      <Textarea
        id="motto"
        name="motto"
        className="resize-none border-border/40 bg-zinc-950"
        placeholder="Share your learning motto, one that will motivate you every day."
      />
      <div className="flex w-36  self-center">
        <SubmitButton label="Submit" loading="Uploading motto..." />
      </div>
    </form>
  );
}
