import React from 'react'
import Box from '@/app/components/box';
const array: number[] = [];

for (let i = 0; i < 25; i++) {
    array.push(i);
  }
const page = () => {
  console.log(array)
  
  return (
    <div className="container">
          {array.map(name => (<Box key={name} index={name} small={false}/>))}
    </div>
  )
}

export default page