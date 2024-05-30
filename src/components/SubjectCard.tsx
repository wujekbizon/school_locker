import { countTestsByCategory } from "@/server/queries";
import Link from "next/link";

export default async function SubjectCard(props: {
  item: { category: string; value: string };
}) {
  const numberOfTest = await countTestsByCategory(props.item.value);

  return (
    <div className="flex h-60 w-full flex-col items-center justify-between rounded-md border border-border/40 bg-zinc-950 p-3">
      <p className="text-md text-center text-muted-foreground">
        Total tests:
        <span className="px-3 text-lg text-amber-300"> {numberOfTest}</span>
      </p>
      <div className="flex h-24 w-full items-center justify-center rounded-xl bg-black">
        <p className="text-center text-2xl text-white">{props.item.category}</p>
      </div>
      <Link
        className="inline-flex  w-3/4 items-center justify-center whitespace-nowrap rounded-md bg-primary/90 px-2 py-1 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-amber-500/80  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        href={`/dashboard/learn/subjects/${props.item.value}`}
      >
        Take Test
      </Link>
    </div>
  );
}
