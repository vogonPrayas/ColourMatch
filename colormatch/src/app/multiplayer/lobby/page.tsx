"use client"
import React from 'react'
import useStore from '@/app/store'
import { State } from '@/app/store'

import "@/app/css/lobby.css"
import "@/app/css/button.css"

const page = () => {

    const {name,lightMode,type,setCode,code,socket,Pname,setPname}=useStore() as State

    const style={
      color:lightMode ?"#58554D":"black"
  }
  let names: string[] = [];

  React.useEffect(()=>{
    socket.emit("join",{code,name})
  },[])
  
  React.useEffect(()=>{
    socket.on('name', (data:string[]) => {
    setPname(data)
    console.log(data) 
  });
  },[])
  
    // Initialize the names array here
    // setPname(names)
    // data.forEach((element: { name: string, code: string }) => {
    //   if (element.code == code) {
    //     names.push(element.name);
        
    //     console.log(names);
    //   }
    // });
 
  let nameta=Pname.map(data=><div className={`button sButton  ${lightMode ? "lightButton" : "darkButton"}`}>{data}</div> )
  
  //  Pname.

  return (
    <>
    <div className="LobbyCon">
      <div className="name" style={style}>{code}</div>
      {nameta}
      {/* <div className={`button sButton  ${lightMode ? "lightButton" : "darkButton"}`}>{name}</div> */}
      {/* <div className={`button sButton  ${lightMode ? "lightButton" : "darkButton"}`}>{Pname[0]}</div>
      <div className={`button sButton  ${lightMode ? "lightButton" : "darkButton"}`}>{Pname[1]}</div> */}
      {/* <div className={`button sButton  ${lightMode ? "lightButton" : "darkButton"}`}>{Pname}</div> */}
      {/* <input type="text" placeholder='code' style={style} onChange={onchange} value={code} maxLength={6}/> */}
      <div className={`button sButton  ${lightMode ? "lightButton" : "darkButton"}`}>START</div>
      </div>
    </>
  )
}

export default page