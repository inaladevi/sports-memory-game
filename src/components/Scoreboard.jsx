function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className="score-board"> 
      <div className="score-box">Score: {currentScore}</div>
      <div className="score-box">Best: {bestScore}</div>
    </div>
  );
}

export default Scoreboard;
