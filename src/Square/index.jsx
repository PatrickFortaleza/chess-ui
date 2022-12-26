import React, { useMemo } from "react";
import SquareView from "./view";

export default function Square({ square, chessPieces }) {
  const chessPiece = useMemo(() => {
    let [sqRow, sqColumn] = [square.row, square.column];

    let filteredChessPieces = chessPieces.filter((cp) => {
      let { col, row } = cp.coords;
      if (sqRow === row && sqColumn === col) return true;
      return false;
    });

    if (filteredChessPieces.length === 1) return filteredChessPieces[0];
    return null;
  }, [chessPieces]);

  return <SquareView square={square} chessPiece={chessPiece} />;
}
