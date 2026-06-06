export default function Card({ player, handleCardClick }) {
  return (
    <div className="player-card" onClick={() => handleCardClick(player.id)}>
      <div className="card-image-container">
        <img src={player.image} alt={player.name} />
      </div>
      <h3>{player.name}</h3>
    </div>
  );
}