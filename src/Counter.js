/* eslint-disable */
import React, { Component } from 'react';

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem('counterState');
  if (storage) return JSON.parse(storage);
  return { count: 0 };
};
const storeStateInLocalStorage = state => {
  localStorage.setItem('counterState', JSON.stringify(state));
  const { count } = state;
  document.title = count;
  // console.log(localStorage);
};

const Counter = ({ max, step }) => {
  const [count, setCount] = React.useState(0);

  const inc = val => val + 1;

  // passing a function into the state updater will
  // call the function the number of times called.

  // Eg. This will call the function 3 times
  // const increment = () => {
  //   setCount(inc);
  //   setCount(inc);
  //   setCount(inc);
  // };

  // Not passing a func will call the state updater only once.
  // const increment = () => {
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  // };

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
