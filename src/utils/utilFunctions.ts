import { ArithmeticSign } from "./constants";

export const getRandomNumberInRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomArithmeticSign = () => {
  const signs = Object.values(ArithmeticSign) as ArithmeticSign[];
  const randomIndex = getRandomNumberInRange(0, 3);
  return signs[randomIndex];
};

export const calculateEquation = (
  x: number,
  sign: ArithmeticSign,
  y: number
): number | null => {
  switch (sign) {
    case ArithmeticSign.Add:
      return x + y;
    case ArithmeticSign.Subtract:
      return x - y;
    case ArithmeticSign.Multiply:
      return x * y;
    case ArithmeticSign.Divide:
      if (y !== 0) {
        return x / y;
      } else {
        return null;
      }
    default:
      throw new Error("Invalid arithmetic sign");
  }
};
