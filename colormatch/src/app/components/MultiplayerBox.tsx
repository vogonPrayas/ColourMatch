import React from 'react'
import OtherBox from './otherBox'
const array: number[] = [];

for (let i = 0; i < 25; i++) {
    array.push(i);
}

const MultiplayerBox = () => {
  return (
    <div className="RandomContainer">
            {array.map(name => (<OtherBox key={name} index={name}/>))}
      </div>
  )
}

export default MultiplayerBox