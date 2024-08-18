import "../css/GameBoard.css";
import InputNumber from "./InputNumber";
import InputArithmeticSign from "./InputArithmeticSign";
import {
  InputNumberPosition,
  ArithmeticSign,
  InputArithmeticSignPosition,
  EquationSolutionPosition,
} from "../utils/constants";
import EquationSolution from "./EquationSolution";
import { useLayoutEffect, useState } from "react";
import {
  calculateEquation,
  getRandomNumberInRange,
  getRandomArithmeticSign,
} from "../utils/utilFunctions";

interface GameBoardProps {
  topEquationSolution: number;
  leftEquationSolution: number;
  rightEquationSolution: number;
  bottomEquationSolution: number;
}

const GameBoard = (props: GameBoardProps) => {
  // Managing state of input number components
  const [topLeftNumber, setTopLeftNumber] = useState<number>(
    getRandomNumberInRange(-3, 3)
  );
  const [topRightNumber, setTopRightNumber] = useState<number>(
    getRandomNumberInRange(-3, 3)
  );
  const [bottomLeftNumber, setBottomLeftNumber] = useState<number>(
    getRandomNumberInRange(-3, 3)
  );
  const [bottomRightNumber, setBottomRightNumber] = useState<number>(
    getRandomNumberInRange(-3, 3)
  );

  const handleChangedInputNumber = (
    setValue: React.Dispatch<React.SetStateAction<number>>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  // Managing state of arithmetic sign components
  const [topSign, setTopSign] = useState<ArithmeticSign>(
    getRandomArithmeticSign()
  );
  const [leftSign, setLeftSign] = useState<ArithmeticSign>(
    getRandomArithmeticSign()
  );
  const [rightSign, setRightSign] = useState<ArithmeticSign>(
    getRandomArithmeticSign()
  );
  const [bottomSign, setBottomSign] = useState<ArithmeticSign>(
    getRandomArithmeticSign()
  );

  const handleChangedArithmeticSign = (
    setValue: React.Dispatch<React.SetStateAction<ArithmeticSign>>,
    newValue: ArithmeticSign
  ) => {
    setValue(newValue);
    console.log("Value Changed:", newValue);
  };

  // Checking equation solutions
  const isSolutionCorrect = (
    leftNumber: number,
    arithmeticSign: ArithmeticSign,
    rightNumber: number,
    actualSolution: number
  ): boolean => {
    const calculatedSolution = calculateEquation(
      leftNumber,
      arithmeticSign,
      rightNumber
    );
    if (calculatedSolution === null) {
      return false;
    }
    return calculatedSolution === actualSolution;
  };

  const isTopEquationCorrect: boolean = isSolutionCorrect(
    topLeftNumber,
    topSign,
    topRightNumber,
    props.topEquationSolution
  );

  const isLeftEquationCorrect: boolean = isSolutionCorrect(
    topLeftNumber,
    leftSign,
    bottomLeftNumber,
    props.leftEquationSolution
  );

  const isRightEquationCorrect: boolean = isSolutionCorrect(
    topRightNumber,
    rightSign,
    bottomRightNumber,
    props.rightEquationSolution
  );

  const isBottomEquationCorrect: boolean = isSolutionCorrect(
    bottomLeftNumber,
    bottomSign,
    bottomRightNumber,
    props.bottomEquationSolution
  );

  const areAllEquationsCorrect: boolean =
    isTopEquationCorrect &&
    isLeftEquationCorrect &&
    isRightEquationCorrect &&
    isBottomEquationCorrect;

  useLayoutEffect(() => {
    if (areAllEquationsCorrect) {
      setTimeout(() => {
        alert("You win!");
      }, 1); // Short delay to allow DOM update
    }
  }, [areAllEquationsCorrect]);

  return (
    <>
      <div className="game-area">
        <div className="outer-container">
          <div className="inner-container">
            {/* <!-- Numbers in corners --> */}
            <InputNumber
              value={topLeftNumber}
              position={InputNumberPosition.TopLeft}
              onChange={(newValue) =>
                handleChangedInputNumber(setTopLeftNumber, newValue)
              }
            />
            <InputNumber
              value={topRightNumber}
              position={InputNumberPosition.TopRight}
              onChange={(newValue) =>
                handleChangedInputNumber(setTopRightNumber, newValue)
              }
            />
            <InputNumber
              value={bottomLeftNumber}
              position={InputNumberPosition.BottomLeft}
              onChange={(newValue) =>
                handleChangedInputNumber(setBottomLeftNumber, newValue)
              }
            />
            <InputNumber
              value={bottomRightNumber}
              position={InputNumberPosition.BottomRight}
              onChange={(newValue) =>
                handleChangedInputNumber(setBottomRightNumber, newValue)
              }
            />

            {/* <!-- Arithmetic signs --> */}
            <InputArithmeticSign
              value={topSign}
              position={InputArithmeticSignPosition.Top}
              onChange={(newValue) =>
                handleChangedArithmeticSign(setTopSign, newValue)
              }
            />
            <InputArithmeticSign
              value={leftSign}
              position={InputArithmeticSignPosition.Left}
              onChange={(newValue) =>
                handleChangedArithmeticSign(setLeftSign, newValue)
              }
            />
            <InputArithmeticSign
              value={rightSign}
              position={InputArithmeticSignPosition.Right}
              onChange={(newValue) =>
                handleChangedArithmeticSign(setRightSign, newValue)
              }
            />
            <InputArithmeticSign
              value={bottomSign}
              position={InputArithmeticSignPosition.Bottom}
              onChange={(newValue) =>
                handleChangedArithmeticSign(setBottomSign, newValue)
              }
            />
          </div>
          {/* <!-- Solutions outside the box --> */}
          <EquationSolution
            value={props.topEquationSolution}
            position={EquationSolutionPosition.Top}
            isCorrect={isTopEquationCorrect}
          />
          <EquationSolution
            value={props.leftEquationSolution}
            position={EquationSolutionPosition.Left}
            isCorrect={isLeftEquationCorrect}
          />
          <EquationSolution
            value={props.rightEquationSolution}
            position={EquationSolutionPosition.Right}
            isCorrect={isRightEquationCorrect}
          />
          <EquationSolution
            value={props.bottomEquationSolution}
            position={EquationSolutionPosition.Bottom}
            isCorrect={isBottomEquationCorrect}
          />
        </div>
      </div>
    </>
  );
};

export default GameBoard;
