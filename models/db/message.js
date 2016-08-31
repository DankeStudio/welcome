/**
 * Created by admin on 2016/8/2.
 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
module.exports = mongoose.model('message', new Schema({
    orgID: {
        type: Schema.Types.ObjectId,
        require: 'miss orgID'
    },
    department: String,
    date: Date,
    receiver: [{
        name: String,
        telnumber: String,
        reply: {type: String, enum: ['未回复', '是', '否'], default: '未回复'}
    }],
    text: String,
    cost: Number
}));