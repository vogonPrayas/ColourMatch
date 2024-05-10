"use client"

import React from 'react'
import "../css/box.css"
import useStore from "../store"
import { State } from "../store"

const Box = ({ index,small,multiPlayer}: { index: number,small:boolean,multiPlayer:boolean}) => {
  const { color,getColor,finalColor,RandomColor,SetRandomColor,New,socket,code} = useStore() as State
  const [style, setStyle] = React.useState({
    backgroundColor: "#FFFFFF"
  })

  React.useEffect(()=>{
    setStyle({backgroundColor: small==true && multiPlayer==false?`#${RandomColor[index]}`:"#FFFFFF"})
  },[small, multiPlayer, RandomColor, index])

  const meow = () => {
    if(small && multiPlayer){
      return
    }
    
    else{
    setStyle({ backgroundColor: `#${color}`})
  }
    getColor(index,color)
    socket.emit('colors', {color:finalColor,code:code})
  }
  return (
    <div className={small?'Sbox':"box"} style={style} onClick={meow}></div>
  )
}
export default Box