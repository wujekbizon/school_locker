import CreateTestForm from "@/components/CreateTestForm";
import UploadTestForm from "@/components/UploadTestForm";
import Link from "next/link";
export default function CreateTestPage() {
  return (
    <section className="flex w-full flex-col items-center overflow-x-hidden p-4">
      <CreateTestForm />
      <div className="flex w-full flex-col items-center justify-evenly sm:flex-row">
        <h2 className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text p-2  text-center text-2xl text-transparent  md:text-3xl">
          Upload file:
        </h2>
        <UploadTestForm />
      </div>
      <h4 className="py-4 text-center text-base text-muted-foreground sm:text-left">
        You can always upload tests from file containing test data. Learn more
        about{" "}
        <Link
          className="text-amber-500/70 hover:text-amber-500/90"
          href="/documentation"
        >
          {" "}
          here{" "}
        </Link>
      </h4>
    </section>
  );
}
