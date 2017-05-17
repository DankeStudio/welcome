/**
 * Created by admin on 2016/7/21.
 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
module.exports = mongoose.model('modelid', new Schema({
    name: {type:String, require:'miss model name'},
    ids: {type:Number, default: 0}
}));