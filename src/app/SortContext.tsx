import { createContext, useContext, useState, type ReactNode } from "react";

type Sort = "asc" | "desc" | null;

type SortContextType = {
  sort: Sort;
  setSort: (v: Sort) => void;
};

const SortContext = createContext<SortContextType | null>(null);

export const SortProvider = ({ children }: { children: ReactNode }) => {
  const [sort, setSort] = useState<Sort>(null);

  return (
    <SortContext.Provider value={{ sort, setSort }}>
      {children}
    </SortContext.Provider>
  );
};

export const useSortContext = () => {
  const context = useContext(SortContext);

  if (!context) {
    throw new Error("useSortContext must be used within SortProvider");
  }

  const { sort, setSort } = context;
  return { sort, setSort };
};
