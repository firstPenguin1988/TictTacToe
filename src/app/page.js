"use client";
import React, { useState } from "react";
import Board2 from "./components/Board2";
//import ButtonScale from "./components/ButtonScale";
//import ButtonWithRipple from "./components/ButtonWithRipple";
//import Todo from "./components/ToDo/Todo";
//import CounterRef from "./components/ToDo/CounterRef";

export default function App() {
  //return <ButtonWithRipple />
  return <Board2 />
  //return <ButtonScale />
  //return <CounterRef />
}

/*================Final========================

function Square({ value, onSquareClick }) {
  return (
    <button onClick={onSquareClick} >
      {value}
    </button>
  );
}

function calculateWinner(squares) {
  const winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winCombination.length; i++) {
    const [a, b, c] = winCombination[i];
    if (squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  let count = 0;

  function handleClick(i) {
    count++;
    console.log(count);
    if (calculateWinner(squares)) {
      return;
    }

    const nextSquares = [...squares];
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (count === 9) {
    status = "GAME OVER..."
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div>{status}</div>
      <div className="board" style={board}>
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onSquareClick={() => handleClick(index)}
          />
        ))}
      </div>
    </>
  );
}

const board = {
  width:200,
  height:200,
  display: 'grid',
  gridTemplateRows: 'repeat(3, 1fr)',
  gridTemplateColumns: 'repeat(3, 1fr)',
  
}
==========================FINAL==================================*/

/*
import { useState } from "react";
//import Board2 from "./components/Board2";

export default function App() {
  return <Board />;
}

function Square({ value, onSquareClick }) {
  return (
    <button onClick={onSquareClick} style={btnStyle}>
      {value}
    </button>
  );
}

function calculateWinner(squares) {
  const winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winCombination.length; i++) {
    const [a, b, c] = winCombination[i];
    if (squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  let count = 0;

  function handleClick(i) {
    count++;
    console.log(count);
    if (calculateWinner(squares)) {
      return;
    }

    const nextSquares = [...squares];
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (count === 9) {
    status = "GAME OVER..."
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div>{status}</div>
      <div className="board">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)}  />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)}  />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)}  />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square  value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square  value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square  value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}

const btnStyle = {
  width: 75,
  height: 75,
  border: "1px solid blue",
};
*/
/*
{
          squares.slice(i*3, i*3+3).map((item, index) => (
            <div className="board-row">
              {
                item.map(x => (
                  <Square value={squares[index]} onSquareClick={() => handleClick(index)}  />
                ))
              }
            </div>
          ))
        }


        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)}  />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)}  />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)}  />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square  value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square  value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square  value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
*/

/*
  function handleClick(event) {
    setXIsNext(!xIsNext)
    let id = event.target.id;
    document.getElementById(id).innerHTML = xIsNext ? 'X' : 'O';
    testArr[id-1] = xIsNext ? 'X' : 'O';
    console.log(testArr);
  }

  let testArr = [1,2,3,4,5,6,7,8,9]

  let gamearr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  let winningmoves = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
  ]

  return (
    <>
      <h1>Tic Tac Toe</h1>
      {
        gamearr.map((row, index) => (
          <div key={'row-'+index}>
            {row.map((square, i) => (
                <button key={index+square} onClick={(event) => handleClick(event)} id={square} style={styles}></button>
            ))}
          </div>
        ))
      }
      <h style={{display: 'none'}}>Winner is: </h>
      <button style={{display: 'none'}}>Winner</button>
    </>
  );
*/
