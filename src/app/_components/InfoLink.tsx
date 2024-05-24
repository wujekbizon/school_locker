import Link from "next/link";

export default function InfoLink({
  content,
  url,
}: {
  content: string;
  url: string;
}) {
  return (
    <h4 className="py-4 text-center text-sm text-muted-foreground sm:text-left">
      {content}
      <Link className="text-amber-500/70 hover:text-amber-500/90" href={url}>
        here.
      </Link>
    </h4>
  );
}
