"use client"
import React from 'react'
import useStore from '../store'
import { State } from '../store'
import "../css/timer.css"

const Timer = () => {
    const {timer,setTimer,gameOver,lightMode}=useStore() as State

    
      React.useEffect(() => {
        
        if(!gameOver){
          const intervalId = setInterval(() => {
            setTimer(timer+1);
          }, 500);
        
          return () => clearInterval(intervalId);
        }

        }, [timer, setTimer, gameOver]);

      const style={
        backgroundColor:lightMode?"#BED7DC":"#15191f",
        color:lightMode?"#58554D":"aliceblue"
      }
  
  return (
    <div className='time' style={style}>{timer}</div>
  )
}

export default Timer