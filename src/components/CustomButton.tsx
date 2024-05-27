import Link from "next/link";

export default function CustomButton(props: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={props.href}
      className="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md border border-border/40 bg-neutral-900 px-16 py-2 text-base font-medium text-secondary-foreground shadow transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    >
      {props.children}
    </Link>
  );
}
