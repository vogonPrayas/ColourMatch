"use client"
import React from 'react'
import "../css/gameover.css"
import useStore from '../store'
import { State } from '../store'
const Gameover = () => {

    const{timer,gameOver,setGameOver,won,setWon,lightMode,setTimer,SetRandomColor,setNew}=useStore() as State
    const [score,setScore]=React.useState(timer)

    if(parseInt(localStorage.getItem("highScore")||`200000`) > score){
        if(won){
        localStorage.setItem("highScore",`${score}`)
        }
    }


    const restart=()=>{
        setGameOver(gameOver)
        setNew(false)
        location.reload()
        setTimer(0)
    }

  return (
    <div className='gameOverContainer'>
        <div className="flexCon">
            <h1 className='gameOverHeader'>{won?"You Won!":"You Lost!"}</h1>
            <hr />
            <div className="flexCon2">

                {won?<div className="score">{score}</div>:""}

                <div className={`button restart ${lightMode ? "lightButton" : "darkButton"}`}onClick={restart}>RESTART</div>
                <div className="highScoreText">High Score</div>
                <div className="highScore">{localStorage.getItem("highScore")}</div>

            </div>
        </div>
    </div>
  )
}

export default Gameover