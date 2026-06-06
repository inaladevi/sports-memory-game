import Card from './Card';

function CardGrid({ players, handleCardClick }) {
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

export default CardGrid;