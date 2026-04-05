import { useEffect } from "react";

export const useRealtimeData = <T>(
  initialData: T[],
  updater: (data: T[]) => T[],
  setStore: (data: any) => void,
  interval = 2000,
) => {
  useEffect(() => {
    setStore(initialData);

    const timer = setInterval(() => {
      setStore((prev: T[]) => updater(prev));
    }, interval);

    return () => clearInterval(timer);
  }, [initialData, updater, interval, setStore]);
};
