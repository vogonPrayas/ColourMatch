"use client"
import React from 'react';
import Box from '../components/box';
import Colors from '../components/colors';
import Random from '../components/random';
import "../css/singleplayer.css";
import useStore from '../store'
import { State } from '../store'

const array: number[] = [];

for (let i = 0; i < 25; i++) {
  array.push(i);
}

const Page: React.FC = () => {

  const {color,finalColor,getColor,RandomColor}=useStore() as State
    const go=()=>{
      let COUNT=0
      console.log(finalColor)
        for(let i=0;i<RandomColor.length;i++){
          if(finalColor[i]==RandomColor[i]){
            COUNT+=1
            console.log(finalColor[i],RandomColor[i])
            console.log(COUNT)
          }
        }
        if(COUNT==RandomColor.length){
          console.log("milyo")
        }
        else{
          console.log("milena")
        }
    }

  return (
    <>
      <div className='time'>TIME</div>
    <div className="con">
      <div className="ColBoxcon">
        <div><Colors /></div> 
        <div className="container">
          {array.map(name => (<Box key={name} index={name}small={false}/>))}</div>  
        </div>
        <div className="border"> </div>
        <Random></Random>
    </div>
      <div onClick={go} className="link">finish</div>
    </>
  );
}

export default Page;
