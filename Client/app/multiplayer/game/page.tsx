"use client"
import React from 'react';
import Box from '../../components/box';
import Colors from '../../components/colors';
import MultiRandom from '../../components/multiplayerRandom';
import Timer from '../../components/timer';
import Gameover from '../../components/gameover';
import MultiplayerBox from '../../components/MultiplayerBox';
import MPOverPanel from '../../components/MPOverPanel';

import "../../css/singleplayer.css";
import "../../css/button.css"
import "../../css/button.css"

import useStore from '../../store'
import { State } from '../../store'

const array: number[] = [];

for (let i = 0; i < 25; i++) {
  array.push(i);
}


const Page: React.FC = () => {
  const {color,finalColor,getColor,RandomColor,gameOver,setGameOver,setWon,won,timer,lightMode,socket,setOther,name,otherName,randomColorMP,code}=useStore() as State

  socket.on("over",(data)=>{

    if((data.name==name && data.won=="won") || (data.name==otherName && data.won=="lost" )){
      setWon(true)
      setGameOver(gameOver)
    }
    else if((data.name==otherName && data.won=="won")||(data.name==name && data.won=="lost")){
      console.log("You Lost")
      setGameOver(gameOver)
    }
  })

  const check=()=>{
    let COUNT=0

    for(let i=0;i<RandomColor.length;i++){

          if(finalColor[i]==randomColorMP[i]){
            COUNT+=1
            console.log(finalColor[i],randomColorMP[i])
          }

        }
        
        if(COUNT==randomColorMP.length){
          setWon(true)
          console.log("Jityo")
          socket.emit("Won?",{won:'won',name,code})
        }

        else{
          console.log("Haryo")
          socket.emit("Won?",{won:'lost',name,code})
        }
  }

    socket.on('call', (data) => {
        setOther(data);
      });
    
    const go= async()=>{
      // setGameOver(gameOver)
      check()
      console.log(finalColor,RandomColor)
      console.log(won)
    }

    const bold={
      fontWeight:900,
    }

  return (
    <>
      <h1 className='title'>{name} <b style={bold}>vs</b> {otherName}</h1>
    <div className="con">
      
      <div className="ColBoxcon">
        <Colors />
        <div className="container" >
          {array.map(name => (<Box key={name} index={name} small={false} multiPlayer={true}/>))}</div>  
      </div>
        <div className="border"> </div>
        <div className="FlexColumn">
          <MultiRandom/>
          <MultiplayerBox/>
        </div>
    </div>
      <div onClick={go} className={`button sButton finish ${lightMode ? "lightButton" : "darkButton"}`}>FINISH</div>
      {gameOver?<MPOverPanel/>:""}

    </>
  );
}

export default Page;