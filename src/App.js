import { useState } from "react";
import Board from "./components/Board";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [3, 4, 7],
      [2, 4, 6],
      [6, 7, 8],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isXTurn ? "X" : "O");
  }
  return (
    <div className="App" style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Welcome!</h1>
      <h2>{status}</h2>
      <Board squares={squares} isXTurn={isXTurn} setIsXTurn={setIsXTurn} />
    </div>
  );
}

export default App;
