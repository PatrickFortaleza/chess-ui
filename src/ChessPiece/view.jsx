import React from "react";

export default function ChessPieceView({ chessPiece, dragRef }) {
  return (
    <div className="chess-piece">
      <div ref={dragRef}>
        <img src={chessPiece.imageUri} />
      </div>
    </div>
  );
}
