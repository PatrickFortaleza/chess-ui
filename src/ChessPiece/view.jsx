import React from "react";

export default function ChessPieceView({ chessPiece, dragRef }) {
  return (
    <div className="chess-piece">
      <div ref={dragRef} style={{ position: "relative" }}>
        <img src={chessPiece.imageUri} draggable="false" />
      </div>
    </div>
  );
}
