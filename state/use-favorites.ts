import { Product } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";


interface Favorites {
  items: Product[];
  addFavorite: (data: Product) => void;
  removeFavorite: (data: Product) => void;
  removeAllFavorites: () => void;
}

export const useFavorites = create<Favorites>()(
  persist(
    (set, get) => ({
      items: [],
      addFavorite: (product) => {
        const currentFavorites = get().items;

        const existingItemInFavorites = currentFavorites.find(
          (el) => el.id === product.id
        );

        if (existingItemInFavorites) {
          // return toast({
          //   title: "Ya agregaste este producto a tus favoritos ",
          // });
          console.log("sfkjsldkjfñsd")
        }
        const productMarked = { ...product, favorite: true };
        console.log("addMark", productMarked);
        set({ items: [...currentFavorites, productMarked] });

        // toast({
        //   title: "Agregado a tus favoritos ❤️‍🔥",
        // });
        console.log("sfkjsldkjfñsd")
      },

      removeFavorite: (product) => {
        const currentFavorites = get().items;

        const removeMarked = { ...product, favorite: false };

        const newFavoritesList = currentFavorites.filter(
          (el) => el.id !== removeMarked.id
        );
        // toast({
        //   title: "Eliminaste este producto de tus favoritos",
        // });
        console.log("sfkjsldkjfñsd")
  
        set({ items: newFavoritesList });
      },

      removeAllFavorites: () => {
        set({ items: [] });
        // toast({
        //   title: "Eliminaste todos tus favoritos",
        // });
        console.log("sfkjsldkjfñsd")
      },
    }),

    {
      name: "favorites-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
