const io = require('socket.io')(http);
const User = require('../../../models/User');
const Message = require('../../../models/Message');

io.on('connect',(socket)=>{
    const message = Message.find({_id:0,v:0});
    io.emit('allMessage', message);
    let id = socket.id;
    
    socket.on('myNicname',nicname=>{
        User.create(nicname,id);
        io.to(id).emit('sendSocketId',id);
        changeList();
    });

    socket.on('send',(message,nicname)=>{
        const newMessage = Message.create(message,nicname);
        socket.emit('chat',newMessage);
    });
    
    socket.on('disconnect',()=>{
        User.remove({id:id}).catch(e=>res.status(500).json({ error: "database failure" }));
        changeList();
    });
});

const changeList = ()=>{
    const user = User.find({_id:0,v:0});
    io.emit('member',user);
}