"use client";

import CustomButton from "@/components/CustomButton";
import { useStore } from "@/store/useStore";

export default function SidePanel() {
  const isSidePanelOpen = useStore((state) => state.isSidePanelOpen);
  return (
    <>
      {isSidePanelOpen && (
        <aside className="hidden border-r border-border/40 p-4 md:block">
          <div className="flex h-full flex-col justify-between">
            <div className="flex flex-col gap-4 ">
              <CustomButton href="/dashboard">Dashboard</CustomButton>
              <CustomButton href="/dashboard/tests">My Tests</CustomButton>
              <CustomButton href="/dashboard/learn">Learn</CustomButton>
              <CustomButton href="/library">Library</CustomButton>
            </div>
            <div className="flex flex-col gap-4 py-2">
              <CustomButton href="/dashboards/settings">Settings</CustomButton>
              <CustomButton href="/feedback">Feedback</CustomButton>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
