import { createContext, useContext, useState, type ReactNode } from "react";

type PageRowContextType = {
  pageRow: number;
  setPageRow: (size: number) => void;
};

const PageRowContext = createContext<PageRowContextType | null>(null);

export const PageRowProvider = ({ children }: { children: ReactNode }) => {
  const [pageRow, setPageRow] = useState(10);

  return (
    <PageRowContext.Provider value={{ pageRow, setPageRow }}>
      {children}
    </PageRowContext.Provider>
  );
};

export const usePageRowContext = () => {
  const context = useContext(PageRowContext);

  if (!context) {
    throw new Error("usePageRowContext must be used within PageRowProvider");
  }

  const { pageRow, setPageRow } = context;
  return { pageRow, setPageRow };
};
