import "../css/App.css";
import GameBoard from "./GameBoard";

function App() {
  return (
    <>
      <GameBoard
        topEquationSolution={3}
        leftEquationSolution={3}
        rightEquationSolution={3}
        bottomEquationSolution={-3}
      />
    </>
  );
}

export default App;
