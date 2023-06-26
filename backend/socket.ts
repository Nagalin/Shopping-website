import { Server } from "socket.io";

export default function setUpSocket(server : any) {
    const io = new Server(server,{
        cors : {
            origin : 'http://localhost:3000',
            methods : ['get','post'],
            credentials : false
        }
    })
    
    io.on('connection',(socket)=>{
        console.log(`Client connected: ${socket.id}`);

        socket.on('disconnect',()=>{
            console.log('User disconnected')
        })

        socket.on('test',(msg : string)=>{
            console.log(msg)
            
        })
    })
}