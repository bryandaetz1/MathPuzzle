import { useState } from "react";
import {
  ArithmeticSign,
  InputArithmeticSignPosition,
} from "../utils/constants";
import "../css/InputArithmeticSign.css";

interface InputArithmeticSignProps {
  value: ArithmeticSign;
  position: InputArithmeticSignPosition;
  onChange?: (newSign: ArithmeticSign) => void; // Callback function to handle sign change
}

const InputArithmeticSign = (props: InputArithmeticSignProps) => {
  const [currentSign, setCurrentSign] = useState<ArithmeticSign>(props.value);
  const cycleSign = () => {
    const signs = Object.values(ArithmeticSign);
    const currentIndex = signs.indexOf(currentSign);
    const nextIndex = (currentIndex + 1) % signs.length;
    const nextSign = signs[nextIndex] as ArithmeticSign;

    setCurrentSign(nextSign);

    if (props.onChange) {
      props.onChange(nextSign);
    }
  };

  return (
    <div
      className={`arithmetic-sign-container ${props.position}`}
      onClick={cycleSign}
    >
      <div className="arithmetic-sign">{currentSign}</div>
    </div>
  );
};

export default InputArithmeticSign;
