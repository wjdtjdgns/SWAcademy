import { useState } from "react";

const useSessionStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStroe =
        typeof value === "function" ? value(storedValue) : value;
      setStoredValue(valueToStroe);
      sessionStorage.setItem(key, JSON.stringify(valueToStroe));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

export default useSessionStorage;
