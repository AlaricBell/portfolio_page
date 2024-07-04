import { create } from "zustand";
import { NavigationType } from "../components/navigation/navigation.types";

interface NavigationState {
	isOpen: boolean;
	content: NavigationType[];
	setIsOpen: () => void;
	setContent: (data: any[]) => void;
}

export const useNavigationStore = create<NavigationState>()((set) => ({
	isOpen: false,
	content: [],
	setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
	setContent: (data) => set((state) => ({ content: data })),
}));
