import React from "react";

export default function SquareView({ square, chessPiece }) {
  return (
    <div className="square" style={{ background: square.color }}>
      <span className="coords">{`${square.coords}`}</span>

      {chessPiece && (
        <div className="chess-piece">
          <img src={chessPiece.imageUri} />
        </div>
      )}
    </div>
  );
}
