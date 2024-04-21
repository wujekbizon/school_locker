export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-full w-full bg-black">
      <nav className="flex h-14 items-center justify-center">
        Inner Layout Component - Optional
      </nav>
      {children}
    </main>
  );
}
