"use client"
import type { Metadata } from "next";
import useStore from "./store";
import { State } from "./store";
import {useRouter} from "next/navigation";

import"./global.css"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {lightMode,setMode,setWon,setGameOver,gameOver}=useStore() as State

  let router= useRouter()
  const style={
    backgroundColor:lightMode?"#B3C8CF":"#222831",
    transition:"0.5s",
    
  }
 
  const click =()=>{
    setMode(lightMode)
    localStorage.setItem("darkMode",`${lightMode}`)
    console.log(localStorage.getItem("mode"))
  }
 
  const styleT={
    fill:lightMode?"#E5DDC5":"#393E46",
    transition:"fill 0.2s" ,
    cursor: "pointer",
  }
  const redirectToHome=()=>{ 
    setWon(false)
    setGameOver(true)
    // router.refresh()
    router.push("/")
    router.refresh()
   
  }

  return (
    <html lang="en">
    <div className="mainTop">
      <svg className="lightmode opacity" style={styleT} onClick={click} width="40" height="40" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="mode" style={styleT} d="M41.7087 15.1667V3.79166H49.292V15.1667H41.7087ZM41.7087 87.2083V75.8333H49.292V87.2083H41.7087ZM75.8337 49.2917V41.7083H87.2087V49.2917H75.8337ZM3.79199 49.2917V41.7083H15.167V49.2917H3.79199ZM70.9045 25.4042L65.5962 20.0958L72.2316 13.2708L77.7295 18.7687L70.9045 25.4042ZM18.7691 77.7292L13.2712 72.2313L20.0962 65.5958L25.4045 70.9042L18.7691 77.7292ZM72.2316 77.7292L65.5962 70.9042L70.9045 65.5958L77.7295 72.2313L72.2316 77.7292ZM20.0962 25.4042L13.2712 18.7687L18.7691 13.2708L25.4045 20.0958L20.0962 25.4042ZM45.5003 68.25C39.1809 68.25 33.8094 66.0382 29.3857 61.6146C24.9621 57.191 22.7503 51.8194 22.7503 45.5C22.7503 39.1806 24.9621 33.809 29.3857 29.3854C33.8094 24.9618 39.1809 22.75 45.5003 22.75C51.8198 22.75 57.1913 24.9618 61.6149 29.3854C66.0385 33.809 68.2503 39.1806 68.2503 45.5C68.2503 51.8194 66.0385 57.191 61.6149 61.6146C57.1913 66.0382 51.8198 68.25 45.5003 68.25ZM45.5003 60.6667C49.7344 60.6667 53.3206 59.1974 56.2592 56.2589C59.1977 53.3203 60.667 49.734 60.667 45.5C60.667 41.266 59.1977 37.6797 56.2592 34.7411C53.3206 31.8026 49.7344 30.3333 45.5003 30.3333C41.2663 30.3333 37.68 31.8026 34.7415 34.7411C31.8029 37.6797 30.3337 41.266 30.3337 45.5C30.3337 49.734 31.8029 53.3203 34.7415 56.2589C37.68 59.1974 41.2663 60.6667 45.5003 60.6667Z" fill="white"/>
    </svg>

    <svg onClick={redirectToHome} style={styleT} className="home opacity" xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
      <path style={styleT} xmlns="http://www.w3.org/2000/svg" d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
    </svg>
    </div>
      <body  style={style}>{children}</body>
    </html>
  );
}
