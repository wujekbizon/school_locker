import { Suspense } from "react";
import { TestsData } from "@/types/testData";
import { getAllTests } from "@/server/queries";
import AllTests from "@/components/AllTests";
import FallbackComponent from "@/app/_components/Fallback";

export const dynamic = "force-dynamic";

const Tests = async () => {
  // getting all tests from db
  const tests = await getAllTests();
  const typedTests = tests as TestsData[]; // Type assertion

  return <AllTests {...typedTests} />;
};

export default async function LearnPage() {
  return (
    <Suspense fallback={<FallbackComponent />}>
      <Tests />
    </Suspense>
  );
}
