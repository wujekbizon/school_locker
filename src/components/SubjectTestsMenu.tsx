"use client";

import { useGenerateTestStore } from "@/store/useGenerateTestStore";
import RandomTestButon from "@/components/RandomTestButon";
import { testsMenu } from "@/constants/testsMenu";

export default function SubjectTestsMenu() {
  const { setNumberTests, setIsTest, isTest } = useGenerateTestStore();

  // handler function to generate test
  const generateTest = (n: number) => {
    setNumberTests(n);
    setIsTest(true);
  };

  const resetTest = () => {
    setNumberTests(null);
    setIsTest(false);
  };

  return (
    <div className="mt-10 flex w-full flex-col items-center gap-4 rounded-lg border border-border/40 bg-zinc-950 p-4 sm:mt-20 xl:w-5/6">
      <h4 className="p-0 text-center text-2xl text-amber-400 sm:p-4 sm:text-3xl ">
        Select your test level.
      </h4>
      <div className="flex w-full flex-col items-center justify-between gap-4 rounded-xl bg-neutral-800 p-4 sm:gap-2">
        <div className="hidden w-full items-center justify-evenly sm:flex">
          {testsMenu.map((m) => (
            <p
              className="p-0 text-center text-sm text-muted-foreground md:p-4"
              key={m.testTitle}
            >
              <span className=" text-white">{m.testTitle}</span> -{" "}
              {m.number.toString()} questions{" "}
            </p>
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-evenly gap-4 sm:flex-row">
          {isTest ? (
            <button
              onClick={resetTest}
              className="items-cente inline-flex h-10 w-full justify-center whitespace-nowrap rounded-md border border-border/40 bg-neutral-900 px-8 py-2 text-base font-medium text-secondary-foreground shadow transition-colors hover:bg-red-400/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:w-48"
            >
              Reset Test
            </button>
          ) : (
            testsMenu.map((m) => (
              <RandomTestButon
                key={m.testTitle}
                onClickHandler={() => generateTest(m.number)}
              >
                {m.testTitle}
              </RandomTestButon>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
