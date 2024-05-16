import type { FormState } from "@/types/actionTypes";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import FieldError from "@/app/_components/FieldError";

interface Answer {
  id: string;
  label: string;
  name: string;
}

interface AnswersProps {
  formState: FormState;
  numberOfAnswers: number;
}

const Answers: React.FC<AnswersProps> = ({ formState, numberOfAnswers }) => {
  const answers: Answer[] = [];

  for (let i = 1; i <= numberOfAnswers; i++) {
    answers.push({
      id: `option${i}`,
      label: `Answer ${i}`,
      name: `option${i}`,
    });
  }

  return (
    <div className="flex w-full flex-col gap-4">
      {answers.map((answer, index) => (
        <div
          key={answer.id}
          className="flex w-full items-center justify-between gap-4"
        >
          <div className="flex w-full flex-col">
            <label
              htmlFor={answer.id}
              className="pb-1 text-sm text-muted-foreground"
            >
              {answer.label}
            </label>
            <Input id={answer.id} type="text" name={answer.name} />
            <FieldError formState={formState} name="answers" />
          </div>
          <div className="flex h-16 w-24 flex-col items-center justify-center gap-1">
            <label
              htmlFor={`checkbox${answer.id}`}
              className="text-sm text-muted-foreground"
            >
              Is correct?
            </label>
            <Checkbox
              className="hover:bg-amber-500/60"
              id={`checkbox${index}`}
              name={`checkbox${index}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Answers;
