import { useState, useEffect } from "react";

export function useDebouncedValue<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const [prevValue, setPrevValue] = useState<T>(value);

  useEffect(() => {
    if (value === prevValue) {
      return;
    }

    const timer = setTimeout(() => {
      setDebouncedValue(value);
      setPrevValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue;
}
