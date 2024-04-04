import { Server } from 'socket.io';
import http from 'http';

const httpServer = http.createServer();
const io = new Server(httpServer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

io.on("connection", (socket) => {
    socket.emit("welcome", "welcome from server");

    socket.on("lado",(data)=>{
        console.log(data)
    })
    socket.on('colors', (data) => {
        console.log(data, socket.id);
        console.log("hoasd")
        socket.broadcast.emit("call",data)
    });
});

httpServer.listen(3001, () => {
    console.log("Socket.IO server listening on port 3001");
});
