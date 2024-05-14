import FallbackComponent from "@/app/_components/Fallback";
import QuestionCard from "@/components/QuestionCard";
import { getTestsByCategory } from "@/server/queries";
import { TestsData } from "@/types/testData";
import { Suspense } from "react";

interface CategoryPageProps {
  params: { value: string };
  searchParams: {};
}

async function TestsByCategory({ category }: { category: string }) {
  const typedTestsByCategory = (await getTestsByCategory(
    category,
  )) as TestsData[];

  return (
    <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:w-5/6">
      {typedTestsByCategory.map((item, index) => (
        <QuestionCard
          key={item.id}
          test={item}
          questionNumber={`${index + 1}/${typedTestsByCategory.length}`}
        />
      ))}
    </div>
  );
}

export default async function CategoryTestPage(props: CategoryPageProps) {
  return (
    <div className="flex w-full justify-center">
      <Suspense fallback={<FallbackComponent />}>
        <TestsByCategory category={props.params.value} />
      </Suspense>
    </div>
  );
}
