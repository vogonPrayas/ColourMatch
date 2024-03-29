import React from 'react'
import "../css/gameover.css"
import useStore from '../store'
import { State } from '../store'
const Gameover = () => {

    const{timer,gameOver,setGameOver,won}=useStore() as State

    const restart=()=>{
        setGameOver(gameOver)
    }

  return (
    <div className='gameOverContainer'>
        <div className="flexCon">
            <h1 className='gameOverHeader'>{won?"You Won!":"You Lost"}</h1>
            <hr />
            <div className="flexCon2">
                <div className="score">{timer}</div>
                <div className="restart button" onClick={restart}>RESTART</div>
                <div className="highScoreText">High Score</div>
                <div className="highScore">20</div>
            </div>
        </div>
    </div>
  )
}

export default Gameover