"use client";

import { TestsData } from "@/types/testData";
import { useQuery } from "@tanstack/react-query";
import { useSearchTermStore } from "@/store/useSearchTermStore";
import { useSelectedCategoryStore } from "@/store/useSelectedCategory";
import CategoryFilter from "./CategoryFilter";
import SearchBar from "./SearchBar";
import FilteredTestsList from "./FilteredTestsList";
import { Categories } from "@/types/categoriesType";
import { useDebouncedValue } from "@/hooks/useDebounceValue";

const AllTests = (props: { tests: TestsData[]; categories: Categories[] }) => {
  const { searchTerm } = useSearchTermStore();
  const { selectedCategory } = useSelectedCategoryStore();
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 250);

  // creates an array directly from object's values
  const testsArr = Object.values(props.tests);

  const filteredTestsQueryFn = async () => {
    if (!debouncedSearchTerm) return testsArr; // Return all tests if no search term or category selected

    return testsArr.filter((test) => {
      const matchQuestion = test.data.question
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase());
      const matchAnswers = test.data.answers.some((answer) =>
        answer.option.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
      );
      return matchQuestion || matchAnswers;
    });
  };

  const {
    data: filteredTests,
    isLoading: searchLoading,
    error,
  } = useQuery({
    queryKey: ["filteredTests", debouncedSearchTerm],
    queryFn: filteredTestsQueryFn,
    enabled: !!searchTerm,
    staleTime: 10 * 60 * 1000, // Cache results for 10 minutes
  });

  const filteredByCategoryQueryFn = async () => {
    if (!selectedCategory) return testsArr;
    return testsArr.filter((test) => test.category === selectedCategory);
  };

  const {
    data: filteredByCategory,
    isLoading: categoryLoading,
    error: categoryError,
  } = useQuery({
    queryKey: ["filteredByCategory", selectedCategory],
    queryFn: filteredByCategoryQueryFn,
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
    <section className="flex flex-col items-center gap-8 p-2 md:p-8">
      <div className="flex w-full flex-col-reverse justify-center gap-4 rounded-lg border border-border/40 bg-zinc-950 p-4 py-6 md:flex-row xl:w-5/6">
        <CategoryFilter categories={props.categories} />
        <SearchBar />
      </div>
      <FilteredTestsList
        tests={combinedFilteredTests}
        isLoading={searchLoading || categoryLoading}
        error={error || categoryError}
      />
    </section>
  );
};

export default AllTests;
