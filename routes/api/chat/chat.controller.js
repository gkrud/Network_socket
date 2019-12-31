const Message = require('../../../model/Message');
const User = require('../../../model/User');
const room = async(req,res)=>{
    const user = await User.find({},{_id:0});
    const message = await Message.find({},{_id:0,v:0});

    const ob = {
        user,
        message
    }
    
    res.json(ob).end();
}

module.exports = {
    room
}