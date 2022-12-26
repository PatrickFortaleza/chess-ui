import React from "react";
import Square from "../Square";

export default function ChessboardView({ board, chessPieces }) {
  return (
    <div className="chessboard">
      {Array.isArray(board) &&
        board.map((row, index) => (
          <React.Fragment key={index}>
            {Array.isArray(row) &&
              row.map((square, index) => {
                return (
                  <Square
                    square={square}
                    chessPieces={chessPieces}
                    key={index}
                  />
                );
              })}
          </React.Fragment>
        ))}
    </div>
  );
}
