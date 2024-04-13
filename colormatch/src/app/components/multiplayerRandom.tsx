import React from 'react'
import Box from './box';
import useStore from '../store';
import { State,useSocketListener } from '../store';

import "../css/randomBox.css"
import "../css/button.css"

const array: number[] = [];

for (let i = 0; i < 25; i++) {
    array.push(i);
  }


const MultiRandom = () => {
  const {SetRandomColor,New,setNew,lightMode,randomColorMP,socket,setRandomMP,RandomColor}=useStore() as State
    console.log(randomColorMP)
  return (
    <div className="RandomCon">
      <div className="RandomContainer">
    {array.map(name => (<div className='Sbox' style={{backgroundColor: `#${randomColorMP[name]}`}}></div>))}
      </div>
    </div>
  )
}

export default MultiRandom