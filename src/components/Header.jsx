import Scoreboard from './Scoreboard';

export default function Header({ currentScore, bestScore }) {
  return (
    <header className="main-header">
      <div className="logo">Stadium Match</div>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
    </header>
  );
}
