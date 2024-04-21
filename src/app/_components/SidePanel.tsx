import CustomButton from "@/components/ui/CustomButton";

export default function SidePanel() {
  return (
    <aside className="sticky top-0 hidden border-r border-border/40 bg-zinc-950 p-4 md:block">
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col gap-4 ">
          <CustomButton href="/dashboard">Dashboard</CustomButton>
          <CustomButton href="/dashboard/tests">My Tests</CustomButton>
          <CustomButton href="/dashboard/learn">Learn</CustomButton>
        </div>

        <div className="flex flex-col gap-4 py-2">
          <CustomButton href="/dashboards/settings">Settings</CustomButton>
          <CustomButton href="/feedback">Feedback</CustomButton>
        </div>
      </div>
    </aside>
  );
}
