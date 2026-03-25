import '../App.css'
import use from '../hooks/use'

function Tic() {
  const {board, resetGame, getStatusMessage, handleClick } = use();
  
  return (
    <>
      <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button onClick={resetGame}>Reset game</button>
      </div>

      <div className="board">
        {board.map((b, index) => {
          return <button 
          className='cell' 
          key={index}
          onClick={() => handleClick(index)}
          disabled={b !== null}
          > {b}</button>
        })}
      </div>
      </div>
    </>
  )
};

export default Tic
