import Link from "next/link";

export default function CustomButton(props: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={props.href}
      className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md border border-border/40 bg-zinc-950 px-16 py-2 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    >
      {props.children}
    </Link>
  );
}
