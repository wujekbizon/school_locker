import { Suspense } from "react";
import { getTestsByCategory } from "@/server/queries";
import type { TestsData } from "@/types/testData";
import type { CategoryPageProps } from "@/types/categoriesType";
import GenerateTests from "@/components/GenerateTests";
import SubjectTestsMenu from "@/components/SubjectTestsMenu";
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
    <section className="flex  w-full flex-col items-center gap-8 px-4">
      <SubjectTestsMenu />
      <Suspense fallback={<TestLoader />}>
        <TestsByCategory category={props.params.value} />
      </Suspense>
    </section>
  );
}
