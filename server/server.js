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
let putali=""
io.on("connection", (socket) => {
    
    const randomcol=Suffle(RandomCol)
    io.emit('welcome',randomcol )
    
    socket.on('colors', (data) => {
        socket.broadcast.emit("call",data)
        
    });
    
    socket.on("join",(prop)=>{
        putali=prop.name
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
                // console.log(element.code,prop.code)
                io.to(prop.code).emit("name",names)
            }
        });
    })
        
})


httpServer.listen(3001, () => {
    console.log("Socket.IO server listening on port 3001");
});
