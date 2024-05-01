import { TestsData } from "@/types/testData";
import Link from "next/link";
import QuestionCard from "./QuestionCard";

const AllTests: React.FC<TestsData[]> = (tests) => {
  // creates an array directly from object's values
  const testsArr = Object.values(tests);

  return (
    <section className="flex flex-col items-center gap-7 p-2 md:p-8">
      {testsArr.map((item, index) => (
        <QuestionCard
          key={item.id}
          test={item}
          questionNumber={`${index + 1}/${testsArr.length}`}
        />
      ))}
      {testsArr?.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-lg text-muted-foreground">
            No tests available yet.
          </p>
          <Link
            className="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-amber-500  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            href="/dashboard/tests/create"
          >
            Create Test
          </Link>
        </div>
      )}
    </section>
  );
};

export default AllTests;
