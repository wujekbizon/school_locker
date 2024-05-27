import { TestsData } from "@/types/testData";
import GenerateTests from "./GenerateTests";
import SubjectTestsMenu from "./SubjectTestsMenu";

export default function SubjectTests(props: { tests: TestsData[] }) {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-8 px-4">
      <SubjectTestsMenu />
      <GenerateTests tests={props.tests} />
    </section>
  );
}
