import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  label: string;
  loading: React.ReactNode;
  disabled?: boolean;
};

const SubmitButton = ({ label, loading, disabled }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending || disabled}
      className="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-stone-300 px-4 py-2 text-base font-medium text-black shadow transition-colors hover:bg-amber-400/80  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    >
      {pending ? loading : label}
    </button>
  );
};
export default SubmitButton;
