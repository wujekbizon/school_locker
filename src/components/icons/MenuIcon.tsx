"use client";

import { useStore } from "@/store/useStore";

export default function MenuIcon() {
  const toggleSidePanel = useStore((state) => state.toggleSidePanel);
  return (
    <svg
      className="absolute left-2 hidden h-8 w-8 cursor-pointer md:block"
      width="28px"
      height="28px"
      viewBox="0 0 24 24"
      fill="none"
      onClick={toggleSidePanel}
    >
      <path
        d="M4 17H8M12 17H20M4 12H20M4 7H12M16 7H20"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
