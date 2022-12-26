import React, { useState } from "react";
import ChessboardView from "./view";
import { Board } from "../classes/chessboard";

export default function Chessboard({ chessPieces }) {
  const [board, setBoard] = useState(new Board());

  return <ChessboardView board={board.board} chessPieces={chessPieces} />;
}
