import create from "zustand";

const useCounterStore = create((set) => ({
  activeItem: "",
  visibleItem: () => set((state) => ({ item: state })),
}));

export default useCounterStore;
