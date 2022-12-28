import React, { useMemo } from "react";
import ChessPieceView from "./view";
import { useDrag } from "react-dnd";
import { useChessboard } from "../Chessboard";

export default function ChessPiece({ chessPiece, coords }) {
  const { moveChessPiece, availableMoves, chessPieces } = useChessboard();

  const checkMove = ({ row, column }) => {
    for (let i = 0; i < chessPieces.length; i++) {
      let { col: cpColumn, row: cpRow } = chessPieces[i].coords;

      if (cpColumn === column && cpRow === row) return true;
    }
  };

  const checkAttackMove = ({ row, column }) => {
    if (!Array.isArray(chessPieces)) return false;
    for (let i = 0; i < chessPieces.length; i++) {
      let { col: cpColumn, row: cpRow } = chessPieces[i].coords;

      if (
        cpColumn === column &&
        cpRow === row &&
        chessPieces[i].piece.color !== chessPiece.color
      )
        return true;
    }
    return false;
  };

  const possibleMoves = useMemo(() => {
    try {
      let { moves } = chessPiece;

      let pMoves = [];

      for (let i = 0; i < moves.length; i++) {
        let { x, y, isAttack } = moves[i];
        let { row, column } = coords;

        let targetRow = (row += x),
          targetColumn = (column += y);

        if (targetRow > 7 || targetColumn > 7) continue;

        if (isAttack) {
          if (!checkAttackMove({ row: targetRow, column: targetColumn }))
            continue;
        }

        pMoves.push({ row: targetRow, column: targetColumn });
      }

      return pMoves;
    } catch (error) {
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
