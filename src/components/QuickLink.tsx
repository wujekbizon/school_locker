import Link from "next/link";

export default function QuickLink(props: {
  href: string;
  id: number;
  text: string;
}) {
  return (
    <Link
      href={props.href}
      className="flex h-32 w-56 items-center justify-center rounded-lg border border-border/40 bg-gradient-to-tr from-black from-60% to-amber-500 p-2 text-center hover:from-gray-500 hover:to-gray-700 hover:text-zinc-950"
    >
      {props.text}
    </Link>
  );
}
