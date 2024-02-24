import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h4>Count: {count}</h4>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
}

export default App;
