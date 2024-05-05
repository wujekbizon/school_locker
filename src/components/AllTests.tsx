"use client";

import { TestsData } from "@/types/testData";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";
import { CATEGORY_OPTIONS } from "@/constants/categoryOptions";
import { useSearchTermStore } from "@/store/useSearchTermStore";
import { useSelectedCategoryStore } from "@/store/useSelectedCategory";
import CategoryFilter from "./CategoryFilter";
import SubjectCard from "./SubjectCard";
import SearchBar from "./SearchBar";
import FilteredTestsList from "./FilteredTestsList";
import SubjectsList from "./SubjectsList";

const AllTests: React.FC<TestsData[]> = (tests) => {
  const { searchTerm } = useSearchTermStore();
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
    staleTime: 10 * 60 * 1000, // Cache results for 10 minutes
  });

  const combinedFilteredTests =
    searchTerm && filteredTests
      ? filteredTests
      : selectedCategory && filteredByCategory
        ? filteredByCategory
        : testsArr; // Concise conditional rendering

  return (
    <section className="flex flex-col items-center gap-7 p-2 md:p-8">
      <div className="flex w-full flex-col justify-center gap-4 md:flex-row">
        <CategoryFilter options={CATEGORY_OPTIONS} />
        <SearchBar />
      </div>
      <FilteredTestsList
        tests={combinedFilteredTests}
        isLoading={isLoading || categoryLoading}
        error={error || categoryError}
      />
    </section>
  );
};

export default AllTests;
