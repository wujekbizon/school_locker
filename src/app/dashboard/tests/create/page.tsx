import CreateTestForm from "@/components/CreateTestForm";

export default function CreateTestPage() {
  return (
    <section className="flex w-full flex-col items-center gap-12 p-4">
      <div>
        <h1>Welcome to tests creating page.</h1>
      </div>
      <CreateTestForm />
    </section>
  );
}
