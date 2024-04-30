import FieldError from "@/app/_components/FieldError";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { FormState } from "@/types/actionTypes";

export default function renderAnswers(
  formState: FormState,
  numberOfAnswers: number,
) {
  const answers = [];

  for (let i = 1; i <= numberOfAnswers; i++) {
    answers.push(
      <div
        className="flex w-full items-center justify-between gap-4"
        key={`answer-${i}`}
      >
        <div className="flex w-full flex-col gap-2">
          <label
            htmlFor={`option${i}`}
            className="text-sm text-muted-foreground"
          >
            {`Answer ${i}`}
          </label>
          <Input id={`option${i}`} type="text" name={`option${i}`} />
          <FieldError formState={formState} name="answers" />
        </div>
        <div className="flex h-16 w-24 flex-col items-center justify-center gap-1">
          <label htmlFor="checkbox1" className="text-sm text-muted-foreground">
            Is correct?
          </label>
          <Checkbox
            className="hover:bg-amber-500/60"
            id={`checkbox${i}`}
            name={`checkbox${i}`}
          />
        </div>
      </div>,
    );
  }
  return answers;
}
