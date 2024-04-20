import Link from "next/link";

export default function CustomButton(props: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={props.href}
      className="rounded bg-gradient-to-r from-gray-600 to-gray-800 px-4 py-2 text-center text-white hover:from-gray-600 hover:to-gray-400"
    >
      {props.children}
    </Link>
  );
}
