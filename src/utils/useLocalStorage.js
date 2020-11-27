import { useEffect, useState } from "react";

const PREFIX = "EVENT-MANAGER-";

const useLocalStorage = (key) => {
  const prefixKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    return JSON.parse(localStorage.getItem(prefixKey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(prefixKey, JSON.stringify(value));
  }, [prefixKey, value]);

  return [value, setValue];
};

export default useLocalStorage;
