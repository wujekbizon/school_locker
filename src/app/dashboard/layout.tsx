export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-full w-full bg-black">
      <nav className="flex h-14 items-center justify-center">
        <h1 className="text-md  text-slate-600">
          Motto of the day:{" "}
          <span className="font-bold text-slate-400">
            Challenge the question, not the answer.{" "}
          </span>
        </h1>
      </nav>
      {children}
    </main>
  );
}
