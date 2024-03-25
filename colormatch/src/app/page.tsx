"use Client"
import Link from "next/link";
import "./css/button.css"
import React from "react";
export default function Home() {
  return (
    <>
    <div>
      <h1 className="title">COLOR MATCH</h1>
      <div className="hcontainer">
      <Link href="/singleplayer" className="link" >SINGLE PLAYER</Link>
      <Link href="/multiplayer" className="link">MULTI PLAYER</Link>
      </div>
    </div>
    </>
  );
}
