"use client"
import React from 'react';
import Color from './color';
import "../css/color.css";
import useStore from '../store';
import { State } from '../store';

const Colors: React.FC= () => {
  const colors = ["F78787", "F5F197", "98F597", "97F5DE", "97ABF5", "F597EB"];

  const{lightMode}=useStore() as State

  return (
    <div className={`Ccontainer ${lightMode?"lightCcontainer":"darkCcontainer"}` }>
      {colors.map((color) => (
        <div>
        <Color key={color} colors={color}/>
        </div>
      ))}
    </div>
  );
}

export default Colors;
