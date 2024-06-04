import { Suspense } from "react";
import { getTestsByCategory } from "@/server/queries";
import type { TestsData } from "@/types/testData";
import type { CategoryPageProps } from "@/types/categoriesType";
import GenerateTests from "@/components/GenerateTests";
import TestLoader from "@/components/TestsLoader";

export const experimental_ppr = true;

async function TestsByCategory({ category }: { category: string }) {
  const typedTestsByCategory = (await getTestsByCategory(
    category,
  )) as TestsData[];

  return <GenerateTests tests={typedTestsByCategory} />;
}

export default function CategoryTestPage(props: CategoryPageProps) {
  return (
    <Suspense fallback={<TestLoader />}>
      <TestsByCategory category={props.params.value} />
    </Suspense>
  );
}
