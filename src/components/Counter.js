import React, { useState } from "react";
import "./Counter.css";
import Popup from "./Popup";
const Counter = ({ maxValue }) => {
  const [count, setCount] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleIncrement = () => {
    if (count === maxValue) {
      setContent(<> Maximum limit attained</>);
      togglePopup();
    }
    if (count < maxValue) {
      setCount((prevcount) => prevcount + 1);
    }
    if (count > maxValue) {
      setContent(
        <> Max limit already exceeded. Set limit greater than {count}</>
      );
      togglePopup();
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevcount) => prevcount - 1);
    }
  };
  const handleInitialValue = (event) => {
    setCount(Number(Math.floor(event.target.value)));
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
      {isOpen && (
        <Popup content={content} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </div>
  );
};
export default Counter;
