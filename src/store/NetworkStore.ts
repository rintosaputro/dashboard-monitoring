import { create } from "zustand";
import type { NetworkType } from "../types/network.type";

type Sort = "asc" | "desc" | null;

type NetworkState = {
  data: NetworkType[];
  search: string;
  sort: Sort;
  pageRow: number;

  setData: (data: NetworkType[]) => void;
  setSearch: (v: string) => void;
  setSort: (v: Sort) => void;
  setPageRow: (v: number) => void;
};

export const useNetworkStore = create<NetworkState>((set) => ({
  data: [],
  search: "",
  sort: null,
  pageRow: 10,

  setData: (data: any) =>
    set((state) => ({
      data: typeof data === "function" ? data(state.data) : data,
    })),
  setSearch: (search) => set({ search }),
  setSort: (sort) => set({ sort }),
  setPageRow: (pageRow) => set({ pageRow }),
}));
