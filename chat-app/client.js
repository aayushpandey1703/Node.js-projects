const io=require('socket.io-client')

const socket=io("ws://localhost:3000")

socket.on('connect',()=>{
    socket.send('Yo')
})

socket.on('message',data=>{
    console.log(data)
})