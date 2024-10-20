import { create } from "zustand";

interface AnimationState {
	isVisible: boolean;
	setIsVisible: () => void;
}

export const useAnimationStore = create<AnimationState>()((set) => ({
	isVisible: false,
	setIsVisible: () => set((state) => ({ isVisible: !state.isVisible })),
}));
