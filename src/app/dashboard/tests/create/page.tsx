import Link from "next/link";
import CreateTestForm from "@/components/CreateTestForm";
import UploadTestForm from "@/components/UploadTestForm";
import Title from "@/components/Title";
import { getCategories } from "@/server/queries";
import { populateCategories } from "@/helpers/populateCategories";

export default async function CreateTestPage() {
  const categories = await getCategories();
  const CATEGORIES = populateCategories(categories);

  return (
    <section className="flex w-full flex-col items-center p-4">
      <Title title="Create Test:" />
      <CreateTestForm categories={CATEGORIES} />
      <UploadTestForm />
      <h4 className="py-4 text-center text-base text-muted-foreground sm:text-left">
        You can always upload tests from file containing test data. Learn more
        about{" "}
        <Link
          className="text-amber-500/70 hover:text-amber-500/90"
          href="/documentation"
        >
          here
        </Link>
      </h4>
    </section>
  );
}
