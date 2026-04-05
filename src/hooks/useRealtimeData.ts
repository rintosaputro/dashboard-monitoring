import { useEffect, useState } from "react";

export const useRealtimeData = <T>(
  initialData: T[],
  updater: (data: T[]) => T[],
  interval = 2000,
) => {
  const [data, setData] = useState<T[]>(initialData);

  useEffect(() => {
    const timer = setInterval(() => {
      setData((prev) => updater(prev));
    }, interval);

    return () => clearInterval(timer);
  }, [updater, interval]);

  return data;
};
