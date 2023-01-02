import React from "react";

export default function ChessPieceView({
  chessPiece,
  dragRef,
  delay,
  boardLoaded,
}) {
  return (
    <div
      className={`chess-piece ${boardLoaded ? "loaded" : "default"}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div
        ref={chessPiece.color === "white" ? dragRef : null}
        style={{ position: "relative" }}
      >
        <img src={chessPiece.imageUri} draggable="false" />
      </div>
    </div>
  );
}
