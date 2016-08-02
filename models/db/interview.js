/**
 * Created by admin on 2016/7/30.
 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
module.exports = mongoose.model('interview', new Schema({
    eventID:{type:Number, require:'miss eventID'},
    department:String,
    round: Number,
    interviewer:[{
    	name:String,
    	telnumber:String,
    	state:{type:String,enum:['不参加','未面试','未通过','通过'],default:'未面试'},
    	arrangementID:Schema.Types.ObjectId
    }],
    arrangement:[{
    	duration:Number,
    	startTime:Date,
    	place:String,
    	interval:Number,
    	total:Number
    }]
}));