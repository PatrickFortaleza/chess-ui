import React from "react";
import ChessPiece from "../ChessPiece";

export default function SquareView({
  square,
  chessPiece,
  dropRef,
  isPossibleMove,
}) {
  return (
    <div
      className={`square ${isPossibleMove ? "possible" : "impossible"}`}
      style={{
        background: square.color === "black" ? "#474747" : "#777777",
      }}
      ref={dropRef}
    >
      {chessPiece && (
        <ChessPiece chessPiece={chessPiece.piece} coords={chessPiece.coords} />
      )}
    </div>
  );
}
