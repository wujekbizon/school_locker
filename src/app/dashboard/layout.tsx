import DasboardNav from "../_components/DasboardNav";
import SidePanel from "../_components/SidePanel";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full flex-row bg-black">
      <SidePanel />
      <div className="w-full">
        <DasboardNav />
        {children}
      </div>
    </main>
  );
}
