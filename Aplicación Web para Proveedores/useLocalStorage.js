import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const stored = localStorage.getItem(key);

  const [value, setValue] = useState(() => {
    try {
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, updateValue];
}
