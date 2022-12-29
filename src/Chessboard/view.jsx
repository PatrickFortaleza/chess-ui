import React from "react";
import Square from "../Square";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Preview } from "react-dnd-preview";
import { isMobile } from "react-device-detect";

export default function ChessboardView({
  board,
  chessPieces,
  generatePreview,
}) {
  return (
    <DndProvider
      backend={isMobile ? TouchBackend : HTML5Backend}
      options={{ enableTouchEvents: true }}
    >
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
      <Preview>{generatePreview}</Preview>
    </DndProvider>
  );
}
