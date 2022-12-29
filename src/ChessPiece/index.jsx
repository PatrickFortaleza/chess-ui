import React, { useMemo } from "react";
import ChessPieceView from "./view";
import { useDrag } from "react-dnd";
import { useChessboard } from "../Chessboard";

export default function ChessPiece({ chessPiece, coords }) {
  const { moveChessPiece, availableMoves, chessPieces } = useChessboard();

  const possibleMoves = useMemo(() => {
    try {
      let { row, column } = coords;

      return chessPiece.possibleMoves({
        row,
        column,
        chessPieces: chessPieces,
      });
    } catch (error) {
      console.log(error);
      return [];
    }
  }, [coords, chessPieces]);

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "chessPiece",
      item: () => {
        availableMoves.set(possibleMoves);
        return chessPiece;
      },
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        let { name, coords } = dropResult || {};

        if (item && dropResult) {
          switch (name) {
            case "square":
              // check if possible move.
              let { column: targetColumn, row: targetRow } = coords;

              for (let i = 0; i < possibleMoves.length; i++) {
                let { column, row } = possibleMoves[i];

                if (targetColumn === column && targetRow === row) {
                  moveChessPiece({ id: chessPiece.id, coords });
                  break;
                }
              }

              break;
            default:
              break;
          }
        }

        availableMoves.set([]);
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        handlerId: monitor.getHandlerId(),
      }),
    }),
    [chessPiece, coords]
  );

  return <ChessPieceView chessPiece={chessPiece} dragRef={drag} />;
}
