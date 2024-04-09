"use client"
import React from 'react'
import useStore from '@/app/store'
import { State } from '@/app/store'
import "@/app/css/button.css"
import "@/app/css/multiplayer.css"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const page = () => {
    const router=useRouter()
    const {color,finalColor,getColor,RandomColor,gameOver,setGameOver,setWon,won,timer,lightMode,name,setName,setType,code,setCode,socket,setPname}=useStore() as State
    const style={
        color:lightMode ?"#58554D":"black"
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
        router.push("/multiplayer/lobby")
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
            <div className={`button sButton  ${lightMode ? "lightButton" : "darkButton"}`} onClick={()=>Check("CREATE")}>CREATE</div>
       </div>
    </div>
  )
}

export default page