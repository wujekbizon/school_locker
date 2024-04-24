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
      <div className="scrollbar-webkit w-full overflow-y-scroll">
        <DasboardNav />
        {children}
      </div>
    </main>
  );
}
