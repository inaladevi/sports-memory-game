import { useState } from 'react';
import Header from './components/Header';
import CardGrid from './components/CardGrid';
import './App.css';

function App() {
  // Mock states to verify our props flow works cleanly
  const [currentScore, setCurrentScore] = useState(3);
  const [bestScore, setBestScore] = useState(7);

  // Hardcoded temporary mock data representing sports players
  const [players, setPlayers] = useState([
    { id: 1, name: "Virat Kohli", image: "https://placehold.co/150x150?text=Kohli" },
    { id: 2, name: "MS Dhoni", image: "https://placehold.co/150x150?text=Dhoni" },
    { id: 3, name: "Rohit Sharma", image: "https://placehold.co/150x150?text=Sharma" },
    { id: 4, name: "Jasprit Bumrah", image: "https://placehold.co/150x150?text=Bumrah" },
  ]);

  // Placeholder function for when a card is clicked
  const handleCardClick = (id) => {
    console.log(`Card clicked with ID: ${id}`);
  };

  return (
    <div className="app-container">
      <Header currentScore={currentScore} bestScore={bestScore} />
      <CardGrid players={players} handleCardClick={handleCardClick} />
    </div>
  );
}

export default App;