function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className="scoreboard">
      <div className="score-box">Current Score: {currentScore}</div>
      <div className="score-box">Best Score: {bestScore}</div>
    </div>
  );
}

export default Scoreboard;