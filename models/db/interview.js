/**
 * Created by admin on 2016/7/30.
 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
module.exports = mongoose.model('interview', new Schema({
    eventID:{type:Number, require:'miss eventID'},
    name: {type:String, require:'miss interview name'},
    interviewer:[{
    	telnumber:String,
    	state:{type:String,enum:['未面试'，'未审核','未通过','通过']},
    	arrangementID:Number
    }]
    arrangement:[{
    	arrangementID:Number,
    	duration:Number,
    	startTime:Date,
    	place:String,
    	interval:Number,
    	round:Number
    }]
}));