import { useGenerateTestStore } from "@/store/useGenerateTestStore";

export default function ResetTestButton() {
  const { setNumberTests, setIsTest } = useGenerateTestStore();
  const resetTest = () => {
    setIsTest(false);
    setNumberTests(null);
  };

  return (
    <button
      onClick={resetTest}
      className="inline-flex h-8 w-full items-center  justify-center whitespace-nowrap rounded-md border border-border/40 bg-neutral-900 px-8 py-2 text-base font-medium text-secondary-foreground shadow transition-colors hover:bg-red-400/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:w-48"
    >
      Reset Test
    </button>
  );
}
