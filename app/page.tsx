import Link from "next/link";
import React, { useEffect } from "react";
import "./css/menu.css";
import "./css/button.css";
import MPOverPanel from "./components/MPOverPanel";
import useStore from "./store";
import { State } from "./store";
import { io } from 'socket.io-client';

export default function Home() {
  const socket = io('http://localhost:3001');
  const { lightMode, setMode, finalColor, restartColor, SetRandomColor, setTimer, setWon, setGameOver, gameOver } = useStore() as State;

  useEffect(() => {
    restartColor();
    SetRandomColor();
    setTimer(0);
  }, [restartColor, SetRandomColor, setTimer]); // Add dependencies to useEffect

  const style = {
    fill: lightMode ? "#E5DDC5" : "#323232",
    transition: "fill 0.2s"
  };

  const click = () => {
    setWon(false);
    setGameOver(true);
  };

  return (
    <>
      <h1 className="title">COLOR MATCH</h1>
      <div className="hcontainer">
        <Link href="/singleplayer" className={lightMode ? "lightButton button" : "button darkButton"}>SINGLE PLAYER</Link>
        <Link href="/multiplayer" className={lightMode ? "lightButton button" : "button darkButton"} onClick={click}>MULTI PLAYER</Link>
      </div>
    </>
  );
}
