/**
 * Created by admin on 2016/7/21.
 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
module.exports = mongoose.model('organization', new Schema({
    username: {type:String, require:'miss username'},
    password: {type:String, require:'miss password'},
    name: {type:String, require:'miss name'},
    bossname: {type:String, require:'miss boss name'},
    tel: {type:String, require:'miss telephone'},
    email: {type:String, require:'miss email'},
    displayinfo:{},
    eventID:[Schema.Types.ObjectId]
}));