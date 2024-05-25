import FallbackComponent from "@/app/_components/Fallback";
import SubjectsList from "@/components/SubjectsList";
import { populateCategories } from "@/helpers/populateCategories";
import { getCategories } from "@/server/queries";
import { Suspense } from "react";

async function Subjects() {
  const categories = await getCategories();
  const CATEGORIES = populateCategories(categories);

  return <SubjectsList subjects={CATEGORIES} />;
}

export default function SubjectsPage() {
  return (
    <Suspense
      fallback={<FallbackComponent text="Loading subjects categories..." />}
    >
      <Subjects />
    </Suspense>
  );
}
