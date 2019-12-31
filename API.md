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
    id: String
```
send(emit)
-
chat(on)
-
```
newMessage:{
    nicname,
    message
}
```
disconnect(emit)
-
member(on) 
-
```
user:[{
    nicname,
    socketId
}]
```