"use client";

import { TestsData } from "@/types/testData";
import { useState } from "react";
import GenerateTests from "./GenerateTests";
import SubjectTestsMenu from "./SubjectTestsMenu";

export default function SubjectTests(props: { tests: TestsData[] }) {
  const [numberTests, setNumberTests] = useState<number | null>(null);

  return (
    <section className="flex w-full flex-col items-center justify-center gap-8 px-4">
      <SubjectTestsMenu setNumberTests={setNumberTests} />
      <GenerateTests tests={props.tests} numTests={numberTests} />
    </section>
  );
}
