import { useState, useRef } from "react";
import "./App.css";
import Chessboard from "./Chessboard";
import { Pawn, King, Rook, Bishop } from "./classes/chessboard";
import { v4 as uuid } from "uuid";
import { WHITE } from "chess.js";

function App() {
  const initialGameState = useRef({
    chessPieces: [
      // {
      //   piece: new Pawn({ color: "white", id: uuid() }),
      //   coords: { row: 6, col: 3 },
      // },
      {
        piece: new Pawn({ color: "black", id: uuid() }),
        coords: { row: 5, col: 2 },
      },
      {
        piece: new Pawn({ color: "white", id: uuid() }),
        coords: { row: 5, col: 4 },
      },
      {
        piece: new King({ color: "white", id: uuid() }),
        coords: { row: 2, col: 2 },
      },
      {
        piece: new Rook({ color: "white", id: uuid() }),
        coords: { row: 7, col: 2 },
      },
      {
        piece: new Bishop({ color: "white", id: uuid() }),
        coords: { row: 6, col: 3 },
      },
    ],
  });

  return (
    <div className="App">
      <Chessboard gameState={initialGameState.current} />
    </div>
  );
}

export default App;
