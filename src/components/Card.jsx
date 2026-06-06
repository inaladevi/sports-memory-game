function Card({ player, handleCardClick }) {
  return (
    <div className="player-card" onClick={() => handleCardClick(player.id)}>
      <img src={player.image} alt={player.name} className="player-img" />
      <div className="player-info">
        <h3>{player.name}</h3>
      </div>
    </div>
  );
}

export default Card;