import CustomButton from "@/components/CustomButton";
import UploadFileDocs from "@/components/UploadFileDocs";

export default function DocumentationPage() {
  return (
    <section className="w-full bg-black">
      <div className="flex h-full w-full">
        <div className="flex h-full w-1/5 flex-col items-center justify-between border-r border-border/40 bg-zinc-950 p-4">
          <div className="flex w-full flex-col items-start">
            <h2>Docs</h2>
            <p>Getting started</p>
          </div>
          <div className="flex w-full">
            <CustomButton href="/dashboard">Dashboard</CustomButton>
          </div>
        </div>
        <div className="w-4/5 overflow-y-auto">
          <UploadFileDocs />
          <UploadFileDocs />
        </div>
      </div>
    </section>
  );
}
