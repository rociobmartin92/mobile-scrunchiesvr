import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage"; // ✅ Importa AsyncStorage
import { Product } from "@/types";

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product: Product) => {
        const currentProductsInCart = get().items;

        if (currentProductsInCart.some((el) => el.id === product.id)) {
          console.log("El producto ya está en el carrito.");
          return;
        }

        set({ items: [...currentProductsInCart, product] });
        console.log("Producto agregado al carrito 🛍️");
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((el) => el.id !== id),
        }));
        console.log("Producto eliminado del carrito 🗑️");
      },

      removeAll: () => {
        set({ items: [] });
        console.log("Carrito eliminado 🗑️");
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => AsyncStorage), // ✅ Usa AsyncStorage en React Native
    }
  )
);
