
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
      <Link href="/singleplayer" className="link" >SINGLE PLAYER</Link>
      <Link href="/multiplayer" className="link">MULTI PLAYER</Link>
      </div>
    </div>
    </>
  );
}
