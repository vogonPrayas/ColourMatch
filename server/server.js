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


io.on("connection", (socket) => {
    const randomcol=Suffle(RandomCol)
    io.emit('welcome',randomcol )
    socket.on('colors', (data) => {
        socket.broadcast.emit("call",data)
    });
});

httpServer.listen(3001, () => {
    console.log("Socket.IO server listening on port 3001");
});
