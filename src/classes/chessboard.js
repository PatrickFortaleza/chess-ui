export class Square {
  constructor({ color, column, row }) {
    this.color = color;
    this.column = column;
    this.row = row;
  }

  get coords() {
    return [this.row, this.column];
  }
}

export class Board {
  constructor() {
    let squares = [...Array(64)],
      grid = [];

    while (squares.length > 0) {
      grid.push(
        squares.splice(0, 8).map((_, index) => {
          let row = grid.length,
            column = index,
            color;

          (column % 2 !== 0 && row % 2 !== 0) ||
          (column % 2 === 0 && row % 2 === 0)
            ? (color = "white")
            : (color = "black");

          return new Square({
            color: color,
            column: column,
            row: row,
          });
        })
      );
    }

    this.board = grid;
  }
}

export class Move {
  constructor({ x, y, maxRepeats, isAttackMove }) {
    this.x = x;
    this.y = y;
    this.maxRepeats = maxRepeats ?? 0;
    this.isAttackMove = isAttackMove ?? false;
  }
}

export class ChessPiece {
  constructor() {
    this.moves = [];
    this.id = null;
    this.color = "";
  }

  possibleMoves({ row, column, chessPieces }) {
    let possibleMoves_ = [];
    console.log(this.moves);
    for (let i = 0; i < this.moves.length; i++) {
      let { x, y, isAttackMove, maxRepeats } = this.moves[i];

      let currentRow = +`${row}`,
        currentColumn = +`${column}`;

      let isValidMove = true;
      for (let j = 0; j <= maxRepeats && isValidMove === true; j++) {
        let targetRow = currentRow + y;
        let targetColumn = currentColumn + x;

        if (
          targetRow > 7 ||
          targetColumn > 7 ||
          targetRow < 0 ||
          targetColumn < 0
        ) {
          isValidMove = false;
          continue;
        }

        for (let i = 0; i < chessPieces.length; i++) {
          let { col: cpColumn, row: cpRow } = chessPieces[i].coords;

          if (cpColumn === targetColumn && cpRow === targetRow) {
            if (chessPieces[i].piece.color !== this.color) {
              possibleMoves_.push({
                row: targetRow,
                column: targetColumn,
              });
            }
            isValidMove = false;
            break;
          }
        }

        if (isValidMove === false) continue;
        if (isAttackMove) continue;

        currentRow = targetRow;
        currentColumn = targetColumn;

        possibleMoves_.push({ row: targetRow, column: targetColumn });
      }
    }

    return possibleMoves_;
  }
}

export class Rook extends ChessPiece {
  constructor({ color, id }) {
    super();

    this.moves = [
      new Move({ x: 0, y: 1, maxRepeats: 999 }),
      new Move({ x: 0, y: -1, maxRepeats: 999 }),
      new Move({ x: 1, y: 0, maxRepeats: 999 }),
      new Move({ x: -1, y: 0, maxRepeats: 999 }),
    ];

    this.id = id;

    this.color = color;

    this.imageUri =
      this.color === "black"
        ? "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg";
  }
}

export class Bishop extends ChessPiece {
  constructor({ color, id }) {
    super();

    this.moves = [
      new Move({ x: 1, y: 1, maxRepeats: 999 }),
      new Move({ x: -1, y: 1, maxRepeats: 999 }),
      new Move({ x: -1, y: -1, maxRepeats: 999 }),
      new Move({ x: 1, y: -1, maxRepeats: 999 }),
    ];

    this.id = id;

    this.color = color;

    this.imageUri =
      this.color === "black"
        ? "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg";
  }
}

export class Pawn extends ChessPiece {
  constructor({ color, id }) {
    super();

    this.moves = [
      // new Move({ y: color === "black" ? 1 : -1, x: 0, maxRepeats: 3 }),
      // new Move({
      //   x: 2,
      //   y: 0,
      //   maxRepeats: 1,
      //   // isAttackMove: true,
      // }),
      new Move({
        x: 0,
        y: -1,
        isAttackMove: false,
        maxRepeats: 1,
      }),
      new Move({
        x: -1,
        y: -1,
        isAttackMove: true,
        maxRepeats: 0,
      }),
      new Move({
        x: 1,
        y: -1,
        isAttackMove: true,
        maxRepeats: 0,
      }),
      // new Move({
      //   x: -1,
      //   y: 1,
      //   isAttackMove: true,
      // }),
      // new Move({
      //   x: color === "black" ? 1 : -1,
      //   y: color === "black" ? -1 : 1,
      //   isAttackMove: true,
      // }),
    ];

    this.id = id;

    this.color = color;

    this.imageUri =
      this.color === "black"
        ? "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg";
  }
}
