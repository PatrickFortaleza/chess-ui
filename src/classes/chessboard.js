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

          if (
            (column % 2 !== 0 && row % 2 !== 0) ||
            (column % 2 === 0 && row % 2 === 0)
          ) {
            color = "white";
          } else if (
            (column % 2 == 0 && row % 2 !== 0) ||
            (row % 2 === 0 && column % 2 !== 0)
          ) {
            color = "black";
          }

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
  constructor({ north = 0, east = 0, south = 0, west = 0 }) {
    this.n = north;
    this.e = east;
    this.s = south;
    this.w = west;
  }
}

export class ChessPiece {
  constructor() {
    this.moves = [];
    this.canJump = false;
  }
}

export class Rook extends ChessPiece {
  constructor() {
    this.moves = [new Move({ north: 1 }), new Move({ north: 2 })];
  }
}
