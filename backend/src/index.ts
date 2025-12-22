import express , {Application} from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import cors from "cors";
import { Message, User } from "./interface";


const app:Application= express();

app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer,{
    cors :{
        origin:"http://localhost:5173",
        methods:["GET","POST"]
    }
})

const users = new Map<string,User>();
const messages:Message[] = []

io.on("connection",(socket)=>{  // connection is build it not i give myself  .. server listen to socket 
    console.log(`user connected: ${socket.id}`);

    socket.on("JOIN",(username:string)=>{  // server listem to client  // emit means send this event to all connected client from server
        users.set(socket.id,{id:socket.id,username:username});
        io.emit("userList",Array.from(users.values()));
        io.emit("userJoined",username);
        io.emit("messageHistory",messages);
    })

    socket.on("sendMessage",(message:string)=>{
        const user = users.get(socket.id);
        if(user){
            const msg:Message = {
                user,
                message,
                timestamp:new Date()
            }
            messages.push(msg);
            io.emit("newMessage",msg);
        }
    })

    socket.on("disconnect",()=>{
        const user = users.get(socket.id);
        if(user){
            console.log(`${user.username} left the chat`);
            users.delete(socket.id);
            io.emit("userList",Array.from(users.values())); 
            io.emit("userLeft" , user.username)
        }
    })
})




const PORT = 8080

httpServer.listen(PORT,()=>{
    console.log(`server is up on ${PORT}`);
})










