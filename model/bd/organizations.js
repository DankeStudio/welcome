/**
 * Created by admin on 2016/7/21.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = mongoose.model('organization', new Schema({
    username: {type:String, require:'miss username'},
    password: {type:String, require:'miss password'},
    name: {type:String, require:'miss name'},
    bossname: {type:String, require:'miss boss name'},
    tel: {type:String, require:'miss telephone'},
    email: {type:String, require:'miss email'},
    displayinfo:{},
    events:[{
        eventID:{type:Number, require:'miss eventID'},
        name: {type:String, require:'miss eventname'},
        date: {type:Date, default:Date.now},
        formschema:{
            skills: {
                delete:Boolean,
                title:String,
                max: Number,
                option:[String],
                free: {type:Boolean, default:true}
            },
            introduction: {
                delete:Boolean,
                title: String,
                content: String,
                require: Boolean
            },
            wish: {
                delete:Boolean,
                title:String,
                max: Number,
                option:[String],
                free: {type:Boolean,default:false}
            },
            remark:{type:String, default:'无'},
            others: [{}]
        }
    }]
}));