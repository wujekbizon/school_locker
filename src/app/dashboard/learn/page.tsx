import QuestionCard from "@/components/QuestionCard";
import TestDataInterface from "@/types/testData";
import { getAllTests } from "@/server/queries";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function LearnPage() {
  // getting all tests from db
  const tests = await getAllTests();

  return (
    <section className="flex flex-col items-center gap-7 p-2 md:p-8">
      {tests.map((item, index) => (
        <QuestionCard
          key={item.id}
          data={item.data as TestDataInterface}
          length={tests.length}
          index={index}
        />
      ))}
      {tests?.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-lg text-muted-foreground">
            No tests available yet.
          </p>
          <Link
            className="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-amber-500  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            href="/dashboard/tests/create"
          >
            Create Test
          </Link>
        </div>
      )}
    </section>
  );
}
