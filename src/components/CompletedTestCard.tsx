import { CompletedTest } from "@/types/dbTypes";
import Link from "next/link";

export default function CompletedTestCard({
  completedTest,
}: {
  completedTest: CompletedTest;
}) {
  const { score, id, testResult } = completedTest as CompletedTest;

  const totalTests = testResult.length;
  const correctAnswers = testResult.filter((result) => result.answer === true);

  return (
    <Link
      href={`/tests-result/${id}`}
      className="flex w-full flex-col items-center justify-between gap-2 rounded-xl border border-border/40 bg-zinc-950 p-4 hover:bg-zinc-900 md:w-2/3"
    >
      <p className="text-center text-base text-stone-600">
        You answered correctly to {correctAnswers.length} questions
      </p>
      <div className="flex h-48 w-48 flex-col items-center justify-center gap-3 rounded-full border border-border/40">
        <p className="text-md text-center text-muted-foreground">
          Your score:{" "}
        </p>
        <p className="text-center text-xl text-muted-foreground">
          <span className="font-bold text-amber-500">{score}</span> /{" "}
          {totalTests}
        </p>
      </div>
      <p className="text-sm text-stone-700">
        Click for more detailed information
      </p>
    </Link>
  );
}
