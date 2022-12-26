export class Square {
  constructor({ color, column, row, chessPiece }) {
    this.color = color;
    this.column = column;
    this.row = row;
    this.chessPiece = chessPiece;
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
            chessPiece: null,
          });
        })
      );
    }

    this.board = grid;
  }
}

export class Move {
  constructor({ x, y, isRepeatable, isAttack, isJump }) {
    this.x = x;
    this.y = y;
    this.isRepeatable = isRepeatable ?? false;
    this.isAttack = isAttack ?? false;
    this.isJump = isJump ?? false;
  }
}

export class ChessPiece {
  constructor() {
    this.moves = [];
    this.coords = {
      row: 0,
      col: 0,
    };
  }

  setCoords({ row, col }) {
    this.coords = {
      row,
      col,
    };
  }
}

export class Rook extends ChessPiece {
  constructor({ row, col, color }) {
    super();
    this.moves = [
      new Move({ x: 1 }),
      new Move({ x: 2 }),
      new Move({ x: 1, isAttack: true }),
    ];

    this.color = color;

    this.coords = { row, col };

    this.imageUri =
      this.color === "black"
        ? "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg";
  }
}
