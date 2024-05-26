import { quickLinks } from "@/constants/quickLinks";
import QuickLink from "./QuickLink";

export default function Guide() {
  return (
    <div className="flex w-full flex-col items-center gap-10 rounded-lg border border-border/40 bg-zinc-950 p-4 py-8 sm:px-8 xl:w-3/4">
      <div className="flex w-full flex-col gap-2">
        <div className="flex items-center justify-between">
          <h4 className="text-sm text-muted-foreground">How to start: </h4>
          <div className="h-4 w-4 animate-pulse rounded-full dark:bg-amber-400/30"></div>
        </div>
        <p className="pt-6 text-base text-zinc-300">
          1. Navigate using the side panel or quick links below.
        </p>
        <p className="text-base text-zinc-300">
          2. Create a motto that will be shared throughout the different screens
          of this application.
        </p>
        <p className="text-base text-zinc-300">
          3. Have fun and enjoy learning new things.
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row md:gap-12">
        <>
          {quickLinks.map((link) => (
            <QuickLink key={link.id} {...link} />
          ))}
        </>
      </div>
    </div>
  );
}
