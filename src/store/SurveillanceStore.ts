import { create } from "zustand";
import type { SurveillanceType } from "../types/surveillance.type";

type AiFilter = "all" | "enabled" | "disabled";

type SurveillanceState = {
  data: SurveillanceType[];
  search: string;
  pageRow: number;
  aiFilter: AiFilter;

  setData: (data: SurveillanceType[]) => void;
  setSearch: (v: string) => void;
  setPageRow: (v: number) => void;
  setAiFilter: (v: AiFilter) => void;
};

export const useSurveillanceStore = create<SurveillanceState>((set) => ({
  data: [],
  search: "",
  pageRow: 10,
  aiFilter: "all",

  setData: (data: any) =>
    set((state) => ({
      data: typeof data === "function" ? data(state.data) : data,
    })),

  setSearch: (search) => set({ search }),
  setPageRow: (pageRow) => set({ pageRow }),
  setAiFilter: (aiFilter) => set({ aiFilter }),
}));
