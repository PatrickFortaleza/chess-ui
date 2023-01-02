import React from "react";

export default function ChessPieceView({ chessPiece, dragRef }) {
  return (
    <div className="chess-piece">
      <div
        ref={chessPiece.color === "white" ? dragRef : null}
        style={{ position: "relative" }}
      >
        <img src={chessPiece.imageUri} draggable="false" />
      </div>
    </div>
  );
}
