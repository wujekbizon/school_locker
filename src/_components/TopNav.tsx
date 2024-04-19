export default function TopNav() {
  return (
    <nav className="flex h-20 items-center justify-between bg-zinc-950 p-4">
      <h1 className="border-t border-zinc-800 text-2xl text-white">
        School <span className="text-zinc-600">Locker</span>{" "}
      </h1>
      <div className="flex items-center gap-4">
        <div className="text-white">Sign in</div>
        <div>
          <input
            type="text"
            className="h-7 rounded bg-zinc-800 p-2 text-lg text-white outline-none"
            placeholder="Search..."
          />
        </div>
      </div>
    </nav>
  );
}
