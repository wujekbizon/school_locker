"use client";
import { Textarea } from "@/components/ui/textarea";
import Label from "@/components/Label";
import { useActionState } from "react";
import { EMPTY_FORM_STATE } from "@/constants/formState";
import { addUserMotto } from "@/actions/acions";

export default function UserMottoForm() {
  const [formState, action] = useActionState(addUserMotto, EMPTY_FORM_STATE);

  return (
    <form className="flex w-full flex-col gap-4 " action="">
      <Label htmlFor="motto" label="Motto:" />
      <Textarea
        id="motto"
        name="motto"
        className="resize-none border-border/40 bg-zinc-950"
        placeholder="Share your learning motto, one that will motivate you every day."
      />
      <div className="flex w-full justify-end">
        <button className="rounded bg-gradient-to-r from-gray-600 to-gray-800 px-3 py-1 text-center text-sm text-white hover:from-gray-600 hover:to-gray-400">
          Submit
        </button>
      </div>
    </form>
  );
}
