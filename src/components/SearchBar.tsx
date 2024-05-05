import { useSearchTermStore } from "@/store/useSearchTermStore";

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useSearchTermStore();
  return (
    <div className="flex w-full flex-col md:w-1/3">
      <label className="pb-1 text-sm text-muted-foreground" htmlFor="input">
        Search
      </label>
      <input
        id="input"
        type="text"
        className="flex h-8 w-full items-center justify-start whitespace-nowrap rounded border border-border/40 bg-zinc-950 px-4  py-2 text-sm font-normal text-muted-foreground text-white shadow-none transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:pr-12"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
