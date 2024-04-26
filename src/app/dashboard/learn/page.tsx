import QuestionCard from "@/components/QuestionCard";
import { db } from "@/server/db";
import { eq } from "drizzle-orm";
import TestDataInterface from "@/types/testData";
import { getTestsByUser } from "@/server/queries";

export default async function LearnPage() {
  // const category = "english";

  const tests = await getTestsByUser();

  return (
    <section className="flex flex-col items-center gap-7 p-2 md:p-8">
      {tests.map((item) => (
        <QuestionCard
          key={item.id}
          data={item.data as TestDataInterface}
          length={tests.length}
        />
      ))}
    </section>
  );
}
