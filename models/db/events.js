/**
 * Created by admin on 2016/7/22.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = mongoose.model('event', new Schema({
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
}));