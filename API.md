http://10.156.145.132:1212/api

Get/chat
-

- response

```
{
    user:[
        nickname: String,
        socketId: String
    ],
    message:[
        nickname: String,
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
myNickname(emit)
-
sendSocketId(on)
-
```
    socketId: String
```
send(emit)
-
```
Message:{
    nickname: String,
    message: String
}
```
chat(on)
-
```
Message:{
    nickname: String,
    message: String
}
```
disconnect(emit)
-
member(on) 
-
```
user:[{
    nickname: String,
    socketId: String
}]
```