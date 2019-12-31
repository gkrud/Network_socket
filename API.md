http://10.156.145.132:1212/api

Get/chat
-

- response

```
{
    user:[
        nicname,
        socketId
    ],
    message:[
        nicname,
        message
    ]
}
```

Event
=
connect(on)
-
allMessage(emit)
-
```
message:[{
    String
}]
```
myNicname(on)
-
sendSocketId(emit)
-
```
    id: String
```
send(on)
-
chat(emit)
-
```
newMessage:{
    nicname,
    message
}
```
disconnect(on)
-
member(emit) 
-
```
user:[{
    nicname,
    socketId
}]
```