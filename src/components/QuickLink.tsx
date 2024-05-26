import Link from "next/link";

export default function QuickLink(props: {
  href: string;
  id: number;
  text: string;
}) {
  return (
    <Link
      href={props.href}
      className="flex h-14 w-full items-center justify-center rounded-lg border border-border/40 bg-neutral-900 p-2 text-center text-sm transition-colors hover:bg-neutral-800 sm:h-16 sm:w-56"
    >
      {props.text}
    </Link>
  );
}
