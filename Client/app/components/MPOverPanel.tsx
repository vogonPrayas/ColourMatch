"use client"
import React from 'react'
import useStore from '../store'
import { State } from '../store'
import "../css/gameover.css"

const MPOverPanel = () => {
    const{won,name,otherName,lightMode}=useStore() as State
  return (
    <div className='gameOverContainer'>
    <div className="flexCon">
        {won? 
        <div className="MPflexCon2">
            <div>
                <h1 className="mpWon">YOU</h1>
                <h1 >WON</h1> 
            </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6" style={{width:"100px"}}>
             <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
            </svg>
            <div className='line' />
                <h1 className='mpLost'>{otherName} LOST</h1>
            </div>:
            <div className="MPflexCon2" >
                <div>
                    <h1 className='mpWon'>{otherName}</h1>
                    <h1>WON</h1> 
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{width:"100px"}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                </svg>
                <div className='line' />
                <h1 className='mpLost'>YOU LOST </h1> 
            </div>}
    </div>
</div>
  )
}

export default MPOverPanel