/**
 * Created by admin on 2016/7/22.
 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
module.exports = mongoose.model('event', new Schema({
    eventID:{type:Number, require:'miss eventID'},
    name: {type:String, require:'miss eventname'},
    date: {type:Date, default:Date.now},
    orgID: {type:Schema.Types.ObjectId, require:'miss orgID'},
    maxRound:{type:Number,default:0},
    allMode:{type:Boolean,default:false},
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