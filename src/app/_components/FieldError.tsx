import { FormState } from "@/types/actionTypes";

type FieldErrorProps = {
  formState: FormState;
  name: string;
};

const FieldError = ({ formState, name }: FieldErrorProps) => {
  return (
    <div
      className={`${formState.status === "ERROR" && "bg-black/5"} flex min-h-5 w-full items-center justify-center bg-transparent`}
    >
      <span className="text-sm text-red-300">
        {(name === "checkbox" || name === "answer") &&
          formState.status === "ERROR" &&
          formState.message}
        {formState.fieldErrors[name]?.[0]}
      </span>
    </div>
  );
};

export default FieldError;
