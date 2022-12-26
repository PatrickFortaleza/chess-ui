import React from "react";

export default function ChessboardView({ board }) {
  return (
    <div className="chessboard">
      {Array.isArray(board) &&
        board.map((row, index) => (
          <React.Fragment key={index}>
            {Array.isArray(row) &&
              row.map((square, index) => (
                <div
                  key={index}
                  className="square"
                  style={{ background: square.color }}
                >{`${square.coords}`}</div>
              ))}
          </React.Fragment>
        ))}
    </div>
  );
}
