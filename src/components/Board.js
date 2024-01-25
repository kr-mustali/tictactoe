import React from "react";
function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="square"
      style={{ minWidth: "50px", minHeight: "50px" }}
    >
      {value}
    </button>
  );
}
export default function Board({ squares, isXTurn, setIsXTurn }) {
  function handleClick(i) {
    if (squares[i]) return;
    if (isXTurn) {
      squares[i] = "X";
    } else {
      squares[i] = "O";
    }
    setIsXTurn(!isXTurn);
  }

  return (
    <>
      <div>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
