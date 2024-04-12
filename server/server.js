import { Server } from 'socket.io';
import http from 'http';

const Suffle = (col) => {
    return (
        Array.from({ length: 25 }, () => col[Math.floor(Math.random() * col.length)])
    )
}

const RandomCol = ["F78787", "F5F197", "98F597", "97F5DE", "97ABF5", "F597EB"];


const httpServer = http.createServer();
const io = new Server(httpServer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

let name=[]
let NOP=[]
let readyCount=[]
io.on("connection", (socket) => {
    
    const randomcol=Suffle(RandomCol)
    io.emit('welcome',randomcol )
    
    socket.on('colors', (data) => {
        socket.broadcast.to(data.code).emit("call",data.color)
        console.log(data.color,data.code)
    });
    
    socket.on("join",(prop)=>{

        socket.join(prop.code)
        io.emit("Meo","hello lampo")
        name.push({name:prop.name,code:prop.code})

        let names=[]

        socket.on("disconnect",()=>{
            console.log("meow")
            name=[]
            io.to(prop.code).emit("disconnected","")
            });

        name.forEach((element) => 
        {
            if (element.code==prop.code) {
                names.push(element.name);
                io.to(prop.code).emit("name",names)
                NOP.push({c:prop.code,nop:names.length})
            }
        });
        
    })
    
    socket.on("check",(prop)=>{
        let nop=1
        console.log(NOP)
        NOP.forEach((element) => 
        {
            if(prop.code==element.c){
                nop=element.nop
            }
        })
        socket.emit("NOP",nop)
        console.log("HEYO HEYO")
    })

    socket.on("start",(data)=>{
        console.log("start babe start")
        readyCount.push({count:0,code:data.code})
        readyCount.forEach(element=>{
            if(element.code==data.code){
                element.count+=1
            if(element.count==2){
                io.to(element.code).emit("BothReady")
            }
            }
            
        })
        console.log(readyCount)
        socket.broadcast.to(data.code).emit("Ready",data.name+"is ready")
    })
})


httpServer.listen(3001, () => {
    console.log("Socket.IO server listening on port 3001");
});
