const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    nicname: String,
    socketId: String
});

User.static.create = function(nicname,socketId){
    const user = new this({
        nicname,
        socketId
    });
    return user.save();
}

module.exports = mongoose.model('User', User);