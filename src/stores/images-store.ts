import { createStore } from "zustand/vanilla";
import type { Photo } from "@/app/_components/ImageContainer";

export type ImagesState = {
  count: number;
  imagesList: Array<Photo>;
};

export type ImagesActions = {
  addToList: (_image: Photo) => void;
  addToCount: () => void;
  removeFromCount: () => void;
  removeFromList: (_image: Photo) => void;
  setCount: (_count: number) => void;
  setImagesList: (_images: Array<Photo>) => void;
};

export type ImagesStore = ImagesState & ImagesActions;

export const initImagesStore = (): ImagesState => {
    return {
        count: 0,
        imagesList: []
    }
}

export const defaultInitState: ImagesState = {
  count: 0,
  imagesList: [],
};

export const createImagesStore = (
  initState: ImagesState = defaultInitState,
) => {
  return createStore<ImagesStore>()((set) => ({
    ...initState,
    addToList: (image) =>
      set((state) => ({ imagesList: [image, ...state.imagesList] })),
    addToCount: () => set((state) => ({ count: state.count + 1 })),
    removeFromCount: () => set((state) => ({ count: state.count - 1 })),
    removeFromList: (image) => set((state) => ({ imagesList: state.imagesList.filter(img => img.id !== image.id) })),
    setCount: (count) => set((state) => ({ count: count })),
    setImagesList: (images) => set((state) => ({ imagesList: images }))
  }));
};
