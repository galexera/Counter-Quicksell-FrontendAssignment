import "./styles.css";
import Counter from "./Counter";
import React, { useState } from "react";
export default function App() {
  const [maxValue, setmaxValue] = useState(1000);
  // const [minValue, setminValue] = useState();

  const handlemaxValue = (event) => {
    setmaxValue(Number(Math.floor(event.target.value)));
    // console.log(Math.floor(event.target.value));
  };
  return (
    <div className="App">
      <div
        className="Header"
        style={{
          width: "50%",
          backgroundColor: "#b24242",
          color: "white",
          margin: "auto"
        }}>
        <h1>Counter</h1>
      </div>
      <div className="getMaxValue" style={{ margin: 50 }}>
        <h3>Enter max limit </h3>
        <input
          type="number"
          value={maxValue}
          onChange={handlemaxValue}
          style={{ textAlign: "center", height: "35px" }}
        />
      </div>
      <div className="Counter-box">
        <Counter maxValue={maxValue} />
      </div>
    </div>
  );
}
