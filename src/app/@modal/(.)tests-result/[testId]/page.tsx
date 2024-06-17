import TestResultCard from "@/components/TestResultCard";
import { getCompletedTest } from "@/server/queries";
import type { CompletedTest } from "@/types/dbTypes";
import { Modal } from "./modal";

async function CompletedTest({ testId }: { testId: string }) {
  const completedTest = await getCompletedTest(testId);
  const typedCompletedTest = completedTest as CompletedTest;

  return (
    <Modal>
      <TestResultCard completedTest={typedCompletedTest} />
    </Modal>
  );
}

export default function TestResultPage(props: {
  params: { testId: string };
  searchParams: {};
}) {
  return <CompletedTest testId={props.params.testId} />;
}
