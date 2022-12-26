import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Chessboard from "./Chessboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Chessboard />
    </div>
  );
}

export default App;
