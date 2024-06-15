import CompletedTestsList from "@/components/CompletedTestsList";
import TestLoader from "@/components/TestsLoader";
import { getCompletedTestsByUser } from "@/server/queries";
import { CompletedTest } from "@/types/dbTypes";
import { useUser } from "@clerk/nextjs";
import { Suspense } from "react";

async function CompletedTests() {
  const { user } = useUser();
  if (!user) {
    return <p>No user found!</p>;
  }

  const completedTestsByUser = await getCompletedTestsByUser(user?.id);
  const typedCompletedTests = completedTestsByUser as CompletedTest[];

  return <CompletedTestsList tests={typedCompletedTests} />;
}

export default function TestResultPage() {
  return (
    <Suspense fallback={<TestLoader />}>
      <CompletedTests />
    </Suspense>
  );
}
