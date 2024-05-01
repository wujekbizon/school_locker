import { Suspense } from "react";
import { TestsData } from "@/types/testData";
import { getAllTests } from "@/server/queries";
import AllTests from "@/components/AllTests";

export const dynamic = "force-dynamic";

const Tests = async () => {
  // getting all tests from db
  const tests = await getAllTests();
  const typedTests = tests as TestsData[]; // Type assertion

  return <AllTests {...typedTests} />;
};

export default async function LearnPage() {
  return (
    <Suspense fallback={<p>Fetching tests...</p>}>
      <Tests />
    </Suspense>
  );
}
