import { useSelectedCategoryStore } from "@/store/useSelectedCategory";

export default function CategoryFilter(props: {
  categories: { category: string; value: string }[];
}) {
  const { selectedCategory, setSelectedCategory } = useSelectedCategoryStore();

  return (
    <div className="flex w-full flex-col">
      <label htmlFor="category" className="pb-1 text-sm text-muted-foreground">
        Filter by category:
      </label>
      <select
        name="category"
        id="category"
        className="h-10 cursor-pointer rounded border border-border/60 bg-neutral-900 px-2 text-sm  focus:border-amber-200/10 focus-visible:outline-none"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {props.categories.map((item) => (
          <option key={item.category} value={item.value}>
            {item.category}
          </option>
        ))}
      </select>
    </div>
  );
}
