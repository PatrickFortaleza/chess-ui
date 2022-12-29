import { useState, useRef } from "react";
import "./App.css";
import Chessboard from "./Chessboard";
import { Pawn, Bishop, Rook, Knight, Queen, King } from "./classes/chessboard";
import { v4 as uuid } from "uuid";

function App() {
  const initialGameState = useRef({
    chessPieces: [
      /**
       * ==============================
       * TEAM WHITE
       * ==============================
       */
      {
        piece: new Pawn({ color: "white", id: uuid() }),
        coords: { row: 6, col: 0 },
      },
      {
        piece: new Pawn({ color: "white", id: uuid() }),
        coords: { row: 6, col: 1 },
      },
      {
        piece: new Pawn({ color: "white", id: uuid() }),
        coords: { row: 6, col: 2 },
      },
      {
        piece: new Pawn({ color: "white", id: uuid() }),
        coords: { row: 6, col: 3 },
      },
      {
        piece: new Pawn({ color: "white", id: uuid() }),
        coords: { row: 6, col: 4 },
      },
      {
        piece: new Pawn({ color: "white", id: uuid() }),
        coords: { row: 6, col: 5 },
      },
      {
        piece: new Pawn({ color: "white", id: uuid() }),
        coords: { row: 6, col: 6 },
      },
      {
        piece: new Pawn({ color: "white", id: uuid() }),
        coords: { row: 6, col: 7 },
      },
      {
        piece: new Rook({ color: "white", id: uuid() }),
        coords: { row: 7, col: 0 },
      },
      {
        piece: new Rook({ color: "white", id: uuid() }),
        coords: { row: 7, col: 7 },
      },
      {
        piece: new Knight({ color: "white", id: uuid() }),
        coords: { row: 7, col: 1 },
      },
      {
        piece: new Knight({ color: "white", id: uuid() }),
        coords: { row: 7, col: 6 },
      },
      {
        piece: new Bishop({ color: "white", id: uuid() }),
        coords: { row: 7, col: 2 },
      },
      {
        piece: new Bishop({ color: "white", id: uuid() }),
        coords: { row: 7, col: 5 },
      },
      {
        piece: new King({ color: "white", id: uuid() }),
        coords: { row: 7, col: 3 },
      },
      {
        piece: new Queen({ color: "white", id: uuid() }),
        coords: { row: 7, col: 4 },
      },

      {
        piece: new Pawn({ color: "black", id: uuid() }),
        coords: { row: 1, col: 0 },
      },
      {
        piece: new Pawn({ color: "black", id: uuid() }),
        coords: { row: 1, col: 1 },
      },
      {
        piece: new Pawn({ color: "black", id: uuid() }),
        coords: { row: 1, col: 2 },
      },
      {
        piece: new Pawn({ color: "black", id: uuid() }),
        coords: { row: 1, col: 3 },
      },
      {
        piece: new Pawn({ color: "black", id: uuid() }),
        coords: { row: 1, col: 4 },
      },
      {
        piece: new Pawn({ color: "black", id: uuid() }),
        coords: { row: 1, col: 5 },
      },
      {
        piece: new Pawn({ color: "black", id: uuid() }),
        coords: { row: 1, col: 6 },
      },
      {
        piece: new Pawn({ color: "black", id: uuid() }),
        coords: { row: 1, col: 7 },
      },
      {
        piece: new Rook({ color: "black", id: uuid() }),
        coords: { row: 0, col: 0 },
      },
      {
        piece: new Rook({ color: "black", id: uuid() }),
        coords: { row: 0, col: 7 },
      },
      {
        piece: new Knight({ color: "black", id: uuid() }),
        coords: { row: 0, col: 1 },
      },
      {
        piece: new Knight({ color: "black", id: uuid() }),
        coords: { row: 0, col: 6 },
      },
      {
        piece: new Bishop({ color: "black", id: uuid() }),
        coords: { row: 0, col: 2 },
      },
      {
        piece: new Bishop({ color: "black", id: uuid() }),
        coords: { row: 0, col: 5 },
      },
      {
        piece: new King({ color: "black", id: uuid() }),
        coords: { row: 0, col: 3 },
      },
      {
        piece: new Queen({ color: "black", id: uuid() }),
        coords: { row: 0, col: 4 },
      },

      // {
      //   piece: new Knight({ color: "white", id: uuid() }),
      //   coords: {
      //     row: 3,
      //     col: 4,
      //   },
      // },
      // {
      //   piece: new Queen({ color: "white", id: uuid() }),
      //   coords: {
      //     row: 3,
      //     col: 7,
      //   },
      // },
      // {
      //   piece: new King({ color: "white", id: uuid() }),
      //   coords: {
      //     row: 6,
      //     col: 7,
      //   },
      // },
      // {
      //   piece: new Pawn({ color: "white", id: uuid() }),
      //   coords: { row: 7, col: 2 },
      // },
      // {
      //   piece: new Rook({ color: "white", id: uuid() }),
      //   coords: { row: 3, col: 2 },
      // },
      // {
      //   piece: new Pawn({ color: "black", id: uuid() }),
      //   coords: { row: 6, col: 1 },
      // },
      // {
      //   piece: new Bishop({ color: "white", id: uuid() }),
      //   coords: { row: 5, col: 3 },
      // },
      // {
      //   piece: new Bishop({ color: "white", id: uuid() }),
      //   coords: { row: 6, col: 3 },
      // },
    ],
  });

  return (
    <div className="App">
      <Chessboard gameState={initialGameState.current} />
    </div>
  );
}

export default App;
