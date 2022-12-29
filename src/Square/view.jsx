import React from "react";
import ChessPiece from "../ChessPiece";

export default function SquareView({
  square,
  chessPiece,
  dropRef,
  isPossible,
}) {
  return (
    <div
      className={`square ${isPossible ? "possible" : "impossible"}`}
      style={{
        background: square.color === "black" ? "#cccccc" : "white",
      }}
      ref={dropRef}
    >
      {chessPiece && (
        <ChessPiece chessPiece={chessPiece.piece} coords={chessPiece.coords} />
      )}
    </div>
  );
}
