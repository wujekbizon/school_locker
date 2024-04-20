import CustomButton from "@/components/ui/CustomButton";

export default function SidePanel() {
  return (
    <aside className="sticky top-0 w-96 max-w-96 border-r border-border/40 bg-zinc-950 px-4">
      <div className="item-center flex h-full flex-col gap-4 py-4">
        <CustomButton href="/dashboard">Dashboard</CustomButton>
        <CustomButton href="/my-test">My Tests</CustomButton>
      </div>
    </aside>
  );
}
