"use client"
import React from 'react'
import useStore from '@/app/store'
import { State } from '@/app/store'

import "@/app/css/lobby.css"
import "@/app/css/button.css"

const page = () => {

    const {name,lightMode,type}=useStore() as State

    const style={
      color:lightMode ?"#58554D":"white"
  }
  
  return (
    <>
    <div className="LobbyCon">
      <div className="name" style={style}>{name}</div>
      {/* {type=="JOIN"?
      <>
        <div className={`button sButton  ${lightMode ? "lightButton" : "darkButton"}`}>{type}</div>
      </>:
      ""} */}
      <input type="text" placeholder='code' style={style}/>
      <div className={`button sButton  ${lightMode ? "lightButton" : "darkButton"}`}>{type}</div>
      </div>
    </>
  )
}

export default page