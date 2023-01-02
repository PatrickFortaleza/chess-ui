import React, { useMemo, useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import SquareView from "./view";
import { useChessboard } from "../Chessboard";

export default function Square({ square, chessPieces }) {
  const { availableMoves } = useChessboard();
  const [isPossibleMove, setIsPossibleMove] = useState(false);

  const chessPiece = useMemo(() => {
    let { row, column } = square;

    for (let i = 0; i < chessPieces.length; i++) {
      let { row: cpRow, col: cpCol } = chessPieces[i].coords;

      if (row === cpRow && column === cpCol) {
        return {
          piece: chessPieces[i].piece,
          coords: { row: row, column: column },
        };
      }
    }

    return null;
  }, [chessPieces]);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "chessPiece",
    drop: () => ({
      name: "square",
      coords: { column: square.column, row: square.row },
    }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;

  const verifyPossible = () => {
    for (let i = 0; i < availableMoves.val.length; i++) {
      let { column, row } = availableMoves.val[i];
      let { column: sqColumn, row: sqRow } = square;

      if (column === sqColumn && row === sqRow) return setIsPossibleMove(true);
    }

    setIsPossibleMove(false);
  };

  useEffect(() => {
    if (Array.isArray(availableMoves?.val)) verifyPossible();
  }, [availableMoves.val]);

  return (
    <SquareView
      square={square}
      chessPiece={chessPiece}
      isPossibleMove={isPossibleMove}
      dropRef={drop}
    />
  );
}
