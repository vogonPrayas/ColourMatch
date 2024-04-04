import React, { useEffect, useState } from 'react';
import "../css/box.css";
import useStore from "../store";
import { State } from "../store";


const Box = ({ index, small }: { index: number, small: boolean }) => {
  const { color, getColor, finalColor, RandomColor, SetRandomColor, New } = useStore() as State;
  
  const [style, setStyle] = useState({
    backgroundColor: "#FFFFFF"
  });

  const meow = () => {
    if (small) {
      return;
    } else {
      setStyle({ backgroundColor: `#${color}` });
    }
    getColor(index, color);
  }

  return (
    <div className={small ? 'Sbox' : "box"} style={style} onClick={meow}></div>
  )
}

export default Box;
