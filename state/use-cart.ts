import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Toast } from "expo-react-native-toastify";
import AsyncStorage from "@react-native-async-storage/async-storage"; 
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

          Toast.success("El producto ya está en el carrito.");
          return;
        }

        set({ items: [...currentProductsInCart, product] });

        Toast.success("Producto agregado al carrito 🛍️");
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((el) => el.id !== id),
        }));
        Toast.success("Producto eliminado del carrito 🗑️");
      },

      removeAll: () => {
        set({ items: [] });
        Toast.success("Carrito eliminado 🗑️");
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => AsyncStorage), // ✅ Usa AsyncStorage en React Native
    }
  )
);
