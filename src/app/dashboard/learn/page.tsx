import { Suspense } from "react";
import { TestsData } from "@/types/testData";
import { getAllTests, getCategories } from "@/server/queries";
import AllTests from "@/components/AllTests";
import FallbackComponent from "@/app/_components/Fallback";
import { populateCategories } from "@/helpers/populateCategories";

export const dynamic = "force-dynamic";

const Tests = async () => {
  // getting all tests from db
  const tests = await getAllTests();
  const typedTests = tests as TestsData[]; // Type assertion

  // getting all categories from deb
  const categories = await getCategories();
  const CATEGORIES = populateCategories(categories);

  return <AllTests tests={typedTests} categories={CATEGORIES} />;
};

export default async function LearnPage() {
  return (
    <Suspense fallback={<FallbackComponent />}>
      <Tests />
    </Suspense>
  );
}
