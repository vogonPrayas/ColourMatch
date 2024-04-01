"use client"

import React from 'react'
import "../css/box.css"
import useStore from "../store"
import { State } from "../store"

const Box = ({ index,small}: { index: number,small:boolean}) => {
  const { color,getColor,finalColor,RandomColor,SetRandomColor,New} = useStore() as State

  const [style, setStyle] = React.useState({
    backgroundColor: "#FFFFFF"
  })

  React.useEffect(()=>{
    setStyle({backgroundColor: small?`#${RandomColor[index]}`:"#FFFFFF"})
  },[New])

  const meow = () => {

    if(small){
      return
    }

    else{
    setStyle({ backgroundColor: `#${color}`})
  }

    getColor(index,color)
  }

  return (
    <div className={small?'Sbox':"box"} style={style} onClick={meow}></div>
  )
}

export default Box
