export default function SidePanel() {
  return (
    <aside className="sticky top-0 w-96 border-r border-border/40 bg-zinc-950">
      <div className="item-center flex h-full flex-col gap-4 py-4">
        <button>Dashboard</button>
        <button>My Tests</button>
      </div>
    </aside>
  );
}
