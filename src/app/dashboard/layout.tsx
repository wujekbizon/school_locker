import DasboardNav from "@/app/_components/DasboardNav";
import SidePanel from "@/app/_components/SidePanel";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full flex-row bg-black">
      <SidePanel />
      <div className="w-full overflow-y-scroll scrollbar-webkit">
        <DasboardNav />
        {children}
      </div>
    </main>
  );
}
