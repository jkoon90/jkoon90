import { create } from "zustand";

interface NavigationState {
  activeSection: string;
  isScrolled: boolean;
  setActiveSection: (section: string) => void;
  setIsScrolled: (scrolled: boolean) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  activeSection: "hero",
  isScrolled: false,
  setActiveSection: (section) => set({ activeSection: section }),
  setIsScrolled: (scrolled) => set({ isScrolled: scrolled }),
}));
