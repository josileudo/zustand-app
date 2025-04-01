import { create } from "zustand";
import { api } from "../api/api";
import { Product } from "../shared/interfaces/Product";

interface InitialState {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
}

const initialState: InitialState = {
  products: [],
  isLoading: false,
  error: null,
  fetchProducts: async () => {},
};

export const useProductsStore = create<InitialState>((set, get) => ({
  ...initialState,

  fetchProducts: async () => {
    set({ isLoading: true, error: null });

    try {
      const res = await api.get("/products");
      set({ products: res.data, isLoading: false });
    } catch (error: any) {
      set({
        products: [],
        error: `Error in fetching products ${error.message}`,
        isLoading: false,
      });
    }
  },
}));
