"use client";

import { TestsData } from "@/types/testData";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";
import Link from "next/link";
import { CATEGORY_OPTIONS } from "@/constants/categoryOptions";
import { useSearchTermStore } from "@/store/useSearchTermStore";
import { useSelectedCategoryStore } from "@/store/useSelectedCategory";
import QuestionCard from "./QuestionCard";
import CategoryFilter from "./CategoryFilter";

const AllTests: React.FC<TestsData[]> = (tests) => {
  const { searchTerm, setSearchTerm } = useSearchTermStore();
  const { selectedCategory } = useSelectedCategoryStore();
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const debouncedSearchTermUpdated = useDebounce(debouncedSearchTerm, 250); // Debounce search
  // creates an array directly from object's values
  const testsArr = Object.values(tests);

  const filteredTestsQueryFn = useMemo(() => {
    return async () => {
      if (!debouncedSearchTerm) return testsArr; // Return all tests if no search term or category selected

      const filteredTests = testsArr.filter((test) => {
        let match = false;

        if (debouncedSearchTerm) {
          // Search logic based on search term (similar to your existing code)
          match =
            test.data.question
              .toLowerCase()
              .includes(debouncedSearchTerm.toLowerCase()) ||
            test.data.answers.some((answer) =>
              answer.option
                .toLowerCase()
                .includes(debouncedSearchTerm.toLowerCase()),
            );
        }

        return match;
      });

      return filteredTests;
    };
  }, [debouncedSearchTerm, testsArr]);

  const {
    data: filteredTests,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["filteredTests", debouncedSearchTermUpdated],
    queryFn: filteredTestsQueryFn,
    enabled: !!searchTerm,
    staleTime: 10 * 60 * 1000, // Cache results for 10 minutes
  });

  useEffect(() => {
    setDebouncedSearchTerm(searchTerm);
  }, [searchTerm, setDebouncedSearchTerm]); // Update debouncedSearchTerm on searchTerm change

  const {
    data: filteredByCategory,
    isLoading: categoryLoading,
    error: categoryError,
  } = useQuery({
    queryKey: ["filteredByCategory", selectedCategory],
    queryFn: async () => {
      if (!selectedCategory) return testsArr;
      const filteredByCategory = testsArr.filter(
        (test) => test.category === selectedCategory,
      );
      return filteredByCategory;
    },
    enabled: !!selectedCategory,
  });

  const combinedFilteredTests =
    (searchTerm && filteredTests) ||
    (selectedCategory && filteredByCategory) ||
    testsArr;

  return (
    <section className="flex flex-col items-center gap-7 p-2 md:p-8">
      <div className="flex h-52 w-full gap-4 overflow-x-scroll p-4 scrollbar-webkit">
        {CATEGORY_OPTIONS.slice(1).map((item) => {
          return (
            <div
              key={item.category}
              className="flex h-full w-64 min-w-60 flex-col items-center justify-between rounded-md border border-border/40 bg-zinc-950 p-4"
            >
              <p className="text-md text-center text-muted-foreground">
                {item.category}
              </p>
              <Link
                className="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary/90 px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-amber-500/80  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                href={`/dashboard/learn/test-${item.value}`}
              >
                Take Test
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex w-full flex-col justify-center gap-4 md:flex-row">
        <div className="flex flex-col">
          <CategoryFilter
            options={CATEGORY_OPTIONS}
            label="Filter by category:"
          />
        </div>
        <div className="flex w-full flex-col md:w-1/3">
          <label className="pb-1 text-sm text-muted-foreground" htmlFor="input">
            Search
          </label>
          <input
            id="input"
            type="text"
            className="flex h-8 w-full items-center justify-start whitespace-nowrap rounded border border-border/40 bg-zinc-950 px-4  py-2 text-sm font-normal text-muted-foreground text-white shadow-none transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:pr-12"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {combinedFilteredTests?.map((item, index) => (
        <QuestionCard
          key={item.id}
          test={item}
          questionNumber={`${index + 1}/${testsArr.length}`}
        />
      ))}

      {/* {selectedCategory &&
        filteredByCategory &&
        filteredByCategory?.map((item, index) => (
          <QuestionCard
            key={item.id}
            test={item}
            questionNumber={`${index + 1}/${testsArr.length}`}
          />
        ))}

      {!searchTerm &&
        !selectedCategory &&
        testsArr?.map((item, index) => (
          <QuestionCard
            key={item.id}
            test={item}
            questionNumber={`${index + 1}/${testsArr.length}`}
          />
        ))} */}

      {testsArr?.length === 0 && (
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
};

export default AllTests;
