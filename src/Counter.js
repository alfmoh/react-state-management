/* eslint-disable */
import React, { useState, useEffect } from 'react';

// const getStateFromLocalStorage = () => {
//   const storage = localStorage.getItem('counterState');
//   if (storage) return JSON.parse(storage).count;
//   return 0;
// };
// const storeStateInLocalStorage = count => {
//   localStorage.setItem('counterState', JSON.stringify({ count }));
//   // console.log(localStorage);
// };

const useLocalStorage = (initialState, key) => {
  const get = () => {
    const storage = localStorage.getItem(key);
    if (storage) return JSON.parse(storage).value;
    return initialState;
  };

  const [value, setValue] = useState(get());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }));
  }, [value]);

  return [value, setValue];
};

const Counter = ({ max, step }) => {
  const [count, setCount] = useLocalStorage(0, 'countKey');

  const increment = () => {
    setCount(c => {
      // important to return a value and not just 'return'
      // since that will return an undefined.
      if (c >= max) return c;
      return c + step;
    });
  };
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  useEffect(() => {
    // can have single useEffect
    // storeStateInLocalStorage(count);

    document.title = `Counter: ${count}`;
  }, [count]); // if 'count' changes, re-run useEffect()

  // or multiple useEffect
  // useEffect(() => {
  //   storeStateInLocalStorage(count);
  // }, [count]);
  return (
    <main className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </main>
  );
};

export default Counter;
