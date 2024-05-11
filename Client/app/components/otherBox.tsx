"use client"

import React from 'react'
import "../css/box.css"
import useStore from "../store"
import { State } from "../store"

const OtherBox = ({index}:{index:number}) => {
  const {other} = useStore() as State

  const [style, setStyle] = React.useState({
    backgroundColor: "#FFFFFF"
  })

  React.useEffect(()=>{
    setStyle({backgroundColor:`#${other[index]}`})
  },[other,index])

  return (
    <div className='Sbox XS' style={style}></div>
  )
}
export default OtherBox