import React from 'react'
import OtherBox from './otherBox'
import "../css/randomBox.css"
import useStore from '../store';
import { State } from '../store';
const array: number[] = [];

for (let i = 0; i < 25; i++) {
    array.push(i);
}


const MultiplayerBox = () => {
  return (
  <div className='flexColumn'>
  
    <p>{useStore().otherName}</p>
    <div className="RandomContainer SmallContainer magin-bottom">
            {array.map(name => (<OtherBox key={name} index={name}/>))}
      </div>
  </div>
  )
}

export default MultiplayerBox