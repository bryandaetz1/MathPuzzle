import { useState } from "react";
import "../css/InputNumber.css";
import { InputNumberPosition } from "../utils/constants";

import arrowCircleDown from "../assets/images/arrowCircleDown.png";
import arrowCircleUp from "../assets/images/arrowCircleUp.png";

interface InputNumberProps {
  value: number;
  position: InputNumberPosition;
  onChange?: (newValue: number) => void;
}

const InputNumber = (props: InputNumberProps) => {
  const [currentValue, setCurrentValue] = useState<number>(props.value);

  const incrementValue = () => {
    if (currentValue < 3) {
      const newValue = currentValue + 1;
      setCurrentValue(newValue);
      if (props.onChange) {
        props.onChange(newValue);
      }
    }
  };

  const decrementValue = () => {
    if (currentValue > -3) {
      const newValue = currentValue - 1;
      setCurrentValue(newValue);
      if (props.onChange) {
        props.onChange(newValue);
      }
    }
  };

  return (
    <div className={`input-number-container ${props.position}`}>
      {currentValue < 3 && (
        <img
          src={arrowCircleUp}
          alt="Increase"
          className="arrow arrow-up"
          onClick={incrementValue}
        />
      )}
      <div className="input-number">{currentValue}</div>
      {currentValue > -3 && (
        <img
          src={arrowCircleDown}
          alt="Decrease"
          className="arrow arrow-down"
          onClick={decrementValue}
        />
      )}
    </div>
  );
};

export default InputNumber;
