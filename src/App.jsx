import { useState } from "react";
import "./App.css";
import Chessboard from "./Chessboard";
import { Pawn, Bishop, Rook, Knight, Queen, King } from "./classes/chessboard";
import { v4 as uuid } from "uuid";

function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [welcomeModal, setWelcomeModal] = useState(true);
  const [retryModal, setRetryModal] = useState(false);
  const [retries, setRetries] = useState(0);

  const handleRetry = () => {
    setUnlocked(false);
    setRetryModal(false);
    setRetries((retry) => retry + 1);
  };

  return (
    <div className="App">
      {unlocked ? (
        <>
          <div className="modal-background">
            <div className="modal">
              <h3>Site unlocked</h3>
              <p>Pretend there's content here.</p>
              <button onClick={() => handleRetry()}>Restart</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <Chessboard
            gameState={initialGameState}
            key={retries}
            winState={{
              cls: Knight,
              targetCoords: {
                row: 3,
                col: 4,
              },
              color: "white",
              winCallback: () => {
                setUnlocked(true);
              },
              loseCallback: () => {
                setRetryModal(true);
              },
            }}
          />

          <div className="instructions">
            <h4>Solve the puzzle</h4>
            <p>
              White to win. Drag and drop a single chess piece to win the game.
            </p>
          </div>

          {welcomeModal && (
            <div className="modal-background">
              <div className="modal">
                <h3>Challenge</h3>
                <p>Please solve the chess puzzle to move on.</p>
                <button onClick={() => setWelcomeModal(false)}>Okay</button>
              </div>
            </div>
          )}

          {retryModal && (
            <div className="modal-background">
              <div className="modal">
                <h3>Challenge Failed</h3>
                <p>Please click retry to try again.</p>
                <button onClick={() => handleRetry()}>Retry</button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;

const initialGameState = {
  chessPieces: [
    /**
     * ==============================
     * TEAM WHITE
     * ==============================
     */
    {
      piece: new Rook({ color: "white", id: uuid() }),
      coords: { row: 1, col: 1 },
    },
    {
      piece: new Knight({ color: "white", id: uuid() }),
      coords: { row: 3, col: 1 },
    },
    {
      piece: new Queen({ color: "white", id: uuid() }),
      coords: { row: 4, col: 2 },
    },
    {
      piece: new Pawn({ color: "white", id: uuid() }),
      coords: { row: 4, col: 4 },
    },
    {
      piece: new Pawn({ color: "white", id: uuid() }),
      coords: { row: 4, col: 7 },
    },
    {
      piece: new Knight({ color: "white", id: uuid() }),
      coords: { row: 5, col: 5 },
    },
    {
      piece: new Pawn({ color: "white", id: uuid() }),
      coords: { row: 6, col: 5 },
    },
    {
      piece: new Pawn({ color: "white", id: uuid() }),
      coords: { row: 6, col: 6 },
    },
    {
      piece: new Bishop({ color: "white", id: uuid() }),
      coords: { row: 6, col: 3 },
    },
    {
      piece: new Pawn({ color: "white", id: uuid() }),
      coords: { row: 6, col: 0 },
    },
    {
      piece: new King({ color: "white", id: uuid() }),
      coords: { row: 7, col: 5 },
    },
    /**
     * ==============================
     * TEAM BLACK
     * ==============================
     */
    {
      piece: new Pawn({ color: "black", id: uuid() }),
      coords: { row: 1, col: 0 },
    },
    {
      piece: new Rook({ color: "black", id: uuid() }),
      coords: { row: 2, col: 2 },
    },
    {
      piece: new Knight({ color: "black", id: uuid() }),
      coords: { row: 1, col: 3 },
    },
    {
      piece: new Queen({ color: "black", id: uuid() }),
      coords: { row: 2, col: 4 },
    },
    {
      piece: new Knight({ color: "black", id: uuid() }),
      coords: { row: 2, col: 5 },
    },
    {
      piece: new Pawn({ color: "black", id: uuid() }),
      coords: { row: 2, col: 6 },
    },
    {
      piece: new Pawn({ color: "black", id: uuid() }),
      coords: { row: 2, col: 7 },
    },
    {
      piece: new King({ color: "black", id: uuid() }),
      coords: { row: 1, col: 6 },
    },
    {
      piece: new Pawn({ color: "black", id: uuid() }),
      coords: { row: 3, col: 4 },
    },
    {
      piece: new Bishop({ color: "black", id: uuid() }),
      coords: { row: 3, col: 2 },
    },
    {
      piece: new Pawn({ color: "black", id: uuid() }),
      coords: { row: 4, col: 5 },
    },
  ],
};
