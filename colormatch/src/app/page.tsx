"use client"
import Link from "next/link";
import React from "react";
import "./css/menu.css"
import "./css/button.css"
import useStore from "./store";
import { State } from "./store";
import { io } from 'socket.io-client';


export default function Home() {
  const socket = io('http://localhost:3001');
  const {lightMode,setMode,finalColor}=useStore() as State


  const style={
    fill:lightMode?"#E5DDC5":"#323232",
    transition:"fill 0.2s" 
  }
  const click =()=>{
    setMode(lightMode)
    localStorage.setItem("darkMode",`${lightMode}`)
    console.log(localStorage.getItem("mode"))
  }

  
  return (
    <>
      <h1 className="title">COLOR MATCH</h1>
      <div className="hcontainer">
      <Link href="/singleplayer" className={lightMode?"lightButton button":"button darkButton"} >SINGLE PLAYER</Link>
      <Link href="/multiplayer" className={lightMode?"lightButton button":"button darkButton"}>MULTI PLAYER</Link>
      </div>
    </>
  );
}
