import { useSelectedCategoryStore } from "@/store/useSelectedCategory";

export default function CategoryFilter(props: {
  options: { category: string; value: string }[];
}) {
  const { selectedCategory, setSelectedCategory } = useSelectedCategoryStore();

  return (
    <div className="flex flex-col">
      <label htmlFor="category" className="pb-1 text-sm text-muted-foreground">
        Filter by category:
      </label>
      <select
        name="category"
        id="category"
        className="h-8 rounded border border-border/40 bg-zinc-950 px-2 text-sm"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {props.options.map((item) => (
          <option key={item.category} value={item.value}>
            {item.category}
          </option>
        ))}
      </select>
    </div>
  );
}
