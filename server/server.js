import { Server } from 'socket.io';
import http from 'http';

// Create an HTTP server instance
const httpServer = http.createServer();

// Pass the HTTP server instance to the Socket.IO server constructor
const io = new Server(httpServer);

// Handle connections
io.on("connection", (socket) => {
    console.log("hello");
});

// Start the HTTP server listening on port 3001
httpServer.listen(3001, () => {
    console.log("Socket.IO server listening on port 3001");
});
