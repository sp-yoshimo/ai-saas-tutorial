import { create } from "zustand"


interface useProModalStpre {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void
}


export const useProModal = create<useProModalStpre>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}))