import CreateTestForm from "@/components/CreateTestForm";
import UploadTestForm from "@/components/UploadTestForm";
import { getCategories } from "@/server/queries";
import { populateCategories } from "@/helpers/populateCategories";
import ChooseAnswerCount from "@/components/ChooseAnswerCount";
import InfoLink from "@/app/_components/InfoLink";

export default async function CreateTestPage() {
  const categories = await getCategories();
  const populatedCategories = populateCategories(categories);

  return (
    <section className="flex w-full flex-col items-center p-4">
      <div className="flex w-full flex-col items-center justify-center gap-8 px-0 pb-10 sm:px-4 lg:w-3/4">
        <ChooseAnswerCount />
        <CreateTestForm categories={populatedCategories} />
        <UploadTestForm />
      </div>
      <InfoLink
        content="You can always upload tests from file containing test data. Learn more
      about "
        url="/documentation"
      />
    </section>
  );
}
