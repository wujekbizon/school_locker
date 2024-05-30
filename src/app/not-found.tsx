import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-4 text-amber-400">
      <h2 className="text-lg font-bold">Not Found</h2>
      <p className="text-sm">Could not find requested resource</p>
      <Link href={"/dashboard"}>Go Back</Link>
    </div>
  );
}
