http://10.156.145.132:1212/api

Get/chat
-

- response

```
{
    user:[
        nicname: String,
        socketId: String
    ],
    message:[
        nicname: String,
        message: String
    ]
}
```

Event
=
connect(emit)
-
allMessage(on)
-
```
message:[{
    String
}]
```
myNicname(emit)
-
sendSocketId(on)
-
```
    socketId: String
```
send(emit)
-
chat(on)
-
```
newMessage:{
    nicname: String,
    message: String
}
```
disconnect(emit)
-
member(on) 
-
```
user:[{
    nicname: String,
    socketId: String
}]
```