import { FormState } from "@/types/actionTypes";

type FieldErrorProps = {
  formState: FormState;
  name: string;
};

const FieldError = ({ formState, name }: FieldErrorProps) => {
  return (
    <div
      className={`${formState.status === "ERROR" && "bg-black/5"} flex min-h-5 w-full animate-pulse items-center bg-transparent pl-4 pt-1 `}
    >
      <span className="text-xs text-red-400/60">
        {(name === "checkbox" || name === "answer" || name === "category") &&
          formState.status === "ERROR" &&
          formState.message}
        {formState.fieldErrors[name]?.[0]}
      </span>
    </div>
  );
};

export default FieldError;
