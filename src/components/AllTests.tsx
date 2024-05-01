import { TestsData } from "@/types/testData";
import Link from "next/link";
import QuestionCard from "./QuestionCard";
import { CATEGORY_OPTIONS } from "@/constants/categoryOptions";
import Select from "./Select";

const AllTests: React.FC<TestsData[]> = (tests) => {
  // creates an array directly from object's values
  const testsArr = Object.values(tests);

  return (
    <section className="flex flex-col items-center gap-7 p-2 md:p-8">
      <div className="flex h-52 w-full gap-4 overflow-x-scroll p-4 scrollbar-webkit">
        {CATEGORY_OPTIONS.slice(1).map((item) => {
          return (
            <div
              key={item.category}
              className="flex h-full w-64 min-w-60 flex-col items-center justify-between rounded-md border border-border/40 bg-zinc-950 p-4"
            >
              <p className="text-md text-center text-muted-foreground">
                {item.category}
              </p>
              <Link
                className="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary/90 px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-amber-500/80  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                href={`/dashboard/learn/test-${item.value}`}
              >
                Take Test
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex w-full justify-between gap-4">
        <div className="flex flex-col">
          <Select options={CATEGORY_OPTIONS} label="Filter by category:" />
        </div>
        <div className="flex w-1/3 flex-col">
          <label className="pb-1 text-sm text-muted-foreground" htmlFor="input">
            Search
          </label>
          <input
            id="input"
            type="text"
            className="flex h-8 w-full items-center justify-start whitespace-nowrap rounded border border-border/40 bg-zinc-950 px-4  py-2 text-sm font-normal text-muted-foreground text-white shadow-none transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:pr-12"
            placeholder="Search..."
          />
        </div>
      </div>
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
