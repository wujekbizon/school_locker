import { TestsData } from "@/types/testData";
import TestCard from "./TestCard";
import { generateRandomTests } from "@/helpers/generateRandomTests";

export default function GenerateTests(props: {
  tests: TestsData[];
  numTests: number | null;
}) {
  if (!props.numTests || !props.tests.length) {
    return;
  }

  const randomTests = generateRandomTests(props.tests, props.numTests);

  return (
    <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:w-5/6">
      {randomTests.map((item, index) => (
        <TestCard
          key={item.id}
          test={item}
          questionNumber={`${index + 1}/${props.tests.length}`}
        />
      ))}
    </div>
  );
}
