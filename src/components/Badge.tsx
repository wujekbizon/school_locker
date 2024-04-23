export default function Badge(props: { title: string }) {
  return (
    <div className="inline-flex w-16 items-center justify-center rounded-md border border-transparent bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground shadow transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
      {props.title}
    </div>
  );
}
