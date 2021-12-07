const io=require('socket.io')(3000)

console.log("listening....")
io.on('connection',socket=>{
    socket.send("Hello")

    socket.on('message',data=>{
        console.log(data)
    });
});


