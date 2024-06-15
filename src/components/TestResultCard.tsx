import { CompletedTest } from "@/types/dbTypes";

export default function TestResultCard({
  completedTest,
}: {
  completedTest: CompletedTest;
}) {
  const { score } = completedTest as CompletedTest;

  const onHandleMoreDetails = () => {};

  return (
    <div>
      <p>Score: </p>
      <p>{score}</p>
      {/* <button onClick={onHandleMoreDetails}>Get more details</button> */}
    </div>
  );
}
