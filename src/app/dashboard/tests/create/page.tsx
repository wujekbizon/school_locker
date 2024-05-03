import CreateTestForm from "@/components/CreateTestForm";
import UploadFileDocs from "@/components/UploadFileDocs";

export default function CreateTestPage() {
  return (
    <section className="flex w-full flex-col items-center overflow-x-hidden p-4">
      <CreateTestForm />

      <UploadFileDocs />
    </section>
  );
}
