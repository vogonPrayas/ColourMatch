"use client"
import React from 'react'
import useStore from '@/app/store'
import { State } from '@/app/store'
import "@/app/css/button.css"
import "@/app/css/lobby.css"
import Link from 'next/link'
const page = () => {
    
    const {color,finalColor,getColor,RandomColor,gameOver,setGameOver,setWon,won,timer,lightMode,name,setName}=useStore() as State
    const style={
        color:lightMode ?"#58554D":"black"
    }
    const onchange=(e: React.ChangeEvent<HTMLInputElement>)=>{
      setName(e.target.value)
    }
  return (
    <div>
       <h1 className='lobby'>LOBBY</h1>  
       <div className="LobbyCon">
            <b className='name'> Name:</b>
            <input type="text" style={style} value={name} onChange={onchange}/>
            <Link href="multiplayer/lobby" className={`button sButton  ${lightMode ? "lightButton" : "darkButton"}`}>JOIN</Link>
            <Link href="multiplayer/lobby" className={`button sButton  ${lightMode ? "lightButton" : "darkButton"}`}>CREATE</Link>
       </div>
    </div>
  )
}

export default page