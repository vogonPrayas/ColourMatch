"use client"
import React from 'react'
import useStore from '../store'
import { State } from '../store'
import "../css/button.css"
import "../css/multiplayer.css"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const page = () => {

    const router=useRouter()
    const {color,finalColor,getColor,RandomColor,gameOver,setGameOver,setWon,won,timer,lightMode,name,setName,setType,code,setCode,socket,setPname}=useStore() as State
    const [No,setNo]=React.useState(false)
    const style={
        color:lightMode ?"#58554D":"black",
        border:No?"1px red solid":""
    }

    const onchange=(e: React.ChangeEvent<HTMLInputElement>,name:string)=>{
      if(name=="name")
      setName(e.target.value)
      else
      setCode(e.target.value)
    }

    const Check=(a:string)=>{
      if (name.replace(/\s/g, '') === '') {
        alert("name please :( ")
      }
      else{
        setType(a)
        // router.push("/multiplayer/lobby")
      }

      if (code.replace(/\s/g, '') === '') {
        alert("Code please :(")
      }
      else{ 
        // let IN=true
        socket.emit("check",{ code, name })
        socket.on("NOP",(data:number)=>{
          console.log(data)
          if(data>=2){
            // alert("you shallnot pass")
            setNo(true)
          }
          else{
            setNo(false)
            router.push("/multiplayer/lobby")
          }
          
        })
        
      }
     

    }

  return (
    <div>
       <div className="LobbyCon">
            <b className='name'> Your Name:</b>
            <input type="text" maxLength={10} style={style} value={name} onChange={(e)=>onchange(e,"name")} />
            <b className='name'> Code:</b>
            <input type="text" maxLength={10} style={style} value={code} onChange={(e)=>onchange(e,"code")} />
            <div className={`button sButton  ${lightMode ? "lightButton" : "darkButton"}`} onClick={()=>Check("JOIN")}>JOIN</div>
       </div>
    </div>
  )
}

export default page