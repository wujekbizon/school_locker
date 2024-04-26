import QuestionCard from "@/components/QuestionCard";
import TestDataInterface from "@/types/testData";
import { getAllTests } from "@/server/queries";

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
    </section>
  );
}
