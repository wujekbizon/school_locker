import { CompletedTest } from "@/types/dbTypes";
import CompletedTestCard from "./CompletedTestCard";

interface CompletedTestsListProps {
  tests: CompletedTest[];
}

export default function CompletedTestsList({ tests }: CompletedTestsListProps) {
  return (
    <div className={`grid auto-rows-max gap-4 p-4 md:gap-8 lg:col-span-4`}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {tests.map((completedTest) => {
          return (
            <CompletedTestCard
              key={completedTest.id}
              completedTest={completedTest}
            />
          );
        })}
      </div>
    </div>
  );
}
