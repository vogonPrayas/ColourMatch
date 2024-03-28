import React from 'react'
import useStore from '../store'
import { State } from '../store'

const Timer = () => {
    const {timer,setTimer}=useStore() as State
    // React.useEffect(() => {
    //     const intervalId = setInterval(() => {
    //       setTimer(timer);
    //     }, 500);

    //     return () => clearInterval(intervalId);
    //   }, [timer]);
   
  return (
    <div className='time'>{timer}</div>
  )
}

export default Timer