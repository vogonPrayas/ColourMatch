
import Link from "next/link";
import React from "react";
import "./css/menu.css"
import "./css/button.css"
export default function Home() {
  return (
    <>
    <div className="MainTop">
      <h1 className="title">COLOR MATCH</h1>
      <div className="hcontainer">
      <Link href="/singleplayer" className="button" >SINGLE PLAYER</Link>
      <Link href="/multiplayer" className="button">MULTI PLAYER</Link>
      </div>
    </div>
    </>
  );
}
