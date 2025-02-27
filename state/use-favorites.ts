import { Product } from "@/types";
import { Toast } from "expo-react-native-toastify";

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
          Toast.success("Ya agregaste este producto a tus favoritos 🧡");
        }
        const productMarked = { ...product, favorite: true };

        set({ items: [...currentFavorites, productMarked] });
        Toast.success("Agregado a tus favoritos ❤️‍🔥");
      },

      removeFavorite: (product) => {
        const currentFavorites = get().items;

        const removeMarked = { ...product, favorite: false };

        const newFavoritesList = currentFavorites.filter(
          (el) => el.id !== removeMarked.id
        );
        Toast.success("Eliminaste este producto de tus favoritos");

        set({ items: newFavoritesList });
      },

      removeAllFavorites: () => {
        set({ items: [] });
  
        Toast.success("Eliminaste todos tus favoritos");
      },
    }),

    {
      name: "favorites-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
