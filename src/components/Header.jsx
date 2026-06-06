import Scoreboard from './Scoreboard';

function Header({ currentScore, bestScore }) {
  return (
    <header className="game-header">
      <div className="logo-section">
        <h1>Stadium Memory Match</h1>
        <p>Get points by clicking on players, but don't click on any icon twice!</p>
      </div>
      {/* Passing the score props straight through to the scoreboard */}
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
    </header>
  );
}

export default Header;