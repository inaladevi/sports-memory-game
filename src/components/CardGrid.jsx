import Card from './Card';

export default function CardGrid({ players, handleCardClick }) {
  return (
    <main className="grid-container">
      {players.map((player) => (
        <Card 
          key={player.id} 
          player={player} 
          handleCardClick={handleCardClick} 
        />
      ))}
    </main>
  );
}