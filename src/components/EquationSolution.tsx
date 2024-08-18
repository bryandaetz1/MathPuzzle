import "../css/EquationSolution.css";
import { EquationSolutionPosition } from "../utils/constants";

interface EquationSolutionProps {
  value: number;
  position: EquationSolutionPosition;
  isCorrect: boolean;
}

const EquationSolution = (props: EquationSolutionProps) => {
  const classNames = ["equation-solution"];
  classNames.push(props.position);

  if (props.isCorrect) {
    classNames.push("correct");
  }

  return <div className={classNames.join(" ")}>{props.value}</div>;
};

export default EquationSolution;
