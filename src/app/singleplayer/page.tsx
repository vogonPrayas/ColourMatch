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

  const {color,finalColor,getColor}=useStore() as State
    const go=()=>{
        console.log(finalColor)
    }

  return (
    <>
      <div className='time'>TIME</div>
      <div className="con">
        <div><Colors /></div>
        <div className="container">
          {array.map(name => (<Box key={name} index={name}small={false}/>))}
        </div>
        <Random></Random>
      </div>
      <button onClick={go} className="link">finish</button>
    </>
  );
}

export default Page;
