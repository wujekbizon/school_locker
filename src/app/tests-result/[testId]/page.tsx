import TestResultCard from "@/components/TestResultCard";
import TestLoader from "@/components/TestsLoader";
import { getCompletedTest } from "@/server/queries";
import type { CompletedTest } from "@/types/dbTypes";
import { Suspense } from "react";

export const experimental_ppr = true;

async function CompletedTest({ testId }: { testId: string }) {
  const completedTest = await getCompletedTest(testId);
  const typedCompletedTest = completedTest as CompletedTest;

  return <TestResultCard completedTest={typedCompletedTest} />;
}

export default function TestResultPage(props: {
  params: { testId: string };
  searchParams: {};
}) {
  return (
    <Suspense fallback={<TestLoader />}>
      <CompletedTest testId={props.params.testId} />
    </Suspense>
  );
}
