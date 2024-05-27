"use client";

import { useGenerateTestStore } from "@/store/useGenerateTestStore";

export default function SubjectTestsMenu() {
  const { setNumberTests, setIsTest } = useGenerateTestStore();

  // handler function to generate test
  const generateTest = (n: number) => {
    setNumberTests(n);
    setIsTest(true);
  };

  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-lg border border-border/40 p-4 xl:w-5/6">
      <h4 className="p-0 text-2xl text-amber-400 sm:p-4 ">
        Choice your test level.
      </h4>
      <div className="flex ">
        <p className="p-0 text-center text-sm text-muted-foreground md:p-4">
          <span className=" text-white">Easy</span> - 15 questions{" "}
        </p>

        <p className="p-0 text-center text-sm text-muted-foreground md:p-4">
          <span className=" text-white">Medium</span> - 35 questions{" "}
        </p>
        <p className="p-0 text-center text-sm text-muted-foreground md:p-4">
          <span className=" text-white">Hard</span> - 50 questions{" "}
        </p>
      </div>

      <div className="flex w-full flex-col items-center justify-evenly gap-4 sm:flex-row">
        <button
          onClick={() => generateTest(15)}
          className="inline-flex h-10 w-full  items-center justify-center whitespace-nowrap rounded-md border border-border/40 bg-zinc-950 px-16 py-2 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:w-1/6"
        >
          Easy
        </button>
        <button
          onClick={() => generateTest(35)}
          className="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md border border-border/40 bg-zinc-950 px-16 py-2 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:w-1/6"
        >
          Medium
        </button>
        <button
          onClick={() => generateTest(50)}
          className="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md border border-border/40 bg-zinc-950 px-16 py-2 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:w-1/6"
        >
          Hard
        </button>
      </div>
    </div>
  );
}
