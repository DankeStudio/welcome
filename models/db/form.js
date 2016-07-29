/**
 * Created by admin on 2016/7/20.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = mongoose.model('form', new Schema({
    eventID : {type:Number,require:'miss EventID'},
    writetime: Number,
    browserinfo: String,
    date:{type:Date, default:Date.now},
    like: {type:Number, default: 0},
    delete: {type:Boolean, default: false},
    baseinfo: {
        name : String,
        sex : {type:String,enum:['男','女']},
        origin : String,
        nation : String,
        schoolID : String,
        politicalStatus : {type:String,enum:['群众','团员','预备党员','党员']},
        telnumber : String,
        telshort : String,
        email : String,
        qq : String,
        major : String,
        birth : Date,
        address : String
    },
    skills: {
        title:String,
        chosen:[String]
    },
    introduction: {
        title: String,
        content: String
    },
    wish: {
        title:String,
        chosen:[String]
    },
    reason: [String],
    remark:{type:String, default:'无'},
    others: [{}],
    interview: [{
        round: Number,
        title: String,
        department: String,
        time: String,
        state: {type:String,enum:['未面试','未审核','通过','未通过']}
    }]
}));