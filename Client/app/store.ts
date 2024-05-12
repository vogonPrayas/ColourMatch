import { create } from "zustand";
import React from "react";
import { io,Socket } from 'socket.io-client';

let socket = io("https://colourmatch.onrender.com/"); // Connect to your Socket.IO server


socket.on('welcome',(data)=>{
    // console.log(data ,"hehpqwhd")
  })
export interface State {
    color: string;
    updateColor: (newColor: string) => void;

    finalColor: string[];
    getColor: (index: number, col: string) => void;

    RandomColor: string[];
    SetRandomColor: () => void;

    timer: number;
    setTimer: (time: number) => void;

    gameOver: boolean;
    setGameOver: (game: boolean) => void;

    won: boolean;
    setWon: (bool: boolean) => void;

    New: Boolean;
    setNew: (bool: Boolean) => void;

    lightMode: boolean;
    setMode: (bool: boolean) => void;

    restartColor: () => void;

    other:string[];
    setOther:(col: string[]) => void;

    randomColorMP:string[];
    setRandomMP:(data:string[])=>void;

    name:string,
    setName:(data:string)=>void,

    otherName:string,
    setOtherName:(data:string)=>void,

    Pname:string[],
    setPname:(data:string[])=>void,

    type:string,
    setType:(data:string)=>void,

    code:string,
    setCode:(data:string)=>void,

    socket:Socket
}

const Suffle = (col: string[]): string[] => {
    return (
        Array.from({ length: 25 }, () => col[Math.floor(Math.random() * col.length)])
    )
}

const RandomCol = ["F78787", "F5F197", "98F597", "97F5DE", "97ABF5", "F597EB"];
const initialColors: string[] = Array.from({ length: 25 }, () => "#EEEEEE");
const RandomColors: string[] = Suffle(RandomCol);

  let light: boolean;

if (typeof window !== 'undefined' && window.localStorage.getItem("darkMode") === 'true') {
    light = false;
} else {
    light = true;
}

const useStore = create<State>((set) => ({
    color: "",
    updateColor: (newColor: string) => set({ color: newColor }),

    finalColor: initialColors,
    getColor: (index, col) => {
        set((state) => {
            const updatedColors = [...state.finalColor];
            updatedColors[index] = col;
            console.log("hehe")
            return { finalColor: updatedColors };
        });
    },
    
    restartColor: () => set({ finalColor: Array.from({ length: 25 }, () => "#EEEEEE") }),

    RandomColor: RandomColors,
    SetRandomColor: () => {
        set({ RandomColor: Suffle(RandomColors) });
    },

    timer: 0,
    setTimer: (time: number) => set({ timer: time }),

    gameOver: false,
    setGameOver: (game: boolean) => set({ gameOver: !game }),

    won: false,
    setWon: (bool) => set({ won: bool }),

    New: false,
    setNew: (bool) => set({ New: bool }),

    lightMode: light,
    setMode: (bool) => set({ lightMode: !bool }),

    other:initialColors,
    setOther: (col) => {
        set({ other: col });
    },

    randomColorMP:[""],
    setRandomMP:(data)=>set({randomColorMP:data}),

    name:"",
    setName:(data)=>set({name:data}),

    otherName:"",
    setOtherName:(data)=>set({otherName:data}),

    type:"",
    setType:(data)=>set({type:data}),
    code:"",
    setCode:(data)=>set({code:data}),

    Pname:[""],
    setPname:(data)=>set({Pname:data}),

    socket:socket
}));

export default useStore;