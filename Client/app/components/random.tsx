"use client"
import React from 'react'
import Box from './box';
import useStore from '../store';
import { State } from '../store';

import "../css/randomBox.css"
import "../css/button.css"

const array: number[] = [];

for (let i = 0; i < 25; i++) {
    array.push(i);
  }

const Random = () => {
  const {SetRandomColor,New,setNew,lightMode}=useStore() as State

  const random=()=>{ 
    SetRandomColor()
    setNew(!New)
  }

  return (
    <div className="RandomCon">
      <div className="RandomContainer">
            {array.map(name => (<Box key={name} index={name} small={true} multiPlayer={false}/>))}
      </div>

      <div className={`button sButton center ${lightMode ? "lightButton" : "darkButton"}`} onClick={random}>NEW</div>
    </div>
  )
}

export default Random