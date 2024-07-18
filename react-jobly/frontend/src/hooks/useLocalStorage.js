import { useState } from 'react';

function useLocalStorage(key, firstValue = null) {
  const initialValue = localStorage.getItem(key) || firstValue;

  const [item, setItem] = useState(initialValue);

  const setValue = (value) => {
    setItem(value);
    localStorage.setItem(key, value);
  };

  return [item, setValue];
}

export default useLocalStorage;
