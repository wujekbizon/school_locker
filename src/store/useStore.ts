import { create } from "zustand";

type StateType = {
  isSidePanelOpen: boolean;
  toggleSidePanel: () => void;
};

export const useStore = create<StateType>((set) => ({
  isSidePanelOpen: true,
  toggleSidePanel: () =>
    set((state: StateType) => ({ isSidePanelOpen: !state.isSidePanelOpen })),
}));