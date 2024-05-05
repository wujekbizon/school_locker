import { TestsData } from "@/types/testData";
import Link from "next/link";
import QuestionCard from "./QuestionCard";

interface FilteredTestsListProps {
  tests: TestsData[] | undefined;
  isLoading: boolean;
  error?: Error | null;
}

export default function FilteredTestsList({
  tests,
  isLoading,
  error,
}: FilteredTestsListProps) {
  if (isLoading) {
    return <p className="text-center">Loading tests...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500">
        Error loading tests: {error.message}
      </p>
    );
  }

  if (!tests?.length) {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-lg text-muted-foreground">No tests available yet.</p>
        <Link
          className="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-amber-500  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          href="/dashboard/tests/create"
        >
          Create Test
        </Link>
      </div>
    );
  }

  return (
    <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:w-5/6">
      {tests.map((item, index) => (
        <QuestionCard
          key={item.id}
          test={item}
          questionNumber={`${index + 1}/${tests.length}`}
        />
      ))}
    </div>
  );
}
