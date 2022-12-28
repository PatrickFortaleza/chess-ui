import React, { useState, useRef, useContext } from "react";
import ChessboardView from "./view";
import { Board } from "../classes/chessboard";

const ChessboardContext = React.createContext();

export function useChessboard() {
  return useContext(ChessboardContext);
}

export default function Chessboard({ gameState }) {
  const [state, setState] = useState(gameState);
  const [availableMoves, setAvailableMoves] = useState([]);
  const board = useRef(new Board());

  const moveChessPiece = ({ id, coords }) => {
    let state_ = { ...state },
      chessPieces_ = [...state_.chessPieces];

    let pieceIndex = chessPieces_.findIndex(
      (chessPiece) => chessPiece.piece.id === id
    );

    chessPieces_[pieceIndex] = {
      ...chessPieces_[pieceIndex],
      coords: { col: coords.column, row: coords.row },
    };

    setState({
      ...state_,
      chessPieces: [...chessPieces_],
    });
  };

  const generatePreview = ({ item, style }) => {
    return (
      <div className="chess-piece-ghost" style={style}>
        <img src={item.imageUri} />
      </div>
    );
  };

  const value = {
    moveChessPiece,
    chessPieces: state.chessPieces,
    availableMoves: {
      set: setAvailableMoves,
      val: availableMoves,
    },
  };

  return (
    <ChessboardContext.Provider value={value}>
      <ChessboardView
        board={board.current.board}
        chessPieces={state.chessPieces}
        generatePreview={generatePreview}
      />
    </ChessboardContext.Provider>
  );
}
