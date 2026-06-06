import { useState, useEffect } from "react";
import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import characters from "./characters";
import "./App.css";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [clickedIds, setClickedIds] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const [flippedCards, setFlippedCards] = useState([]);

  useEffect(() => {
    setPlayers(characters);
    setLoading(false);
  }, []);

  // Remove the 'flippedCards' state entirely
  const handleCardClick = (id) => {
    if (clickedIds.includes(id)) {
      setIsGameOver(true);
      setBestScore(Math.max(currentScore, bestScore));
    } else {
      setCurrentScore((prev) => prev + 1);
      setClickedIds([...clickedIds, id]);
      setPlayers([...players].sort(() => Math.random() - 0.5));
    }
  };

  return (
    <div className="app-container">
      <Header currentScore={currentScore} bestScore={bestScore} />

      {loading ? (
        <div className="loading-screen">Loading Global All-Stars...</div>
      ) : (
        <CardGrid
          players={players}
          handleCardClick={handleCardClick}
          flippedCards={flippedCards}
        />
      )}

      {isGameOver && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Game Over!</h2>
            <p>Your final score: {currentScore}</p>
            <button
              onClick={() => {
                setIsGameOver(false);
                setCurrentScore(0);
                setClickedIds([]);
              }}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
