import React from 'react'
import Box from './box';
const array: number[] = [];

for (let i = 0; i < 25; i++) {
    array.push(i);
  }
const Random = () => {
  console.log(array)
  
  return (
    <div className="RandomContainer">
          {array.map(name => (<Box key={name} index={name} small={true}/>))}
    </div>
  )
}

export default Random