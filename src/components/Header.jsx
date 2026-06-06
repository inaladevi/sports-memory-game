import Scoreboard from './Scoreboard';

export default function Header({ currentScore, bestScore }) {
  return (
    <header className="main-header-wrapper">
      <div className="main-header">
        <h1 className="logo">Stadium Match</h1> 
        <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      </div>
      
      {/* THE NEW INSTRUCTION TICKER */}
      <div className="instruction-ticker">
        <span>⚡ RULES OF THE MATCH: CLICK AN ATHLETE TO SCORE POINTS. THE SQUAD SHUFFLES AFTER EVERY CLICK. CLICK THE SAME ATHLETE TWICE AND IT'S GAME OVER! ⚡</span>
      </div>
    </header>
  );
}