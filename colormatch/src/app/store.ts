import { create } from "zustand";

export interface State {

    color: string;
    updateColor: (newColor: string) => void;

    finalColor: string[];
    getColor: (index: number,col:string) => void;

    RandomColor: string[]; // Added RandomColor property
    SetRandomColor: () => void;

    timer:number;
    setTimer:(time:number)=>void;

    gameOver:boolean;
    setGameOver:(game:boolean)=>void;

    won:boolean;
    setWon:(bool:boolean)=>void;

    New:boolean;
    setNew:(bool:boolean)=>void;

    lightMode:boolean;
    setMode:(bool:boolean)=>void;

    restartColor:()=>void
}

const Suffle =(col:string[]):string[]=>{
    return(
        Array.from({ length: 25 }, () => col[Math.floor(Math.random() * col.length)])
    )
}


// Create an initial array of 30 white colors
const RandomCol = ["F78787", "F5F197", "98F597", "97F5DE", "97ABF5", "F597EB"];
const initialColors: string[] = Array.from({ length: 25 }, () => "#EEEEEE");
const RandomColors: string[] = Suffle(RandomCol)

let light:boolean

if(localStorage.getItem("darkMode")=='true')
{
    light=false
}
else{
    light=true
}

const useStore = create<State>((set) => ({
    color: "",
    updateColor: (newColor: string) => set({ color: newColor }),

    finalColor: initialColors,
    getColor: (index, col) => {
        set((state) => {
            const updatedColors = [...state.finalColor];
            updatedColors[index] = col;
            return { finalColor: updatedColors };
        });
    },
    restartColor:()=>set({ finalColor:Array.from({ length: 25 }, () => "#EEEEEE")}),
    
    RandomColor: RandomColors,
    SetRandomColor: () =>set({ RandomColor: Suffle(RandomColors)}) ,

    timer:0,
    setTimer:(time:number)=>set({timer:time}),

    gameOver:false,
    setGameOver:(game:boolean)=>set({gameOver:!game}),

    won:false,
    setWon:(bool)=>set({won:bool}),
    
    New:false,
    setNew:(bool)=>set({New:bool}),

    lightMode:light,
    setMode:(bool)=>set({lightMode:!bool}),

    

}));

export default useStore;
