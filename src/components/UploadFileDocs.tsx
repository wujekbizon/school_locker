import { JSON_TEST_EXAMPLE } from "@/constants/exampleTestJSON";

export default function UploadFileDocs() {
  return (
    <div className="flex flex-col items-center gap-12 p-0 sm:p-4">
      <div className="flex w-full flex-col justify-evenly gap-8 lg:w-3/4">
        <div className="flex w-full flex-col items-center gap-2">
          <h4 className="w-full text-sm text-muted-foreground">
            How to Prepare Your Test Data File
          </h4>
          <p className="text-md w-full rounded-lg border border-border/40 bg-zinc-950 p-2 text-sm leading-7 text-secondary-foreground sm:p-6 sm:text-base">
            This guide explains how to structure your test data for uploading to
            our application. Uploading tests in bulk can save you time and
            effort compared to adding them one by one.
          </p>
        </div>
        <div className="flex w-full flex-col items-center gap-2 ">
          <h4 className="w-full text-sm text-muted-foreground">
            Supported File Format
          </h4>
          <p className="text-md w-full rounded-lg border border-border/40 bg-zinc-950 p-2 text-sm leading-7 text-secondary-foreground sm:p-6 sm:text-base">
            JSON (JavaScript Object Notation) - We recommend using the JSON
            format for your test data file. Your data file should be a valid
            JSON object containing an array of test objects.
          </p>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="flex w-full flex-col gap-4  lg:w-3/4">
          <h4 className="text-sm text-muted-foreground">
            Required Structure Example
          </h4>
          <pre className="rounded-lg border border-border/40 bg-zinc-950 p-2 text-xs text-amber-400/80 sm:p-6 sm:text-base">
            <code>{JSON_TEST_EXAMPLE}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
