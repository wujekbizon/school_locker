import Link from "next/link";

export default function SubjectCard(props: {
  item: { category: string; value: string };
}) {
  return (
    <div className="flex h-60 w-full flex-col items-center justify-between gap-3 rounded-md border border-border/40 bg-zinc-950 p-3">
      <p className="text-center text-sm text-muted-foreground">
        {props.item.category}
      </p>
      <Link
        className="inline-flex  w-3/4 items-center justify-center whitespace-nowrap rounded-md bg-primary/90 px-2 py-1 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-amber-500/80  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        href={`/dashboard/learn/test-${props.item.value}`}
      >
        Take Test
      </Link>
    </div>
  );
}
