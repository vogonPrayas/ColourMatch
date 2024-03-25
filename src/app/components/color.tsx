"use client"
import React from 'react'
import "../css/color.css"
import useStore from '../store'
import {State} from "../store"
const Color = ({colors}:{colors:string}) => {

  const { color,updateColor } = useStore() as State;

const style={
    backgroundColor:`#${colors}`,
    width:"40px",
    height:"40px",
    margin:"10px",
    borderRadius:"8px",
}

const onColor=()=>{
  updateColor(colors)
}
  return (
  <div className='Rcon'>
    <div style={style} className='color' onClick={onColor}></div>
  </div>
  )
}

export default Color