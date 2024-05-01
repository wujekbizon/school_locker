import { create } from "zustand";

interface SelectedCategoryState {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export const useSelectedCategoryStore = create<SelectedCategoryState>()(
  (set) => ({
    selectedCategory: "",
    setSelectedCategory: (category) => set({ selectedCategory: category }),
  }),
);
