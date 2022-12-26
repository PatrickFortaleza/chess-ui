import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Chessboard from "./Chessboard";
import { Rook } from "./classes/chessboard";

function App() {
  const [count, setCount] = useState(0);

  const initialGameState = useRef({
    chessPieces: [new Rook({ row: 6, col: 3, color: "white" })],
  });

  return (
    <div className="App">
      <Chessboard chessPieces={initialGameState.current.chessPieces} />
    </div>
  );
}

export default App;
