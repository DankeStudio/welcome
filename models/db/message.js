/**
 * Created by admin on 2016/8/2.
 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
module.exports = mongoose.model('message', new Schema({
    orgID: {type:Schema.Types.ObjectId, require:'miss orgID'},
    department: String,
    date: Date,
    telnumber:[String],
    text: String,
    cost:Number
}));