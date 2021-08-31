import React, { useState } from "react";
import "./Counter.css";
const Counter = ({ maxValue }) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count === maxValue) {
      alert("Max limit reached");
    }
    if (count < maxValue) {
      setCount((prevcount) => prevcount + 1);
    }
    if (count > maxValue) {
      alert(`Max limit already exceeded.Set limit greater than ${count}`);
    }
  };

  const handleDecrement = () => {
    setCount((prevcount) => prevcount - 1);
  };
  const handleInitialValue = (event) => {
    setCount(Number(event.target.value));
  };

  return (
    <div className="outer-layer">
      <button id="btnminus" onClick={handleDecrement}>
        <div id="minus-sign">-</div>
      </button>
      <input
        id="counter-value"
        type="number"
        value={count}
        onChange={handleInitialValue}
      />
      <button id="btnplus" onClick={handleIncrement}>
        <div id="plus-sign">+</div>
      </button>
    </div>
  );
};
export default Counter;
