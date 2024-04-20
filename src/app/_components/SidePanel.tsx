import CustomButton from "@/components/ui/CustomButton";

export default function SidePanel() {
  return (
    <aside className="sticky top-0 hidden  w-96 border-r border-border/40 bg-zinc-950 p-4 md:block">
      <div className="flex h-full flex-col justify-between ">
        <div className="flex flex-col gap-4 ">
          <CustomButton>Dashboard</CustomButton>
          <CustomButton>My Tests</CustomButton>
        </div>

        <div className="flex flex-col gap-4 py-2">
          <CustomButton>Settings</CustomButton>
        </div>
      </div>
    </aside>
  );
}
