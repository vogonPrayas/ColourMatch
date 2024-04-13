"use client"
import React from 'react';
import Box from '../../components/box';
import Colors from '../../components/colors';
import MultiRandom from '../../components/multiplayerRandom';
import Timer from '../../components/timer';
import Gameover from '../../components/gameover';
import MultiplayerBox from '../../components/MultiplayerBox';

import "@/app/css/singleplayer.css";
import "@/app/css/button.css"
import "@/app/css/button.css"

import useStore from '../../store'
import { State } from '../../store'

const array: number[] = [];

for (let i = 0; i < 25; i++) {
  array.push(i);
}

const Page: React.FC = () => {
 
  const check=()=>{
    let COUNT=0

    for(let i=0;i<RandomColor.length;i++){

          if(finalColor[i]==RandomColor[i]){
            COUNT+=1
            console.log(finalColor[i],RandomColor[i])
          }

        }
        
        if(COUNT==RandomColor.length){
          setWon(true)
          console.log("Jityo")
        }

        else{
          console.log("Haryo")
        }
  }

  const {color,finalColor,getColor,RandomColor,gameOver,setGameOver,setWon,won,timer,lightMode,socket,setOther}=useStore() as State
    socket.on('call', (data) => {
        setOther(data);
      });
    const go=()=>{
      setGameOver(gameOver)
      check()
      console.log(finalColor,RandomColor)
      console.log(won)
    }


  return (
    <>
      <Timer/>
    <div className="con">
      
      <div className="ColBoxcon">
        <Colors />
        <div className="container">
          {array.map(name => (<Box key={name} index={name} small={false} multiPlayer={true}/>))}</div>  
      </div>
        <div className="border"> </div>
        <MultiRandom/>
    </div>
      <div onClick={go} className={`button sButton finish ${lightMode ? "lightButton" : "darkButton"}`}>FINISH</div>

      {gameOver?<Gameover/>:""}
      <MultiplayerBox/>
    </>
  );
}

export default Page;
