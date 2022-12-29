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
      {/* <span className="coords">{`${square.coords}`}</span> */}

      {chessPiece && (
        <ChessPiece chessPiece={chessPiece.piece} coords={chessPiece.coords} />
      )}
    </div>
  );
}
