"use client";

import CustomButton from "@/components/CustomButton";
import { useStore } from "@/store/useStore";

export default function SidePanel() {
  const isSidePanelOpen = useStore((state) => state.isSidePanelOpen);
  return (
    <>
      {isSidePanelOpen && (
        <aside className="hidden  flex-col justify-between border-r border-border/40 p-4 md:flex ">
          <div className="flex flex-col gap-4">
            <CustomButton href="/dashboard">Dashboard</CustomButton>
            <CustomButton href="/dashboard/tests">My Tests</CustomButton>
            <CustomButton href="/dashboard/learn">Learn</CustomButton>
            <CustomButton href="/library">Library</CustomButton>
          </div>
          <div className="flex flex-col gap-4 py-2">
            <CustomButton href="/dashboards/settings">Settings</CustomButton>
            <CustomButton href="/feedback">Feedback</CustomButton>
          </div>
        </aside>
      )}
    </>
  );
}
