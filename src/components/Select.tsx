export default function Select(props: {
  options: { category: string; value: string }[];
  label: string;
}) {
  return (
    <>
      <label htmlFor="category" className="pb-1 text-sm text-muted-foreground">
        {props.label}
      </label>
      <select
        name="category"
        id="category"
        className="h-8 rounded border border-border/60 bg-zinc-950 px-2 text-sm"
      >
        {props.options.map((item) => (
          <option key={item.category} value={item.value}>
            {item.category}
          </option>
        ))}
      </select>
    </>
  );
}
