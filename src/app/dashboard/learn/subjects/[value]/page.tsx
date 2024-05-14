import FallbackComponent from "@/app/_components/Fallback";
import SubjectTests from "@/components/SubjectTests";
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

  return <SubjectTests tests={typedTestsByCategory} />;
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
