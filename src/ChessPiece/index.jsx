import React, { useMemo } from "react";
import ChessPieceView from "./view";
import { useDrag } from "react-dnd";
import { useChessboard } from "../Chessboard";

export default function ChessPiece({ chessPiece, coords }) {
  const { moveChessPiece, availableMoves, chessPieces } = useChessboard();

  const checkMove = ({ row, column }) => {
    for (let i = 0; i < chessPieces.length; i++) {
      let { col: cpColumn, row: cpRow } = chessPieces[i].coords;

      if (
        cpColumn === column &&
        cpRow === row &&
        chessPieces[i].piece.color === chessPiece.color
      )
        return false;
    }
    return true;
  };

  const checkAttackMove = ({ row, column }) => {
    if (!Array.isArray(chessPieces)) return false;
    for (let i = 0; i < chessPieces.length; i++) {
      let { col: cpColumn, row: cpRow } = chessPieces[i].coords;

      if (cpColumn === column && cpRow === row) {
        if (chessPieces[i].piece.color !== chessPiece.color) return true;
      }
    }
    return false;
  };

  const generateRepeatableMoves = (move, coords) => {
    if (!move.isRepeatable || !Array.isArray(chessPieces)) return [];
    let { row, column } = coords,
      { x, y, isAttack } = move;
    let blocked = false;

    let moves = [];

    while (blocked === false) {
      let targetRow = row + x,
        targetColumn = column + y;

      if (
        targetRow > 7 ||
        targetColumn > 7 ||
        targetRow < 0 ||
        targetColumn < 0
      ) {
        blocked = true;
        continue;
      }

      for (let i = 0; i < chessPieces.length; i++) {
        let { col: cpColumn, row: cpRow } = chessPieces[i].coords;

        if (cpColumn === targetColumn && cpRow === targetRow) {
          console.log(chessPieces[i].piece.color);
          console.log(chessPiece.color);
          console.log(isAttack);
          if (chessPieces[i].piece.color !== chessPiece.color && isAttack) {
            moves.push({ row: targetRow, column: targetColumn });
          }

          blocked = true;
          break;
        }
      }

      if (blocked) continue;

      (row = targetRow), (column = targetColumn);
      moves.push({ row, column });
    }

    // while (blocked === false) {
    //   let targetRow = (row += x),
    //     targetColumn = (column += y);

    //   for (let i = 0; i < chessPieces.length; i++) {
    //     let { col: cpColumn, row: cpRow } = chessPieces[i].coords;

    //     if (cpColumn === targetColumn && cpRow === targetRow) {
    //       // if (chessPieces[i].piece.color !== chessPiece.color) {
    //       blocked = true;
    //       break;
    //       // }
    //     }
    //   }

    //   if (blocked === true) break;

    //   if (targetRow > 7 || targetColumn > 7) {
    //     blocked = false;
    //     break;
    //   }

    //   // (row = targetRow), (column = targetColumn);

    //   moves.push({ row, column });
    // }

    return moves;
  };

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
