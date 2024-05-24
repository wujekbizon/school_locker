import { useSearchTermStore } from "@/store/useSearchTermStore";
import Label from "./Label";

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useSearchTermStore();
  return (
    <div className="flex w-full flex-col">
      <Label
        className="pb-1 text-sm text-muted-foreground"
        label="Search"
        htmlFor="input"
      />

      <input
        id="input"
        type="text"
        className="flex h-10 w-full rounded-md border border-border/40 bg-neutral-900 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-amber-200/10 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
