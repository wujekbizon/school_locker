import CompletedTestsList from "@/components/CompletedTestsList";
import TestLoader from "@/components/TestsLoader";
import { getCompletedTestsByUser } from "@/server/queries";
import { CompletedTest } from "@/types/dbTypes";
import { currentUser } from "@clerk/nextjs/server";
import { Suspense } from "react";

async function CompletedTests() {
  const user = await currentUser();
  if (!user) {
    return <p>No user found!</p>;
  }

  const completedTestsByUser = await getCompletedTestsByUser(user.id);
  const typedCompletedTests = completedTestsByUser as CompletedTest[];

  return <CompletedTestsList tests={typedCompletedTests} />;
}

export default function TestsResultPage() {
  return (
    <Suspense fallback={<TestLoader />}>
      <CompletedTests />
    </Suspense>
  );
}
