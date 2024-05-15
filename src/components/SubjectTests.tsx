import { TestsData } from "@/types/testData";
import TestCard from "@/components/TestCard";

export default function SubjectTests(props: { tests: TestsData[] }) {
  return (
    <section className="flex w-full justify-center">
      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:w-5/6">
        {props.tests.map((item, index) => (
          <TestCard
            key={item.id}
            test={item}
            questionNumber={`${index + 1}/${props.tests.length}`}
          />
        ))}
      </div>
    </section>
  );
}
