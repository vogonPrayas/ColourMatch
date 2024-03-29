import React from 'react'
import Box from './box';
import useStore from '../store';
import { State } from '../store';

import "../css/randomBox.css"
import "../css/button.css"
import { read } from 'fs';

const array: number[] = [];

for (let i = 0; i < 25; i++) {
    array.push(i);
  }
  

const Random = () => {
  
  const[Random,setRandom]=React.useState(false)
  console.log(array)
  const {SetRandomColor}=useStore() as State

  const random=()=>{
    setRandom(!Random)
    SetRandomColor()
  }
  return (
    <div className="RandomCon">
      <div className="RandomContainer">
            {array.map(name => (<Box key={name} index={name} small={true} Random={Random}/>))}
      </div>

      <div className="button sButton center" onClick={random}>NEW</div>
    </div>
  )
}

export default Random