"use client"
import React from 'react'
import useStore from '@/app/store'
import { State } from '@/app/store'

import "@/app/css/lobby.css"
import "@/app/css/button.css"
import { error } from 'console'

const page = () => {

    const {name,lightMode,type,setCode,code,socket,Pname,setPname}=useStore() as State

    const style={
      color:lightMode ?"#58554D":"black"
  }
  let names: string[] = [];

  React.useEffect(()=>{
    const fetchData = async () => {
      try {
        await socket.emit("join", { code, name });
      }
      catch{
        console.log("error")
      }
    }
    fetchData()
    return () => {
      socket.off('join');
    };
  },[])
  
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        await socket.on('name', (data: string[]) => {
        setPname(data)
        console.log(data)})
      }
      catch{
        console.log("error")
      }
    }
    fetchData()
    
    return () => {
      socket.off('name');
    };
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        await socket.on("disconnected", () => {
      console.log("MEOW MEOW");
      socket.emit("join", { code, name });
      })
      }
      catch{
        console.log("error")
      }
    }
    fetchData()
    
    return () => {
      socket.off("disconnected");
    };
  }, []); 

 
  let nameta=Pname.map(data=><div className={`button sButton  ${lightMode ? "lightButton" : "darkButton"}`}>{data}</div> )

  return (
    <>
    <div className="LobbyCon">
      <div className="name" style={style}>{code}</div>
      {nameta}
      <div className={`button sButton  ${lightMode ? "lightButton" : "darkButton"}`}>START</div>
      </div>
    </>
  )
}

export default page