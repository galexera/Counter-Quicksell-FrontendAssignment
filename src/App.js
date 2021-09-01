import "./styles.css";
import Counter from "./components/Counter";
import React, { useState } from "react";
export default function App() {
  const [maxValue, setmaxValue] = useState(1000);

  const handlemaxValue = (event) => {
    setmaxValue(Number(Math.floor(event.target.value)));
  };

  return (
    <div className="App">
      <div id="header">
        <h1>Counter</h1>
      </div>
      <div id="getMaxValue">
        <h2>Enter max value </h2>
        <input
          type="number"
          value={maxValue.toString()}
          onChange={handlemaxValue}
        />
      </div>
      <div className="Counter-box">
        <Counter maxValue={maxValue} />
      </div>
    </div>
  );
}
