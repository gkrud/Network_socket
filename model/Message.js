const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Message = new Schema({
    nicname: String,
    message: String,
});

Message.static.create = function(nicname,message){
    const user = new this({
        nicname,
        message
    });
    return user.save();
}

module.exports = mongoose.model('Message', Message);